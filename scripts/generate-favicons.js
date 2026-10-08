const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const svgPath = path.join(rootDir, 'public', 'favicon.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  // Generate PNG buffers for ICO (16, 32, 48)
  const sizes = [16, 32, 48];
  const pngBuffers = [];
  for (const size of sizes) {
    const png = await sharp(svgBuffer)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ width: size, height: size, buffer: png });
  }

  // Create valid ICO buffer containing PNGs
  const count = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  const dirSize = headerSize + count * entrySize;

  let offset = dirSize;
  const entries = [];
  for (const img of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0); // width
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset
    entries.push(entry);
    offset += img.buffer.length;
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // image type (1 = ICO)
  header.writeUInt16LE(count, 4); // count

  const icoBuffer = Buffer.concat([header, ...entries, ...pngBuffers.map(img => img.buffer)]);

  // Write ICO to src/app/favicon.ico and public/favicon.ico
  fs.writeFileSync(path.join(rootDir, 'src', 'app', 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico successfully (' + icoBuffer.length + ' bytes)');

  // Generate apple-touch-icon.png (180x180)
  const appleTouchBuffer = await sharp(svgBuffer)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'apple-touch-icon.png'), appleTouchBuffer);
  fs.writeFileSync(path.join(rootDir, 'src', 'app', 'apple-icon.png'), appleTouchBuffer);
  console.log('Generated apple-touch-icon.png successfully');

  // Generate icon-192 and icon-512 for PWA/manifest if needed
  const icon192 = await sharp(svgBuffer)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'icon-192.png'), icon192);

  const icon512 = await sharp(svgBuffer)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'icon-512.png'), icon512);
  console.log('All favicon assets generated successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

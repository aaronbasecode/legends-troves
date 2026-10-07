import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Amber Room | Legends Troves',
  description: 'Dubbed the Eighth Wonder of the World, the Amber Room was a chamber of six tons of glowing Baltic amber and gold leaf plundered by the Nazis in 1941 and lost to history in 1945.',
};

export default function TheAmberRoomPage() {
  return (
    <BlogLayout
      category="land"
      title="The Amber Room"
      imageSrc="/images/the-amber-room.jpg"
      imageAlt="German soldiers and an officer discovering the glowing Amber Room in the Catherine Palace in 1941"
    >
      {/* Section 1: The Eighth Wonder of the World */}
      <BlogSection title="The Eighth Wonder of the World">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For over two centuries, monarchs, diplomats, and travelers who stepped inside the Catherine Palace in Tsarskoye Selo, south of Saint Petersburg, were rendered speechless by a spectacle unmatched in architectural history. Glowing with the golden fire of thousands of candles, an entire 55-square-meter imperial salon was clad from floor to ceiling in meticulously sculpted, polished Baltic amber, backed with gleaming gold leaf, gilded baroque carvings, and mirrored pilasters.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Known across Europe as the <strong>Amber Room</strong> (<em>Bernsteinzimmer</em> in German, <em>Янтарная комната</em> in Russian), it was hailed as the <em>&quot;Eighth Wonder of the World.&quot;</em> Representing more than six metric tons of fossilized resin carved over decades by the continent&apos;s greatest lapidary masters, it was simultaneously a triumph of late Baroque art and a diplomatic treasure of immense imperial significance.
        </p>
      </BlogSection>

      {/* Section 2: Royal Origins and Imperial Magnificence */}
      <BlogSection title="Prussian Origins &amp; Russian Grandeur (1701–1770)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The creation of the Amber Room began in 1701 in Prussia. Commissioned by King Frederick I for his wife Sophie Charlotte at Charlottenburg Palace in Berlin, the master concept was devised by court sculptor Andreas Schlüter and executed by Danish amber artisan Gottfried Wolfram, alongside Danzig masters Ernst Schacht and Gottfried Turau.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          In 1716, King Frederick William I presented the amber panels as a diplomatic state gift to Czar Peter the Great to forge a military alliance between Prussia and the Russian Empire against Sweden in the Great Northern War. Peter, captivated by the translucent golden resin, shipped the treasure by river and horse cart to his newly founded capital, Saint Petersburg.
        </p>
        <BlogList>
          <BlogListItem label="The Tsarskoye Selo Expansion:">
            In 1755, Empress Elizabeth ordered the panels moved to the summer residence at Tsarskoye Selo. Italian imperial architect Bartolomeo Francesco Rastrelli redesigned the room to fit a far larger 180-square-meter hall, seamlessly integrating gilded pilasters, mirrors, and trompe-l&apos;œil frescoes.
          </BlogListItem>
          <BlogListItem label="The Florentine Mosaics:">
            Empress Catherine the Great further enriched the chamber by commissioning four Florentine pietre dure stone mosaics depicting allegories of the Five Senses: <em>Sight</em>, <em>Hearing</em>, <em>Taste</em>, and <em>Touch &amp; Smell</em>, crafted from jasper, agate, and lapis lazuli.
          </BlogListItem>
          <BlogListItem label="The Living Fossil:">
            Baltic amber is 40 to 50 million years old. Carving it required extraordinary skill because dried amber is brittle and combustible. Master craftsmen baked and stained amber fragments into honey, cognac, butterscotch, and dark cherry hues to create intricate 3D bas-reliefs of royal crests, roman deities, and flora.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: The Nazi Plunder of 1941 */}
      <BlogSection title="Operation Barbarossa &amp; The 36-Hour Plunder (1941)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          On June 22, 1941, Nazi Germany launched Operation Barbarossa, invading the Soviet Union with blitzkrieg speed. By September, Wehrmacht vanguard divisions of Army Group North encircled Leningrad and seized the palace towns of Pushkin and Tsarskoye Selo.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Desperate Soviet museum staff had managed to evacuate thousands of paintings, but the amber panels had dried out over centuries and crumbled at the slightest touch. In an attempt to conceal the masterpiece, curators papered over the amber with thin wallpaper and gauze. The deception failed. Within hours of occupying the palace, German art-looting specialists from the <em>Einsatzstab Reichsleiter Rosenberg</em> (ERR) and soldiers commanded by Count Ernst Otto zu Solms-Laubach identified the world-famous chamber.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Under the personal observation of German museum curators, Nazi engineers systematically dismantled the Amber Room in just 36 hours. Packed into 27 custom-built wooden crates padded with velvet and straw, the six tons of amber, mirrors, and gilded woodwork were transported by rail across the Baltic into East Prussia, arriving at <strong>Königsberg Castle</strong> (modern-day Kaliningrad).
        </p>
      </BlogSection>

      {/* Section 4: Documented Inventory Table */}
      <BlogSection title="Documented Elements of the Lost Chamber">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Official Soviet palace inventories and German transport manifests provide a meticulous accounting of the irreplaceable masterworks packed inside the 27 missing crates:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Chamber Component</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Materials &amp; Craftsmanship</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Historical Provenance</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Modern Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Baltic Amber Wall Panels (22 Main Mosaics)</td>
                  <td className="py-2.5 px-3 sm:px-4">Over six tons of carved amber mosaic backed by silver &amp; gold leaf</td>
                  <td className="py-2.5 px-3 sm:px-4">Prussia / Berlin (1701–1716)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless ($400,000,000+)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Florentine Pietre Dure Mosaics (4 Panels)</td>
                  <td className="py-2.5 px-3 sm:px-4">Polished semi-precious jasper, lapis lazuli, agate, &amp; chalcedony</td>
                  <td className="py-2.5 px-3 sm:px-4">Medici Workshops, Florence (1755)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$25,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Gilded Rococo Mirrors &amp; Pilasters</td>
                  <td className="py-2.5 px-3 sm:px-4">Hand-carved linden wood overlaid with 24-karat gold leaf</td>
                  <td className="py-2.5 px-3 sm:px-4">B. F. Rastrelli, Tsarskoye Selo</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$35,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Amber Commode of Frederick I</td>
                  <td className="py-2.5 px-3 sm:px-4">Miniature amber chest inlaid with royal monograms &amp; gemstones</td>
                  <td className="py-2.5 px-3 sm:px-4">Gottfried Turau, Danzig (1711)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$8,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Crystal Chandeliers &amp; Amber Sconces</td>
                  <td className="py-2.5 px-3 sm:px-4">Bohemian cut crystal with carved amber candle-arms &amp; sconces</td>
                  <td className="py-2.5 px-3 sm:px-4">Imperial Glassworks, Russia</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$12,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Vanishing at Königsberg (1944–1945) */}
      <BlogSection title="The Königsberg Vanishing Act (1944–1945)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In Königsberg, the Amber Room was reassembled under the supervision of museum director Dr. Alfred Rohde, a leading world authority on Baltic amber. Displayed in the castle museum, thousands of German soldiers and civilians viewed the room between 1942 and early 1944. But as Allied fortunes turned, the fate of the room grew perilous.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In late August 1944, British Royal Air Force bombers delivered devastating firebombing raids on Königsberg, incinerating medieval quarters and gutting parts of the castle. Dr. Rohde reportedly dismantled the amber panels once more, repacking them into wooden crates and moving them into the deep subterranean castle cellars or preparing them for rail evacuation.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          In April 1945, after a grueling three-month siege, the Red Army stormed and captured Königsberg Castle. When Soviet intelligence officers and museum curators rushed to the castle vaults, they found smoking rubble, flooded cellars, and empty halls. The Amber Room had completely disappeared. Dr. Rohde and his wife were questioned by Soviet authorities, but both died suddenly of typhus—or vanished under mysterious circumstances—in late 1945 before revealing the crates&apos; final destination.
        </p>
      </BlogSection>

      {/* Section 6: Top Theories on Its Whereabouts */}
      <BlogSection title="Where Is the Original Amber Room Today?">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Over eight decades, hundreds of expeditions, former intelligence operatives, and treasure hunters have searched across Europe. Several prominent theories dominate the investigation:
        </p>
        <BlogList>
          <BlogListItem label="The Sunken Steamer SS Karlsruhe:">
            In October 2020, Polish deep-sea divers discovered the intact wreck of the German steamer <em>SS Karlsruhe</em>, resting 88 meters beneath the Baltic Sea off Ustka. Sunk by Soviet aircraft in April 1945 during Operation Hannibal with over a thousand refugees and heavy military cargo, the ship was found to hold military vehicles, tracked equipment, and numerous unopened, sealed wooden crates matching the dimensions of the amber crates.
          </BlogListItem>
          <BlogListItem label="Sealed Beneath Kaliningrad:">
            Many historians believe the crates never left Königsberg. The city possessed an extensive network of medieval subterranean passageways, bomb shelters, and vaulted wine cellars connecting the castle to Fort No. 3 and the Pregel River. When the castle ruins were bulldozed on Leonid Brezhnev&apos;s orders in 1968, deep unexcavated vaults were paved over with concrete for the House of Soviets.
          </BlogListItem>
          <BlogListItem label="Subterranean Salt Mines of Germany:">
            Other evidence suggests the crates were evacuated westward via train or convoy to hidden salt mines in Thuringia or Lower Silesia (such as the Grasleben mine or the Project Riese complex in the Owl Mountains), where Nazi authorities stashed thousands of looted cultural assets.
          </BlogListItem>
          <BlogListItem label="Destroyed in the Firestorm:">
            Skeptics, including some Russian archival researchers, argue that the amber—being highly flammable dried organic resin—was consumed in the intense 1,000°C firestorms caused by RAF phosphorus bombs in August 1944, and that post-war sightings were Soviet or East German bureaucratic cover-ups.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 7: Surviving Fragments & The Reconstructed Marvel */}
      <BlogSection title="Surviving Relics &amp; The 24-Year Resurrection">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In 1997, proof surfaced that not all of the Amber Room was destroyed: German police in Bremen recovered an authentic Florentine stone mosaic—<em>Touch and Smell</em>—that a former Wehrmacht soldier had stolen during the 1941 packing. Soon after, an original amber commode also surfaced in Berlin. Both original pieces were formally repatriated to Russia in 2000.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In 1979, the Soviet government embarked on one of the most ambitious art restoration projects in human history: rebuilding the Amber Room from scratch. Guided by forty original black-and-white photographs taken before the war, architectural drawings, and surviving fragments, a team of Russian master craftsmen spent <strong>24 years</strong> cutting, shaping, and dyeing six tons of Baltic amber.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          In 2003, commemorating the 300th anniversary of Saint Petersburg, the fully reconstructed Amber Room was unveiled at the Catherine Palace by Russian President Vladimir Putin and German Chancellor Gerhard Schröder. Today, visitors can once again experience the breathtaking golden radiance of the room—even as the search for the missing original masterpiece continues across the Baltic and beyond.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

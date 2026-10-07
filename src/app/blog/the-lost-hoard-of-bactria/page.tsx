import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Lost Hoard of Bactria | Legends Troves',
  description: 'In the rugged mountain valleys along the Oxus and Panj rivers, the fabled imperial gold of the ancient Greco-Bactrian Kingdom vanished during nomadic invasions. More than two millennia later, its lost hoard remains one of Central Asia’s greatest archaeological mysteries.',
};

export default function TheLostHoardOfBactriaPage() {
  return (
    <BlogLayout
      category="land"
      title="The Lost Hoard of Bactria"
      imageSrc="/images/the-lost-hoard-of-bactria.jpg"
      imageAlt="The Greco-Bactrian capital of Ai-Khanoum ablaze as nomadic horsemen storm the classical palaces in 145 BC"
    >
      {/* Section 1: The Empire of a Thousand Golden Cities */}
      <BlogSection title="The Empire of a Thousand Golden Cities">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the 4th century BC, Alexander the Great marched his Macedonian phalanxes deep into the heart of Central Asia, across the blazing deserts of Khorasan and through the jagged snowcaps of the Hindu Kush. There, in the fertile valleys fed by the ancient <strong>Oxus River</strong> (modern Amu Darya), Alexander conquered the Persian satrapy of <strong>Bactria</strong>, founded Hellenistic outposts, and took as his bride the Bactrian noblewoman Roxana.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          A century later, around 250 BC, the Hellenistic governor Diodotus I declared independence from the Seleucid Empire, birthing the remarkable <strong>Greco-Bactrian Kingdom</strong>. Classical Roman and Greek historians such as Strabo and Justin marveled at this remote oasis of classical antiquity, hailing it as <em>&quot;imperium mille urbium&quot;</em>—the empire of a thousand cities. Situated at the crossroads of the embryonic Silk Road, Bactria commanded unprecedented wealth: mineral royalties from Badakhshan&apos;s azure lapis lazuli and emerald mines, taxes on silk and spice caravans, and inexhaustible placer gold washed down from the glacial peaks into the rapids of the <strong>Panj River</strong>.
        </p>
      </BlogSection>

      {/* Section 2: Hellenistic Splendor at the Edge of the World */}
      <BlogSection title="Gold of the Greco-Bactrian Kings">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Far from being an isolated barbarian outpost, the Greco-Bactrian realm became one of the most culturally dazzling and financially formidable civilizations of antiquity. At sites such as <strong>Ai-Khanoum</strong> (Alexandria on the Oxus), Greek colonists erected grand stone amphitheaters, Olympian gymnasiums dedicated to Heracles and Hermes, Corinthian peristyles, and royal palaces displaying philosophical inscriptions brought directly from Delphi.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Bactrian metallurgy and numismatics reached heights that rivaled and frequently surpassed Athens and Rome. Under King <strong>Eucratides I</strong> (reigned c. 171–145 BC), the royal mint struck the famous <strong>20-stater gold medal</strong>—weighing nearly 170 grams of virtually pure gold. Measuring over 58 millimeters in diameter, it stands to this day as the largest gold coin minted anywhere in the classical world, showcasing a lifelike portrait of the helmeted monarch framed by the galloping celestial twins, Castor and Pollux.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Over two centuries of conquest, trade, and tribute, the vaults of Bactra (modern Balkh) and Ai-Khanoum accumulated staggering stores of bullion, ceremonial gold armor, temple vessels, and diplomatic tributes from the Mauryan Empire of India and the steppes of Eurasia.
        </p>
      </BlogSection>

      {/* Section 3: The Nomadic Invasions & The Flight of the Treasury */}
      <BlogSection title="The Cataclysmic Invasions &amp; The Flight of the Treasury (c. 145–120 BC)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the mid-2nd century BC, an unstoppable geopolitical shockwave rolled out of the Eurasian steppes. Driven from their pastures by the Xiongnu confederation, waves of nomadic warriors—the <strong>Saka</strong> (Scythians) followed by the formidable <strong>Yuezhi</strong> horse archers—surged across the Jaxartes River and overwhelmed the Greco-Bactrian border fortresses.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          One by one, the shining Greek cities were engulfed in flames. Ai-Khanoum was stormed and systematically ransacked around 145 BC, its palaces set ablaze and its stone inscriptions shattered. As the nomadic armies pressed inward toward the royal heartlands, the last Greco-Bactrian kings faced imminent destruction.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          According to regional Pamiri oral traditions and accounts preserved by ancient chroniclers, the royal court organized a desperate, highly classified evacuation of their central state treasury:
        </p>
        <BlogList>
          <BlogListItem label="The Evacuation Convoy:">
            Heavily armored cataphracts (Bactrian heavy cavalry) and royal guards escorted long pack-mule and camel trains laden with sealed wooden chests bound in hammered bronze.
          </BlogListItem>
          <BlogListItem label="Retreat into the Panj Gorge:">
            Rather than fleeing south toward the contested Hindu Kush passes, the treasury was routed northeast into the perilous gorges of the <strong>Panj River Valley</strong> in what is now southern Tajikistan—a mountainous labyrinth of sheer canyon walls and secret alpine hideaways.
          </BlogListItem>
          <BlogListItem label="Concealment in the Mountain Caverns:">
            Cut off by advancing nomadic raiding parties and torrential seasonal mudslides, the custodians chose to bury the fortune rather than allow their sacred ancestral gold to be melted into barbarian bullion.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          Local folklore across Khatlon and Badakhshan maintains that the soldiers lowered the chests into deep natural caves and stone-lined shafts high above the churning waters of the Panj River, intentionally collapsing the approach ledges with rockslides. The royal protectors were subsequently hunted down and slain to the last man, locking the coordinates behind an impenetrable veil of silence.
        </p>
      </BlogSection>

      {/* Section 4: Documented Relics & Estimated Inventory */}
      <BlogSection title="Estimated Inventory of the Lost Bactrian Hoard">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Historical records of Greco-Bactrian temple inventories, numismatic records, and comparable discoveries provide a vivid glimpse into the immense scope of the hidden hoard:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Treasury Asset</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Classification &amp; Craftsmanship</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Origin / Provenance</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Modern Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Eucratidean Royal Gold Coinage</td>
                  <td className="py-2.5 px-3 sm:px-4">Massive 20-stater gold medallions, Attic tetradrachms with Greek inscriptions</td>
                  <td className="py-2.5 px-3 sm:px-4">Royal Mint of Bactra &amp; Ai-Khanoum</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$350,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Hellenistic Gold Diadems &amp; Crowns</td>
                  <td className="py-2.5 px-3 sm:px-4">Articulated repoussé foliate crowns with winged figures, turquoise &amp; lapis lazuli</td>
                  <td className="py-2.5 px-3 sm:px-4">Greco-Bactrian Royal Palace Vaults</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless ($250M+)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Ceremonial Weaponry &amp; Armlets</td>
                  <td className="py-2.5 px-3 sm:px-4">Gold-sheathed acinaces daggers with dragon terminals, solid gold torque armlets</td>
                  <td className="py-2.5 px-3 sm:px-4">Armory of the Royal Cataphract Guard</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$85,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Votive Oxus Plate &amp; Statuary</td>
                  <td className="py-2.5 px-3 sm:px-4">Solid gold libation amphorae, Pegasus statuettes, fluted silver-gilt phialai</td>
                  <td className="py-2.5 px-3 sm:px-4">Sanctuary of the Oxus Divinity (Takht-i Sangin)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$220,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">State Placer Bullion Bars</td>
                  <td className="py-2.5 px-3 sm:px-4">Cast alluvial gold ingots stamped with Seleucid anchors and Bactrian monogram seals</td>
                  <td className="py-2.5 px-3 sm:px-4">Central State Reserves &amp; Mine Royalties</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$400,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Discoveries That Prove the Legend */}
      <BlogSection title="Archaeological Proof: The Oxus &amp; Tillya Tepe">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For generations, Western scholars dismissed the Lost Hoard of Bactria as mere oriental fantasy. However, monumental discoveries across the 19th and 20th centuries proved that the immense wealth of the Greco-Bactrian frontier was astonishingly real.
        </p>
        <BlogList>
          <BlogListItem label="The Oxus Treasure (1877):">
            Discovered on the banks of the river near the ancient ford of Takht-i Kuwad, this hoard contained 180 extraordinary gold and silver objects, including a miniature gold chariot, intricately carved griffin bracelets, and over 1,500 coins from Alexander the Great to Antiochus.
          </BlogListItem>
          <BlogListItem label="The Gold of Tillya Tepe (1978):">
            On the eve of the Soviet invasion of Afghanistan, archaeologist Viktor Sarianidi excavated six untouched graves at Tillya Tepe (&quot;Hill of Gold&quot;). The team unearthed more than <strong>20,600 exquisite gold artifacts</strong>—collapsible crowns, belt buckles depicting Dionysus, and gemstone-encrusted sheaths showing a breathtaking fusion of Greek mythology, Persian majesty, and nomadic animal art.
          </BlogListItem>
          <BlogListItem label="Takht-i Sangin Temple of the Oxus:">
            Excavations on the Tajik bank where the Vakhsh and Panj rivers merge yielded thousands of votive offerings, ivory scabbards carved with Alexander as Heracles, and Greek dedications to the river deity <em>Oxos</em>.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          Archaeologists emphasize that these celebrated finds represent only isolated grave goods or votive temple offerings. The massive imperial treasury of the Greco-Bactrian kings—hundreds of kilograms of minted medallions, state ingots, and royal regalia—has never been recovered.
        </p>
      </BlogSection>

      {/* Section 6: The Modern Search in the Pamir Gorges */}
      <BlogSection title="The Modern Search in the Pamir Gorges">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Today, the Panj River serves as the rugged, heavily militarized international frontier separating southern Tajikistan from northeastern Afghanistan. The extreme geographic isolation that protected the hoard twenty-two centuries ago keeps it insulated from conventional treasure hunting today.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Recent scientific expeditions utilizing satellite multi-spectral imaging, aerial <strong>LiDAR</strong>, and electrical resistivity tomography have mapped previously uncharted cave networks and ancient defensive outposts (*qal&apos;as*) perched along the vertical cliffs of Khatlon Province. Several high-altitude subterranean anomalies remain unexplored due to treacherous cliff descents and active seismic rockfalls.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Somewhere in the shadow of the Pamir mountains, where the turquoise waters of the Panj churn through stone canyons, the golden crown of Eucratides and the lost treasures of Alexander&apos;s farthest kingdom await the light of day.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Secret Library of Otrar | Legends Troves',
  description: 'Before its cataclysmic destruction by Genghis Khan’s Mongol horde in 1219, the Silk Road oasis of Otrar held one of antiquity’s greatest libraries. Legend says its priceless scrolls were hidden in subterranean vaults.',
};

export default function TheSecretLibraryOfOtrarPage() {
  return (
    <BlogLayout
      category="land"
      title="The Secret Library of Otrar"
      imageSrc="/images/the-secret-library-of-otrar.jpg"
      imageAlt="Ancient subterranean manuscript repository and illuminated scrolls of the lost Library of Otrar, Kazakhstan"
    >
      {/* Section 1: The Silk Road's Sanctuary of Knowledge */}
      <BlogSection title="The Silk Road's Sanctuary of Wisdom">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Rising out of the sun-scorched steppes of southern Kazakhstan, near the confluence of the mighty Arys and Syr Darya rivers, lie the monumental earthen mounds of <strong>Otrar</strong> (anciently known as <em>Farab</em>). For more than two thousand years, this fortified oasis stood as one of the most vibrant emporiums on the Northern Silk Road—a bustling crossroads where Persian merchants, Chinese caravaneers, Sogdian translators, and nomadic steppe chieftains converged.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Yet Otrar was far more than a wealthy commercial trading post; it was an intellectual capital of the medieval world. It was the birthplace of <strong>Abu Nasr Al-Farabi</strong> (872–950 AD), the peerless polymath, mathematician, and philosopher revered across the Islamic Golden Age and medieval Europe as the <em>&quot;Second Teacher&quot;</em>—second only to Aristotle himself. Regional chronicles and enduring oral traditions maintain that Otrar was home to a monumental repository of knowledge: a library said to have housed tens of thousands of priceless scrolls and bound codices, surpassed in size and scholarly prestige only by the Great Library of Alexandria and Baghdad&apos;s celebrated House of Wisdom.
        </p>
      </BlogSection>

      {/* Section 2: The Catastrophe of 1219 & Genghis Khan's Wrath */}
      <BlogSection title="The Otrar Catastrophe &amp; Genghis Khan's Wrath (1218–1219)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the autumn of 1218, at the height of Otrar&apos;s cultural prosperity under the Khwarazmian Empire, a fateful event shattered the peace of Central Asia and ignited one of the bloodiest invasions in recorded human history.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Seeking to establish trade relations with the Khwarazmshah, <strong>Genghis Khan</strong> dispatched a grand commercial caravan consisting of 500 camels laden with gold bullion, raw silk, jade, and musk, escorted by 450 Muslim merchants and diplomatic envoys. When the caravan entered Otrar, the city&apos;s prideful governor, <strong>Inalchuq</strong> (known by his honorific <em>Ghayir Khan</em>), suspected the merchants of acting as Mongol reconnaissance scouts. Blinded by greed and paranoia, Inalchuq seized the caravan&apos;s immense wealth and ordered the summary execution of the entire merchant delegation.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Genghis Khan was seized with towering rage. When the Khwarazmian Sultan refused to surrender Inalchuq and murdered the Mongol envoys sent to demand justice, the Great Khan mobilized his entire military machine. In the late summer of 1219, an unstoppable Mongol horde numbering over 150,000 horse archers and siege engineers crossed the Tien Shan mountains and laid siege to Otrar. For five brutal months, the garrison held out behind high mudbrick bastions, until betrayal opened the outer gates. The citadel fell in February 1220; Inalchuq was captured, the populace was slaughtered or enslaved, and the majestic city was put to the torch.
        </p>
      </BlogSection>

      {/* Section 3: The Midnight Concealment */}
      <BlogSection title="The Midnight Concealment: Smuggled into the Deep">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          As the outer ramparts crumbled under catapult bombardment and smoke engulfed the lower quarters, the scholars, scribes, and custodians of Otrar knew their time had run out. While soldiers fought desperately hand-to-hand in the streets, an extraordinary salvage effort was set into motion inside the sanctuary of the great library.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          According to persistent regional legends and accounts preserved by Sufi dervishes and Central Asian chroniclers, the librarians embarked on a clandestine mission to save the intellectual heritage of humanity:
        </p>
        <BlogList>
          <BlogListItem label="Sealing in Pitch &amp; Beeswax:">
            Invaluable parchment rolls, fragile Chinese mulberry-paper codices, and illuminated calligraphic manuscripts were coated in protective oils and sealed inside massive, glazed earthenware storage jars (*khums*), secured with airtight caps of bitumen, pitch, and beeswax.
          </BlogListItem>
          <BlogListItem label="Subterranean Karez &amp; Catacombs:">
            Underneath Otrar stretched an intricate labyrinth of subterranean water channels (*karez*), emergency escape tunnels, and deep brick-vaulted storage cellars extending beneath the citadel hill (*Otrar-Tobe*).
          </BlogListItem>
          <BlogListItem label="Concealed Deep in the Oasis Sands:">
            Working by the dim flicker of oil lamps in the dead of night, trusted guards and scholars lowered the sealed jars into hidden subterranean chambers, bricked up the connecting arches, and collapsed the approach passages to ensure no invading conqueror could seize them.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          When the Mongols finally breached the inner palace and razed the university to the ground, they found the library shelves suspiciously bare. The secret of the cache&apos;s exact subterranean coordinates died with the librarians on the citadel ramparts.
        </p>
      </BlogSection>

      {/* Section 4: Fabled Manifest Table */}
      <BlogSection title="Fabled Manifest of the Lost Otrar Manuscripts">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Historical records from early Islamic and Persian bibliophiles (such as Ibn al-Nadim&apos;s <em>Kitab al-Fihrist</em> and Yaqut al-Hamawi&apos;s gazetteers) indicate that Otrar&apos;s library preserved singular translations and unique works lost nowhere else in the world:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Manuscript Corpus</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Language &amp; Medium</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Subject / Origin</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Al-Farabi&apos;s Lost Treatises</td>
                  <td className="py-2.5 px-3 sm:px-4">Classical Arabic on Samarkand rag paper</td>
                  <td className="py-2.5 px-3 sm:px-4">Original commentaries on Aristotle&apos;s <em>Metaphysics</em>, music theory, and political philosophy</td>
                  <td className="py-2.5 pl-3 sm:pl-4">World-Historical Heritage</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Hellenistic &amp; Alexandrian Codices</td>
                  <td className="py-2.5 px-3 sm:px-4">Ancient Greek &amp; Syriac translations on vellum</td>
                  <td className="py-2.5 px-3 sm:px-4">Lost works of Euclid, Galen, and Archimedes preserved during the Islamic Golden Age</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Incalculable ($500M+)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Zoroastrian &amp; Sogdian Scrolls</td>
                  <td className="py-2.5 px-3 sm:px-4">Middle Persian &amp; Sogdian cursive on sheepskin</td>
                  <td className="py-2.5 px-3 sm:px-4">Pre-Islamic liturgical hymns, astronomical tables, and Central Asian legal contracts</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless Linguistic Key</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Silk Road Cartographic Treatises</td>
                  <td className="py-2.5 px-3 sm:px-4">Illuminated Chinese silk and parchment scrolls</td>
                  <td className="py-2.5 px-3 sm:px-4">Detailed trade routes, desert watercourses, and oasis maps spanning Chang&apos;an to Constantinople</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Geographical Holy Grail</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Medieval Alchemy &amp; Medicine Books</td>
                  <td className="py-2.5 px-3 sm:px-4">Early Arabic and Persian script in leather bindings</td>
                  <td className="py-2.5 px-3 sm:px-4">Pharmacopoeias, botanical illustrations, distillation guides, and surgical manuals</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Inestimable Scientific Value</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: Archaeological Excavations */}
      <BlogSection title="The Excavations of Otrar-Tobe (1969 to Present)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For centuries following the Mongol destruction, Otrar remained a desolate graveyard of weathered mudbrick mounds. Beginning in 1969, the South Kazakhstan Comprehensive Archaeological Expedition—led by distinguished archaeologists Kemal Akishev and K.M. Baypakov—undertook massive, systematic excavations across the 200-hectare site.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Over decades of painstaking earthmoving, researchers peeled back layers of history, uncovering proof of a sophisticated medieval civilization:
        </p>
        <BlogList>
          <BlogListItem label="Palace Quarters &amp; Public Baths:">
            Excavators unearthed 11th–12th century public bathhouses complete with hypocaust underfloor heating, palatial reception halls, glazed ceramic sewer conduits, and mint workshops that struck regional silver dirhams.
          </BlogListItem>
          <BlogListItem label="Brick-Vaulted Cellars &amp; Underground Passages:">
            Digs on the central hill (*Otrar-Tobe*) exposed deep subterranean storage vaults lined with fired brick, as well as remnants of secret drainage and transit channels descending deep beneath the fortified citadel.
          </BlogListItem>
          <BlogListItem label="The 20th-Century Whispers:">
            During the 1970s and 1980s, Soviet archaeologists investigated regional rumors of local villagers and shepherd boys who had purportedly stumbled upon sealed clay pots containing brittle, decaying manuscript leaves inscribed in archaic Arabic and Uighur scripts while digging irrigation canals near the ancient riverbeds.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 6: The Modern Search & The Eternal Quest */}
      <BlogSection title="The Eternal Quest: Central Asia's Ultimate Lost Trove">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Today, the State Archaeological Preserve-Museum of Otrar stands under joint UNESCO and Kazakhstani conservation programs. Modern research has moved beyond the pickaxe and shovel into the cutting edge of non-destructive geophysical exploration. Teams equipped with <strong>ground-penetrating radar (GPR)</strong>, electrical resistivity tomography, and airborne <strong>LiDAR</strong> have detected numerous subterranean anomalies, sealed cavities, and collapsed tunnel systems beneath the dry alluvial silt.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Historians often point to the precedent of the world-famous <em>Mogao Caves of Dunhuang</em> along the Chinese Silk Road. There, inside a sealed hollow chamber behind a frescoed wall, over 50,000 ancient manuscripts remained hidden and pristine for nearly a thousand years until their accidental rediscovery in 1900.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          If the arid, anaerobic desert clay of southern Kazakhstan has preserved Otrar&apos;s secret underground vault, its unearthing would represent the archaeological discovery of the century—recovering lost masterpieces of classical philosophy, unveiling the forgotten scientific genius of the Silk Road, and illuminating the immortal legacy of the Secret Library of Otrar.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Treasure of the Copper Scroll | Legends Troves',
  description: 'Discovered in Cave 3 near Qumran, the ancient Dead Sea Copper Scroll contains a literal inventory of 64 subterranean locations concealing over 100 tons of hidden gold and silver.',
};

export default function TheTreasureOfTheCopperScrollPage() {
  return (
    <BlogLayout
      category="land"
      title="The Treasure of the Copper Scroll"
      imageSrc="/images/the-treasure-of-the-copper-scroll.jpg"
      imageAlt="Two heavily oxidized greenish-bronze cylindrical rolls of the Dead Sea Copper Scroll resting on a natural rock shelf inside Qumran Cave 3"
    >
      {/* Section 1: The Outlier of Qumran */}
      <BlogSection title="The Outlier of Cave 3 (Qumran, 1952)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Between 1947 and 1956, Bedouin shepherds and international archaeologists uncovered thousands of ancient manuscript fragments inside eleven caves along the barren limestone cliffs of the Dead Sea. Virtually all of these world-famous <strong>Dead Sea Scrolls</strong> were written in ink on delicate animal parchment or Egyptian papyrus, preserving biblical texts, hymns, apocalyptic visions, and community rules of the ascetic Essenes.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          On March 20, 1952, during a systematic expedition led by French archaeologist Henri de Contenson in <strong>Cave 3</strong>, excavators discovered something utterly unique. Resting on a natural rock shelf near the back of the cave were two heavily oxidized, greenish-bronze cylindrical rolls. Analysis revealed they were beaten sheets of nearly 99% pure copper alloyed with 1% tin, riveted together into an eight-foot sheet. Unlike every other spiritual manuscript, this metal roll was not poetry or theology—it was an explicit, cold-blooded <strong>treasure inventory</strong> cataloging 64 subterranean hiding places across ancient Judea.
        </p>
      </BlogSection>

      {/* Section 2: The Delicate Slicing in Manchester */}
      <BlogSection title="The Surgical Slicing of a 2,000-Year-Old Metal Secret">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For three years after its discovery, the scroll could not be read. Over twenty centuries in the damp subterranean air of the Judean desert, the copper had completely mineralized into fragile, brittle copper oxide. Any attempt to forcibly unroll it would have shattered the ancient metal into unreadable dust.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          In 1955, the scroll was entrusted to Professor H. Wright Baker at the Manchester College of Science and Technology. Baker engineered an ingenious, ultra-precise apparatus featuring an electric spindle saw with a 0.006-inch circular blade:
        </p>
        <BlogList>
          <BlogListItem label="Celluloid Stabilizing Treatment:">
            Before making a single cut, Baker coated the brittle outer surface of the rolls with synthetic resin and warmed the metal, ensuring the micro-fragments remained bonded to their backing.
          </BlogListItem>
          <BlogListItem label="Twenty-Three Curved Segments:">
            Between the winter of 1955 and January 1956, Baker made dozens of microscopic longitudinal incisions, slicing the two rolls into 23 curved concave strips resembling roof tiles.
          </BlogListItem>
          <BlogListItem label="Mishnaic Hebrew &amp; Cryptic Greek Letters:">
            When epigrapher John Marco Allegro examined the opened strips, he discovered twelve columns of hammered square Hebrew text dating to the 1st century AD. Intiguingly, several entries ended with mysterious Greek two-letter codes (such as <em>KEN</em>, <em>CAG</em>, <em>SK</em>), believed by scholars to represent cryptographic acronyms, depositor initials, or coordinates.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: The Staggering Hoard */}
      <BlogSection title="A Fortune in Gold, Silver, and Sacred Tithes">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The text of the Copper Scroll (designated <strong>3Q15</strong>) is completely devoid of biblical quotes, metaphors, or moralizing. Instead, it reads like an official military or priestly manifest, methodically recording underground vaults, cisterns, tombs, aqueducts, and hollowed caves.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The quantities listed are monumental. The scroll specifies approximately <strong>4,630 talents of precious metals</strong> (over 1,280 talents of refined gold and more than 3,000 talents of silver bullion), along with 165 consecrated pitch-sealed jars containing silver coins, 608 sacred silver pitchers, priestly garments, and liturgical vessels.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          In ancient Judea, a single talent weighed approximately 30 to 34 kilograms (66 to 75 pounds). The total metal enumerated on the scroll equals between <strong>65 and 160 metric tons of pure gold and silver</strong>. In modern bullion value alone, the hoard represents over <strong>$2.5 billion</strong>; its historical, religious, and archaeological value is entirely incalculable.
        </p>
      </BlogSection>

      {/* Section 4: Documented Inventory Table */}
      <BlogSection title="Key Hiding Locations Documented in 3Q15">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The following entries illustrate the specific topographical instructions recorded across the 23 copper strips:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Cache #</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Scroll Text Directions</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Items Hidden</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Item 1</td>
                  <td className="py-2.5 px-3 sm:px-4">In the fortress ruin in the Valley of Achor, under the steps heading eastward</td>
                  <td className="py-2.5 px-3 sm:px-4">A chest of silver and its vessels</td>
                  <td className="py-2.5 pl-3 sm:pl-4">17 Talents (~1,100 lbs)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Item 11</td>
                  <td className="py-2.5 px-3 sm:px-4">In the great cistern of the Court of the Peristyle, in a plastered cavity</td>
                  <td className="py-2.5 px-3 sm:px-4">Pure gold ingots and silver consecrated coinage</td>
                  <td className="py-2.5 pl-3 sm:pl-4">900 Talents (~30 tons)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Item 25</td>
                  <td className="py-2.5 px-3 sm:px-4">In the tomb of the common people, in the burial cavern facing south</td>
                  <td className="py-2.5 px-3 sm:px-4">Sealed jars of silver shekels and temple tribute</td>
                  <td className="py-2.5 pl-3 sm:pl-4">70 Talents (~4,600 lbs)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Item 32</td>
                  <td className="py-2.5 px-3 sm:px-4">In the Cave of the Column with two entrances, under the northern pillar</td>
                  <td className="py-2.5 px-3 sm:px-4">Consecrated tithe urns and silver libation vessels</td>
                  <td className="py-2.5 pl-3 sm:pl-4">42 Talents (~2,800 lbs)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Item 64 (Final)</td>
                  <td className="py-2.5 px-3 sm:px-4">In the pit nearby, toward the north in a hole opening north, by the tombs</td>
                  <td className="py-2.5 px-3 sm:px-4">A duplicate copy of this document with full explanations and measurements</td>
                  <td className="py-2.5 pl-3 sm:pl-4">The Master Key Scroll</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Origin Controversy */}
      <BlogSection title="Whose Treasure Was It? The Three Great Theories">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For over seventy years, biblical scholars, historians, and archaeologists have debated the true source of this immense wealth:
        </p>
        <BlogList>
          <BlogListItem label="1. The Second Temple Treasury of Jerusalem (Leading Theory):">
            In 66–70 AD, during the First Jewish-Roman War, Roman legions under generals Vespasian and Titus marched toward Jerusalem. Realizing the Holy City and the Temple of Solomon/Herod were doomed to destruction, high priests and temple treasurers systematically evacuated centuries of sacred tithes, gold offerings, and sanctuary vessels into pre-prepared subterranean vaults across Judea. The copper scroll was hammered as an indestructible master record for survivors.
          </BlogListItem>
          <BlogListItem label="2. The Bar Kokhba Revolt (132–136 AD):">
            Other scholars suggest the treasure represents war funds gathered by Jewish rebels led by Simon bar Kokhba during the second revolt against Emperor Hadrian. However, linguistic and paleographic analysis of the script strongly aligns with pre-70 AD Mishnaic Hebrew.
          </BlogListItem>
          <BlogListItem label="3. The Essene Community Property:">
            Early researchers speculated that the scroll belonged to the Qumran monastery itself. But historians quickly dismissed this: the Essenes were a modest, ascetic desert sect whose total communal assets could never have totaled hundreds of tons of imperial-grade gold and silver.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 6: The Missing Duplicate & The Hunt Today */}
      <BlogSection title="The Unfound Master Key: Item 64 and the Modern Hunt">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The ultimate tantalizing riddle of the Copper Scroll lies in its final line. <strong>Item 64</strong> does not list gold or silver. Instead, it records the burial of an explanatory <em>master key document</em>—a duplicate scroll containing precise measurements, compass orientations, and complete inventory logs. To this day, Item 64 has never been found.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Did the Romans find the caches? When Titus razed Jerusalem in 70 AD, Roman torturers interrogated captured temple officials and extracted significant wealth—some of which financed the construction of the Colosseum in Rome. Yet the majority of the 64 subterranean caches were hidden in remote ravines and obscure family tombs, many of which may remain sealed under meters of desert sediment or urban developments.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Today, the original 23 copper strips of 3Q15 are permanently housed under climate-controlled glass inside the <strong>Jordan Museum in Amman</strong>. With satellite imaging, ground-penetrating radar, and ongoing Judean desert surveys, archaeologists continue to decipher the cryptic topographical markers of the Copper Scroll—the world&apos;s oldest and most enigmatic real-life treasure map.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

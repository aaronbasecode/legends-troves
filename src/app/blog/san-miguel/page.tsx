import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export default function SanMiguelPage() {
  return (
    <BlogLayout
      category="water"
      title="The San Miguel"
      imageSrc="/images/san-miguel.jpg"
      imageAlt="The San Miguel Spanish galleon battling colossal sea waves in a ferocious Atlantic storm"
    >
      {/* Section 1: The Doomed 1715 Treasure Fleet */}
      <BlogSection title="The Doomed Voyage of the 1715 Treasure Fleet">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For nearly four years, the Spanish Crown was starved of wealth. The War of the Spanish Succession had choked transatlantic shipping lanes, leaving colossal mounds of silver from Potosí, gold bars from the Colombian highlands, and emeralds from the mines of Muzo stockpiled inside colonial storehouses across the Americas. By the summer of 1715, King Philip V desperately needed these riches to refill his depleted royal treasury.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          On July 24, 1715, a combined fleet of eleven Spanish vessels and one French merchant ship raised anchor and cleared Havana harbor. Commanded jointly by Don Juan Esteban de Ubilla and Don Antonio de Echeverz, the armada carried an officially declared cargo worth over fourteen million silver pesos, alongside untold fortunes in contraband bullion, pearls, and Chinese porcelain.
        </p>
      </BlogSection>

      {/* Section 2: The Secret Cargo - The Queen's Jewels */}
      <BlogSection title="The Secret Dowry: The Queen's Jewels">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          While the holds of the heavy urcas and galleons groaned beneath chests of silver cobs and gold bars, the most priceless cargo on the voyage was never recorded on any official manifest. Philip V had recently wed Princess Elisabeth Farnese of Parma. The haughty new queen had refused to consummate the royal union until she received her lavish dowry and personal jewelry.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          To bypass the King&apos;s Fifth (*Quinto Real*) tax and protect the queen&apos;s private fortune from naval spies, imperial courtiers entrusted the royal jewel chest to the fleet&apos;s swiftest, heavily armed vessels. Among these chosen escorts was <em>The San Miguel</em>, an agile frigate reputed to carry personal treasures of the nobility: diamond necklaces, gold filigree rosaries, rings set with uncut Colombian emeralds, and golden brooches of breathtaking craftsmanship.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Because these items were technically contraband smuggled past customs officials in Veracruz and Cartagena, no surviving manifest details their precise contents—giving birth to one of maritime history&apos;s most legendary lost troves: &ldquo;The Queen&apos;s Jewels.&rdquo;
        </p>
      </BlogSection>

      {/* Section 3: The Monster Hurricane */}
      <BlogSection title="The Monster Hurricane of July 31, 1715">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          By July 29, the armada had entered the Bahama Channel, riding the northbound Gulf Stream off the east coast of Florida. But the sea was deceptive. The sultry air turned suffocatingly heavy, and sea swells grew menacingly long and dark. The experienced Spanish navigators recognized the ominous signs: an Atlantic hurricane was approaching.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the early morning hours of July 31, 1715, a ferocious Category 4 tempest hammered the fleet with howling east-northeasterly winds. Trapped between treacherous shallow barrier reefs and towering mountainous waves, the clumsy wooden galleons had no room to maneuver. Giant breakers lifted ships like kindling, smashing hulls against coral ridges and tearing masts from decks.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Ten of the eleven Spanish ships were decimated along a fifty-mile stretch of Florida coastline between modern-day Sebastian Inlet and Fort Pierce—a shoreline forever after known as the &ldquo;Treasure Coast.&rdquo; More than one thousand sailors, soldiers, and passengers drowned in the foaming surf.
        </p>
      </BlogSection>

      {/* Section 4: The Mystery of Amelia Island */}
      <BlogSection title="The Enigma of Amelia Island">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          While Spanish salvage teams from St. Augustine and Havana descended upon the central Florida wreck sites over the following months—recovering a substantial portion of the registered silver—one vital ship was nowhere to be found among the main wreckage fields: <em>The San Miguel</em>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Contemporary naval logs suggest that as the tempest bore down, the captain of the San Miguel attempted to run before the howling gales, driving northward in a bid to find shelter near St. Augustine or the barrier islands along the Georgia border. The valiant escape was cut short when the frigate foundered on the sandbars off Amelia Island near Fernandina Beach and Nassau Sound.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Far removed from the primary salvage operations, the wreck of The San Miguel slipped beneath the migrating sands and strong tidal currents of northeast Florida, leaving the Queen&apos;s personal jewels untouched by 18th-century salvors.
        </p>
      </BlogSection>

      {/* Section 5: Clues and Modern Searches */}
      <BlogSection title="Clues in the Shifting Sands">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Modern salvors and coastal historians continue to pursue the elusive resting place of The San Miguel, guided by compelling archaeological indicators:
        </p>
        <BlogList>
          <BlogListItem label="The Unmanifested Dowry:">
            Unlike standard gold and silver bars recovered by Mel Fisher and the Real Eight Company in the 1960s, the exquisite personal jewelry of Elisabeth Farnese has never surfaced in quantities matching colonial records.
          </BlogListItem>
          <BlogListItem label="Amelia Island Surf Finds:">
            Over the decades, nor&apos;easters and severe tropical storms have intermittently washed rare 1715-dated gold escudos, silver &ldquo;pieces of eight,&rdquo; and bronze ship pins onto the beaches of Amelia Island and Talbot Island.
          </BlogListItem>
          <BlogListItem label="Deep Sand Overburden:">
            Nassau Sound and St. Marys Entrance feature massive subterranean sand shifts driven by river outflow and Atlantic tides, burying heavy ship components beneath twelve to twenty feet of sand.
          </BlogListItem>
          <BlogListItem label="Submerged Magnetometer Targets:">
            Side-scan sonar and marine magnetometer surveys off Fernandina Beach have located dense iron clusters consistent with the cannon arrays and ballast piles of an early 18th-century Spanish frigate.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 6: Fleet Breakdown Table */}
      <BlogSection title="Key Vessels of the 1715 Treasure Fleet">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          To comprehend the scale of the disaster, we can examine the primary ships of the convoy and their documented outcomes:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[500px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Vessel Name</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Ship Type</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Recorded Wreck Location</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Cargo & Fate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The San Miguel</td>
                  <td className="py-2.5 px-3 sm:px-4">Armed Frigate / Escort</td>
                  <td className="py-2.5 px-3 sm:px-4">Off Amelia Island, FL</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Carrying Queen&apos;s Jewels; never officially salvaged</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Nuestra Señora de la Regla</td>
                  <td className="py-2.5 px-3 sm:px-4">Capitana (Flagship)</td>
                  <td className="py-2.5 px-3 sm:px-4">Near Sebastian Inlet, FL</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Ubilla&apos;s flagship; heavily salvaged 1715 & 1960s</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Santo Cristo de San Román</td>
                  <td className="py-2.5 px-3 sm:px-4">Almiranta (Vice-Flagship)</td>
                  <td className="py-2.5 px-3 sm:px-4">Off Vero Beach, FL</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Carried registered silver bullion; largely recovered</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Urca de Lima</td>
                  <td className="py-2.5 px-3 sm:px-4">Armed Merchantman (Store Ship)</td>
                  <td className="py-2.5 px-3 sm:px-4">Off Fort Pierce, FL</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Now a protected Florida Underwater Archaeological Preserve</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">El Grifón</td>
                  <td className="py-2.5 px-3 sm:px-4">French 48-Gun Warship</td>
                  <td className="py-2.5 px-3 sm:px-4">Out to open sea (Survived)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Sailed northeast away from coast; safely reached France</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 7: The Crown Jewel of Shipwrecks */}
      <BlogSection title="The Crown Jewel of Florida's Waters">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          More than three centuries after the great hurricane of 1715, the Florida coast continues to yield tantalizing fragments of Spain&apos;s lost empire. Yet while millions in gold coins have been brought into the light of day, the mysterious San Miguel remains the ultimate prize—a ghost ship cradled in deep coastal sands, guarding the secret jewels of a queen.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          As offshore salvage technology evolves with high-resolution sub-bottom profilers and satellite magnetometry, the day draws closer when the dunes of Amelia Island will finally give up their greatest maritime secret.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

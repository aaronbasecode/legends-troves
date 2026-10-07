import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Treasure of Lima | Legends Troves',
  description: 'A hoard of gold, silver, and jewels spirited away from Lima in 1820 to escape revolution, and buried on Cocos Island by Captain William Thompson.',
};

export default function TreasureOfLimaPage() {
  return (
    <BlogLayout
      category="land"
      title="The Treasure of Lima"
      imageSrc="/images/treasure-of-lima.jpg"
      imageAlt="Captain Thompson and crew burying the 7-foot gold Virgin Mary statue and Lima Cathedral church treasures inside the Cocos Island jungle"
    >
      {/* Section 1: The Fall of the City of Kings */}
      <BlogSection title="The Fall of the City of Kings (1820)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For nearly three centuries, Lima—known proudly as <em>La Ciudad de los Reyes</em> (The City of Kings)—was the jewel of the Spanish Empire in South America. As the capital of the Viceroyalty of Peru, all the mineral wealth plundered from Incan temples, the silver veins of Potosí, and the gold mines of the Andes flowed through its grand avenues and fortified churches. By 1820, however, the Spanish empire was crumbling under the wave of South American wars of independence.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          General José de San Martín and his liberating army were advancing relentlessly toward Lima. Trapped in a state of sheer panic, Viceroy Joaquín de la Pezuela, along with the high nobility and Catholic archbishops, realized the city would fall. Determined to prevent their colossal treasures from falling into revolutionary hands, they ordered the immediate evacuation of Lima&apos;s most precious assets to the Pacific port of Callao.
        </p>
      </BlogSection>

      {/* Section 2: The Fateful Charter of the Mary Dear */}
      <BlogSection title="The Fateful Charter of the Mary Dear">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In Callao harbor sat the <em>Mary Dear</em>, a sturdy British commercial brig commanded by Captain William Thompson. Convinced that an English flag and neutral vessel would escape the notice of privateers and rebel warships, the Viceroy entrusted Thompson with a staggering mission: transport the entire royal treasury and cathedral relics north to the fortified Spanish stronghold of Panama.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Over several days, heavily guarded wagons rolled onto the Callao docks under the cover of night. Cartload after cartload was stowed in the hold of the <em>Mary Dear</em>: hundreds of bags of gold doubloons, silver ingots, diamond-encrusted chalices, and the crown jewel of Lima&apos;s Cathedral—a life-sized, solid gold statue of the Virgin Mary holding the infant Christ, adorned with thousands of emeralds and pearls. To ensure the cargo&apos;s safety, a retinue of armed Spanish soldiers and clergymen boarded with the crew.
        </p>
      </BlogSection>

      {/* Section 3: Bloodshed on the Pacific and the Mutiny */}
      <BlogSection title="Bloodshed on the Pacific and Mutiny">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The temptation proved irresistible. As the <em>Mary Dear</em> sailed into the open Pacific waters, Captain Thompson and his seasoned crew realized they were standing atop one of the greatest fortunes ever assembled in human history. The wealth in their hold was enough to make every sailor richer than European royalty.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          In the dead of night, Thompson and his conspirators struck. They slit the throats of the Spanish guards and priests in their bunks and pitched their bodies into the dark Pacific ocean. Thompson immediately diverted course away from Panama, altering headings westward toward the remote, uninhabited sanctuary of <strong>Cocos Island</strong> (<em>Isla del Coco</em>), lying 350 miles off the coast of Central America.
        </p>
      </BlogSection>

      {/* Section 4: The Secrets of Cocos Island */}
      <BlogSection title="The Vaults of Cocos Island">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Rising precipitously from the Pacific, Cocos Island is a dense volcanic jungle drenched in over two hundred inches of annual rainfall, surrounded by treacherous riptides and sheer cliffs. It was the quintessential pirate hideout.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Anchoring in Chatham Bay, Thompson and his crew worked around the clock for days, shuttling longboats packed with chests into the misty, jungle-choked valleys. According to subsequent testimony, the treasure was divided and buried across multiple natural landmarks:
        </p>
        <BlogList>
          <BlogListItem label="The Cave of Wafer Bay:">
            A sea cavern carved by pounding waves, concealed behind a roaring freshwater waterfall cascading from the cliff above.
          </BlogListItem>
          <BlogListItem label="The Chatham Valley Cache:">
            An iron chest buried beneath a distinctive triad of volcanic boulders carved with cryptic maritime compass markings.
          </BlogListItem>
          <BlogListItem label="The Virgin Mary Shroud:">
            The life-sized golden statue was reportedly entombed deep in a riverbed ravine, protected from tropical erosion and landslides by heavy stone slabs.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          Once the hoard was buried, the crew agreed to scatter across various ports and reunite years later once the revolutionary fervor had quieted down.
        </p>
      </BlogSection>

      {/* Section 5: The Inventory Table */}
      <BlogSection title="Documented Inventory of the Lost Lima Hoard">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Surviving colonial manifests recovered from the Archivo General de Indias in Seville describe the unbelievable scope of the wealth entrusted to Captain Thompson:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[520px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Treasure Item</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Quantity / Description</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Origin / Provenance</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Modern Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Solid Gold Virgin Mary & Child</td>
                  <td className="py-2.5 px-3 sm:px-4">Life-sized 7-ft statue, 1,684 jewels & emeralds</td>
                  <td className="py-2.5 px-3 sm:px-4">Cathedral of Lima</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$80,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Spanish Gold Doubloons & Escudos</td>
                  <td className="py-2.5 px-3 sm:px-4">Over 500,000 gold coins across iron chests</td>
                  <td className="py-2.5 px-3 sm:px-4">Lima & Potosí Royal Mints</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$150,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Silver Bullion & Ingot Bars</td>
                  <td className="py-2.5 px-3 sm:px-4">Over 1,000 bars of solid refined silver</td>
                  <td className="py-2.5 px-3 sm:px-4">Cerro Rico, Potosí</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$45,000,000</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Ecclesiastical Relics & Candlesticks</td>
                  <td className="py-2.5 px-3 sm:px-4">273 solid gold chalices, monstrances, and pyxes</td>
                  <td className="py-2.5 px-3 sm:px-4">Churches of Lima</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$35,000,000</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Caskets of Unset Gems</td>
                  <td className="py-2.5 px-3 sm:px-4">Thousands of uncut emeralds, rubies, and diamonds</td>
                  <td className="py-2.5 px-3 sm:px-4">Peruvian & Colombian Mines</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$60,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 6: Capture, the Gallows, and the Escape */}
      <BlogSection title="Capture, the Gallows, and the Escape">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Fate was not kind to the mutineers. Before the <em>Mary Dear</em> could reach safe waters, the Spanish warship <em>Espiègle</em> spotted the rogue vessel. Suspecting treason after the missing Callao convoy was reported, the Spanish intercepted and captured the ship.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The crew was transported to Panama, tried for piracy, and hanged one by one. Only Captain Thompson and his first mate, James Alexander Forbes, remained alive. Under torture and facing the noose, Thompson bargained: he would lead a Spanish naval expedition back to Cocos Island to retrieve the hoard in exchange for their lives.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          The Spanish agreed. In late 1821, a Spanish frigate landed Thompson and his mate back on the beaches of Chatham Bay under armed guard. While guiding the Spanish landing party through the dense rainforest, the two prisoners took advantage of a torrential rainstorm, bolted through the tangle of vines, and vanished into the impenetrable jungle. The Spanish searched for weeks without success and eventually abandoned the island, leaving the mutineers stranded.
        </p>
      </BlogSection>

      {/* Section 7: Modern Expeditions & The Preserved Mystery */}
      <BlogSection title="Centuries of Quests: The Enduring Riddle">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Thompson eventually escaped Cocos Island on a passing American whaler under an alias and died in Newfoundland in 1844, passing cryptic maps and journals to a friend named John Keating. Keating claimed to have visited Cocos Island and returned with small bags of gold doubloons, sparking centuries of feverish treasure hunts.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Over 500 expeditions have combed Cocos Island since. A German adventurer named August Gissler lived on the island as an official governor for nearly twenty years (1889–1908), digging hundreds of tunnels and finding only a handful of stray Spanish coins. Even future U.S. President Franklin D. Roosevelt visited the island three times between 1910 and 1935, fascinated by the legend of the Lima gold.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Today, Cocos Island is a strictly protected UNESCO World Heritage National Park governed by Costa Rica. All unauthorized entry, digging, and prospecting are strictly prohibited by armed park rangers and environmental treaties. Shrouded in mist, volcanic ravines, and protected by law, the fabulous Treasure of Lima sleeps undisturbed—waiting for the day its secrets are finally brought into the light.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

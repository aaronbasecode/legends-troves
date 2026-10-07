import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Awa Maru | Legends Troves',
  description: 'Torpedoed in 1945 despite guaranteed Red Cross safe passage, the Japanese ocean liner Awa Maru sank into the Taiwan Strait with over 2,000 souls and billions in looted gold, platinum, and the lost fossils of Peking Man.',
};

export default function TheAwaMaruPage() {
  return (
    <BlogLayout
      category="water"
      title="The Awa Maru"
      imageSrc="/images/the-awa-maru.jpg?v=2"
      imageAlt="Zoomed-in underwater view of the Awa Maru wreckage ripped apart on the seabed of the Taiwan Strait, with gold bullion and platinum ingots half-buried in dark mud"
    >
      {/* Section 1: The Midnight Tragedy of Easter 1945 */}
      <BlogSection title="The Midnight Tragedy of Easter 1945">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Shortly before midnight on April 1, 1945—Easter Sunday—the black waters of the Taiwan Strait were blanketed by a suffocating, impenetrable sea fog. Steaming northward at an unswerving 16 knots was the <strong>Awa Maru</strong> (阿波丸), an 11,249-ton luxury passenger-cargo ocean liner built in 1942 by Mitsubishi for the prestigious Nippon Yusen Kaisha (NYK) line.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          By all maritime treaties and military orders, the <em>Awa Maru</em> was supposed to be the most inviolable ship on earth. Under an unprecedented humanitarian agreement brokered by the International Red Cross and the Swiss government, the vessel had been granted <strong>unconditional Safe Conduct</strong> by the United States Department of State and the Supreme Allied Command. To guarantee immunity from attack by American submarines and aircraft, her hull, decks, and emerald-green smokestack were emblazoned with colossal white crosses illuminated throughout the night by blazing searchlights.
        </p>
      </BlogSection>

      {/* Section 2: Operation Relic - The Golden Smuggle */}
      <BlogSection title="Operation Relic: The Floating Vault of a Collapsing Empire">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The public pretext for the <em>Awa Maru</em>&apos;s voyage was purely humanitarian: delivering 2,000 tons of Red Cross relief parcels—medicine, vitamin tablets, mail, and condensed milk—to starving Allied prisoners of war (POWs) and civilian internees in Hong Kong, Singapore, Malaya, and the Dutch East Indies.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          However, as Allied forces closed the noose around Japan and cut off maritime shipping lanes in the South China Sea, high commanders of the Imperial Japanese Navy and the <em>Kempeitai</em> secretly transformed the return voyage into the most desperate high-stakes evacuation in Axis history:
        </p>
        <BlogList>
          <BlogListItem label="The Evacuation of the Colonial Elite:">
            In Singapore and Jakarta, the liner was packed with <strong>2,004 passengers</strong>—not wounded soldiers or civilians, but the most elite administrative brains of Japan&apos;s southern empire: senior diplomats, admirals, naval architects, petroleum engineers, and merchant shipping captains whose rescue was deemed vital for the home islands&apos; final defense.
          </BlogListItem>
          <BlogListItem label="Plundered Bullion &amp; Strategic Metals:">
            Before departure, military convoys unloaded thousands of wooden crates into her holds: roughly <strong>40 tons of gold bullion</strong> seized from central bank vaults in Batavia (Jakarta), Malaya, and Burma, alongside 12 metric tons of platinum and 150,000 carats of high-grade commercial diamonds.
          </BlogListItem>
          <BlogListItem label="The Lost Skulls of Peking Man:">
            Most tantalizing of all, intelligence files and witness testimonies suggested that two unmarked wooden crates placed into the ship&apos;s vault contained the legendary fossilized skulls and skeletal remains of <strong>Peking Man</strong> (<em>Homo erectus pekinensis</em>)—the 500,000-year-old archaeological treasure that had vanished from Beijing in December 1941.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: Plundered Cargo Breakdown Table */}
      <BlogSection title="Estimated Manifest: The Titanic of the Orient">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Postwar intelligence debriefings, declassified CIA dossiers, and salvage estimates value the contraband cargo aboard the <em>Awa Maru</em> between <strong>$5 Billion and $10 Billion USD</strong> in modern currency:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Cargo Component</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Historical Provenance</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Manifest Items</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Modern Valuation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Imperial Plundered Gold</td>
                  <td className="py-2.5 px-3 sm:px-4">Central Bank of Java &amp; Malayan Treasuries</td>
                  <td className="py-2.5 px-3 sm:px-4">40 metric tons of refined gold bullion ingots and specie</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$2,600,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Industrial Platinum Reserve</td>
                  <td className="py-2.5 px-3 sm:px-4">Sumatran &amp; Japanese Naval Stores</td>
                  <td className="py-2.5 px-3 sm:px-4">12 metric tons of platinum bars, wires, and laboratory plates</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$360,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Gem &amp; Industrial Diamonds</td>
                  <td className="py-2.5 px-3 sm:px-4">Dutch East Indies De Beers Stockpiles</td>
                  <td className="py-2.5 px-3 sm:px-4">150,000 carats of raw industrial diamonds, cut jewelry, and loose stones</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$450,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The Peking Man Fossils</td>
                  <td className="py-2.5 px-3 sm:px-4">Peking Union Medical College (Zhoukoudian)</td>
                  <td className="py-2.5 px-3 sm:px-4">5 cranial skull caps, 139 fossil teeth, and limb bones of *Homo erectus*</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless Global Heritage</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Strategic Wartime Commodities</td>
                  <td className="py-2.5 px-3 sm:px-4">Malayan Smelters &amp; Plantations</td>
                  <td className="py-2.5 px-3 sm:px-4">3,000 tons of crude raw rubber sheets, 2,000 tons of tin ingots, tungsten</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$180,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 4: The Fatal Miscalculation - USS Queenfish */}
      <BlogSection title="The Fatal Miscalculation: The USS Queenfish Strike">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Cruising submerged through the Taiwan Strait off Niushan Island was the American Balao-class submarine <strong>USS Queenfish (SS-393)</strong>, commanded by Lieutenant Commander Charles E. Loughlin.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Earlier that week, Fleet Admiral Chester Nimitz had broadcast coded alerts specifying the <em>Awa Maru</em>&apos;s exact route, coordinates, and safe-conduct immunity. But through a catastrophic communications breakdown at base, the vital advisory was buried in general intelligence cables that Loughlin never saw.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          At 22:00 hours, through a blinding pea-soup fog that reduced visual range to less than 200 yards, the <em>Queenfish</em>&apos;s SJ surface search radar painted a solitary high-speed contact moving at 16 knots without zigzagging. Convinced he had cornered an unescorted Japanese destroyer or auxiliary cruiser running the Allied blockade, Loughlin maneuvered into attack position:
        </p>
        <blockquote className="my-4 pl-4 border-l-4 border-[#D4AF37] italic text-sm sm:text-base text-[#2C2504]/95 bg-[#D8D1B6]/30 py-3 rounded-r-lg">
          &quot;Target bearing 050, range 1,200 yards... Fire one, fire two, fire three, fire four.&quot;
          <span className="block mt-1 font-semibold not-italic text-xs sm:text-sm text-[#2C2504]/80">
            — USS Queenfish Torpedo Log, April 1, 1945
          </span>
        </blockquote>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          All four Mark 18 electric torpedoes struck with devastating concussive violence. The <em>Awa Maru</em> was ripped apart amidships and sank into 60 meters (200 feet) of water in less than three minutes. Out of 2,004 souls aboard, the submarine crew pulled only <strong>a single survivor</strong> from the oil-slicked, icy swell: 43-year-old assistant steward Kantaro Shimoda.
        </p>
      </BlogSection>

      {/* Section 5: The Court-Martial & The 1949 Waiver */}
      <BlogSection title="The Court-Martial &amp; The Surprising 1949 Waiver">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          When Commander Loughlin reported the sinking, Pearl Harbor erupted in pandemonium. Admiral Nimitz was apoplectic; the United States had committed an egregious breach of international safe conduct. Loughlin was immediately relieved of command, flown to Guam, and faced a general court-martial for negligence and disobeying orders (though he was later exonerated and promoted to rear admiral).
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Tokyo filed ferocious diplomatic protests through Bern, demanding hundreds of millions of yen in reparations. Yet in 1949, during the lead-up to the Treaty of Peace with Japan (San Francisco Treaty), the Japanese government stunned Allied diplomats by <strong>unconditionally waiving all claims for indemnification</strong>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Declassified files explain the sudden silence: American naval intelligence presented undeniable photographic and manifest proof that the Japanese military had flagrantly weaponized the Red Cross agreement, stuffing the ship with military contraband, high-ranking officers, and plundered foreign national treasuries.
        </p>
      </BlogSection>

      {/* Section 6: Operation Jialing - Beijing's Secret Salvage */}
      <BlogSection title="Operation Jialing: China's Top-Secret Salvage (1977–1980)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For thirty-two years, the wreck lay untouched on the shallow continental shelf of the Taiwan Strait. Then in 1977, Premier Hua Guofeng authorized <strong>Operation Jialing</strong>—the largest and most secretive underwater recovery mission in Chinese history.
        </p>
        <BlogList>
          <BlogListItem label="700 Naval Divers &amp; Heavy Cranes:">
            The People&apos;s Liberation Army Navy mobilized two 2,500-ton floating cranes, fleet tugs, and over 700 elite saturation divers who conducted over 10,000 dives into the mangled, silt-choked hull at a depth of 60 meters.
          </BlogListItem>
          <BlogListItem label="Humanitarian Repatriation:">
            Divers painstakingly retrieved 368 sets of human remains alongside personal effects (hanko name seals, fountain pens, and engraved wristwatches), which were formally transferred to Japanese delegations in Guangzhou with military honors.
          </BlogListItem>
          <BlogListItem label="10,000 Tons of Metals:">
            Cranes dredged up nearly 10,000 tons of raw rubber sheets, tin ingots, and steel machinery from the shattered cargo compartments.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mt-4 font-normal">
          Yet when the operation concluded in 1980, the Chinese Ministry of Communications issued a startling official communiqué: <em>Not a single ounce of gold bullion, platinum, or fossil remains had been found.</em>
        </p>
      </BlogSection>

      {/* Section 7: The Enduring Riddle of the Taiwan Strait */}
      <BlogSection title="The Enduring Riddle: Where Did the Treasure Go?">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The official denial only deepened the legend of the <em>Awa Maru</em>, fueling three persistent theories that keep treasure hunters and maritime historians searching:
        </p>
        <BlogList>
          <BlogListItem label="1. The Covert Transfer in Singapore:">
            Some historians argue that Japanese naval commanders realized American submarines had sealed the Taiwan Strait, quietly unloading the gold and platinum into subterranean vaults beneath Singapore or the Malayan jungle before the ship sailed.
          </BlogListItem>
          <BlogListItem label="2. Hidden in Beijing's Secret Vaults:">
            Persistent intelligence rumors claim that Chinese naval divers did indeed locate the bullion and crates of Peking Man fossils during Operation Jialing, quietly transporting them to state repositories while declaring the holds empty to prevent international restitution battles with Japan and the United States.
          </BlogListItem>
          <BlogListItem label="3. Swallowed by the Silt:">
            When the four Mark 18 torpedoes ripped the liner&apos;s double-bottom open, the extreme weight of the gold and platinum ingots may have plunged through the breached keel, sinking 10 to 20 feet deep into the shifting mud of the seabed—far below the reach of the 1970s divers.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mt-4 font-normal">
          Eighty years after the fatal torpedoes of the <em>USS Queenfish</em> pierced the Easter fog, the shattered hull of the <em>Awa Maru</em> remains at rest in the Taiwan Strait—a silent, rusted monument to the tragic intersection of war, human suffering, and the lost riches of an empire.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

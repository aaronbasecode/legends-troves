import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Merchant Royal | Legends Troves',
  description: 'Known as the El Dorado of the Seas, the 17th-century English galleon Merchant Royal sank off Land’s End, Cornwall, in 1641 with billions in gold, silver, and jewels.',
};

export default function TheMerchantRoyalPage() {
  return (
    <BlogLayout
      category="water"
      title="The Merchant Royal"
      imageSrc="/images/the-merchant-royal.jpg"
      imageAlt="The Merchant Royal navigating rough seas off the coast of Land's End, Cornwall"
    >
      {/* Section 1: The El Dorado of the Seas */}
      <BlogSection title="The El Dorado of the Seas">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          On September 23, 1641, beneath the stormy grey swells off the treacherous granite cliffs of Land&apos;s End, Cornwall, one of the wealthiest merchant ships ever constructed vanished into the ocean depths. Her name was the <strong>Merchant Royal</strong>, and she carried a cargo so vast, so glittering, and so consequential that historians and marine salvors have universally dubbed her <em>&quot;The El Dorado of the Seas.&quot;</em>
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Built at Deptford Dockyard along the River Thames in 1627, the <em>Merchant Royal</em> was a formidable 700-ton English armed merchant galleon. Fitted with 32 heavy bronze cannons and designed for long-distance commerce in hostile waters, she had spent years navigating the colonial trade routes of the Spanish West Indies. Yet it was not commercial sugar or tobacco that would seal her legend—it was a fateful charter in a Spanish port that transformed her hold into a floating imperial treasury.
        </p>
      </BlogSection>

      {/* Section 2: The Fateful Charter at Cádiz */}
      <BlogSection title="A Fortune Formed in Cádiz (1641)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In early 1641, after a grueling three-year trading expedition throughout the Caribbean, the <em>Merchant Royal</em> was limping home toward London under the command of veteran mariner <strong>Captain John Limbrey</strong>. The ship had sprung persistent leaks across the Atlantic crossing and was forced into the Spanish port of Cádiz for emergency careening and repairs.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          While docked in Cádiz, an unexpected crisis struck the Spanish Crown: an English vessel chartered to transport military payroll to Flanders caught fire in the harbor. King Philip IV of Spain was locked in the Eighty Years&apos; War and desperately needed to pay 30,000 Spanish soldiers stationed in the Spanish Netherlands. Hearing of Limbrey&apos;s sturdy galleon, Spanish royal officials made the English captain an offer he could not refuse: transport the royal military payroll to Antwerp on his return voyage in exchange for a colossal freight fee.
        </p>
      </BlogSection>

      {/* Section 3: The Cargo of Kings */}
      <BlogSection title="The Staggering Wealth in the Hold">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Day after day, heavily guarded royal wagons rolled through the gates of Cádiz directly to the dockside. Armed sentries oversaw the loading of hundreds of ironbound caskets, canvas bags, and silver pigs into the hold of the <em>Merchant Royal</em>:
        </p>
        <BlogList>
          <BlogListItem label="The Flanders Army Payroll:">
            Over 100,000 pounds (approximately 45 metric tons) of solid gold bullion bars, minted doubloons, and Spanish escudos.
          </BlogListItem>
          <BlogListItem label="Mexican Silver Bullion:">
            Four hundred massive refined silver bars, directly extracted from the legendary mines of Zacatecas and Taxco.
          </BlogListItem>
          <BlogListItem label="Nearly 500,000 Pieces of Eight:">
            Caskets overflowing with <em>reales de a ocho</em>, the premier international trading currency of the 17th century.
          </BlogListItem>
          <BlogListItem label="Private Aristocratic Troves:">
            Personal fortunes, diamond-studded pendants, and gold church plate entrusted to Limbrey by high-ranking Spanish grandees returning to Europe.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          In 1641, the cargo was officially valued at over <strong>£300,000</strong>—a mind-boggling sum representing nearly one-third of England&apos;s entire national public revenue that year. Today, numismatists and maritime economists estimate the bullion and collector value at between <strong>$1.5 billion and $2.5 billion</strong>.
        </p>
      </BlogSection>

      {/* Section 4: Documented Cargo Manifest Table */}
      <BlogSection title="Official Cargo Manifest of the Merchant Royal">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Surviving port declarations and diplomatic dispatches preserved in the British National Archives and the General Archive of the Indies record the staggering dimensions of the lost shipment:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Cargo Component</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Quantity</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Provenance / Consignor</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Modern Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Gold Bullion &amp; Coinage</td>
                  <td className="py-2.5 px-3 sm:px-4">100,000+ lbs (~45 tonnes) in bars &amp; doubloons</td>
                  <td className="py-2.5 px-3 sm:px-4">Spanish Royal Crown (Army of Flanders)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$1,200,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Mexican Silver Bullion</td>
                  <td className="py-2.5 px-3 sm:px-4">400 solid refined silver ingot bars</td>
                  <td className="py-2.5 px-3 sm:px-4">Zacatecas &amp; Taxco Silver Mines</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$75,000,000</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Spanish Pieces of Eight</td>
                  <td className="py-2.5 px-3 sm:px-4">Nearly 500,000 minted silver reales</td>
                  <td className="py-2.5 px-3 sm:px-4">Mexico City &amp; Lima Mints</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$180,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Aristocratic Relics &amp; Jewelry</td>
                  <td className="py-2.5 px-3 sm:px-4">Chests of diamonds, emeralds, and gold plate</td>
                  <td className="py-2.5 px-3 sm:px-4">Spanish Grandees &amp; Church Officials</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$90,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">West Indian Trade Goods</td>
                  <td className="py-2.5 px-3 sm:px-4">Cochineal dye, raw tobacco, and indigo</td>
                  <td className="py-2.5 px-3 sm:px-4">English Merchant Adventurers</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$15,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Final Voyage and Disaster */}
      <BlogSection title="Catastrophe Off the Cornish Coast">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In late August 1641, the <em>Merchant Royal</em> weighed anchor from Cádiz alongside her sister ship, the <em>Dover Merchant</em>. The galleon was dangerously overloaded, her hull sitting low in the water under the weight of hundreds of tons of solid metal.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          As the ships rounded the western approaches to the English Channel on September 23, severe autumn gales whipped the Atlantic into a frenzy. Off the coast of Land&apos;s End and the Isles of Scilly, the caulking between the galleon&apos;s weathered hull planks gave way. Seawater poured into the bilges faster than the exhausted crew could bale.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          In a desperate bid to save the ship, Limbrey ordered the crew to man the chain pumps continuously. But under the relentless pounding of the sea, the pumps choked with ballast and broke down entirely. As water flooded the gun deck, the <em>Dover Merchant</em> drew alongside in the violent swells. Captain Limbrey and 40 crew members scrambled across ropes to safety. Eighteen brave seamen were still below decks or caught in the rigging when the <em>Merchant Royal</em> listed sharply to port and plunged beneath the waves into the deep Atlantic shelf.
        </p>
      </BlogSection>

      {/* Section 6: National Repercussions */}
      <BlogSection title="A Shockwave Through Parliament and Europe">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The loss of the <em>Merchant Royal</em> reverberated throughout European capitals. In London, the news was received with such shock that the English House of Commons interrupted its debates to hear the dispatch, recognizing the immense blow to English mercantile capital on the eve of the English Civil War.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          In Madrid, the sinking was a geopolitical disaster. Deprived of the silver and gold needed to pay his mercenary armies in the Low Countries, King Philip IV watched in horror as Spanish regiments in Flanders mutinied, reshaping the balance of power across Europe.
        </p>
      </BlogSection>

      {/* Section 7: The 400-Year Search */}
      <BlogSection title="The Modern Search for the Billion-Dollar Wreck">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For nearly four centuries, the location of the <em>Merchant Royal</em> has ranked among the ultimate grails of deep-sea exploration. The ocean floor off Land&apos;s End is a treacherous labyrinth of underwater canyons, shifting granite reefs, and strong tidal races where depths plunge between 200 and 400 feet.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In 2007, American salvage firm Odyssey Marine Exploration sparked international headlines when it recovered 17 tons of silver coins from a deep-water Atlantic site codenamed &quot;Black Swan,&quot; initially rumored to be the <em>Merchant Royal</em> before courts confirmed it was the 1804 Spanish frigate <em>Nuestra Señora de las Mercedes</em>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Excitement ignited again in March 2019, when a Cornish fishing vessel trawling off the coast of Cornwall snagged its nets on an ancient artifact: a massive, 13-foot 17th-century ship&apos;s anchor consistent with the size and era of the <em>Merchant Royal</em>. Armed with autonomous underwater vehicles (AUVs), multibeam sonar, and magnetometers, international salvage teams and marine archaeologists continue to scour the seabed off Land&apos;s End. Resting in the dark silence of the Atlantic shelf, the El Dorado of the Seas remains poised to surrender the greatest maritime fortune in human history.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

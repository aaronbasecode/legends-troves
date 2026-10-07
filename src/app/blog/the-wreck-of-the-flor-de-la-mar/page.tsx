import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Wreck of the Flor de la Mar | Legends Troves',
  description: 'The legendary Portuguese carrack Flor de la Mar sank in 1511 off the coast of Sumatra laden with sixty tons of gold and the plundered royal treasury of Malacca—the richest shipwreck in maritime history.',
};

export default function TheWreckOfTheFlorDeLaMarPage() {
  return (
    <BlogLayout
      category="water"
      title="The Wreck of the Flor de la Mar"
      imageSrc="/images/the-wreck-of-the-flor-de-la-mar.jpg?v=3"
      imageAlt="Underwater wreckage of the Flor de la Mar broken on the seabed, surrounded by solid gold ceremonial lions, a jewel-encrusted throne, Ming porcelain, and mounds of minted gold coinage embedded in mud and sand"
    >
      {/* Section 1: The Fall of the Spice Sultanate */}
      <BlogSection title="The Richest Prize of the Age of Discovery (1511)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the summer of 1511, the global balance of maritime power pivoted inside the narrow, sweltering waters of Southeast Asia. <strong>Afonso de Albuquerque</strong>, the ruthless and visionary Viceroy of Portuguese India, unleashed an armada of armed carracks and caravels against the <strong>Sultanate of Malacca</strong>. Perched commanding the vital strait linking the Indian Ocean with the South China Sea, Malacca was universally renowned as the wealthiest commercial entrepôt on earth—a vibrant metropolis where Persian silk, Moluccan cloves, Chinese porcelain, Siamese rubies, and Gujarati cotton converged.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          After weeks of brutal urban combat across the stone bridges and fortified mosques of the city, Sultan Mahmud Shah fled into the jungle. What the Portuguese conquerors found within the royal palace and subterranean treasure vaults surpassed the wildest fantasies of European kings: mounds of minted gold coinage, jewel-encrusted thrones, imperial tribute from Ming China and the Kingdom of Ayutthaya (Siam), and solid gold ceremonial lions. Albuquerque resolved that this incomprehensible plunder would be transported personally to Lisbon as a monumental gift for King Manuel I.
        </p>
      </BlogSection>

      {/* Section 2: An Aging Giant of the Carreira da Índia */}
      <BlogSection title="The Aging Giant: A Fateful Flagship">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          To carry the royal plunder, Albuquerque requisitioned his veteran flagship: the <strong>Flor de la Mar</strong> (also known as <em>Flor do Mar</em>, &quot;Flower of the Sea&quot;). Built in Lisbon in 1502, the 400-ton carrack (<em>nau</em>) was a legendary warhorse of the Portuguese empire. With towering fore- and sterncastles bristling with bronze cannons, she had fought in Albuquerque&apos;s conquest of Socotra and Hormuz, the decisive naval Battle of Diu in 1509, and the capture of Goa.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Yet by 1511, the mighty vessel was on the brink of structural exhaustion:
        </p>
        <BlogList>
          <BlogListItem label="Tropical Wood Decay:">
            Nine years of continuous service in tropical waters had left her wooden timbers riddled with shipworms (<em>Teredo navalis</em>). Her hull was chronically leaky, requiring round-the-clock pumping even in harbor.
          </BlogListItem>
          <BlogListItem label="Desperate Patchwork:">
            Prior to the siege of Malacca, shipwrights had patched her hull with lead sheeting and caulked her seams with oakum and resin, warning Albuquerque that she was dangerously unfit for open-ocean voyages.
          </BlogListItem>
          <BlogListItem label="Dangerous Overloading:">
            Ignoring the desperate pleas of his senior sailing masters, Albuquerque insisted on packing her deep cargo hold to the gunwales with over sixty tons of gold, heavy bronze guns, and stone ballast, severely compromising her already precarious seaworthiness.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: Plundered Cargo Breakdown Table */}
      <BlogSection title="The Lost Cargo: The Greatest Hoard in Naval History">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Contemporary letters written by Afonso de Albuquerque and royal chroniclers João de Barros and Fernão Lopes de Castanheda confirm that the <em>Flor de la Mar</em> was laden with the greatest treasure ever assembled on a single wooden ship:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Treasure Component</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Origin / Provenance</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Manifest Items</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Modern Estimated Valuation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The Malaccan Royal Bullion</td>
                  <td className="py-2.5 px-3 sm:px-4">Treasury of Sultan Mahmud Shah</td>
                  <td className="py-2.5 px-3 sm:px-4">60+ tons of gold ingots, dust, and minted gold <em>dinars</em> and <em>katty</em> coins</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$1,800,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The Imperial Siamese Tribute</td>
                  <td className="py-2.5 px-3 sm:px-4">Kingdom of Ayutthaya (Siam)</td>
                  <td className="py-2.5 px-3 sm:px-4">Chests of uncut Burmese rubies, blue sapphires, gold cups, and carved elephant tusks</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$350,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The Golden Lions of China</td>
                  <td className="py-2.5 px-3 sm:px-4">Ming Imperial Court / Malacca Palace</td>
                  <td className="py-2.5 px-3 sm:px-4">Two life-sized cast bronze lions sheathed in chased gold leaf with ruby eyes</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless Historic Icon</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Regalia &amp; Royal Furniture</td>
                  <td className="py-2.5 px-3 sm:px-4">Malaccan &amp; Javanese Sultans</td>
                  <td className="py-2.5 px-3 sm:px-4">Carved sandalwood thrones inlaid with pearl, gold ceremonial <em>kris</em> daggers, solid gold tableware</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$250,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Imperial Ming Porcelain &amp; Silk</td>
                  <td className="py-2.5 px-3 sm:px-4">Yongle &amp; Xuande Imperial Kilns</td>
                  <td className="py-2.5 px-3 sm:px-4">Over 200 crates of cobalt blue-and-white porcelain, embroidered silks, and lacquerware</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$200,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 4: The Midnight Tempest off Sumatra */}
      <BlogSection title="Catastrophe in the Night: The Tempest of November 1511">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In late November 1511, the <em>Flor de la Mar</em> cast off from Malacca, leading a small convoy bound for Cochin and Goa. As the fleet tacked northwest along the coast of Sumatra near the ancient sultanate of <strong>Aru</strong> (modern North Sumatra/Aceh), the sky blackened without warning. A violent tropical <em>sumatran</em> squall struck the overloaded carrack with hurricane-force gale winds and mountainous cross-seas.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Blinded by torrential rain and driven by furious breakers toward the uncharted coastal reefs, the ship struck a jagged coral bank near <strong>Timia Point</strong> (believed to be near Cape Diamond or Tanjung Jambuair). The impact shattered the rotting hull. Under the repeated sledgehammer blows of twenty-foot breakers, the massive vessel broke cleanly in two.
        </p>
        <blockquote className="my-4 pl-4 border-l-4 border-[#D4AF37] italic text-sm sm:text-base text-[#2C2504]/95 bg-[#D8D1B6]/30 py-3 rounded-r-lg">
          &quot;The sea was so terrible that no man could stand upon the deck... The ship broke in halves, and all that immense treasure of Malacca—the gold, the jewels, the lions, and the tribute of kings—went down into the sand and the foam. More than four hundred souls perished before morning broke.&quot;
          <span className="block mt-1 font-semibold not-italic text-xs sm:text-sm text-[#2C2504]/80">
            — Fernão Lopes de Castanheda, History of the Discovery and Conquest of India (1551)
          </span>
        </blockquote>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Afonso de Albuquerque survived by a sheer miracle. Clinging to a makeshift timber raft with an orphaned slave girl in his arms and a handful of senior captains, he drifted helplessly away into the darkness, watching his beloved flagship slip beneath the foaming coral surf with over 400 soldiers, sailors, and captives.
        </p>
      </BlogSection>

      {/* Section 5: The Shifting Sands of the Malacca Strait */}
      <BlogSection title="Why the World's Richest Wreck Remains Unfound">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For over five centuries, salvors, treasure hunters, and maritime historians have attempted to locate the resting place of the <em>Flor de la Mar</em>. Yet the physical geography of the Strait of Malacca presents some of the most unforgiving search conditions on earth:
        </p>
        <BlogList>
          <BlogListItem label="Massive Alluvial Silt:">
            Dozens of tropical rivers along eastern Sumatra (such as the Asahan, Rokan, and Siak) discharge millions of tons of mud and sediment annually into the strait. Over 500 years, the wreck has likely been buried beneath <strong>10 to 15 meters of dense marine sediment</strong>.
          </BlogListItem>
          <BlogListItem label="Zero Underwater Visibility:">
            Strong tidal currents and churning river runoff reduce underwater visibility to near zero inches in the coastal shallows, rendering optical cameras and diver reconnaissance useless.
          </BlogListItem>
          <BlogListItem label="Migrating Coral Reefs &amp; Sandbanks:">
            The shallow seabed along northern Sumatra is constantly reshaped by monsoonal currents and seismic tectonic shifts, meaning 16th-century navigational landmarks no longer align with modern charts.
          </BlogListItem>
          <BlogListItem label="Heavy Modern Shipping:">
            The Strait of Malacca is the world&apos;s busiest maritime artery, traversed by over 100,000 supertankers and container ships each year, creating immense logistical hazards for deep-tow side-scan sonars and magnetometer surveys.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 6: The Modern Geopolitical Gold War */}
      <BlogSection title="The Geopolitical Standoff: Marx, Malaysia &amp; Indonesia">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In 1989, legendary American underwater salvage expert <strong>Bob Marx</strong> spent nearly $20 million conducting extensive archival investigations and sub-bottom profiling surveys along the Sumatran coast. Marx claimed to have discovered promising magnetic anomalies and timber scatter precisely where Portuguese records indicated the ship had foundered.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          However, before full-scale excavation could begin, a three-way international geopolitical firestorm erupted:
        </p>
        <BlogList>
          <BlogListItem label="Indonesia's Sovereign Waters:">
            The Republic of Indonesia asserted absolute jurisdiction over the site under territorial waters law, refusing commercial salvage permits and demanding complete custody of any cultural artifacts.
          </BlogListItem>
          <BlogListItem label="Malaysia's Patrimony Claim:">
            The Malaysian government argued vehemently that the treasure represented the plundered cultural patrimony of the historic Sultanate of Malacca and should be repatriated to Malaysian soil.
          </BlogListItem>
          <BlogListItem label="Portugal's Naval Sovereign Immunity:">
            The Portuguese government filed formal diplomatic notifications claiming that as a commissioned royal naval warship of the crown, the <em>Flor de la Mar</em> retains sovereign immunity under international maritime admiralty law.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mt-4 font-normal">
          Paralyzed by competing diplomatic claims and strict UNESCO conventions against commercial exploitation of underwater cultural heritage, all exploration permits were revoked, leaving the site untouched.
        </p>
      </BlogSection>

      {/* Section 7: The Unbroken Slumber */}
      <BlogSection title="The Unbroken Slumber of the Flower of the Sea">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Today, a full-scale replica of the <em>Flor de la Mar</em> towers proudly above the harbor of modern Melaka, housing the Maritime Museum of Malaysia. Tourists walk its teak decks and marvel at scale models of Albuquerque&apos;s cannons, but the real vessel remains shrouded in silence.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Somewhere beneath the warm, murky currents off the coast of Sumatra, buried in dark mud and coral, the sixty tons of gold, the royal jewels of Siam, and the legendary Golden Lions of China still lie in undisturbed darkness. The &quot;Flower of the Sea&quot; took the greatest hoard of the Age of Discovery to her watery grave—and five centuries later, she shows no sign of giving it back.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

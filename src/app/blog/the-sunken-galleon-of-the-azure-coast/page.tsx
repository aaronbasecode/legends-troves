import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Sunken Galleon of the Azure Coast | Legends Troves',
  description: 'In the 17th century, a Spanish treasure galleon carrying Incan gold, silver bullion, and bronze cannons foundered in deep waters off Saint-Tropez on the French Riviera.',
};

export default function SunkenGalleonAzureCoastPage() {
  return (
    <BlogLayout
      category="water"
      title="The Sunken Galleon of the Azure Coast"
      imageSrc="/images/the-sunken-galleon-of-the-azure-coast.jpg"
      imageAlt="A French coastal patrol frigate and lone Spanish galleon in a fierce nighttime artillery duel across rolling swells off the Îles d'Hyères"
    >
      {/* Section 1: The Secret of the French Riviera */}
      <BlogSection title="The Secret of the French Riviera">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Along the sun-drenched shores of the <strong>Côte d&apos;Azur</strong> (the Azure Coast), where luxury superyachts drop anchor in the glamorous bays of Saint-Tropez and the Îles d&apos;Hyères, few travelers realize they are sailing above one of maritime history&apos;s most tantalizing unsolved shipwrecks. Resting in the silent, cobalt depths off the rugged granite headlands lies <strong>The Sunken Galleon of the Azure Coast</strong>—a 17th-century Spanish armed treasure ship laden with looted Andean gold, silver bullion, and bronze artillery.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          While most famous treasure wrecks are associated with the Caribbean Sea or the Florida Straits, this lost galleon met her fate in the heart of the Mediterranean. Caught between wartime naval engagements and the ferocious autumn gales of southern France, the vessel plunged off the continental shelf into deep waters that have defied salvors for centuries.
        </p>
      </BlogSection>

      {/* Section 2: The Mediterranean Gold Route */}
      <BlogSection title="The Mediterranean Treasure Run (17th Century)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          During the mid-17th century, the Spanish Empire was locked in the exhausting Thirty Years&apos; War and the Franco-Spanish War (1635–1659). To sustain its sprawling military commitments across Europe, the Spanish Crown relied heavily on powerful Genoese banking dynasties—such as the Spinola and Grimaldi families—who financed royal armies in exchange for direct payments in American precious metals.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          After arriving in Cádiz from the Viceroyalty of Peru, select consignments of Incan gold artifacts, melted temple treasures, and freshly minted silver cobs were transferred onto heavily armed warships destined for the Republic of Genoa and the Spanish-controlled Kingdom of Naples. Sailing through the Mediterranean required supreme vigilance: French naval squadrons based in Toulon and Barbary corsairs prowled the waters, waiting to intercept any vessel carrying the King of Spain&apos;s gold.
        </p>
      </BlogSection>

      {/* Section 3: The Fatal Tempest and the Reefs of Cape Camarat */}
      <BlogSection title="The Fatal Tempest and the Reefs of Cape Camarat">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          According to naval archives in Marseille and Seville, the doomed galleon cleared the Balearic Sea in late autumn, sailing along the Provençal coastline under the cover of night to avoid French scouts. However, as the ship approached the Gulf of Saint-Tropez, two deadly perils converged:
        </p>
        <BlogList>
          <BlogListItem label="The French Naval Ambush:">
            A French coastal patrol frigate out of the Îles d&apos;Hyères spotted the lone Spanish galleon and engaged her in a fierce artillery duel across the rolling swells.
          </BlogListItem>
          <BlogListItem label="The Violent Mistral Gale:">
            As cannon fire shattered the galleon&apos;s rigging, a ferocious autumn <em>Mistral</em> shrieked down from the Rhône Valley, whipping the Mediterranean into mountainous, short-crested whitecaps and driving the vessel helplessly toward the rocky shore.
          </BlogListItem>
          <BlogListItem label="The Hidden Pinnacle:">
            Unable to tack against the hurricane-force gusts, the heavily laden galleon struck a submerged granite reef off Cape Camarat. The jagged stone tore through her bottom timbers, breaching the lower hold.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          Within minutes, the ship slid backwards off the reef, plunging down a steep submarine cliff into deep water exceeding 80 meters (260 feet). Only a handful of sailors survived by clinging to floating debris and washing ashore on the wild beaches of Cape Taillat.
        </p>
      </BlogSection>

      {/* Section 4: Documented Cargo Manifest Table */}
      <BlogSection title="Estimated Inventory of the Lost Azure Coast Galleon">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Consignment manifests and diplomatic inquiries recovered from Spanish customs archives detail the extraordinary fortune carried aboard the sunken warship:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Cargo Component</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Description</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Origin / Destination</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Modern Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Incan Ceremonial Gold Artifacts</td>
                  <td className="py-2.5 px-3 sm:px-4">Hammered gold pectorals, sacred solar disks, and effigies</td>
                  <td className="py-2.5 px-3 sm:px-4">Peruvian Temples &amp; Royal Collections</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$65,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Spanish Silver Pieces of Eight</td>
                  <td className="py-2.5 px-3 sm:px-4">Over 300,000 minted silver reales in iron-banded casks</td>
                  <td className="py-2.5 px-3 sm:px-4">Potosí &amp; Lima Royal Mints</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$110,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Refined Silver Bullion Bars</td>
                  <td className="py-2.5 px-3 sm:px-4">250 solid stamped silver ingots consigned to Genoese banks</td>
                  <td className="py-2.5 px-3 sm:px-4">Cerro Rico, Upper Peru</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$45,000,000</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Emerald Jewelry &amp; Church Plate</td>
                  <td className="py-2.5 px-3 sm:px-4">Colombian emerald rings, jeweled chalices, &amp; gold crosses</td>
                  <td className="py-2.5 px-3 sm:px-4">Cartagena de Indias</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$40,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Bronze Naval Cannon Battery</td>
                  <td className="py-2.5 px-3 sm:px-4">28 ornate bronze culverins bearing the arms of Philip IV</td>
                  <td className="py-2.5 px-3 sm:px-4">Royal Foundry of Seville</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$20,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Deep-Water Riddle of Saint-Tropez */}
      <BlogSection title="The Deep-Water Riddle of Saint-Tropez">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For centuries, the wreck of the Spanish galleon remained completely inaccessible. Unlike the shallow shoals of the Florida Keys where free-divers could salvage cannons and silver chests, the seabed along the French Riviera plunges into extreme submarine depths just a short distance from the cliffs.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In recent decades, marine archaeologists from France&apos;s prestigious <strong>DRASSM</strong> (<em>Département des recherches archéologiques subaquatiques et sous-marines</em>) and private deep-water survey teams have conducted sonar and magnetometer sweeps across the submarine canyons off Cape Camarat. These high-tech expeditions have mapped extensive ballast stone mounds, 17th-century Spanish ceramic olive jars, and iron cannon shot buried under layers of marine sediment.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Under strict French maritime heritage legislation, all shipwrecks in French territorial waters are protected archaeological monuments, prohibiting commercial salvage and unauthorized artifact recovery. Shrouded in the azure waters of the Mediterranean, the Sunken Galleon of the Azure Coast rests undisturbed on her rocky shelf—a timeless monument to the golden age of sail.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

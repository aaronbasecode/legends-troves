import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Wreck of the São João | Legends Troves',
  description: 'In June 1552, the great Portuguese treasure galleon São João struck the reefs of South Africa’s Wild Coast, scattering priceless Indian riches and triggering one of history’s most harrowing maritime survival tragedies.',
};

export default function TheWreckOfTheSaoJoaoPage() {
  return (
    <BlogLayout
      category="water"
      title="The Wreck of the São João"
      imageSrc="/images/the-wreck-of-the-sao-joao.jpg"
      imageAlt="The Portuguese galleon São João with a fractured mainmast helplessly battered by mountainous winter swells off the Cape of Storms"
    >
      {/* Section 1: The Pride of the Portuguese India Run */}
      <BlogSection title="The Pride of the Carreira da Índia (1552)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In February 1552, the great Portuguese four-masted galleon <strong>São João</strong> (<em>Galeão Grande São João</em>) weighed anchor from Cochin (modern-day Kochi, India), setting sail for Lisbon on the hazardous return leg of the <em>Carreira da Índia</em>. Commanded by the seasoned nobleman <strong>Manuel de Sousa Sepúlveda</strong>, former governor of the fortress of Diu, the vessel was one of the largest and most heavily armed merchant galleons ever constructed by the Portuguese Crown.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Aboard the galleon were over 600 people—including Manuel de Sousa&apos;s aristocratic wife, <strong>Dona Leonor de Sá</strong>, their young children, noble passengers, veteran sailors, and hundreds of enslaved African and Asian servants. Deep in its hold lay an extraordinary royal cargo of spices, gems, and bullion, valued at over one million gold cruzados—equivalent to tens of millions of dollars today.
        </p>
      </BlogSection>

      {/* Section 2: The Tempest of the Cape & The Reef at Port Edward */}
      <BlogSection title="The Tempest of the Cape &amp; Grounding on the Wild Coast">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          As the <em>São João</em> approached the southern tip of Africa—the notorious <em>Cabo das Tormentas</em> (Cape of Storms)—it was struck by a series of monstrous winter gales. For weeks, towering southwesterly seas battered the overloaded ship. First the mainmast fractured, then the heavy rudder was torn from its gudgeons, leaving the gargantuan vessel completely unmaneuverable in churning, mountainous swells.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Helplessly driven northward toward the rocky shoals of the Wild Coast near modern-day <strong>Port Edward</strong>, the galleon struck the submerged reefs on June 8, 1552, breaking apart in the thunderous surf:
        </p>
        <BlogList>
          <BlogListItem label="The Breaker Tragedy:">
            As the hull snapped against the rocks, over 100 crew and passengers drowned in the crashing foam while attempting to reach shore in the ship&apos;s longboat or clinging to shattered spars.
          </BlogListItem>
          <BlogListItem label="The Survivor Encampment:">
            Approximately 500 drenched survivors, including Manuel de Sousa and Dona Leonor, managed to drag themselves ashore onto the grassy knoll overlooking the wreck—a promontory remembered to this day as <em>Tragedy Hill</em>.
          </BlogListItem>
          <BlogListItem label="The Scattered Treasure:">
            The violent sea tore open the galleon&apos;s lower decks, washing chests of fine porcelain, pepper sacks, and gold jewelry into the coastal sands and rocky gullies between the Mtamvuna and Umtamvuna estuaries.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: The Staggering Cargo */}
      <BlogSection title="The Royal Freight: Spices, Porcelain, and Golconda Gems">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Contemporary manifests preserved in the royal archives of Lisbon illustrate the staggering wealth packed aboard the <em>São João</em>. It carried 7,500 quintals (hundredweights) of Malabar black pepper, bales of Persian silk and damask, thousands of pieces of delicate blue-and-white Chinese porcelain from the Jiajing reign of the Ming Dynasty, and an immense private hoard of uncut diamonds from Golconda, Ceylon rubies, and pearls.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Before abandoning the shattered hull, Manuel de Sousa&apos;s officers managed to salvage several small bags of the most precious gemstones, along with swords, cross-bows, and firearms, hoping to use them to barter their way across the African subcontinent.
        </p>
      </BlogSection>

      {/* Section 4: Documented Inventory Table */}
      <BlogSection title="Documented Cargo of the Galleon São João">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Historical records from the Portuguese India House (*Casa da Índia*) detail the principal cargo aboard the ill-fated flagship:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Cargo Classification</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Manifest Details</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Origin / Source</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Modern Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Malabar Black Pepper</td>
                  <td className="py-2.5 px-3 sm:px-4">7,500 quintals (~450 metric tons) in sealed burlap casks</td>
                  <td className="py-2.5 px-3 sm:px-4">Cochin &amp; Calicut, India</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$15,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Jiajing Ming Porcelain</td>
                  <td className="py-2.5 px-3 sm:px-4">Chests of blue-and-white imperial kraak ware, bowls, &amp; jars</td>
                  <td className="py-2.5 px-3 sm:px-4">Jingdezhen Kilns, China</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$25,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Precious Gemstones Hoard</td>
                  <td className="py-2.5 px-3 sm:px-4">Leather pouches of uncut Golconda diamonds, rubies, &amp; Ceylon pearls</td>
                  <td className="py-2.5 px-3 sm:px-4">Deccan Sultanates &amp; Sri Lanka</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$40,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Gold Cruzados &amp; Silver Patacas</td>
                  <td className="py-2.5 px-3 sm:px-4">Coinage chests containing Portuguese royal specie &amp; bullion</td>
                  <td className="py-2.5 px-3 sm:px-4">Goa &amp; Lisbon Mints</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$20,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Cast Bronze Naval Ordnance</td>
                  <td className="py-2.5 px-3 sm:px-4">Heavy bronze demi-culverins and carronades bearing Manueline crests</td>
                  <td className="py-2.5 px-3 sm:px-4">Royal Foundry, Lisbon</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$5,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Heartbreaking 1,000-Kilometer Death March */}
      <BlogSection title="The Tragic Death March &amp; A National Epic of Grief">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Stranded on an uncharted, hostile coastline with winter advancing, Manuel de Sousa made the fateful decision to lead the 500 survivors on a desperate 1,000-kilometer overland trek north toward the Portuguese trading station at Delagoa Bay (modern Maputo, Mozambique).
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The journey quickly devolved into one of the most agonizing human catastrophes in maritime history. Beset by malaria, starvation, and encounters with local tribes who gradually stripped the travelers of their arms, clothing, and remaining jewels, the expedition disintegrated. One by one, hundreds of men, women, and children collapsed along the riverbanks.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          In the tragic climax immortalized by Portugal&apos;s national poet <strong>Luís de Camões</strong> in <em>Os Lusíadas</em> and recorded in the chronicled <em>História Trágico-Marítima</em>, Dona Leonor, having had her last garments stripped by local warriors, dug a hole in the sand with her bare hands and buried herself up to her waist to hide her nakedness from her weeping husband and servants. Her young sons died of hunger in her arms, followed hours later by Dona Leonor herself. Crazed with inconsolable grief, Captain Manuel de Sousa Sepúlveda wandered deep into the African jungle and was never seen again. Of the 500 who had set out from Tragedy Hill, only <strong>twenty-one souls</strong> survived to reach Delagoa Bay.
        </p>
      </BlogSection>

      {/* Section 6: Modern Discoveries at São João Reef */}
      <BlogSection title="São João Reef: Modern Rediscovery on the Wild Coast">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For more than four centuries, the exact underwater grave of the <em>São João</em> remained a subject of intense maritime folklore. It was not until the late 20th century that the ocean began yielding physical proof of the disaster.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Following severe coastal storms in the 1980s, local divers and beachcombers near Port Edward discovered thousands of fragments of authentic 16th-century Chinese Ming Dynasty porcelain, carnelian beads, cowrie currency, bronze cannon fragments, and gold coins scattered along the rocky shelf now officially charted as <strong>São João Reef</strong>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Today, the site is recognized as South Africa&apos;s oldest documented European shipwreck. While coastal currents and shifting sandbanks continue to bury the bulk of the galleon&apos;s lower ballast and gold chests, the wreck of the <em>São João</em> endures as an immortal testament to the peril, glory, and heartbreak of the Age of Discovery.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

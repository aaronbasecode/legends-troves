import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Nuestra Señora de la Concepción | Legends Troves',
  description: 'Wrecked on the coral reefs of Saipan in 1638, the Manila galleon Nuestra Señora de la Concepción carried one of history’s richest cargoes of Chinese silk, Ming porcelain, and royal gold treasures destined for New Spain.',
};

export default function TheNuestraSenoraDeLaConcepcionPage() {
  return (
    <BlogLayout
      category="water"
      title="The Nuestra Señora de la Concepción"
      imageSrc="/images/the-nuestra-senora-de-la-concepcion.jpg"
      imageAlt="A magnificent 17th-century Spanish Manila galleon, the Nuestra Señora de la Concepción, sailing across tropical Pacific waters near coral reefs"
    >
      {/* Section 1: The Colossus of the Manila Galleon Trade */}
      <BlogSection title="The Colossus of the Manila Galleon Trade (1638)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For two and a half centuries (1565–1815), the legendary <strong>Manila Galleons</strong> (<em>Galeón de Manila</em>, also known as the <em>Nao de China</em>) maintained the world&apos;s first truly global trade network. Annually, these heavily armed floating fortresses undertook the perilous <strong>tornaviaje</strong>—an 8,000-to-10,000-mile trans-Pacific voyage from the Philippines to Acapulco in New Spain (Mexico), trading the raw silver of American mines for the dazzling luxury goods of imperial Asia.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Constructed at the royal shipyards of <strong>Cavite</strong> on Manila Bay, the <strong>Nuestra Señora de la Concepción</strong> was one of the largest and most magnificent vessels ever launched in the 17th-century world. Built from virtually indestructible Philippine tropical hardwoods—dense <em>molave</em>, iron-hard <em>lanang</em>, and rot-resistant teak—the galleon was an engineering titan measuring over 150 feet in length and displacing an immense 1,500 to 2,000 tons.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          In August 1638, the ship prepared to sail with a manifest of staggering proportions. Every available inch of hold space, passenger cabins, and even gun decks had been packed with precious contraband by wealthy Manila merchant syndicates, high-ranking royal officials, and religious orders seeking astronomical profits in the markets of Mexico City and Madrid.
        </p>
      </BlogSection>

      {/* Section 2: Nepotism, Insubordination, and the Pacific Typhoon */}
      <BlogSection title="Fatal Incompetence &amp; The Typhoon of the Marianas">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The disaster that doomed the <em>Concepción</em> was born of political arrogance and bitter division. The Governor-General of the Philippines, Don Sebastián Hurtado de Corcuera, bypassed veteran sea captains to appoint his inexperienced twenty-two-year-old nephew, <strong>Don Juan Francisco de Quirós</strong>, as Commander-General of the galleon.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The appointment ignited fierce resentment among the veteran pilots and officers. Factional disputes paralyzed command decisions, and warnings regarding severe top-heaviness and excessive cargo weight were ignored. The galleon was so severely overloaded that its lower gunports sat precariously close to the waterline.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          In mid-September 1638, while navigating east through the Mariana Islands (then charted by the Spanish as <em>Las Islas de los Ladrones</em>), the ship sailed directly into the path of a cataclysmic Pacific super-typhoon:
        </p>
        <BlogList>
          <BlogListItem label="Shattered Rigging &amp; Rudder:">
            Towering gale-force seas smashed over the weather deck. The monstrous strain tore the heavy tiller and fractured the rudder, leaving the enormous galleon without steerage amidst mountainous waves.
          </BlogListItem>
          <BlogListItem label="Dismasted in the Storm:">
            To prevent capsizing, crewmen hacked away the foremast and mainmast, which crashed into the churning ocean, dragging lines and canvas beneath the hull.
          </BlogListItem>
          <BlogListItem label="Helpless Drift toward Saipan:">
            With no propulsion and no rudder, the wallowing wreck drifted uncontrollably southwest for days, driven relentlessly toward the jagged volcanic shoals and submerged coral barriers of southern <strong>Saipan</strong>.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: Catastrophe at Agingan Point */}
      <BlogSection title="Catastrophe at Agingan Point (September 20, 1638)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the violent, torrential darkness before dawn on <strong>September 20, 1638</strong>, the screaming winds drove the <em>Concepción</em> onto the razor-sharp outer reef at <strong>Agingan Point</strong>, off the southern tip of Saipan.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The initial impact was catastrophic. The towering coral heads punched through the thick molave hull planking, snapping the central keel in two. Within minutes, the pounding surf pulverized the upper works, breaking the galleon apart and throwing approximately 400 passengers, soldiers, friars, and Asian crewmen into the boiling maelstrom.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          The harrowing aftermath is preserved in colonial archival depositions:
        </p>
        <BlogList>
          <BlogListItem label="Loss of Life:">
            Over 370 souls perished in the crushing surf or were smashed against the barrier reef. Fewer than thirty survivors—including Don Juan Francisco—managed to reach the beaches of Saipan alive.
          </BlogListItem>
          <BlogListItem label="Chamorro Encounter:">
            The indigenous Chamorro islanders captured the surviving castaways. While some were held in domestic servitude, several Spanish sailors were treated with compassion and integrated into local tribal families.
          </BlogListItem>
          <BlogListItem label="The Escape to Guam:">
            Months later, six resilient survivors persuaded Chamorro mariners to transport them aboard swift native outrigger praos across the channel to Rota and Guam. From there, they eventually secured passage back to Manila, delivering the chilling report of the galleon&apos;s destruction.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 4: Documented Cargo & Wealth of the Orient (Table) */}
      <BlogSection title="Documented Cargo of the Nuestra Señora de la Concepción">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Historical salvage manifests and modern archaeological excavations reveal the astonishing breadth of imperial Asian treasures packed into the galleon&apos;s hold:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Cargo Classification</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Craftsmanship &amp; Materials</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Origin</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Historical Valuation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">22k Gold Filigree Chains</td>
                  <td className="py-2.5 px-3 sm:px-4">Heavy loop-in-loop chains up to 5 feet long, dragon terminals, solid gold wire</td>
                  <td className="py-2.5 px-3 sm:px-4">Chinese goldsmiths in Parián of Manila</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless ($40,000,000+)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Gemstone-Encrusted Jewelry</td>
                  <td className="py-2.5 px-3 sm:px-4">Gold rings, brooches, and buttons set with Burmese rubies, Ceylon sapphires, diamonds</td>
                  <td className="py-2.5 px-3 sm:px-4">Mughal India, Burma, and Ceylon</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$25,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Imperial Ming Porcelain</td>
                  <td className="py-2.5 px-3 sm:px-4">Blue-and-white dishes, Kraak ware, wine cups, and massive stoneware storage jars</td>
                  <td className="py-2.5 px-3 sm:px-4">Jingdezhen kilns (Wanli &amp; Chongzhen eras)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$18,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Golden Scent Balls &amp; Reliquaries</td>
                  <td className="py-2.5 px-3 sm:px-4">Hollow pierced filigree pomanders for ambergris, diamond-set crucifixes</td>
                  <td className="py-2.5 px-3 sm:px-4">Spanish Manila Royal Workshops</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$12,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Oriental Silks, Damasks &amp; Spices</td>
                  <td className="py-2.5 px-3 sm:px-4">Bales of raw Chinese silk, gold-threaded tapestries, cloves, cinnamon, nutmeg</td>
                  <td className="py-2.5 px-3 sm:px-4">Guangzhou, Jiangnan &amp; the Spice Islands</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Estimated 4M Silver Pesos (1638)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: Chamorro Salvage and Colonial Legend */}
      <BlogSection title="Chamorro Salvage &amp; The Jesuit Accounts">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the weeks following the catastrophe, calm waters returned to Agingan Point. Free-diving into the shallow reef flats, the Chamorro islanders conducted the first historic salvage of the <em>Concepción</em>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          To the islanders, the most coveted treasures were not gold coins, but iron fasteners, bronze cannons, and ship spikes, which were expertly reforged into adzes, spears, and fishing hooks. However, the glittering gold jewelry quickly entered the local prestige economy:
        </p>
        <blockquote className="my-4 pl-4 border-l-4 border-[#D4AF37] italic text-sm sm:text-base text-[#2C2504]/95 bg-[#D8D1B6]/30 py-3 rounded-r-lg">
          &quot;When the first Jesuit fathers landed on Saipan three decades later, they found Chamorro chieftains wearing magnificent Spanish gold filigree chains wound multiple times around their waists, and golden reliquary pendants worn as tribal adornments.&quot;
          <span className="block mt-1 font-semibold not-italic text-xs sm:text-sm text-[#2C2504]/80">
            — Father Diego Luis de San Vitores, Apostolic Mission Chronicles (c. 1668)
          </span>
        </blockquote>
      </BlogSection>

      {/* Section 6: The 1987 Archaeological Rediscovery */}
      <BlogSection title="The 1987 Rediscovery: Unlocking the Reef's Secrets">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For nearly 350 years, the shattered bones of the <em>Nuestra Señora de la Concepción</em> lay hidden beneath twenty to thirty feet of surging Pacific foam, entombed in coral crevices off the southwest coast of Saipan.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In 1987, marine archaeologist <strong>William M. Mathers</strong> and his salvage team, Pacific Sea Resources, partnered with the government of the <strong>Commonwealth of the Northern Mariana Islands (CNMI)</strong> to conduct an extensive, scientifically documented excavation of Agingan Point. Working in treacherous high-energy surf, the expedition achieved one of the most stunning underwater archaeological recoveries in Pacific history:
        </p>
        <BlogList>
          <BlogListItem label="1,300+ Pieces of Royal Gold:">
            Divers recovered 156 exquisite, intact 22-karat gold chains, including one necklace measuring over five feet in length, made with thousands of interlocking handmade gold links.
          </BlogListItem>
          <BlogListItem label="Precious Gems &amp; Scent Balls:">
            The team excavated gold buttons encrusted with point-cut diamonds and rubies, intricate gold filigree combs set with seed pearls, and spherical pomanders designed to hold scented musk and ambergris.
          </BlogListItem>
          <BlogListItem label="Ming Dynastic Porcelain:">
            Thousands of intact bowls, plates, and pottery sherds from the late Ming Dynasty were painstakingly excavated from beneath dense coral concretions.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          Today, the crown jewels of the excavation are permanently exhibited at the <strong>CNMI Museum of History and Culture</strong> in Saipan, providing an awe-inspiring, tangible testament to the immense riches, craftsmanship, and perils of the historic Manila Galleon trade.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

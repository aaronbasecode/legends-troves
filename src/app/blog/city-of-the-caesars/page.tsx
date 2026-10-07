import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The City of the Caesars | Legends Troves',
  description: 'The legendary enchanted city of untold riches, supposedly founded by shipwrecked Spaniards in the remote Andean valleys of Patagonia.',
};

export default function CityOfTheCaesarsPage() {
  return (
    <BlogLayout
      category="land"
      title="The City of the Caesars"
      imageSrc="/images/the-city-of-the-caesars.jpg"
      imageAlt="The City of the Caesars with stone paved streets, residents dining on solid silver, and cathedrals crowned with pure gold crosses"
    >
      {/* Section 1: The Phantom of the Patagonian Andes */}
      <BlogSection title="The Phantom of the Patagonian Andes">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          While the conquistadors of northern South America bled and died in search of El Dorado, a different, equally mesmerizing obsession gripped the southern cone of the continent. For nearly three centuries, colonial governors, royal military commanders, and daring Jesuit missionaries mounted desperate expeditions into the wind-swept, glacier-carved wilderness of Patagonia in search of a mythical metropolis: <em>La Ciudad de los Césares</em>—The City of the Caesars.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Also whispered in indigenous folklore as <em>Trapalanda</em>, <em>Lin Lin</em>, or simply <em>La Ciudad Encantada</em> (The Enchanted City), it was described as an impregnable European-style fortress nestled between granite peaks and azure alpine lakes. Its residents were said to walk paved streets of stone, eat from dishes of solid silver, and worship in cathedrals topped with gleaming crosses of pure gold.
        </p>
      </BlogSection>

      {/* Section 2: The 1528 March of Francisco César */}
      <BlogSection title="The 1528 March of Captain Francisco César">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The legend owes its name to Captain Francisco César, a Spanish officer under the Italian-born explorer Sebastian Cabot. In 1528, while stationed at the fledgling settlement of Sancti Spiritus along the Paraná River in modern Argentina, Cabot dispatched César and fourteen armed companions on a reconnaissance mission into the uncharted western pampas.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Months passed, and the men were given up for dead. Yet against all odds, César and a handful of survivors staggered back to the fort. César gave a breathless deposition: he claimed that far to the southwest, nestled in fertile Andean foothills, they had been welcomed into a thriving, heavily fortified realm where the inhabitants wore golden torcs, traded finely woven textiles, and possessed mountains of silver ore. The account—soon dubbed <em>los Césares de Francisco César</em>—sparked an inferno of speculation across the Spanish Empire.
        </p>
      </BlogSection>

      {/* Section 3: The Castaways of the Bishop of Plasencia (1540) */}
      <BlogSection title="The Castaways of the Strait of Magellan (1540)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Over the decades that followed, historical catastrophes supplied fresh fuel to the growing legend. In 1540, a four-ship armada outfitted by the Bishop of Plasencia (Don Gutierre de Vargas Carvajal) attempted to conquer and colonize the stormy Strait of Magellan. A violent Antarctic tempest shattered the flagship against the rocky shores of southern Patagonia.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          While two ships escaped back into the Atlantic, over 150 Spanish soldiers, mariners, and women were marooned on the desolate shores under the command of Francisco de la Rivera. Armed with salvaged matchlocks and provisions, the castaways marched inland into the impenetrable cordillera, disappearing from the civilized world. When rescue ships returned months later, they found only abandoned camps and cryptic carved trees. For centuries, Spanish officials believed Rivera&apos;s company had survived, intermarried, and constructed an isolated colony deep within an inaccessible Andean valley.
        </p>
      </BlogSection>

      {/* Section 4: The Fall of Osorno and the Refugee Exodus (1598) */}
      <BlogSection title="The Fall of Osorno and the Hidden Refuge">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In 1598, the indigenous Mapuche launched the monumental uprising known as the Disaster of Curalaba, destroying the &ldquo;Seven Cities&rdquo; of southern Chile. When the Spanish stronghold of Osorno fell after a heroic six-month siege, surviving colonial families, priests, and garrison soldiers fled eastward across the Andes through high volcanic passes.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          They carried with them everything they could salvage: sacred golden church tabernacles, silver altar candelabras, and the bronze bells of their chapels. According to persistent colonial lore, these refugees reached the legendary valley of the Césares, uniting with the descendants of Rivera&apos;s castaways to establish an eternal, self-sustaining mountain refuge cut off from the tumultuous outside world.
        </p>
      </BlogSection>

      {/* Section 5: The Folklore of the Enchanted City */}
      <BlogSection title="The Lore of the Enchanted Fortress">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          By the 18th century, accounts from indigenous guides, wandering trappers, and captive accounts painted an extraordinary portrait of the city:
        </p>
        <BlogList>
          <BlogListItem label="The Golden Bell of Trapalanda:">
            Patagonian hunters claimed that on calm, frosty mornings, the deep resonance of massive bronze and silver church bells could be heard echoing off mountain glaciers for leagues around.
          </BlogListItem>
          <BlogListItem label="The Shroud of Invisibility:">
            Local folklore held that the city was enchanted: dense mountain fogs and disorienting winds hid its drawbridges from those who sought it with greed or armies, revealing its walls only to weary travelers lost in the snow.
          </BlogListItem>
          <BlogListItem label="The Ancient Sentinels:">
            Reports claimed the battlements were patrolled by tall, fair-skinned sentries clad in 16th-century Spanish breastplates and helmets, armed with antiquated arquebuses.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 6: Historical Expeditions Timeline Table */}
      <BlogSection title="Major Expeditions in Search of the Césares">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Governors of Chile and the Viceroyalty of Peru took the existence of the city with absolute seriousness, financing extensive expeditions into the harsh southern frontier:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Years</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Expedition Leader</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Route / Region</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Documented Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1528</td>
                  <td className="py-2.5 px-3 sm:px-4">Francisco César</td>
                  <td className="py-2.5 px-3 sm:px-4">Río de la Plata into the western Pampas</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Returned with reports of a wealthy silver-rich civilization, birthing the legend.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1540</td>
                  <td className="py-2.5 px-3 sm:px-4">Francisco de la Rivera</td>
                  <td className="py-2.5 px-3 sm:px-4">Strait of Magellan into southern Andes</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Shipwrecked with 150 survivors; vanished into Patagonia, inspiring the castaway myth.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1621–1622</td>
                  <td className="py-2.5 px-3 sm:px-4">Jerónimo Luis de Cabrera</td>
                  <td className="py-2.5 px-3 sm:px-4">Córdoba across the Pampas to Neuquén</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Led 500 soldiers into northern Patagonia; forced to retreat due to winter blizzards.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1670–1673</td>
                  <td className="py-2.5 px-3 sm:px-4">Father Nicolás Mascardi, S.J.</td>
                  <td className="py-2.5 px-3 sm:px-4">Chiloé to Lake Nahuel Huapi</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Founded missions around Lake Nahuel Huapi while searching for the city; martyred in 1673.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1707–1714</td>
                  <td className="py-2.5 px-3 sm:px-4">Silvestre Antonio de Roxas</td>
                  <td className="py-2.5 px-3 sm:px-4">Buenos Aires to the Patagonian Cordillera</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Published a celebrated guide giving exact landmarks, passes, and lake coordinates.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1774–1779</td>
                  <td className="py-2.5 px-3 sm:px-4">Governor Agustín de Jáuregui</td>
                  <td className="py-2.5 px-3 sm:px-4">Valdivia and the Lake District</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Final royal military expedition ordered by the Spanish Crown; mapped vast uncharted cordilleras.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 7: The Enduring Legacy of Trapalanda */}
      <BlogSection title="The Enduring Legacy of Trapalanda">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Was the City of the Caesars merely a collective illusion born of European wishful thinking? In reality, it was a tapestry woven from true historical fragments: real castaways stranded at the end of the earth, real refugees who fled into the Andean passes after the fall of Osorno, and the sophisticated Mapuche and Tehuelche trading networks that spanned both sides of the southern cordillera.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          While no golden city ever opened its gates to the weary explorers, the quest for the Césares served a profound historical purpose. It drove the exploration, cartography, and understanding of one of the wildest and most majestic landscapes on Earth. To this day, as the wind howls across the icy summits of Patagonia and mist curls over Lake Nahuel Huapi, travelers can easily understand how an enchanted city of silver and stone could hide forever in the great southern silence.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

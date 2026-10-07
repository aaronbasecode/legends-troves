import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'El Dorado, the Lost City of Gold | Legends Troves',
  description: 'The captivating true history, myths, and expeditions behind El Dorado—from the sacred gilded chieftain of Lake Guatavita to the lost golden civilizations of the Amazon.',
};

export default function ElDoradoPage() {
  return (
    <BlogLayout
      category="land"
      title="El Dorado, the Lost City of Gold"
      imageSrc="/images/the-el-dorado.jpg"
      imageAlt="El Dorado sacred coronation ritual with the Gilded Chieftain and priests on a ceremonial golden boat in Lake Guatavita"
    >
      {/* Section 1: The Gilded Man */}
      <BlogSection title="The Origin: El Hombre Dorado (The Gilded Man)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Before El Dorado became a mythical city of golden towers and paved streets, it was not a place at all—it was a living person. Deep in the high Andes of modern-day Colombia, the indigenous Muisca civilization practiced a sacred coronation ceremony that would forever alter the history of world exploration.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Whenever a new chieftain—known as the <em>Zipa</em>—assumed leadership, he was stripped bare and coated from head to toe in sticky plant resin before being dusted entirely in fine gold powder. Transformed into <em>El Hombre Dorado</em> (The Gilded Man), he boarded a ceremonial reed raft heaped with gold figurines, emeralds, and precious offerings. Accompanied by four high priests, the golden ruler drifted into the exact center of circular, emerald-green Lake Guatavita. As thousands of spectators chanted along the volcanic crater rim, the chieftain plunged into the icy waters, washing the gold dust from his skin as an offering to the goddess of the lake, while his subjects hurled ornaments of hammered gold into the depths.
        </p>
      </BlogSection>

      {/* Section 2: From Sacred Ritual to Golden Mirage */}
      <BlogSection title="From Sacred Ritual to Golden Mirage">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          When Spanish conquistador Gonzalo Jiménez de Quesada marched into Muisca territory in 1537, he found exquisite gold artifacts and emeralds, but he also heard whispered rumors of the gilded ritual at Lake Guatavita. To the gold-obsessed Europeans who had already plundered the Aztec and Incan empires, a single ritual was not enough.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          In the minds of the conquistadors, the tale expanded rapidly into an intoxicating fantasy: if one chieftain could cover himself in gold for a single afternoon, surely there existed an entire kingdom where gold was as common as common stone. Indigenous peoples quickly learned that telling the Spaniards of fabulous golden cities lying just beyond the next mountain range or river bend was the most effective way to lure the brutal conquerors away from their own villages. Thus, <em>El Dorado</em> mutated from a gilded man into a phantom golden metropolis—often called <strong>Manoa</strong>—hidden somewhere in the impenetrable, uncharted Amazon rainforest.
        </p>
      </BlogSection>

      {/* Section 3: The Deadly Treks of Pizarro and Orellana */}
      <BlogSection title="The Amazonian Catastrophe: Pizarro & Orellana (1541)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In February 1541, Gonzalo Pizarro, half-brother of the conqueror of the Incas, gathered an army of 220 Spanish soldiers and over 4,000 indigenous porters in Quito. Armed with warhorses, attack mastiffs, and herds of llamas, Pizarro marched east across the freezing Andean glaciers in search of the &ldquo;Land of Cinnamon&rdquo; and the golden kingdom of El Dorado.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The expedition descended into the sweltering, trackless Amazon lowlands, where relentless torrential downpours rotted their clothes, rusted their armor, and drowned their supply trains. Struck by starvation, venomous snakes, and malaria, hundreds perished. Desperate for food, Pizarro dispatched his second-in-command, Francisco de Orellana, with fifty-seven men aboard a makeshift brigantine down the Coca and Napo rivers to forage for supplies and return.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          The furious currents made returning upstream impossible. Orellana was carried uncontrollably downstream, ultimately navigating the entire 4,000-mile length of the mighty Amazon River to the Atlantic Ocean. Orellana reported seeing vast riverside cities, paved highways, and fierce warrior women reminiscent of Greek Amazons, but the city of gold remained an elusive ghost.
        </p>
      </BlogSection>

      {/* Section 4: Sir Walter Raleigh and Lake Parime */}
      <BlogSection title="Sir Walter Raleigh and the Phantom Lake Parime">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The obsession with El Dorado was not confined to Spain. In 1595, Sir Walter Raleigh, the dashing courtier of Queen Elizabeth I, set sail for the Guiana Highlands of northern South America. Sailing up the labyrinthine waterways of the Orinoco River, Raleigh claimed to have found the threshold of El Dorado, identifying it as the city of <strong>Manoa</strong> located on the shores of a colossal inland sea called <strong>Lake Parime</strong>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Raleigh published his bestseller <em>The Discovery of the Large, Rich, and Beautiful Empire of Guiana</em>, igniting a century of European cartographic fiction. For over two hundred years, prestigious European mapmakers dutifully drew Lake Parime and the golden city of Manoa across South American maps:
        </p>
        <BlogList>
          <BlogListItem label="The Mirage of the Savanna:">
            Geographers eventually discovered that Lake Parime was a seasonal illusion caused by the torrential flooding of the Rupununi savanna during the rainy season.
          </BlogListItem>
          <BlogListItem label="The Cost of Obsession:">
            In 1617, King James I released Raleigh from prison to lead a second expedition to find El Dorado, on the strict condition that he not attack Spanish settlements. Raleigh&apos;s son was killed in an unsanctioned clash with Spanish troops, and Raleigh returned to England empty-handed, where he was beheaded at the Tower of London to appease the Spanish ambassador.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 5: The Drainage of Lake Guatavita */}
      <BlogSection title="The Desperate Drainage of Lake Guatavita">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          While armies vanished in the Amazon jungle chasing golden cities, the original birthplace of the legend—Lake Guatavita—lay high in the Andes, tempting treasure hunters to simply drain the water and claim the accumulated offerings of centuries.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In 1580, a wealthy merchant from Bogotá named Antonio de Sepúlveda cut a massive V-shaped notch into the mountain rim using thousands of native laborers. The water level plunged by over sixty feet, exposing the mud banks where Sepúlveda recovered breastplates of pure gold, golden serpents, and a magnificent emerald the size of a hen&apos;s egg. Before he could reach the center, the steep clay banks gave way, triggering a catastrophic mudslide that killed scores of workers and plugged the drainage cut.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          In 1898, British investors formed the Lake Guatavita Company and bored a subterranean drainage tunnel with steam-powered drills, completely emptying the lake. Yet triumph turned into disaster: the exposed lake bottom was an impassable swamp of liquid mud over ten feet deep. Within hours, the fierce Andean sun baked the mud into concrete-like rock, locking any gold firmly underneath. Before heavy excavation equipment could be brought in, the mud dried, cracked, and sealed the drainage valves, allowing groundwater to refill the lake. In 1965, Colombia officially outlawed all salvage at Lake Guatavita, designating it an untouchable national heritage site.
        </p>
      </BlogSection>

      {/* Section 6: Historical Expeditions Timeline Table */}
      <BlogSection title="Notable Historical Quests for El Dorado">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Across nearly four centuries, thousands of lives and immense fortunes were sacrificed in pursuit of the golden mirage:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Years</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Expedition Leader</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Target Region</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Historical Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1536–1539</td>
                  <td className="py-2.5 px-3 sm:px-4">Gonzalo Jiménez de Quesada</td>
                  <td className="py-2.5 px-3 sm:px-4">Highlands of Cundinamarca (Colombia)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Conquered the Muisca; discovered the Lake Guatavita ceremony.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1541–1542</td>
                  <td className="py-2.5 px-3 sm:px-4">Gonzalo Pizarro & Orellana</td>
                  <td className="py-2.5 px-3 sm:px-4">Eastern Andes to Amazon River</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Thousands died; Orellana accidentally navigated the entire Amazon.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1560–1561</td>
                  <td className="py-2.5 px-3 sm:px-4">Pedro de Ursúa & Lope de Aguirre</td>
                  <td className="py-2.5 px-3 sm:px-4">Marañón & Huallaga Rivers</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Aguirre mutinied, murdered Ursúa, and declared war on the King of Spain.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1580</td>
                  <td className="py-2.5 px-3 sm:px-4">Antonio de Sepúlveda</td>
                  <td className="py-2.5 px-3 sm:px-4">Lake Guatavita Crater</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Partial drainage recovered gold artifacts before a deadly mudslide.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1595, 1617</td>
                  <td className="py-2.5 px-3 sm:px-4">Sir Walter Raleigh</td>
                  <td className="py-2.5 px-3 sm:px-4">Orinoco Basin / Guiana Highlands</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Promoted the myth of Lake Parime; executed after disastrous second voyage.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1898–1901</td>
                  <td className="py-2.5 px-3 sm:px-4">Contract Lake Guatavita Co.</td>
                  <td className="py-2.5 px-3 sm:px-4">Lake Guatavita (Colombia)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Drained the lake with steam pumps; exposed mud baked hard before salvage.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 7: The Modern Archaeological Truth */}
      <BlogSection title="The Truth Revealed by the Jungle Canopy">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Did El Dorado ever truly exist? In recent years, high-resolution aerial LiDAR (Light Detection and Ranging) and satellite scans have stripped away centuries of thick Amazon vegetation to reveal astonishing secrets.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Archaeologists working in the Upper Xingu and the Llanos de Moxos have uncovered evidence of monumental, interconnected garden cities with advanced moat fortifications, sunken plaza complexes, engineered canals, and raised agricultural causeways dating from 800 to 1400 CE. These sophisticated civilizations supported hundreds of thousands of people before Old World pathogens decimated their populations shortly after European contact.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          While the gold-plated skyscrapers and gem-strewn streets envisioned by greedy conquistadors were a feverish European myth, the sophisticated, monumental civilizations of the Amazon and the sacred golden artistry of the Muisca were very real. El Dorado remains history&apos;s ultimate lesson in the power of legend—a golden mirage that drove men to the ends of the earth and forever redrew the map of the Americas.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

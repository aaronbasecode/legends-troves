import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'Treasure of the Trinity | Legends Troves',
  description: 'The legendary pirate hoard of Incan gold, cathedral jewels, and silver ingots buried on the remote volcanic outpost of Ilha da Trindade in the South Atlantic.',
};

export default function TreasureOfTheTrinityPage() {
  return (
    <BlogLayout
      category="land"
      title="Treasure of the Trinity"
      imageSrc="/images/treasure-of-the-trinity.jpg"
      imageAlt="Pirates burying the Treasure of the Trinity on the volcanic shores of Ilha da Trindade"
    >
      {/* Section 1: The Ghost Isle of the South Atlantic */}
      <BlogSection title="The Ghost Isle of the South Atlantic">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Rising like a jagged fortress from the deep abyss of the South Atlantic, <strong>Ilha da Trindade</strong> (Trindade Island) lies more than 700 miles east of the Brazilian coastline. For centuries, this desolate volcanic rock was known to mariners as one of the loneliest and most inhospitable places on Earth. Crowned by razor-thin basalt spires, crumbling red peaks, and sheer sea cliffs battered by relentless oceanic swells, it offered neither safe anchorage nor easy retreat.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Discovered in 1502 by Portuguese navigator João da Nova, the island remained largely uninhabited, visited only by whalers, wandering sea turtles, and desperate outlaws seeking sanctuary from the naval powers of the Atlantic. It was precisely this forbidding isolation that made Trindade the ultimate destination for one of the largest and most mysterious pirate troves ever amassed: the <strong>Treasure of the Trinity</strong>.
        </p>
      </BlogSection>

      {/* Section 2: Plunder of the Andes & Benito Bonito */}
      <BlogSection title="The Plunder of the Andes and Benito Bonito">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The roots of the legend reach back to the turbulent 1820s, during the climax of the South American wars of independence. As Spanish authority dissolved across Peru and the Pacific seaboard, Royalist governors and wealthy colonial grandees scrambled to evacuate centuries of accumulated wealth—including priceless gold relics stripped from Incan shrines and ecclesiastical ornaments belonging to coastal cathedrals.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          According to maritime lore, a substantial portion of this loot fell into the clutches of the infamous privateer turned pirate, <strong>Benito Bonito</strong>—known across the Spanish Main as <em>&quot;The Pirate of the Bloody Cross.&quot;</em> After intercepting heavily laden treasure galleons bound for Spain, Bonito found his vessel groaning under a fortune that European monarchs would wage wars to recover. With British and Portuguese warships combing the high seas to hunt him down, Bonito steered his ship into the remote South Atlantic, seeking a hiding place so treacherous that no pursuer would dare follow.
        </p>
      </BlogSection>

      {/* Section 3: The Midnight Cache Beneath the Sugarloaf */}
      <BlogSection title="The Midnight Cache Beneath the Sugarloaf">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In late 1821, Bonito dropped anchor in the surging surf off Trindade&apos;s eastern shore, in the vicinity of what sailors called the <em>Enseada dos Portugueses</em>. Guided by the eerie silhouette of the island&apos;s volcanic monolith—a 1,000-foot volcanic plug known as the <em>Pão de Açúcar</em> (Sugarloaf)—the pirates lowered longboats into the roaring breakers.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Working under the cover of darkness to prevent mutiny among the lower deck, Bonito and a sworn cadre of lieutenants carried iron-bound chests and raw canvas sacks deep into an inland ravine. According to later testimonies, the hoard was stowed within a natural cavern carved into the volcanic basalt:
        </p>
        <BlogList>
          <BlogListItem label="The Cathedral Cavern:">
            A volcanic grotto situated near the base of the Sugarloaf pinnacle, concealed behind a narrow cleft in the rock face.
          </BlogListItem>
          <BlogListItem label="The Blasted Entrance:">
            To ensure the treasure could not be disturbed, Bonito detonated kegs of black gunpowder, triggering a massive collapse of basalt boulders and volcanic scree over the mouth of the cave.
          </BlogListItem>
          <BlogListItem label="The Hidden Bearings:">
            Cryptic markers—including a chisel-cut cross and precise alignments linking the Sugarloaf summit to a distinctive sea arch—were etched into nearby volcanic stone.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 4: Documented Inventory */}
      <BlogSection title="Estimated Inventory of the Trinity Hoard">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Surviving testimonies, naval court records, and treasure documents recovered from pirate crew members provide an astonishing portrait of the wealth concealed on the island:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[520px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Hoard Item</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Quantity / Description</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Origin / Provenance</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Modern Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Incan Ceremonial Gold & Sun Discs</td>
                  <td className="py-2.5 px-3 sm:px-4">Hand-hammered gold plaques, masks, and sacred idols</td>
                  <td className="py-2.5 px-3 sm:px-4">Andean Temples & Vaults</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$45,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Spanish Gold Doubloons & Escudos</td>
                  <td className="py-2.5 px-3 sm:px-4">Over 200,000 minted gold coins packed in iron chests</td>
                  <td className="py-2.5 px-3 sm:px-4">Lima & Potosí Mints</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$80,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Ecclesiastical Relics & Golden Chalices</td>
                  <td className="py-2.5 px-3 sm:px-4">Monstrances, jeweled crosses, and solid gold candelabras</td>
                  <td className="py-2.5 px-3 sm:px-4">Cathedrals of the Pacific Coast</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$30,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Refined Silver Bullion Bars</td>
                  <td className="py-2.5 px-3 sm:px-4">Over 800 stamped bars of solid Cerro Rico silver</td>
                  <td className="py-2.5 px-3 sm:px-4">Potosí Silver Mines</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$25,000,000</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Chests of Uncut Emeralds & Diamonds</td>
                  <td className="py-2.5 px-3 sm:px-4">Three copper caskets brimming with untreated gems</td>
                  <td className="py-2.5 px-3 sm:px-4">Muzo Mines & Brazilian Goldfields</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$35,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Newcastle Confession & The Pirates' Map */}
      <BlogSection title="The Newcastle Confession and the Pirates' Map">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Bonito never returned to enjoy his spoils. Trapped by a British frigate in the Caribbean, he was captured and brought to trial, paying for his piracy on the gallows. But the secret of Trindade did not perish with him.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Decades later, in the 1850s, a gravely ill mariner lay in a workhouse hospital in Newcastle, England. On his deathbed, the old sailor revealed that he had served aboard Bonito&apos;s flagship and was one of the few men who personally helped transport the chests into Trindade&apos;s ravines. In gratitude for medical care, he gave his attendant a weathered parchment map detailing the bearings from the Sugarloaf rock, warning that only someone who knew the exact landmarks could ever find the entrance through the shifting volcanic scree.
        </p>
      </BlogSection>

      {/* Section 6: The Famous Voyage of the Alerte (1889) */}
      <BlogSection title="The Voyage of the Alerte (1889)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The Newcastle map eventually found its way into the hands of <strong>Edward Frederick Knight</strong>, a prominent British barrister, war correspondent, and experienced yachtsman. Convinced of the map&apos;s authenticity, Knight purchased a 56-ton cutter yacht named the <em>Alerte</em>, assembled a crew of adventurous gentlemen and veteran sailors, and set sail from Southampton in 1889 on what would become the most celebrated treasure expedition in South Atlantic history.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Upon arriving at Trindade, Knight and his companions encountered a living nightmare. The volcanic terrain was in a state of constant, violent erosion. The crew battled scorching heat, swarms of aggressive land crabs that devoured their supplies, torrential deluges, and deadly rockfalls that sent multi-ton boulders hurtling through their campsites.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          For three grueling months, Knight&apos;s team dug massive trenches into the ravine beneath the Sugarloaf. They uncovered man-made retaining walls, traces of earlier excavation attempts, and ash layers from old pirate campfires—proof positive that someone had worked the ravine decades prior. However, a catastrophic landslide had brought down the entire face of the cliff, burying the suspected grotto beneath tens of thousands of tons of basalt rubble. Exhausted and with the <em>Alerte</em> battered by offshore gales, Knight called off the hunt. His bestselling 1890 chronicle, <em>The Cruise of the Alerte</em>, immortalized the Treasure of the Trinity for generations of treasure hunters.
        </p>
      </BlogSection>

      {/* Section 7: Modern Fortress and Preserved Secrets */}
      <BlogSection title="A Militarized Sanctuary: The Island Today">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the 20th century, Brazil asserted undisputed sovereignty over the archipelago. In 1957, the Brazilian Navy established the permanent <em>Posto Oceanográfico da Ilha da Trindade</em> (POIT), maintaining a continuous scientific and military garrison on the wind-lashed shores.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Today, Ilha da Trindade is recognized as one of the Atlantic&apos;s most vital ecological sanctuaries—a major nesting ground for endangered green sea turtles (<em>Chelonia mydas</em>) and home to rare endemic seabirds found nowhere else on Earth. Civilian access is strictly controlled, and all unauthorized expeditions, excavations, and metal detectors are strictly outlawed under Brazilian maritime law and environmental treaties.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Guarded by the Brazilian Navy, pounding South Atlantic breakers, and millions of tons of impenetrable volcanic basalt, the legendary Treasure of the Trinity remains undisturbed—a glittering fortune entombed in nature&apos;s most formidable vault.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: "King John's Crown Jewels | Legends Troves",
  description: "In October 1216, King John of England lost his entire royal baggage train and the ancient Crown Jewels to the rushing tides of The Wash estuary. Eight centuries later, the treasure remains lost.",
};

export default function KingJohnsCrownJewelsPage() {
  return (
    <BlogLayout
      category="water"
      title="King John's Crown Jewels"
      imageSrc="/images/king-johns-crown-jewels.jpg"
      imageAlt="King John's royal baggage train caught in the rising tides of The Wash estuary in 1216"
    >
      {/* Section 1: The Fateful Crossing of The Wash */}
      <BlogSection title="The Disaster at The Wash (October 1216)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the bleak autumn of 1216, the kingdom of England was in the grip of civil war. The First Barons&apos; War raged across the realm, with rebellious English lords offering the throne to Prince Louis of France, whose forces had occupied London and southern England. Brooding, paranoid, and violently unpredictable, <strong>King John</strong>—the monarch forced to sign the Magna Carta just one year earlier—was frantically campaigning across the East Midlands to defend his besieged fortresses.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          On October 11, 1216, John departed the prosperous port of Bishop&apos;s Lynn (modern King&apos;s Lynn) in Norfolk, where he had assembled his entire royal household. Fearing that his enemies might capture his personal fortune, the king traveled with everything he owned: the ancient coronation regalia of England, centuries of dynastic jewels, the royal treasury of silver coin, and sacred holy relics. Their destination was Lincoln Castle, which remained loyal to the Crown.
        </p>
      </BlogSection>

      {/* Section 2: The Deadly Shortcut and the Tidal Surge */}
      <BlogSection title="The Treacherous Shortcut and the Swallowing Mud">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Between Norfolk and Lincolnshire lay <strong>The Wash</strong>, a vast, desolate estuary where the North Sea met four major river systems. At low tide, miles of glistening sandbanks and mudflats emerged, tempting travelers with a shortcut that could shave a full day of travel off the difficult overland trek through Wisbech.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          King John, already suffering from acute dysentery, took the slower, safer route along the high inland roads. However, his colossal baggage train—a lumbering convoy of heavy ox-drawn wagons, packhorses, armored knights, and royal servants stretching nearly a mile in length—was ordered across the tidal estuary between Cross Keys and Sutton Bridge.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          The decision was fatal. In 1216, the estuary of the River Wellstream (the ancient course of the River Nene) was a maze of deep tidal channels, shifting quicksands, and violent tidal bores. As the heavily laden wagons reached the center of the sands, the tide turned with catastrophic speed. The water surged in from the North Sea, turning the firm sand into liquefying slurry. Oxen and horses foundered in the mud, unable to drag the waterlogged carts. As panic swept the convoy, whirlpools and tidal currents overturned the wagons, dragging men, horses, and the royal regalia into the deep, churning waters.
        </p>
      </BlogSection>

      {/* Section 3: The Lost Regalia of England */}
      <BlogSection title="The Lost Regalia of the Plantagenets">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Contemporary medieval chronicler Roger of Wendover described the scene with horror: <em>&quot;The ground opened up in the midst of the waves, and bottomless whirlpools swallowed men and horses, arms, tents, and all the precious objects which the king had brought with him.&quot;</em>
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          The inventory lost that morning was not merely gold—it was the visual authority of the English crown itself:
        </p>
        <BlogList>
          <BlogListItem label="The Coronation Regalia:">
            The ancient imperial crown of the Empress Matilda, the ceremonial coronation crowns of William the Conqueror and Henry II, golden scepters, the Rod of Mercy, and golden spurs.
          </BlogListItem>
          <BlogListItem label="The Holy Relic of the True Cross:">
            The revered <em>Crux Gualteri</em>, a relic said to contain a piece of the True Cross, encased in gold and encrusted with sapphires and pearls.
          </BlogListItem>
          <BlogListItem label="The Royal Treasury:">
            Dozens of iron-strapped oak chests filled with over 250,000 silver pennies and bullion collected from monastery ransoms and royal taxation.
          </BlogListItem>
          <BlogListItem label="Dynastic Plate and Jewels:">
            Magnificent jeweled drinking horns, solid gold altar chalices, enameled reliquaries, and the private jewelry collections of the royal family.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 4: Documented Inventory Table */}
      <BlogSection title="Estimated Inventory of King John's Lost Baggage Train">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Surviving Exchequer rolls, Pipe Rolls, and royal inventories from King John&apos;s reign detail the immense collection of royal heirlooms lost to the tide:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Treasure Component</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Description</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Historical Origin</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Modern Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Imperial Crowns &amp; Regalia</td>
                  <td className="py-2.5 px-3 sm:px-4">Empress Matilda&apos;s crown, ceremonial orbs &amp; scepters</td>
                  <td className="py-2.5 px-3 sm:px-4">Norman &amp; Saxon Kings of England</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$120,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The True Cross Relic</td>
                  <td className="py-2.5 px-3 sm:px-4">Gold reliquary containing holy wood, set with gems</td>
                  <td className="py-2.5 px-3 sm:px-4">Royal Chapel at Westminster</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless ($50M+)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Royal Exchequer Coinage</td>
                  <td className="py-2.5 px-3 sm:px-4">Over 250,000 minted silver pennies in iron coffers</td>
                  <td className="py-2.5 px-3 sm:px-4">Royal Mints of London &amp; Winchester</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$45,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Gold Altar Plate &amp; Goblets</td>
                  <td className="py-2.5 px-3 sm:px-4">Solid gold chalices, basins, and jeweled drinking horns</td>
                  <td className="py-2.5 px-3 sm:px-4">Crown Estate &amp; Monastic Trophies</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$35,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The Great Wardrobe &amp; State Seals</td>
                  <td className="py-2.5 px-3 sm:px-4">Embroidered coronation robes, tapestries, Great Seal</td>
                  <td className="py-2.5 px-3 sm:px-4">Chancery of England</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$20,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Death of King John */}
      <BlogSection title="The Death of a Broken King">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          When messengers reached King John with news that his entire baggage train had been swallowed by the sea, the shock broke his spirit. Already severely ill with dysentery—famously aggravated by what chroniclers claimed was a &quot;surfeit of peaches and new cider&quot;—the king collapsed at Swineshead Abbey.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Carried on a litter to Newark Castle in Nottinghamshire, King John died during a raging midnight storm on October 18/19, 1216, at the age of forty-nine. His death abruptly transformed the civil war: with the despised king dead, the rebellious barons abandoned Prince Louis and rallied behind John&apos;s nine-year-old son, Henry III.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          When the young Henry was hurriedly crowned at Gloucester Cathedral on October 28, 1216, there was no coronation crown left in England. The boy king was invested with a modest gold circlet or torque borrowed from his mother, Queen Isabella—stark testimony to the total loss of the realm&apos;s royal treasury in the mud of The Wash.
        </p>
      </BlogSection>

      {/* Section 6: Eight Centuries of Searching the Fens */}
      <BlogSection title="Eight Centuries of Searching the Fenland">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For eight hundred years, King John&apos;s lost treasure has tantalized historians and treasure hunters. Yet the primary reason the baggage train has never been found is that the landscape itself has undergone a profound transformation.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Since the 13th century, centuries of natural silting combined with monumental drainage and land-reclamation projects (begun by Dutch engineers in the 17th century) pushed the coastline of The Wash miles to the north. The ancient tidal estuary where the baggage train sank is no longer underwater—it is now dry, fertile farmland buried beneath twenty to forty feet of dense silt, clay, and peat!
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Geologists and archaeologists believe the carts lie buried in the fens somewhere between Walpole Cross Keys, Sutton Bridge, and Long Sutton. In recent years, researchers equipped with LiDAR, ground-penetrating radar (GPR), and deep-earth magnetometers have identified subsurface anomalies matching the orientation of ancient medieval riverbeds. Somewhere deep within the quiet agricultural fields of Norfolk and Lincolnshire, the ancient crown of the Plantagenets rests undisturbed in its dark, muddy grave.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

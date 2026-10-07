import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Treasure of the Knights Templar | Legends Troves',
  description: 'On Friday the 13th in 1307, King Philip IV raided the Knights Templar, but their central treasury had vanished from Paris. Seven centuries later, the lost hoard remains one of history’s greatest riddles.',
};

export default function TreasureOfTheKnightsTemplarPage() {
  return (
    <BlogLayout
      category="land"
      title="The Treasure of the Knights Templar"
      imageSrc="/images/treasure-of-the-knights-templar.jpg"
      imageAlt="Knights Templar secretly loading wagons with their gold treasure and sacred relics outside the Temple of Paris in October 1307"
    >
      {/* Section 1: Friday the 13th and the Dawn Raid */}
      <BlogSection title="Friday the 13th: The Dawn of Destruction (October 1307)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the cold pre-dawn darkness of <strong>Friday, October 13, 1307</strong>, royal seneschals and heavily armed soldiers throughout the Kingdom of France unsealed secret parchment orders bearing the wax crest of King Philip IV (known as <em>Philip the Fair</em>). Across dozens of cities, royal troops simultaneously stormed every commandery and preceptory belonging to the Poor Fellow-Soldiers of Christ and of the Temple of Solomon—the legendary <strong>Knights Templar</strong>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          In Paris, the King&apos;s soldiers breached the formidable fortified walls of the <em>Enclos du Temple</em>, arresting Grand Master Jacques de Molay and hundreds of monastic knights on shocking charges of blasphemy, heresy, and devil worship. Yet Philip&apos;s primary objective was neither religious orthodoxy nor moral vengeance. Heavily indebted to the Templars from his ruinous wars with Flanders and England, the bankrupt French monarch aimed to seize the single greatest financial accumulation in medieval Christendom: the central treasury of the Knights Templar.
        </p>
      </BlogSection>

      {/* Section 2: The Empty Vaults of the Temple */}
      <BlogSection title="The Empty Vaults of the Paris Temple">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          When King Philip&apos;s royal bailiffs swung open the heavy iron doors to the underground vaults of the Great Tower (<em>Grosse Tour</em>), they were met with a baffling sight: the subterranean chambers were completely empty. The mountains of solid gold ingots, sacks of silver coin, sovereign pledges, and centuries of international banking registers had vanished into thin air.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Subsequent inquisitorial interrogations revealed that the Templars had been forewarned of the King&apos;s treacherous plot. During his interrogation under torture, a Templar knight named Jean de Châlon testified that shortly before the fateful Friday, a convoy of heavily laden wooden carts—carefully covered in straw and hay to disguise them as simple farm wagons—had quietly departed the Paris Temple in the dead of night under the command of Gérard de Villers, the Preceptor of France, and Hugues de Châlons.
        </p>
      </BlogSection>

      {/* Section 3: The Midnight Fleet of La Rochelle */}
      <BlogSection title="The Ghost Fleet of La Rochelle">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The hay wagons hurried westward across France toward <strong>La Rochelle</strong>, the Templars&apos; primary deep-water Atlantic naval base and shipyard. By the time royal pursuers reached the Atlantic coast, they found the harbor deserted.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Under the cover of dense ocean fog, the Templar Atlantic fleet of eighteen war galleys had weighed anchor, raised their sails emblazoned with the iconic red cross, and slipped into the open sea. Not a single vessel was ever captured by the French Crown, and neither the ships nor their staggering cargo of gold and sacred relics were ever seen in France again.
        </p>
        <BlogList>
          <BlogListItem label="The International Banking Reserve:">
            As the originators of modern fractional-reserve banking and traveler&apos;s credit notes, the Templars held the gold reserves of European kings, noble dynasties, and the Roman papacy.
          </BlogListItem>
          <BlogListItem label="The Solomonic Relics:">
            During nine years of excavations beneath the Temple Mount in Jerusalem (1119–1128), the original nine founding knights allegedly unearthed profound religious treasures and ancient esoteric archives.
          </BlogListItem>
          <BlogListItem label="The Holy Reliquaries:">
            Sacred relics including verified fragments of the True Cross, the Holy Shroud, and jeweled altar chalices revered across the Holy Land.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 4: Documented Cargo Manifest Table */}
      <BlogSection title="Estimated Inventory of the Lost Templar Treasury">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Papal trial transcripts, royal seizure warrants, and surviving commandery inventories provide insight into the immense scale of the treasures that evaporated from Paris in 1307:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Treasury Asset</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Description</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Origin / Provenance</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Modern Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">European Gold Bullion &amp; Coinage</td>
                  <td className="py-2.5 px-3 sm:px-4">Dozens of iron-strapped coffers of florins, ecus, &amp; silver ingots</td>
                  <td className="py-2.5 px-3 sm:px-4">Central Vaults of the Temple of Paris</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$1,500,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The Holy Shroud of Christ</td>
                  <td className="py-2.5 px-3 sm:px-4">Ancient burial linen venerated by the Order (later kept by Charny)</td>
                  <td className="py-2.5 px-3 sm:px-4">Constantinople &amp; Jerusalem</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless ($500M+)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The True Cross &amp; Holy Reliquaries</td>
                  <td className="py-2.5 px-3 sm:px-4">Gold-encased fragment of the Cross, sapphire-studded monstrances</td>
                  <td className="py-2.5 px-3 sm:px-4">Acre, Antioch, &amp; Jerusalem</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$150,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Solomonic Archives &amp; Manuscripts</td>
                  <td className="py-2.5 px-3 sm:px-4">Ancient Hebrew and Coptic scrolls, banking registers, papal charters</td>
                  <td className="py-2.5 px-3 sm:px-4">Temple Mount Substructures</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless ($100M+)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Liturgical Plate &amp; Sacred Chalices</td>
                  <td className="py-2.5 px-3 sm:px-4">Solid gold communion chalices, gem-encrusted crosses, censers</td>
                  <td className="py-2.5 px-3 sm:px-4">Commanderies across Europe &amp; Levant</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$75,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Curse of Jacques de Molay */}
      <BlogSection title="The Dying Curse of Jacques de Molay (1314)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For nearly seven years, Jacques de Molay and his senior officers endured brutal torture in the dark dungeons of Paris, refusing to confess to the core heresies concocted by the Crown. On March 18, 1314, on a scaffold erected on the <em>Île aux Juifs</em> in the River Seine, de Molay and Geoffroi de Charny were condemned to burn at the stake as relapsed heretics.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          As the flames enveloped his body, the Grand Master raised his voice through the smoke to deliver a terrifying prophecy: <em>&quot;Pope Clement, and thou too, King Philip, within a year, I summon you both to appear before the judgment seat of God! Accursed be your blood unto the thirteenth generation!&quot;</em> The curse proved chillingly accurate: Pope Clement V died of violent gastrointestinal illness just thirty-three days later, while King Philip IV perished from a sudden stroke following a hunting accident eight months later. Within fourteen years, all three of Philip&apos;s sons died without surviving male heirs, extinguishing the direct Capetian line in what historians came to call the reign of the <em>Accursed Kings</em>.
        </p>
      </BlogSection>

      {/* Section 6: Where Did the Treasure Go? */}
      <BlogSection title="Where Did the Treasure Go? The Enduring Theories">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Where did the La Rochelle fleet sail with the wealth of the Templar world? For seven centuries, historians, cryptographers, and adventurers have followed several tantalizing trails:
        </p>
        <BlogList>
          <BlogListItem label="Scotland &amp; Rosslyn Chapel:">
            King Robert the Bruce of Scotland had been excommunicated by Rome and welcomed fugitive Templar knights into his ranks. Scottish tradition asserts that Templar galleys landed in Argyll and that Templar cavalry decisively swung the Battle of Bannockburn in 1314. The treasure is rumored to lie buried in sealed crypts beneath Rosslyn Chapel in Midlothian.
          </BlogListItem>
          <BlogListItem label="The Order of Christ (Portugal):">
            King Dinis of Portugal refused to execute Templars, officially rebranding the Order in 1319 as the <em>Order of Christ</em>. The Templars transferred their vast fleet, navigational secrets, and maritime wealth to their headquarters at the Convent of Christ in Tomar, directly funding the Portuguese Age of Discovery under Grand Master Prince Henry the Navigator.
          </BlogListItem>
          <BlogListItem label="The Secret Tunnels of Gisors:">
            In Normandy, the sprawling medieval fortress of Château de Gisors is said to conceal subterranean stone chambers where Templar wealth was hidden before the royal arrests.
          </BlogListItem>
          <BlogListItem label="The Transatlantic Crossing (Oak Island):">
            Compelling maritime theories propose that Templar navigators voyaged across the North Atlantic with Scottish Earl Henry Sinclair in 1398, burying the Holy Grail and their sacred archives deep within Nova Scotia&apos;s infamous Money Pit.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          Whether entombed beneath a Scottish chapel, sealed behind Portuguese stone, or resting in the soil of the New World, the Treasure of the Knights Templar remains the quintessential mystery of the medieval world—unrecovered, unbroken, and forever legendary.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

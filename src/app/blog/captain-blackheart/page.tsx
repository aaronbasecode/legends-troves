import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export default function CaptainBlackheartPage() {
  return (
    <BlogLayout
      category="land"
      title="The Lost Treasure of Captain Blackheart"
      imageSrc="/images/captain-blackheart.jpg"
      imageAlt="Captain Blackheart and his diverse pirate crew inspecting seized chests of gold escudos, Muzo emeralds, silver chalices, and pearls on deck with grappled ships alongside"
    >
      {/* Section 1: The Scourge of the Windward Passage */}
      <BlogSection title="The Scourge of the Windward Passage">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          During the late 17th century, when European empires fought viciously for control over the New World, the Caribbean Sea became an arena of lawless plunder. Few names struck as much terror into the hearts of merchant captains and Spanish treasure fleets as Captain Bartholomew &ldquo;Blackheart&rdquo; Thorne. Operating out of the notorious pirate stronghold of Tortuga—a rugged island off the northern coast of present-day Haiti—Blackheart commanded a swift 28-gun brigantine named <em>The Bloodied Raven</em>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Unlike ordinary corsairs who squandered their spoils on rum and tavern brawls in Basse-Terre, Blackheart was calculating, methodical, and obsessively secretive. He targeted Spanish bullion ships traversing the Windward Passage, intercepting convoys laden with gold from New Spain and silver from the Andes before retreating into Tortuga&apos;s impenetrable maze of limestone bluffs and labyrinthine sea grottos.
        </p>
      </BlogSection>

      {/* Section 2: The Ambush of the San Cristóbal */}
      <BlogSection title="The Ambush of the San Cristóbal and the Iron Chest">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the autumn of 1689, Blackheart scored his most audacious conquest. A heavy Spanish galleon, the <em>San Cristóbal</em>, became separated from the Tierra Firme fleet after a vicious squall off Cap-Haïtien. Blackheart stalked the crippled leviathan for two days before striking under cover of a moonless fog.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Following a bloody boarding action that lasted three hours, the pirates seized a haul of astronomical value: crates of freshly minted gold escudos, uncut emeralds plundered from the Muzo mines of Colombia, consecrated solid silver church chalices, and bags of raw pearls from Margarita Island.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Knowing that the French governor and his own crew of cutthroats would murder him for such an immense hoard, Blackheart handpicked four trusted lieutenants under cover of midnight. They rowed an iron-bound oak chest ashore into a subterranean sea cave along the jagged northern cliffs of Tortuga. Once the chest was entombed beneath stone and sand, Blackheart executed all four men on the spot—ensuring that only he knew the exact resting place of the plunder.
        </p>
      </BlogSection>

      {/* Section 3: Betrayal and the Gallows Oath */}
      <BlogSection title="Betrayal and the Gallows Oath">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Greed within the Brethren of the Coast was a deadly poison. Suspecting that their captain had cached the lion&apos;s share of the <em>San Cristóbal&apos;s</em> riches, Blackheart&apos;s quartermaster staged a mutiny while anchored near Port-de-Paix. The crew betrayed Blackheart to the Royal Navy in exchange for pardons and a bounty.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Transported in chains to Port Royal, Jamaica, Blackheart faced trial for high-seas piracy. Throughout weeks of interrogation and promises of clemency if he surrendered the coordinates of his hoard, the pirate remained obstinate, reportedly laughing in the face of his judges.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          On the morning of his execution in 1691, with the hangman&apos;s noose draped around his neck, Blackheart addressed the gathered crowd with his final words: <em>&ldquo;Where the turtle drinks from the moonlit spring and the ironwood shadow points north-by-northeast, there sleeps the blood of Spain. Seek it if ye dare, but none save the devil and me shall ever lay fingers upon it!&rdquo;</em> The trapdoor dropped, and his secret plunged into legend.
        </p>
      </BlogSection>

      {/* Section 4: Clues of Tortuga */}
      <BlogSection title="The Cryptic Clues of Tortuga">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Over three centuries later, treasure hunters, speleologists, and maritime historians have attempted to decipher Blackheart&apos;s riddles and historical accounts:
        </p>
        <BlogList>
          <BlogListItem label="The Northern Karst Caverns:">
            Tortuga&apos;s northern shoreline features treacherous limestone cliffs riddled with tidal caves that are only accessible at extreme low tide and calm seas.
          </BlogListItem>
          <BlogListItem label="The Ironwood Bluff Marker:">
            Colonial surveyor sketches from 1720 mention a cluster of ancient guaiacum (ironwood) trees above Pointe Ouest, one of which was reportedly notched with a skull and crossed cutlasses.
          </BlogListItem>
          <BlogListItem label="The Cipher of Fort de Rocher:">
            A French military ledger discovered in Nantes archives contained a confiscated pirate journal with numerical ciphers referencing paces measured from high-water mark caverns near the old buccaneer fortress.
          </BlogListItem>
          <BlogListItem label="The Four Skeletons Legend:">
            In 1934, an American prospector exploring a sinkhole north of Basse-Terre unearthed four human skeletons bearing musket ball fractures, surrounded by rusted 17th-century boarding cutlasses, though no gold was found nearby.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 5: The Plundered Spoils Inventory */}
      <BlogSection title="The Plundered Spoils: The Lost Hoard Breakdown">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Surviving Spanish admiralty declarations from Havana detail the contents of the cargo seized from the <em>San Cristóbal</em>:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[500px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Hoard Component</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Items</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Origin / Provenance</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Modern Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Spanish Escudos & Cobs</td>
                  <td className="py-2.5 px-3 sm:px-4">Over 40,000 gold coins & silver bars</td>
                  <td className="py-2.5 px-3 sm:px-4">Mints of Mexico City & Lima</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Unrecovered beneath Tortuga</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The Muzo Emerald Hoard</td>
                  <td className="py-2.5 px-3 sm:px-4">12 uncut high-grade emerald crystals</td>
                  <td className="py-2.5 px-3 sm:px-4">Muzo Mines, New Granada</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Lost inside the iron chest</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Ecclesiastical Relics</td>
                  <td className="py-2.5 px-3 sm:px-4">Solid gold chalices & filigree monstrance</td>
                  <td className="py-2.5 px-3 sm:px-4">Cathedral of Santo Domingo</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Missing since 1689</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The Captain&apos;s Cutlass</td>
                  <td className="py-2.5 px-3 sm:px-4">Basket-hilted sword with ruby pommel</td>
                  <td className="py-2.5 px-3 sm:px-4">Captured from an English admiral</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Buried with the chest</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 6: The Unsolved Mystery of Tortuga */}
      <BlogSection title="The Unsolved Mystery of Tortuga">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Why has Captain Blackheart&apos;s treasure never been discovered? Tortuga&apos;s geography presents formidable natural defenses. The island is composed of porous coral limestone prone to sinkholes, underwater caverns, and collapsing cliff faces. Centuries of Caribbean hurricanes and tidal erosion have reshaped the coastline, potentially sealing the entrance to Blackheart&apos;s cave underwater or under thousands of tons of fallen rock.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          To this day, local Haitian fishermen along the coast of Tortuga tell stories of strange lantern lights flickering along the jagged sea cliffs on stormy nights. Whether protected by Blackheart&apos;s dying curse or buried deep within the island&apos;s limestone bones, the treasure remains one of the greatest enduring riddles of the Golden Age of Piracy.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

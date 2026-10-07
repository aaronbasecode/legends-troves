import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export default function MontezumaTreasurePage() {
  return (
    <BlogLayout
      category="water"
      title="Montezuma's Treasure"
      imageSrc="/images/montezuma-treasure.jpg"
      imageAlt="Montezuma's Aztec Gold Treasure Submerged in Lake Texcoco"
    >
      {/* Section 1: The Fall of Tenochtitlan & The Stolen Hoard */}
      <BlogSection title="The Golden Splendor of the Aztec Empire">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In November 1519, when Hernán Cortés and his Spanish conquistadors marched across the southern causeway into Tenochtitlan, they believed they were gazing upon an apparition. Rising majestically from the shimmering waters of Lake Texcoco, the Aztec capital was an engineering marvel of stone pyramids, floating chinampa gardens, and vast causeways, home to over two hundred thousand souls.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Welcomed as guests by Emperor Moctezuma II (Montezuma), the Spaniards were quartered inside the sprawling palace of Axayácatl, the emperor&apos;s late father. Within days, Spanish curiosity turned to insatiable greed. Behind a freshly plastered wall, conquistador soldiers stumbled upon a secret royal chamber filled from floor to ceiling with centuries of accumulated Aztec imperial wealth: towering piles of gold ingots, ceremonial solar disks of solid gold, turquoise mosaic masks, and exquisitely fashioned golden jaguars, birds, and serpents.
        </p>
      </BlogSection>

      {/* Section 2: La Noche Triste */}
      <BlogSection title="La Noche Triste: The Plunge into Lake Texcoco">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The alliance soon collapsed into bloodshed. After Cortés took Montezuma hostage and Spanish troops massacred Aztec nobles during the festival of Toxcatl, the city erupted in fury. Following Montezuma&apos;s mysterious death inside the palace, thousands of Aztec warriors encircled the fortress, severing food and water supplies and demolishing the wooden bridges along the lake causeways.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          On the stormy, pitch-black night of June 30, 1520—remembered forever as <em>La Noche Triste</em> (&ldquo;The Night of Sorrows&rdquo;)—Cortés attempted a desperate evacuation. In their haste, the conquistadors melted down priceless Aztec religious relics into heavy portable gold bars, loading them onto eight wounded horses and eighty Tlaxcalan allies. But greed proved fatal: dozens of Spanish soldiers stuffed their armor, boots, and pockets with pounds of raw gold.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          As the vanguard crossed the narrow Tacuba causeway, Aztec alarms sounded. Hundreds of war canoes surged across the black waters of Lake Texcoco, hurling spears, arrows, and obsidian clubs. Panic ensued at the broken causeway gaps. Weighed down by their stolen fortunes, scores of Spaniards slipped from the blood-slicked stones and sank like stones into the bottomless mud and murky depths of Lake Texcoco, drowned by the very gold they sought to plunder.
        </p>
      </BlogSection>

      {/* Section 3: The Concealment & Cuauhtémoc's Defiance */}
      <BlogSection title="The Sunken Vaults and Cuauhtémoc's Defiance">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Cortés barely escaped with his life, weeping beneath a Montezuma cypress tree as he tallied his catastrophic losses. Nearly three-quarters of the Spanish force lay dead, and the vast majority of the imperial hoard remained submerged in Lake Texcoco&apos;s waters.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          The new Aztec Emperor, Cuauhtémoc, resolved that the sacred relics would never finance their conquerors. Aztec divers and warriors salvaged what they could from the canal floor and collected the remaining palace reserves. Under cover of night, priests and royal attendants cast chests of bullion, gold idols, and gem-encrusted regalia into the deepest trenches of Lake Texcoco and sealed flooded subterranean canal vaults beneath the city. When Cortés returned with a siege fleet in 1521 and captured the ruined capital, he subjected Cuauhtémoc to brutal torture, burning his feet with boiling oil. Yet the young emperor famously remained stoic, refusing to divulge the coordinates of the sunken treasure.
        </p>
      </BlogSection>

      {/* Section 4: Key Relics and Archaeological Clues */}
      <BlogSection title="Archaeological Proof and Modern Clues">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Unlike many lost treasures born purely of folklore, the physical reality of Montezuma&apos;s lost gold has been corroborated by remarkable archaeological discoveries.
        </p>
        <BlogList>
          <BlogListItem label="The Tejo de Oro (Golden Ingot):">
            In 1981, during construction of a bank building along Mexico City&apos;s Avenida Hidalgo, a worker unearthed a 4.2-pound solid gold bar buried deep in ancient canal mud. In 2020, Mexico&apos;s National Institute of Anthropology and History (INAH) conducted X-ray fluorescence analysis, definitively matching its elemental composition and dimensions to the bars cast by Cortés during La Noche Triste.
          </BlogListItem>
          <BlogListItem label="The Drained Basin of Texcoco:">
            Over four centuries of colonial and modern development, Lake Texcoco was gradually drained to prevent seasonal flooding, leaving modern Mexico City sitting atop ancient lakebed clay. Vast sections of the canal beds where conquistadors were drowned now lie entombed beneath concrete avenues and metro lines.
          </BlogListItem>
          <BlogListItem label="Submerged Offerings at Templo Mayor:">
            Ongoing excavations around the Great Temple of Tenochtitlan continue to uncover sealed stone boxes containing turquoise mosaics, gold nose ornaments, and ritual marine offerings deposited directly into the city&apos;s sacred water table.
          </BlogListItem>
          <BlogListItem label="The Northern Migration Legends:">
            Persistent Mesoamerican legends claim that a detachment of elite Aztec couriers managed to smuggle a portion of the royal gold northward before the city fell, carrying it toward the ancestral homeland of Aztlán in the desert canyons of the American Southwest.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 5: Historical Inventory */}
      <BlogSection title="The Treasure Inventory: Recorded & Lost">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Historical records from Bernal Díaz del Castillo and Hernán Cortés&apos;s letters provide vivid details of the monumental wealth lost during the conquest:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[500px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Hoard Component</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Estimated Content</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Original Fate</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Current Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The Royal Chamber of Axayácatl</td>
                  <td className="py-2.5 px-3 sm:px-4">Gold disks, idols, jade, turquoise masks</td>
                  <td className="py-2.5 px-3 sm:px-4">Melted into bars & ingots in June 1520</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Lost in Lake Texcoco muds</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The King&apos;s Fifth (Quinto Real)</td>
                  <td className="py-2.5 px-3 sm:px-4">Over 100,000 gold castellanos for Spain</td>
                  <td className="py-2.5 px-3 sm:px-4">Loaded onto horses during La Noche Triste</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Sunken at the Tacuba causeway breach</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Cuauhtémoc&apos;s Hidden Hoard</td>
                  <td className="py-2.5 px-3 sm:px-4">Priceless ancestral gold & ceremonial vessels</td>
                  <td className="py-2.5 px-3 sm:px-4">Cast into deep trenches & subterranean vaults</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Unrecovered beneath Mexico City</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The San Cosme Ingot (&ldquo;Tejo de Oro&rdquo;)</td>
                  <td className="py-2.5 px-3 sm:px-4">1.92 kg solid gold bar (78% gold, 14% silver)</td>
                  <td className="py-2.5 px-3 sm:px-4">Dropped in canal during retreat</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Discovered in 1981; INAH verified 2020</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 6: The Legacy */}
      <BlogSection title="The Mystery Beneath Modern Footsteps">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Today, millions of commuters traverse the bustling streets of Mexico City unaware that dozens of feet beneath the asphalt and subway tunnels lies the ancient bed of Lake Texcoco. The water that once swallowed the Aztec Empire&apos;s greatest wealth has dried, yet the volcanic silt and clay preserve its secrets with relentless grip.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Montezuma&apos;s treasure remains one of the most poignant symbols in all of treasure hunting history—not merely a fortune of gold, but the sacred heritage of an entire civilization that chose to consign its greatest riches to the water rather than yield them to conquest.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

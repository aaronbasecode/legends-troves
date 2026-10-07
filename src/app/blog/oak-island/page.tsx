import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export default function OakIslandPage() {
  return (
    <BlogLayout
      category="land"
      title="Oak Island Money Pit"
      imageSrc="/images/oak-island.jpg"
      imageAlt="Daniel McGinnis discovering the sunken depression and scarred oak branch of the Oak Island Money Pit in 1795"
    >
      {/* Section 1: The Discovery in 1795 */}
      <BlogSection title="The 1795 Discovery in Mahone Bay">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the summer of 1795, a sixteen-year-old farm boy named Daniel McGinnis paddled across Mahone Bay to the uninhabited, oak-covered shores of Oak Island, Nova Scotia. Walking through a clearing on the southeastern tip of the island, McGinnis noticed a curious depression in the earth—a sunken, saucer-shaped hollow roughly thirteen feet in diameter. Directly overhead, an ancient red oak tree had a heavy, sawed-off branch bearing tackle-block scars and rope burn marks.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Excited by maritime tales of pirate gold, McGinnis returned the following day with two companions, John Smith and Anthony Vaughan. Digging into the loose soil, they uncovered an old shaft with pick-marked clay walls. At ten feet, they struck a solid platform of rotting oak logs embedded into the sides. At twenty feet, another wooden tier appeared. At thirty feet, yet another oak deck halted their shovels. Realizing the undertaking was far beyond the tools of three teenage boys, they paused their dig, unaware that they had uncovered the opening to history&apos;s most notorious subterranean labyrinth: the Oak Island Money Pit.
        </p>
      </BlogSection>

      {/* Section 2: The Ingenious Booby Trap */}
      <BlogSection title="The Ingenious Hydraulic Booby Trap">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Nearly a decade later, in 1804, the well-funded Onslow Company took up the excavation. As workers pushed deeper into the damp shaft, they encountered platforms every ten feet—alternating between oak logs, layers of charcoal, sealing putty, and dense carpets of coconut fiber.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          At ninety feet down, diggers hauled up an extraordinary prize: a flat, dark olive-colored Swedish porphyry stone measuring three feet long and sixteen inches wide. Its surface was carved with mysterious cryptographic runes, later deciphered by linguists to read: <em>&ldquo;Forty feet below, two million pounds lie buried.&rdquo;</em>
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Goaded by the promise of riches, workers probed below the stone with an iron crowbar, feeling wooden chests or casks below. Overjoyed, they retired for the night. But when they returned at dawn, catastrophe struck: the shaft had flooded with sixty feet of freezing seawater. Bailing proved futile, as the water level rose and fell in direct synchronization with the Atlantic tides. Decades later, researchers discovered the secret behind the flooding: the builders had constructed five artificial box drains in Smith&apos;s Cove, creating an enormous subterranean hydraulic booby trap that funneled thousands of gallons of sea water through a 500-foot sloped tunnel whenever the shaft was disturbed.
        </p>
      </BlogSection>

      {/* Section 3: What Lies Beneath? */}
      <BlogSection title="Theories of the Buried Vault">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Over two centuries of continuous digging have produced numerous theories explaining who possessed the advanced engineering mastery required to construct such a complex hydraulic trap:
        </p>
        <BlogList>
          <BlogListItem label="The Knights Templar & The Holy Grail:">
            Prominent researchers theorize that after the dissolution of the Knights Templar in 1307, surviving fleet commanders transported sacred religious relics, ancient scrolls, and the legendary Templar treasure hoard across the Atlantic to the safe haven of Nova Scotia.
          </BlogListItem>
          <BlogListItem label="Pirate Caches of Captain Kidd:">
            Local folklore has long associated Oak Island with legendary privateer Captain William Kidd, who boasted before his 1701 execution that he had buried an immense treasure &ldquo;where none but Satan and myself can find it.&rdquo;
          </BlogListItem>
          <BlogListItem label="Marie Antoinette's Jewels:">
            During the height of the French Revolution in 1789, naval officers loyal to Marie Antoinette allegedly loaded the queen&apos;s priceless crown jewels aboard a French warship that sailed for the fortified French fortress of Louisbourg in Nova Scotia.
          </BlogListItem>
          <BlogListItem label="The Lost Shakespearean Manuscripts:">
            Literary scholars have suggested that philosopher Sir Francis Bacon buried original Shakespearean folios inside wooden chambers lined with lead and sealed with liquid mercury to protect the delicate paper from moisture.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 4: Recovered Artifacts */}
      <BlogSection title="Physical Artifacts Pulled from the Depths">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          While the primary treasure chamber remains elusive, drill bits and caissons have extracted undeniable physical evidence of human construction:
        </p>
        <BlogList>
          <BlogListItem label="Ancient Coconut Fiber:">
            Thousands of pounds of coconut husk fibers were discovered lining the artificial drains at Smith&apos;s Cove. Carbon dating revealed the fibers date between 1260 and 1400 AD—centuries before modern Europeans settled Canada, indicating deliberate transoceanic transport.
          </BlogListItem>
          <BlogListItem label="14th-Century Medieval Lead Cross:">
            Unearthed in Smith&apos;s Cove, this lead pendant was chemically fingerprinted to a medieval lead mine in southern France, strongly matching icons used by the Knights Templar.
          </BlogListItem>
          <BlogListItem label="Parchment and Gold Wire:">
            In 1897, a drill core pulled from 153 feet below brought up a small ball of sheepskin parchment with two hand-painted letters (&ldquo;vi&rdquo; or &ldquo;ui&rdquo;) written in India ink, along with fragments of ancient gold filigree wire.
          </BlogListItem>
          <BlogListItem label="17th-Century Spanish & British Coinage:">
            Multiple silver and copper coins dating back to the 1600s have been recovered from the island&apos;s muddy swamp and shorelines, confirming sustained pre-1795 clandestine activity.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 5: Timeline Table */}
      <BlogSection title="Two Centuries of Search: Timeline of Milestones">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          From early pick-and-shovel pioneers to modern industrial engineering operations, the search for the Money Pit has spanned generations:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[500px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Year</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Expedition / Entity</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Depth Reached</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Key Discovery or Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1795</td>
                  <td className="py-2.5 px-3 sm:px-4">McGinnis, Smith, Vaughan</td>
                  <td className="py-2.5 px-3 sm:px-4">30 feet</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Discovered oak log platforms every 10 feet</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1804</td>
                  <td className="py-2.5 px-3 sm:px-4">The Onslow Company</td>
                  <td className="py-2.5 px-3 sm:px-4">90 feet</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Unearthed the 90-Foot Stone; triggered flood tunnel</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1849</td>
                  <td className="py-2.5 px-3 sm:px-4">The Truro Company</td>
                  <td className="py-2.5 px-3 sm:px-4">110 feet</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Core drill retrieved 3 links of gold watch chain</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1909</td>
                  <td className="py-2.5 px-3 sm:px-4">Old Gold Salvage Co.</td>
                  <td className="py-2.5 px-3 sm:px-4">150 feet</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Future US President Franklin D. Roosevelt joined syndicate</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1965</td>
                  <td className="py-2.5 px-3 sm:px-4">Robert Restall Expedition</td>
                  <td className="py-2.5 px-3 sm:px-4">Surface / Shaft</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Tragic H2S gas accident claiming 4 lives</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Present</td>
                  <td className="py-2.5 px-3 sm:px-4">Lagina Brothers (Oak Island Tours)</td>
                  <td className="py-2.5 px-3 sm:px-4">200+ feet</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Recovered medieval lead cross, gem brooch, and parchment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 6: The Deadly Curse and Enduring Mystery */}
      <BlogSection title="The Deadly Curse and Enduring Quest">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          With its immense allure comes an ominous curse whispered through Nova Scotia lore: <em>&ldquo;Seven must die before the secret of Oak Island is revealed.&rdquo;</em> To date, six searchers have lost their lives to cave-ins, boiler explosions, and subterranean gas pockets while pursuing the treasure.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Today, high-tech steel caissons, heavy oscillating cranes, and muon tomography scanners probe the bedrock of Mahone Bay. Whether the Money Pit holds pirate gold, royal jewels, or holy relics, Oak Island stands as the greatest enigma in treasure hunting history—a testament to an unknown architect whose masterpiece has defied modern human ingenuity for over two centuries.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

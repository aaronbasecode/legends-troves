import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: "Lasseter's Reef | Legends Troves",
  description: "Somewhere in the arid, sun-bleached expanse of the central Australian desert lies Lasseter's Reef—a fabled ten-mile vein of solid gold that lured prospectors, planes, and Harold Bell Lasseter to his tragic death in 1931.",
};

export default function LassetersReefPage() {
  return (
    <BlogLayout
      category="land"
      title="Lasseter's Reef"
      imageSrc="/images/lasseters-reef.jpg?v=3"
      imageAlt="Harold Bell Lasseter discovering the fabled quartz reef stretching into the Australian desert, bursting with rich seams of pure crystalline gold"
    >
      {/* Section 1: The Legend of the Red Centre */}
      <BlogSection title="The Ghost Reef of the Red Centre">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In early 1930, as the crushing misery of the Great Depression gripped Australia with record unemployment and financial ruin, a quiet, intense bushman walked into the Sydney offices of prominent mining syndicates with a claim so staggering it bordered on myth.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          His name was <strong>Lewis Harold Bell Lasseter</strong>. He claimed that over three decades earlier, around 1897, while crossing the uncharted heart of the continent on horseback from Queensland toward the Western Australian goldfields, his pack animals had perished. Dying of thirst beneath the scorching sun of the Gibson Desert, he had stumbled into a breathtaking geological wonder: an exposed, glittering quartz reef <strong>ten miles long and four to seven feet thick</strong>, bursting with rich seams of pure, crystalline gold yielding multiple ounces per ton.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Lasseter maintained that he had chipped samples from the reef before being rescued in an emaciated state by a surveyor named Harding and friendly Aboriginal tribesmen. In the delirious haze of his recovery, however, the exact compass bearings had been mislaid. For thirty years, the memory of that shimmering mountain of gold had tormented him—and now, in the nation&apos;s darkest economic hour, he proposed to guide an expedition back into the dead heart of Australia to claim it.
        </p>
      </BlogSection>

      {/* Section 2: The 1930 C.A.G.E. Expedition */}
      <BlogSection title="The C.A.G.E. Expedition: High-Tech Hunt in the Wasteland">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Lasseter&apos;s compelling story captivated Sydney financiers, politicians, and union bosses. In June 1930, the <strong>Central Australian Gold Exploration Company (C.A.G.E.)</strong> was formed with £5,000 in capital—a small fortune at the time.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Determined to conquer the forbidding interior, the syndicate outfitted the most technologically advanced and heavily mechanized prospecting expedition in Australian history:
        </p>
        <BlogList>
          <BlogListItem label="The Thornycroft Truck:">
            A specialized six-wheeled, 40-horsepower Thornycroft rigid lorry christened <em>Golden Quest</em>, engineered to haul tons of fuel, water, and mining tools across sand dunes.
          </BlogListItem>
          <BlogListItem label="Aerial Reconnaissance:">
            A de Havilland DH.60 Gipsy Moth biplane piloted by Captain Errol Coote, tasked with flying ahead of the ground column to identify waterholes, mountain gaps, and landing strips.
          </BlogListItem>
          <BlogListItem label="Veteran Bushmen:">
            Led by the respected, hardened outback explorer <strong>Fred Blakeley</strong>, the party included mineral prospector George Sutherland, engineer Philip Taylor, and Lasseter as guide.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: Disintegration in the Dunes */}
      <BlogSection title="Disintegration in the Dunes: Doubt, Mutiny, and Division">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Departing Alice Springs in July 1930, the expedition immediately encountered the brutal realities of the Central Australian wasteland. Temperatures soared past 110°F (43°C), spinifex grass repeatedly clogged the Thornycroft&apos;s radiator, and the heavy truck bogged down repeatedly to its axles in shifting red sand ridges.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Worse, the aerial scout aircraft crashed during a dust storm at Ayres Range, requiring weeks of makeshift repairs under the blistering sun. But the most alarming breakdown was human: as the party pressed deeper toward Lake Amadeus, Lasseter became visibly disoriented and erratic.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          The landmarks Lasseter had described with supreme confidence failed to materialize:
        </p>
        <BlogList>
          <BlogListItem label="Shifting Coordinates:">
            When a prominent sandstone ridge turned out to be barren sandstone rather than gold-bearing quartz, Lasseter claimed the reef lay 150 miles south toward the Petermann Ranges, then abruptly pointed northwest toward Mount Liebig.
          </BlogListItem>
          <BlogListItem label="The Mutiny at Ilbilla:">
            By October 1930, at the remote Ilbilla rockhole, expedition leader Fred Blakeley had had enough. Convinced that Lasseter was either a delusional fantasist or a deliberate confidence man who had fabricated the entire story, Blakeley officially disbanded the motorized expedition and ordered a retreat to Alice Springs.
          </BlogListItem>
          <BlogListItem label="The Solo Push with Paul Johns:">
            Lasseter vehemently refused to turn back. Accusing the party of cowardice, he contracted a German dingo trapper named <strong>Paul Johns</strong>, who owned a string of five hardy camels. While Blakeley returned to civilization, Lasseter and Johns plunged alone into the uncharted canyons of the <strong>Petermann Ranges</strong>.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 4: Chronology Table */}
      <BlogSection title="Chronology of the Quest for Lasseter's Reef">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The century-long search for Lasseter&apos;s fabled reef has claimed lives, bankrupted syndicates, and generated one of the most enduring archives of outback lore:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Expedition / Era</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Key Explorers &amp; Equipment</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Geographic Target Area</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Historical Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1897 / 1911 (Alleged)</td>
                  <td className="py-2.5 px-3 sm:px-4">Harold Bell Lasseter, Harding (Surveyor)</td>
                  <td className="py-2.5 px-3 sm:px-4">West of MacDonnell Ranges</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Original sighting claimed; samples allegedly lost</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1930 C.A.G.E. Expedition</td>
                  <td className="py-2.5 px-3 sm:px-4">Fred Blakeley, Errol Coote, Thornycroft Truck, Moth aircraft</td>
                  <td className="py-2.5 px-3 sm:px-4">Ilbilla, Lake Amadeus, Ehrenberg Ranges</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Truck bogged; plane crashed; party mutinied</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Late 1930 Solo Trek</td>
                  <td className="py-2.5 px-3 sm:px-4">Harold Lasseter, Paul Johns, 5 camels</td>
                  <td className="py-2.5 px-3 sm:px-4">Petermann Ranges, Hull River Gorge</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Johns departed; camels bolted; Lasseter stranded</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1931 Relief Patrol</td>
                  <td className="py-2.5 px-3 sm:px-4">Bob Buck, Aboriginal trackers</td>
                  <td className="py-2.5 px-3 sm:px-4">Shaw Creek, Petermann Ranges</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Lasseter found dead; buried diary recovered</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">1950s–Present</td>
                  <td className="py-2.5 px-3 sm:px-4">Geoscience Australia, Modern 4WD Syndicates</td>
                  <td className="py-2.5 px-3 sm:px-4">Musgrave &amp; Amadeus Basins</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Traces of gold found; 10-mile reef proven a myth</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: Lasseter's Cave & The Bitter End */}
      <BlogSection title="The Hull River Gorge &amp; Lasseter's Cave">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In November 1930, deep inside the craggy red sandstone gorges of the Petermann Ranges, Paul Johns and Lasseter had a violent altercation. With water holes drying out and the camels exhausted, Johns refused to proceed any further. Leaving Lasseter with two camels, basic rations, and a revolver, Johns turned back.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Shortly thereafter, disaster struck. During a sudden, terrifying desert thunderstorm, a lightning bolt cracked overhead. The two hobbled camels panicked, broke their restraints, and bolted into the black desert night, carrying Lasseter&apos;s remaining food, cooking tins, ammunition, and water containers into the wilderness.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Alone, defenseless, and stranded over 200 miles from the nearest white settlement in suffocating 115°F heat, Lasseter took refuge inside a shallow sandstone overhang beside the dry bed of the Hull River—a site known today as <strong>Lasseter&apos;s Cave</strong>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          For several desperate weeks, Lasseter survived on the edge of extinction:
        </p>
        <BlogList>
          <BlogListItem label="Pitjantjatjara Compassion:">
            A nomadic band of local Pitjantjatjara (Anangu) Aboriginal people discovered the desperate white man. Out of pity, they shared their meager bush tucker—witchetty grubs, bush figs, and desert roots.
          </BlogListItem>
          <BlogListItem label="Blindness &amp; Starvation:">
            Afflicted by trachoma (sandy blight) that left him nearly blind, and ravaged by dysentery, Lasseter grew increasingly weak and paranoid, eventually alienating his indigenous benefactors.
          </BlogListItem>
          <BlogListItem label="The Final March:">
            In late January 1931, realizing death was imminent, Lasseter buried his diary and letters beneath the cave floor. With a handmade walking stick, he set out on foot across the blistering dunes in a suicidal attempt to reach Kata Tjuta (The Olgas), 90 miles to the east.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          He collapsed just twenty-five miles away at Shaw Creek, dying of dehydration and heat exhaustion under the shade of a stunted acacia bush.
        </p>
      </BlogSection>

      {/* Section 6: The Buried Diary & The Death Note */}
      <BlogSection title="The Buried Diary &amp; The Death Notes">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In March 1931, an official relief expedition led by renowned outback bushman <strong>Bob Buck</strong> set out from Hermannsburg. Guided by brilliant Aboriginal trackers, Buck found Lasseter&apos;s decomposed body at Shaw Creek and buried him in the red sands.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Returning to the cave on the Hull River, Buck dug into the fireplace earth and unearthed Lasseter&apos;s waterproof cylinder. Inside were pencil-scrawled diary entries, sketches, and heartbreaking farewell letters to his wife Rene and children, written on scraps of old envelopes and wrapping paper.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          To his very last breath, Lasseter adamantly insisted that the fabulous reef was real:
        </p>
        <blockquote className="my-4 pl-4 border-l-4 border-[#D4AF37] italic text-sm sm:text-base text-[#2C2504]/95 bg-[#D8D1B6]/30 py-3 rounded-r-lg">
          &quot;I have found the reef... What good is a reef worth millions when you are dying of thirst and starvation? My bones will lie in the desert, but the gold remains... May someone find the pegs I have driven.&quot;
          <span className="block mt-1 font-semibold not-italic text-xs sm:text-sm text-[#2C2504]/80">
            — Harold Bell Lasseter, Final Diary Entry (January 1931)
          </span>
        </blockquote>
      </BlogSection>

      {/* Section 7: Geological Reality vs. Legend */}
      <BlogSection title="Geological Reality vs. Outback Mirage">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Nearly a century after Lasseter&apos;s death, the legend continues to captivate prospectors, historians, and geologists. Following the 1931 publication of Ion Idriess&apos;s runaway national bestseller, <em>Lasseter&apos;s Last Ride</em>, dozens of expeditions have ventured into the Petermann, Rawlinson, and Musgrave ranges equipped with everything from satellite imagery and ground-penetrating radar to metal detectors.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Modern geological surveys conducted by <strong>Geoscience Australia</strong> offer a sobering scientific reality: the geology of the Petermann and Amadeus basins consists of Proterozoic sandstones, quartzites, and gneisses. While epithermal gold deposits do exist in the broader Tanami and Granites provinces hundreds of miles to the north, a continuous, uniform quartz reef ten miles long and solid with gold is a geological impossibility.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Whether Lasseter had truly seen an exceptionally rich, isolated quartz blowout and grossly exaggerated its scale in his fevered memory, or whether he was consumed by a tragic psychological confabulation, <strong>Lasseter&apos;s Reef</strong> remains Australia&apos;s greatest lost treasure—an enduring testament to the fatal, intoxicating allure of outback gold.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

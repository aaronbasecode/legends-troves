import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Nazi Gold Train | Legends Troves',
  description: 'In the final chaotic months of World War II, a heavily armored Nazi train laden with gold, jewels, and looted art vanished into the subterranean tunnels of the Owl Mountains in Poland.',
};

export default function TheNaziGoldTrainPage() {
  return (
    <BlogLayout
      category="land"
      title="The Nazi Gold Train"
      imageSrc="/images/the-nazi-gold-train.jpg"
      imageAlt="An armored WWII military train entering a secret underground tunnel complex in the Owl Mountains, Poland, winter 1945"
    >
      {/* Section 1: The Phantom of Lower Silesia */}
      <BlogSection title="The Phantom of Lower Silesia (Winter 1945)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the bitter, freezing winter of late 1944 and early 1945, the Third Reich was collapsing under the crushing weight of a two-front war. As the Soviet Red Army launched its colossal Vistula-Oder offensive, driving relentlessly toward Berlin, German civilian and military authorities across the eastern provinces frantically packed their archives, plundered art, and gold reserves into rail convoys to evacuate them westward.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          According to persistent eyewitness accounts, railway records, and regional folklore, a heavily armored freight train—consisting of armored steam locomotives and sealed steel boxcars flanked by anti-aircraft flak wagons—departed the rail yards of Breslau (modern-day Wrocław, Poland). Carrying the evacuated reserves of the regional Reichsbank along with confiscated museum treasures, the train was dispatched toward the rugged, heavily militarized heights of the Owl Mountains (<em>Góry Sowie</em>) near Wałbrzych. Somewhere along the winding tracks between Wrocław and Wałbrzych, the train vanished completely off the military grid, giving birth to the legend of <strong>The Nazi Gold Train</strong>.
        </p>
      </BlogSection>

      {/* Section 2: Project Riese - The Subterranean Fortress */}
      <BlogSection title="Project Riese: The Secret Labyrinth Beneath the Mountains">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          To understand where an entire armored train could vanish, one must understand <strong>Projekt Riese</strong> (<em>&quot;The Giant&quot;</em>)—one of the most secretive, gargantuan underground engineering projects ever undertaken by the Nazi regime. Begun in late 1943 under the direction of Armaments Minister Albert Speer and the Todt Organization, Riese was designed to create an impregnable subterranean military headquarters, weapons manufacturing center, and shelter for the high command.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Carved out of the solid gneiss rock of the Owl Mountains and directly beneath the massive 13th-century <strong>Książ Castle</strong> (Schloss Fürstenstein), Riese comprised seven sprawling underground tunnel complexes built by thousands of forced laborers from the Gross-Rosen concentration camp:
        </p>
        <BlogList>
          <BlogListItem label="Subterranean Rail Terminals:">
            Massive underground reinforced caverns wide enough to accommodate full-gauge railway spurs, complete with electrical substations, blast doors, and drainage networks.
          </BlogListItem>
          <BlogListItem label="The Owl Mountain Network:">
            Interconnected tunnel systems at Osówka, Włodarz, Rzeczka, and Soboń, featuring multi-story concrete reinforced command bunkers and testing facilities.
          </BlogListItem>
          <BlogListItem label="The Blasted Entrances:">
            In May 1945, as Red Army vanguard units entered Lower Silesia, retreating German engineering corps systematically detonated high explosives at tunnel portals and flooded lower levels, sealing miles of underground corridors beneath millions of tons of collapsed mountain rock.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: The Staggering Cargo */}
      <BlogSection title="The Lost Trove of the Third Reich">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For decades, declassified Allied intelligence reports, Soviet interrogation transcripts, and Polish post-war security files have speculated on the contents sealed inside the armored train:
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The primary cargo is believed to be the gold bullion reserves of the Breslau Reichsbank branch—estimated at over <strong>300 metric tons of gold bars</strong>, gold coinage, and foreign currency reserves collected from across Silesia. Alongside the bullion were hundreds of crates containing priceless historical artifacts, rare coin collections, antique silver, and private family jewelry seized by the regime.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          More tantalizing still are persistent rumors connecting the train to the world-renowned <strong>Amber Room</strong> (<em>Bernsteinzimmer</em>). The legendary six-ton chamber of carved amber, gold leaf, and mirrors—stolen from the Catherine Palace near Saint Petersburg—was last documented being packed into crates at Königsberg Castle in late 1944. Many researchers believe the amber panels were evacuated to Lower Silesia and stowed in the sealed subterranean vaults of Project Riese.
        </p>
      </BlogSection>

      {/* Section 4: Documented Inventory Table */}
      <BlogSection title="Estimated Inventory of the Nazi Gold Train">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Based on historical bank records, wartime evacuation orders, and post-war archival investigations, the estimated assets aboard the missing convoy include:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Asset Category</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Description</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Origin / Provenance</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Modern Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Reichsbank Gold Bullion</td>
                  <td className="py-2.5 px-3 sm:px-4">Over 300 metric tons of refined gold ingots &amp; coinage</td>
                  <td className="py-2.5 px-3 sm:px-4">Reichsbank Branch, Breslau</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$2,500,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Plundered European Art Collections</td>
                  <td className="py-2.5 px-3 sm:px-4">Crates of Old Master paintings, antique tapestries, &amp; sculptures</td>
                  <td className="py-2.5 px-3 sm:px-4">Museums across Poland &amp; Ukraine</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$1,000,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The Amber Room Panels (Alleged)</td>
                  <td className="py-2.5 px-3 sm:px-4">Six tons of carved amber wall mosaics, gemstones, &amp; mirrors</td>
                  <td className="py-2.5 px-3 sm:px-4">Catherine Palace, Tsarskoye Selo</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless ($500M+)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Industrial Gemstones &amp; Platinum</td>
                  <td className="py-2.5 px-3 sm:px-4">Uncut industrial diamonds, platinum bars, &amp; rare metals</td>
                  <td className="py-2.5 px-3 sm:px-4">Silesian Industrial Concerns</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$250,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Secret Technological Archives</td>
                  <td className="py-2.5 px-3 sm:px-4">Classified experimental military blueprints, rocketry files, &amp; data</td>
                  <td className="py-2.5 px-3 sm:px-4">German Ministry of Armaments</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$100,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The 2015 Global Media Sensation */}
      <BlogSection title="The 2015 Sensation: The Hunt at Kilometer 65">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In August 2015, the legend of the Gold Train exploded onto the world stage. Two amateur explorers—Piotr Koper of Poland and Andreas Richter of Germany—announced through legal counsel that they had pinpointed the exact location of the buried armored train using advanced ground-penetrating radar (GPR) along the railway embankment at <strong>Kilometer 65</strong> of the Wrocław–Wałbrzych line.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The claim triggered unprecedented international media coverage. Poland&apos;s deputy culture minister stated on live television that he was &quot;99 percent sure the train exists.&quot; Thousands of treasure seekers, television crews, and tourists flooded into Wałbrzych. The Polish Army deployed military combat engineers and bomb-disposal specialists to sweep the forested railway cutting for booby traps and unexploded ordnance.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          In August 2016, a privately funded team conducted deep exploratory excavations at Kilometer 65, excavating hundreds of tons of soil and drilling boreholes. While the team uncovered an underground collapsed rock cavity rather than an intact train at that precise spot, subsequent geological surveys confirmed anomalous underground voids and unmapped chambers along nearby slopes.
        </p>
      </BlogSection>

      {/* Section 6: The Unfinished Mystery */}
      <BlogSection title="The Unfinished Mystery of the Owl Mountains">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Today, vast portions of Project Riese remain inaccessible and unexplored. Only a fraction of the total estimated tunnel volume has been cleared of rubble and made safe for historians. Millions of cubic meters of rock blasted down during the final days of the war remain undisturbed, and deep subterranean water levels conceal submerged railway tracks and rail cars.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Equipped with 3D laser scanning, seismic sensors, and borehole cameras, scientific expeditions and historical societies continue to probe the dark mountain depths. Whether hidden inside a sealed railway spur beneath Książ Castle or entombed within the collapsed galleries of the Owl Mountains, The Nazi Gold Train remains one of modern history&apos;s most captivating and persistent unsolved mysteries.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

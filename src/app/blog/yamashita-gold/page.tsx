import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: "Yamashita's Gold | Legends Troves",
  description: "In the closing months of World War II, the Japanese military buried billions in plundered Asian bullion, sacred antiquities, and a one-ton golden Buddha across a subterranean labyrinth of booby-trapped Philippine tunnels.",
};

export default function YamashitaGoldPage() {
  return (
    <BlogLayout
      category="land"
      title="Yamashita's Gold"
      imageSrc="/images/yamashitas-gold.jpg?v=2"
      imageAlt="Inside a subterranean WWII Japanese bunker tunnel, a massive one-tonne golden Buddha statue surrounded by stacks of gold bullion bars, samurai swords, and human skeletal remains"
    >
      {/* Section 1: Operation Golden Lily and the Plunder of Asia */}
      <BlogSection title="Operation Golden Lily: The Systematic Looting of Asia">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the dark crucible of World War II, while Imperial Japanese armies swept across Southeast Asia, a shadowy organization operated in the slipstream of combat with cold, methodical efficiency. Its codename was <strong>Kin no Yuri</strong> (<em>Golden Lily</em>). Conceived under the direct oversight of Emperor Hirohito&apos;s brother, Prince Yasuhito Chichibu, alongside Prince Tsuneyoshi Takeda, the mission was unprecedented in human history: the systematic expropriation of sovereign wealth from twelve conquered Asian nations.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Golden Lily teams stripped the central bank vaults of China, Hong Kong, Malaya, Singapore, Burma, the Dutch East Indies, and the Philippines. Beyond gold bullion, the plunder included century-old solid jade carvings, diamond reliquaries from Buddhist monasteries, sacred temple bells, ancient dynastic crowns, and the private hoards of Southeast Asia&apos;s wealthiest merchant dynasties. The ultimate destination was Tokyo—to finance the empire&apos;s eternal war effort and guarantee imperial dynasty dominance for centuries to come.
        </p>
      </BlogSection>

      {/* Section 2: The Bottleneck in the Philippines */}
      <BlogSection title="The Philippine Trap &amp; General Yamashita&apos;s Mountain Stand">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          By 1944, Manila had become the grand staging depot for the Golden Lily treasury. Flotillas of merchant vessels and naval escorts shuttled tons of plundered cargo into Manila Bay, awaiting onward passage through the South China Sea. But as American naval air power surged and Allied fleet submarines established an iron blockade along the Luzon Strait, Japan&apos;s maritime lifeline was severed. Cargo ships attempting the northward run were torpedoed and sent to the ocean floor.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          In October 1944, General <strong>Tomoyuki Yamashita</strong>—the celebrated &quot;Tiger of Malaya&quot;—arrived to take command of the Japanese 14th Area Army. With Allied forces preparing to land on Leyte, Yamashita received top-secret imperial instructions: the treasure could not leave the Philippines, and it could never be allowed to fall into American hands.
        </p>
        <BlogList>
          <BlogListItem label="The Cordillera Mountain Fortresses:">
            Yamashita abandoned the defense of open coastal cities, retreating into the rugged, mist-shrouded Cordillera Central and Sierra Madre mountain ranges of northern Luzon to fight a protracted war of attrition.
          </BlogListItem>
          <BlogListItem label="172 Underground Vault Complexes:">
            Under the supervision of Prince Takeda and elite Japanese naval engineering corps, vast subterranean vaults, natural karst caverns, and deep trench bunkers were surveyed and excavated across Luzon, the Visayas, and Mindanao.
          </BlogListItem>
          <BlogListItem label="The Sacred Stashes:">
            Beyond standard bullion ingots, entire chambers were filled with irreplaceable cultural treasures, including antique samurai swords (*katana*) of high-ranking commanders, gem-studded regalia, and priceless religious icons.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: Entombed Laborers & Lethal Traps */}
      <BlogSection title="Entombed Secrets &amp; Lethal Booby Traps">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The engineering required to construct these subterranean vaults was monumental. Thousands of Allied prisoners of war, conscripted Filipino laborers, and Javanese civilian workers were forced into round-the-clock manual excavation through dense granite and volcanic shale. Heavy timber beams reinforced the narrow galleries, while steel rails carried wooden munitions crates packed with solid gold bars deep into mountain bowels.
        </p>
        <blockquote className="my-4 pl-4 border-l-4 border-[#D4AF37] italic text-sm sm:text-base text-[#2C2504]/95 bg-[#D8D1B6]/30 py-3 rounded-r-lg">
          &quot;When the final gold crates were stacked and the inventory seals stamped, the commanding officers toasted the Emperor inside the main chamber. At midnight, as the laborers slept, Japanese engineers ignited hundreds of pounds of picric acid explosives and 500-pound aerial bombs at the tunnel mouths. The blast collapsed thousands of tons of mountain rock, entombing the workers and junior officers forever within the vault.&quot;
          <span className="block mt-1 font-semibold not-italic text-xs sm:text-sm text-[#2C2504]/80">
            — Declassified intelligence debriefing of Filipino guerrilla scouts, Northern Luzon, 1946
          </span>
        </blockquote>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          To ensure that salvage by invading forces was impossible, Japanese military engineers armed the approaches with diabolical countermeasures:
        </p>
        <BlogList>
          <BlogListItem label="Hydrostatic Aquifer Traps:">
            False drainage pipes engineered to breach subterranean river channels if drilled incorrectly, drowning treasure hunters in millions of gallons of pressurized groundwater.
          </BlogListItem>
          <BlogListItem label="Poison Gas Canisters:">
            Pressurized glass vials of hydrogen cyanide and mustard gas wired to tension tripwires buried beneath loose scree and false flooring.
          </BlogListItem>
          <BlogListItem label="Unexploded Aerial Ordnance:">
            500-pound aircraft bombs balanced delicately on timber counterweights designed to trigger sympathetic chain detonations if main support pilings were shifted.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 4: Documented Manifest Table */}
      <BlogSection title="Accounting for the Golden Lily Hoard in the Philippines">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Historical investigations, wartime shipping manifests, and subsequent international court filings document the staggering scale of the wealth hidden throughout the Philippine archipelago:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Treasure Component</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Contents</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Estimated Quantity / Value</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Historical Fate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">The Roxas Golden Buddha</td>
                  <td className="py-2.5 px-3 sm:px-4">22-karat solid cast Buddha with detachable head filled with uncut diamonds</td>
                  <td className="py-2.5 px-3 sm:px-4">~1 Metric Ton (Priceless artifact)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Discovered 1971; seized by Ferdinand Marcos</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Baguio Hospital Vault</td>
                  <td className="py-2.5 px-3 sm:px-4">Stacks of stamped gold bullion ingots, samurai swords, skeletal guards</td>
                  <td className="py-2.5 px-3 sm:px-4">Thousands of bars ($22B+ court ruling)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Partially recovered; confirmed by Hawaii legal verdict</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Teresa 2 &amp; Rizal Caverns</td>
                  <td className="py-2.5 px-3 sm:px-4">Buried bullion crates, platinum ingots, and antique cultural relics</td>
                  <td className="py-2.5 px-3 sm:px-4">Hundreds of metric tons</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Allegedly tapped by post-war recovery syndicates</td>
                </tr>
                <tr className="bg-[#D4AF37]/10 font-bold">
                  <td className="py-2.5 pr-3 sm:pr-4 text-[#8C6D14]">Unrecovered Mountain Vaults</td>
                  <td className="py-2.5 px-3 sm:px-4 text-[#8C6D14]">150+ subterranean chambers in Cordillera &amp; Sierra Madre jungles</td>
                  <td className="py-2.5 px-3 sm:px-4 text-[#8C6D14]">Billions in gold, gems &amp; sacred artifacts</td>
                  <td className="py-2.5 pl-3 sm:pl-4 text-[#8C6D14]">Sealed behind collapsed tunnels and booby traps</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Rogelio Roxas Breakthrough (1971) */}
      <BlogSection title="The Rogelio Roxas Discovery: Proof Beneath Baguio City">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For twenty-six years after the surrender of Imperial Japan, skepticism surrounded Yamashita&apos;s gold, dismissed by academics as wartime folklore. That perception was shattered on January 24, 1971, by a 27-year-old locksmith and amateur treasure hunter named <strong>Rogelio Roxas</strong>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Armed with an authentic hand-drawn Japanese map provided by the son of a former imperial soldier and aided by local laborers, Roxas spent months tunneling into the hillside near the Baguio General Hospital. Blasting through concrete bulkheads and layers of compacted volcanic earth, the team broke through into a dark subterranean chamber.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          When Roxas thrust his carbide lantern into the blackness, the light reflected off a spectacle that defied imagination: twenty-four stacks of gold bullion bars, wooden crates stamped with Japanese naval seals, antique samurai officer swords, and the human skeletal remains of Japanese guards slumped across the dirt floor. Dominating the center of the vault stood a magnificent, one-ton solid gold Buddha statue. When Roxas later inspected the statue at his workshop, he unscrewed its detachable neck to reveal a hollow inner chamber containing velvet packets brimming with uncut diamonds.
        </p>
      </BlogSection>

      {/* Section 6: Roxas v. Marcos Legal Verdict */}
      <BlogSection title="Roxas v. Marcos: A Legal Verdict on the Treasure">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Roxas&apos;s triumph turned into a waking nightmare. Within weeks of the discovery, news of the Golden Buddha reached Malacañang Palace. On the night of April 5, 1971, heavily armed agents of the National Bureau of Investigation and President <strong>Ferdinand Marcos&apos;s</strong> elite security force raided Roxas&apos;s home at gunpoint, seizing the Golden Buddha, seventeen gold bars, and his excavation maps.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          When Roxas publicly accused the president of theft, he was arrested, imprisoned in military barracks, and subjected to horrific torture—including electrical shocks and beatings—to force him into signing affidavits renouncing his discovery.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Following Marcos&apos;s exile to Hawaii in 1986, Roxas and the Golden Buddha Corporation filed a monumental lawsuit in the United States District Court of Hawaii. In 1996, after reviewing extensive metallurgical analyses, eyewitness depositions, and CIA intelligence reports, a jury returned a historic verdict: awarding Roxas&apos;s estate <strong>$22 billion in damages</strong> (later upheld in part by the Hawaii Supreme Court at $13.3 billion). It remains the largest civil judgment in world history—establishing in an American court of law that Yamashita&apos;s treasure was not a myth, but a physical reality.
        </p>
      </BlogSection>

      {/* Section 7: Japanese Marker Codes & Underground Cartography */}
      <BlogSection title="Decoding the Markers: The Cartography of Secrecy">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The Imperial Japanese military did not leave the locations of these subterranean fortunes to chance. Highly trained military cartographers etched an intricate language of coded glyphs into the landscape, transforming the jungle into an encrypted map:
        </p>
        <BlogList>
          <BlogListItem label="Granite Carvings &amp; Petroglyphs:">
            Deep chisel incisions on riverside boulders and cliff faces indicating directional compass azimuths, depth measurements in imperial feet, and distance to tunnel portals.
          </BlogListItem>
          <BlogListItem label="The Sacred Turtle (Kame):">
            In Japanese military symbology, a turtle carapace carved into living rock signaled a vault situated directly beneath the water table or protected by hydrostatic flood traps.
          </BlogListItem>
          <BlogListItem label="Modified Century-Old Trees:">
            Engineers deliberately grafted branches of indigenous balete (banyan) trees into unnatural right angles to serve as living, permanent triangulation reference points.
          </BlogListItem>
          <BlogListItem label="Deceptive Decoy Signs:">
            Carefully placed markers deliberately designed to deceive unauthorized diggers into side tunnels rigged with collapsing roofs and lethal aerial bombs.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 8: The Enduring Riddle of the Philippine Wilderness */}
      <BlogSection title="The Enduring Riddle of the Philippine Wilderness">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          More than eight decades after General Yamashita was tried and executed in Manila in 1946 without ever disclosing the secret locations of Golden Lily, the shadow of his lost treasure continues to hang over the world. Declassified documents, private Swiss bank trust disclosures, and recurring discoveries in the Philippine highlands suggest that only a fraction of the Asian loot was ever recovered.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Deep within the impenetrable rainforests of the Sierra Madre and the treacherous caverns of Luzon, dozens of subterranean vaults remain sealed under tons of blasted mountain rock—silent tombs of gold, samurai steel, and sacred relics waiting beneath the earth.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

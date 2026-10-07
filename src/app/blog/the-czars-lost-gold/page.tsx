import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: "The Czar's Lost Gold | Legends Troves",
  description: "During the bloody chaos of the Russian Civil War, hundreds of tons of imperial Tsarist bullion vanished aboard Admiral Kolchak's armored trains along the icy cliffs of Lake Baikal.",
};

export default function TheCzarsLostGoldPage() {
  return (
    <BlogLayout
      category="water"
      title="The Czar's Lost Gold"
      imageSrc="/images/the-czars-lost-gold.jpg?v=3"
      imageAlt="Sunken Imperial Russian train wagon resting on the rocky floor of Lake Baikal beneath cracked winter ice, with crates spilling imperial gold bullion and coins into the deep abyss"
    >
      {/* Section 1: The Evacuation of the Romanov Empire's Bullion */}
      <BlogSection title="The Evacuation of the Romanov Imperial Treasury">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the summer of 1914, on the eve of World War I, the <strong>Russian Empire</strong> held the largest sovereign gold reserve on the face of the Earth. Safely locked in the fortified subterranean vaults of the Imperial State Bank in Saint Petersburg, the hoard comprised over <strong>1,300 metric tons</strong> of pure bullion ingots, bags of newly minted double-headed eagle gold rubles, diamond-studded church reliquaries, and historic diplomatic treasures accumulated by the Romanov dynasty over three hundred years.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          As Imperial German armies pressed eastward across Poland and threatened the Baltic approaches, Czar Nicholas II ordered the empire&apos;s gold quietly evacuated by rail into the deep Russian hinterland. Roughly half of the imperial bullion was dispatched hundreds of miles east to the ancient citadel of <strong>Kazan</strong> on the Volga River, tucked behind heavy stone ramparts far from front-line artillery. When the Russian Revolution ignited in 1917 and the Bolsheviks under Vladimir Lenin seized power in Moscow, the vast Kazan reserve remained in the crosshairs of every warring faction.
        </p>
      </BlogSection>

      {/* Section 2: The Golden Echelon & Kolchak's Retreat */}
      <BlogSection title="The Golden Echelon &amp; Admiral Kolchak&apos;s White Army">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In August 1918, during the opening fury of the Russian Civil War, an anti-Bolshevik rebel force composed of the <strong>Czechoslovak Legion</strong> and White Guard officers executed a daring amphibious assault across the Volga and captured Kazan. Inside the bank vaults, the soldiers discovered an unimaginable fortune: roughly <strong>500 metric tons</strong> of state gold valued at more than 650 million gold rubles.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The treasure was promptly loaded onto steam barges and transferred eastward to Omsk in Siberia, where Vice-Admiral <strong>Alexander Kolchak</strong> had established an anti-Bolshevik government, declaring himself the <em>&quot;Supreme Ruler of All Russia.&quot;</em> Protected by armored railway cars mounted with Maxim machine guns and naval cannon, this rolling fortune became legendary as <strong>The Golden Echelon</strong> (Train No. 58).
        </p>
        <BlogList>
          <BlogListItem label="Weapons for Gold:">
            Kolchak leveraged hundreds of crates of bullion to purchase artillery, rifles, uniforms, and ammunition from foreign Allied powers, dispatching shipments across the Pacific to Great Britain, France, the United States, and Japan.
          </BlogListItem>
          <BlogListItem label="The Red Offensive:">
            By autumn 1919, the Red Army commanded by Mikhail Frunze mounted a relentless Siberian counter-offensive. Outgunned and facing mutiny among peasant conscripts, Kolchak ordered a desperate retreat eastward along the single-track Trans-Siberian Railway toward Irkutsk and the Pacific port of Vladivostok.
          </BlogListItem>
          <BlogListItem label="The Siberian Frozen Hell:">
            As winter set in, temperatures plummeted past <strong>-45°C (-49°F)</strong>. Coal locomotives froze solid, telegraph wires snapped under ice loads, and dozens of military refugee trains became snarled in a monumental 1,500-mile traffic jam across the Siberian taiga.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: The Great Siberian Ice March & Lake Baikal's Chasm */}
      <BlogSection title="The Great Siberian Ice March &amp; Lake Baikal&apos;s Chasm">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          By January 1920, the retreat descended into apocalyptic chaos. With coal supplies exhausted and rail lines sabotaged by Bolshevik partisans, White Army general <strong>Vladimir Kappel</strong> led hundreds of thousands of freezing soldiers, Cossack horsemen, women, and children on foot across the frozen wilderness in what became known as the <strong>Great Siberian Ice March</strong> (*Velikiy Sibirskiy Ledyanoy Pokhod*).
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Blocking their eastward flight stood <strong>Lake Baikal</strong>—the oldest, deepest, and most voluminous freshwater lake on Earth, plunging to an unfathomable depth of 1,642 meters (5,387 feet). While the Circum-Baikal Railway hugged the sheer granite cliffs along the lake&apos;s southern littoral through 39 blast-hewn tunnels, parts of the track were blocked by derailed carriages and guerrilla barricades.
        </p>
        <blockquote className="my-4 pl-4 border-l-4 border-[#D4AF37] italic text-sm sm:text-base text-[#2C2504]/95 bg-[#D8D1B6]/30 py-3 rounded-r-lg">
          &quot;Horse-drawn sledges loaded with iron chests of state bullion ventured out onto the wind-swept, groaning ice. Ferocious arctic gales screamed across the chasm, opening massive black fissures (*stanovye shcheli*) in the meter-thick ice. Heavily burdened wagons and freezing pack horses slipped into the abyssal depths, swallowed forever in water colder than death.&quot;
          <span className="block mt-1 font-semibold not-italic text-xs text-[#2C2504]/75">
            — Eyewitness memoirs of White Guard Cossack survivors, Harbin, 1928
          </span>
        </blockquote>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Simultaneously, persistent regional accounts describe a train accident near <strong>Cape Polovinny</strong>, where an armored wagon carrying imperial bullion careened off a precarious cliffside embankment into the lake, its heavy iron freight plunging straight down the near-vertical underwater precipice.
        </p>
      </BlogSection>

      {/* Section 4: Accounting for the Missing Gold (Table) */}
      <BlogSection title="Accounting for the Romanov Imperial Gold (1914–1920)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Official Soviet audits, Allied bank manifests, and post-war White Army records reveal a glaring discrepancy of missing tons that was never solved:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Stage / Transaction</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Location &amp; Date</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Approximate Quantity</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Historical Fate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Kazan Bank Vaults Captured</td>
                  <td className="py-2.5 px-3 sm:px-4">Kazan, August 1918</td>
                  <td className="py-2.5 px-3 sm:px-4">~505 Metric Tons</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Seized by Czech Legion &amp; White Guards</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Allied Arms Purchases</td>
                  <td className="py-2.5 px-3 sm:px-4">Omsk/Vladivostok, 1918–1919</td>
                  <td className="py-2.5 px-3 sm:px-4">~68 Metric Tons</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Shipped to British, French &amp; Japanese banks</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Recovered by the Bolsheviks</td>
                  <td className="py-2.5 px-3 sm:px-4">Irkutsk, March 1920</td>
                  <td className="py-2.5 px-3 sm:px-4">~314 Metric Tons (409 boxes)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Returned to Soviet State Bank in Moscow</td>
                </tr>
                <tr className="bg-[#D4AF37]/10 font-bold">
                  <td className="py-2.5 pr-3 sm:pr-4 text-[#8C6D14]">The Missing Baikal Hoard</td>
                  <td className="py-2.5 px-3 sm:px-4 text-[#8C6D14]">Trans-Siberian / Lake Baikal</td>
                  <td className="py-2.5 px-3 sm:px-4 text-[#8C6D14]">~123–182 Metric Tons</td>
                  <td className="py-2.5 pl-3 sm:pl-4 text-[#8C6D14]">Vanished into the abyss / Sunk</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Surrender & Execution of Admiral Kolchak */}
      <BlogSection title="Treachery at Irkutsk: The Death of the Supreme Ruler">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          By early February 1920, the Czechoslovak Legion held undisputed command of the Trans-Siberian line around Baikal. Desperate to secure safe passage for their 50,000 troops out of Russia via Vladivostok, the Czech commanders entered secret negotiations with the local Bolshevik revolutionary committee in Irkutsk.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In a fateful bargain of survival, the Czechs agreed to hand over Admiral Kolchak and the remaining cars of the Golden Echelon in exchange for unhindered transit to the Pacific. On February 7, 1920, by order of Vladimir Lenin, Admiral Kolchak was executed before a firing squad at dawn on the banks of the frozen Ushakovka River. His corpse was pushed through a hole in the ice into the rushing Angara River—a river that drains directly out of Lake Baikal.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          When Soviet commissars tallied the train cars handed over by the Czechs, they recorded <strong>409 boxes</strong> of gold bullion. Yet Kolchak&apos;s own earlier audit logs noted more than <strong>500 boxes</strong> loaded onto the convoy. Hundreds of ingots, imperial coin sacks, and private Romanov jewelry caskets had dissolved into the Siberian winter.
        </p>
      </BlogSection>

      {/* Section 6: Mir Submersibles Archaeological Exploration */}
      <BlogSection title="Subsea Clues: The Mir Submersibles Discovery (2008–2010)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For nearly a century, Soviet authorities dismissed reports of Kolchak&apos;s lost gold in Lake Baikal as romantic folklore designed to embellish White Army legends. However, in 2008, the <em>Fund for Protection of Lake Baikal</em> launched a multi-year deep-sea scientific expedition utilizing Russia&apos;s legendary <strong>Mir-1</strong> and <strong>Mir-2</strong> deep-diving submersibles (the same submersibles used to film the RMS <em>Titanic</em>).
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Descending along the submerged tectonic drop-offs near the 81st kilometer of the Circum-Baikal Railway, the research submersibles made startling discoveries:
        </p>
        <BlogList>
          <BlogListItem label="Twisted Railway Wreckage:">
            At a depth of roughly 400 meters (1,300 feet), the submersibles&apos; halogen searchlights illuminated fragments of an early 20th-century Russian rail carriage, mangled metal frames, and vintage ammunition boxes lying scattered down an underwater scree slope.
          </BlogListItem>
          <BlogListItem label="Glints of Golden Bullion:">
            In August 2010, at a crushing depth of 1,000 meters (3,280 feet) near Cape Tolsty, submersibles photographed rectangular metallic objects displaying a characteristic yellowish metallic luster, tightly wedged in deep rock crevices between fractured granite boulders.
          </BlogListItem>
          <BlogListItem label="The Unyielding Chasm:">
            Due to the extreme depth, violent underwater sediment shifts, and the sheer impossibility of maneuvering mechanical manipulator arms into the narrow crevices, the expedition was unable to extract the objects before their research season closed.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 7: The Silent Keeper of Imperial Secrets */}
      <BlogSection title="The Silent Keeper of Imperial Secrets">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Today, Lake Baikal is protected as a UNESCO World Heritage site, holding 20% of the world&apos;s unfrozen surface freshwater. Its crystalline waters, famous for clarity extending to depths of over 40 meters, plunge into near-bottomless tectonic trenches where pressure exceeds 160 atmospheres.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Whether the missing 150 metric tons of Tsarist bullion rest buried beneath silt on Baikal&apos;s abyssal bed, remain hidden in secret limestone caverns along the Angara headwaters, or were looted into private hands across the Asian continent, <strong>The Czar&apos;s Lost Gold</strong> remains one of history&apos;s greatest unresolved treasure mysteries—forever guarded by the howling winds and sapphire ice of Siberia.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

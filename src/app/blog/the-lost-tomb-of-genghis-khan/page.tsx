import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Lost Tomb of Genghis Khan | Legends Troves',
  description: 'Hidden beneath the sacred peaks of the Khentii Mountains in Mongolia lies the undiscovered tomb of Genghis Khan, protected for eight centuries by blood oaths, a diverted river, and ancient curses.',
};

export default function TheLostTombOfGenghisKhanPage() {
  return (
    <BlogLayout
      category="land"
      title="The Lost Tomb of Genghis Khan"
      imageSrc="/images/the-lost-tomb-of-genghis-khan.jpg"
      imageAlt="Mystical subterranean burial chamber of Genghis Khan with white horsetail spirit banners, gold armor, and chests of Eurasian conquest treasures in Mongolia"
    >
      {/* Section 1: The Passing of the World Conqueror */}
      <BlogSection title="The Passing of the World Conqueror (1227)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In August 1227, at the age of approximately sixty-five, <strong>Genghis Khan</strong> (born <em>Temüjin</em>) passed away during the final siege of Yinchuan, the capital of the Tangut kingdom of Western Xia. In less than three decades, the orphaned son of a poisoned steppe chieftain had forged nomadic tribes into an unstoppable military juggernaut, carving out the contiguous land empire that stretched from the Sea of Japan to the gates of Central Europe.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Yet, having conquered more territory than Alexander the Great, Julius Caesar, and Napoleon combined, Genghis Khan harbored no desire for the vainglorious stone pyramids or colossal above-ground mausoleums favoured by Western and Chinese emperors. Deeply rooted in the shamanic traditions of <strong>Tengrism</strong>, the Khan believed that human vanity must bow before <em>Mönkh Khökh Tenger</em>—the Eternal Blue Sky. On his deathbed, he issued a chilling final decree: he was to be laid to rest in an unmarked grave, his burial enveloped in absolute, eternal secrecy.
        </p>
      </BlogSection>

      {/* Section 2: The Bloodstained Trail of Total Secrecy */}
      <BlogSection title="The Bloodstained Trail of Total Secrecy">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          To ensure that no foe could desecrate his corpse or plunder the imperial funeral spoils, the Great Khan&apos;s most trusted generals executed one of the most ruthless cover-up operations in recorded military history.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Accounts preserved by the Venetian explorer <strong>Marco Polo</strong> and the Persian imperial historian <strong>Rashid al-Din Hamadani</strong> in his 14th-century masterwork <em>Jami al-Tawarikh</em> chronicle the terrifying journey of the funeral cortège:
        </p>
        <BlogList>
          <BlogListItem label="The Slaughter of Witnesses:">
            As an elite escort of 1,000 imperial keshik guards hauled the heavy funeral wagon across the thousands of miles from northern China back to the Mongolian homeland, they executed every single human being they encountered on the roads to ensure news of the Khan&apos;s death and path remained completely hidden.
          </BlogListItem>
          <BlogListItem label="The Thousand Trampling Steeds:">
            Upon reaching the secluded burial sanctuary, the Khan was interred deep beneath the earth inside a hollowed trunk of a sacred oak, surrounded by uncounted spoils of his Eurasian conquests. Immediately afterward, a cavalry detachment drove <strong>1,000 horses</strong> repeatedly over the burial grounds until every trace of disturbed soil was utterly obliterated.
          </BlogListItem>
          <BlogListItem label="The Diverted River &amp; Forest:">
            Nomadic oral traditions further recount that the imperial engineers diverted a river—often identified as a tributary of the Onon or Tuul—over the grave site, or planted a dense, labyrinthine grove of fast-growing birch and pine trees so that no human eye could ever locate the spot.
          </BlogListItem>
          <BlogListItem label="The Final Chain of Death:">
            To seal the secret forever, the burial laborers were executed by the funeral soldiers. Those soldiers were then slaughtered by an imperial escort regiment upon their return to camp, and those escorts were in turn eliminated by high commanders—utterly severing the mortal chain of memory.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: Ikh Khorig - The Great Taboo of Burkhan Khaldun */}
      <BlogSection title="Ikh Khorig: The Great Taboo of Burkhan Khaldun">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Despite centuries of obfuscation, ancient texts and geographic clues point consistently toward one sacred geographical sanctuary: <strong>Burkhan Khaldun</strong> (&quot;God&apos;s Mountain&quot;), nestled within the rugged, roadless wilderness of the <strong>Khentii Mountain range</strong> in northeastern Mongolia.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In his youth, Temüjin had fled from Merkit raiders onto the forested slopes of Burkhan Khaldun, praying to the mountain for his life and declaring:
        </p>
        <blockquote className="my-4 pl-4 border-l-4 border-[#D4AF37] italic text-sm sm:text-base text-[#2C2504]/95 bg-[#D8D1B6]/30 py-3 rounded-r-lg">
          &quot;Mount Burkhan Khaldun has saved my life, a life worth no more than a louse... Every morning I will sacrifice to Burkhan Khaldun; every day I will pray to it. My sons and the sons of my sons shall hold it in their remembrance.&quot;
          <span className="block mt-1 font-semibold not-italic text-xs text-[#2C2504]/75">
            — The Secret History of the Mongols (c. 1240 AD)
          </span>
        </blockquote>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Following his burial, the Khan&apos;s successors declared an area of roughly 240 square kilometers around Burkhan Khaldun as the <strong>Ikh Khorig</strong>—the <em>&quot;Great Taboo.&quot;</em> For nearly eight centuries, this territory was quarantined under pain of immediate death. Only members of the royal <em>Golden Family</em> and an elite hereditary clan of Uriankhai warrior guards were permitted to set foot in the sanctuary. Even during the 20th-century Soviet era, the wilderness remained strictly militarized and off-limits to foreign archaeological exploration.
        </p>
      </BlogSection>

      {/* Section 4: Estimated Treasures of the Imperial Kurgan (Table) */}
      <BlogSection title="Estimated Treasures of the Imperial Kurgan">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          While Genghis Khan lived in modest wool yurts and wore simple felt robes, imperial custom and surviving medieval registers dictate that the greatest spoils of his subjugated kingdoms accompanied him into the afterlife:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Treasure Category</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Historical Provenance</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Contents</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Estimated Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Imperial Spirit Banners</td>
                  <td className="py-2.5 px-3 sm:px-4">Khamag Mongol confederation</td>
                  <td className="py-2.5 px-3 sm:px-4">The Nine White Horsetail Banners (*Sulde*), believed to house the Khan&apos;s warrior spirit</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Sacred National Relic</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Silk Road Royal Bullion</td>
                  <td className="py-2.5 px-3 sm:px-4">Jin Dynasty &amp; Khwarazmian Empire</td>
                  <td className="py-2.5 px-3 sm:px-4">Cast gold ingots stamped with imperial seals, sacks of Persian dinars, solid gold tableware</td>
                  <td className="py-2.5 pl-3 sm:pl-4">$1,000,000,000+</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Tributary Jade &amp; Gems</td>
                  <td className="py-2.5 px-3 sm:px-4">Khotan, Western Xia &amp; Samarkand</td>
                  <td className="py-2.5 px-3 sm:px-4">White nephrite jade carvings, raw Badakhshan lapis lazuli, uncut Burmese rubies</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless Antique Artifacts</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Celestial Weaponry &amp; Armor</td>
                  <td className="py-2.5 px-3 sm:px-4">Imperial Mongol Armory</td>
                  <td className="py-2.5 px-3 sm:px-4">Horn-and-sinew composite reflex bows, golden lamellar armor, gem-encrusted steel sabers</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Archaeological Masterpiece</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Curse of the Steppe Conquerors */}
      <BlogSection title="The Curse of the Steppe Conquerors">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Throughout Central Asia, the legend of Genghis Khan&apos;s tomb is irrevocably bound to an ancient prophecy: <em>&quot;If the grave of the Great Khan is ever opened, the world will drown in blood and ruin.&quot;</em>
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          This foreboding belief is underscored by a chilling historical parallel: the exhumation of <strong>Tamerlane (Timur)</strong> in Samarkand. On June 20, 1941, Soviet anthropologist Mikhail Gerasimov opened Timur&apos;s tomb in the Gur-e-Amir mausoleum, discovering an archaic inscription carved into the jade slab: <em>&quot;Whosoever opens my tomb shall unleash an invader more terrible than I.&quot;</em> Exactly two days later, on June 22, 1941, Nazi Germany launched Operation Barbarossa, igniting the deadliest invasion in Russian history.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          For modern Mongolians, the desire to leave Genghis Khan&apos;s grave undisturbed is not merely born of superstitious dread, but of deep spiritual reverence. To the people of Mongolia, Genghis Khan is not a tyrant or a museum curiosity, but the founding father of their nation, whose dignity and sacred rest must remain inviolate.
        </p>
      </BlogSection>

      {/* Section 6: High-Tech Satellite Archaeology */}
      <BlogSection title="Modern Satellite Archaeology &amp; Non-Invasive Quests">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Following the collapse of the Soviet Union in the 1990s, international curiosity sparked multiple archaeological expeditions to the Khentii Mountains:
        </p>
        <BlogList>
          <BlogListItem label="The Gurvan Gol Project (1990–1995):">
            A joint Mongolian-Japanese expedition utilized helicopters and ground magnetometers around the Three Rivers region (Onon, Kherlen, and Tuul), surveying over 3,500 historic burial mounds before cultural protests and public opposition led the Mongolian government to halt excavations.
          </BlogListItem>
          <BlogListItem label="National Geographic &amp; Crowdsourced Satellites (2010s):">
            Research scientist <strong>Dr. Albert Yu-Min Lin</strong> of UC San Diego pioneered non-destructive exploration, leveraging high-resolution satellite imagery, multi-spectral drone photography, and crowdsourced geospatial analysis. Over 10,000 online volunteers tagged potential burial mounds (*kurgan*) and stone enclosures across the Khentii mountains without turning a single spade of dirt.
          </BlogListItem>
          <BlogListItem label="Ground-Penetrating Radar Discoveries:">
            Scientists identified several extensive rectangular subterranean stone foundations on elevated mountain ridges, yet all exploration adhered strictly to non-invasive protocols to respect Mongolian sovereignty and spiritual beliefs.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 7: The Eternal Secret Under the Blue Sky */}
      <BlogSection title="The Eternal Secret Under the Blue Sky">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Today, Mount Burkhan Khaldun and its surrounding sacred landscape are inscribed as a <strong>UNESCO World Heritage Site</strong>, legally shielded from commercial development, invasive mining, and unapproved excavation.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Eight centuries after his burial party galloped across the taiga, Genghis Khan continues to triumph over archaeology, technology, and time itself. Sealed beneath pristine mountain pines, untracked river channels, and the vast expanse of the steppe, the resting place of the World Conqueror remains exactly as he willed it: silent, untouchable, and forever protected beneath the Eternal Blue Sky.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

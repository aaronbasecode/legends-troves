import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Imperial Seal of China | Legends Troves',
  description: 'Known as the Heirloom Seal of the Realm (Chuanguo Yuxi), this legendary jade seal was carved from the sacred Heshibi and endowed with the Mandate of Heaven before vanishing in 936 AD.',
};

export default function TheImperialSealOfChinaPage() {
  return (
    <BlogLayout
      category="land"
      title="The Imperial Seal of China"
      imageSrc="/images/the-imperial-seal-of-china.jpg"
      imageAlt="The Heirloom Seal of the Realm carved from sacred Heshibi jade with coiled imperial dragons and a gold-inlaid corner repair"
    >
      {/* Section 1: The Mandate of Heaven & The Jade of Bian He */}
      <BlogSection title="The Mandate of Heaven &amp; The Sacred Heshibi (221 BC)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In 221 BC, having vanquished the rival Warring States and united China under a single sovereign crown for the first time in history, King Zheng of Qin proclaimed himself <strong>Qin Shi Huang</strong>—the First Emperor. To legitimize an empire that encompassed &quot;All Under Heaven&quot; (<em>Tianxia</em>), he required an emblem far greater than ordinary crown regalia. He commanded the creation of a supreme artifact that would embody <strong>Tianming</strong>—the divine <em>Mandate of Heaven</em>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For this sacred task, the emperor selected the most legendary gemstone in ancient Chinese folklore: the <strong>Heshibi</strong> (和氏璧, &quot;The Jade Disc of Bian He&quot;). Centuries earlier during the Spring and Autumn period, a scholar named Bian He discovered an unpolished boulder containing celestial nephrite in the Chu mountains. After two successive kings chopped off Bian He&apos;s left and right feet for presenting what they believed to be ordinary rock, a third king ordered royal lapidaries to cut the stone open, uncovering a flawless, luminescent white-and-emerald jade of peerless perfection.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Imperial craftsman Sun Shou was commissioned to sculpt the block into a square measuring four Chinese inches on each side. The top was carved into a handle depicting <strong>five intertwining coiling dragons</strong>, symbolizing dominion over the five cardinal elements and directions. Upon the base, Prime Minister <strong>Li Si</strong> personally drafted eight characters in Small Seal Script (<em>Qin Zhuan</em>), carved with exquisite calligraphic precision:
        </p>
        <blockquote className="my-4 pl-4 border-l-4 border-[#D4AF37] italic text-sm sm:text-base text-[#2C2504]/95 bg-[#D8D1B6]/30 py-3 rounded-r-lg">
          &quot;受命於天，既壽永昌&quot;
          <span className="block mt-1 font-semibold not-italic text-xs sm:text-sm text-[#2C2504]/80">
            &quot;Having received the Mandate from Heaven, may the Emperor lead a long and prosperous life.&quot;
          </span>
          <span className="block mt-0.5 not-italic text-xs text-[#2C2504]/60">
            — Li Si, Prime Minister of the Qin Dynasty (221 BC)
          </span>
        </blockquote>
      </BlogSection>

      {/* Section 2: The Golden Corner of Empress Dowager Wang */}
      <BlogSection title="The Golden Corner: Defiance in the Weiyang Palace (9 AD)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The <strong>Heirloom Seal of the Realm</strong> (<em>Chuanguo Yuxi</em>, 傳國玉璽) quickly transcended its physical nature to become the metaphysical soul of the Chinese state. Without the seal, an emperor was dismissed as a mere pretender—a derided &quot;White-Board Emperor&quot; (<em>Baiban Huangdi</em>, 白板皇帝), ruling without the recognized blessing of heaven.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          This obsession with the seal precipitated its most famous physical modification in 9 AD. When court regent <strong>Wang Mang</strong> orchestrated a coup to usurp the Western Han throne and establish his short-lived Xin Dynasty, he dispatched his cousin to demand the sacred talisman from his aunt, Grand Empress Dowager <strong>Wang Zhengjun</strong>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Outraged by her nephew&apos;s treason, the seventy-nine-year-old matriarch unleashed a furious curse and violently hurled the jade seal onto the stone floor of the Weiyang Palace:
        </p>
        <BlogList>
          <BlogListItem label="The Fractured Corner:">
            The violent impact chipped off one of the seal&apos;s four bottom corners, an ominous omen that terrified the court astrologers and shook the usurper&apos;s confidence.
          </BlogListItem>
          <BlogListItem label="The Pure Gold Inlay:">
            Desperate to present the seal during his coronation, Wang Mang ordered imperial master goldsmiths to reconstruct the missing corner using intricately chased, pure molten gold.
          </BlogListItem>
          <BlogListItem label="The Indelible Hallmark:">
            For the next millennium, this distinctive gold corner repair served as the definitive, authenticating mark used by emperors, generals, and scholars to verify the genuine Heirloom Seal against countless royal imitations.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: The Three Kingdoms & The Well of Luoyang */}
      <BlogSection title="The Well of Luoyang &amp; The Chaos of the Three Kingdoms">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          As dynasties rose and fell in rivers of blood, the Heirloom Seal changed hands through some of the most dramatic episodes in Asian military history. During the twilight of the Han Dynasty in 189 AD, the ruthless warlord <strong>Dong Zhuo</strong> seized the imperial capital of Luoyang, ransacked the palaces, and put the ancient city to the torch as an allied coalition of regional warlords marched on the capital.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the smoke-choked rubble of the abandoned imperial compound, southern warlord <strong>Sun Jian</strong> ordered his soldiers to investigate an eerie, iridescent vapor rising from an ancient palace well:
        </p>
        <BlogList>
          <BlogListItem label="The Drowned Maiden:">
            Divers dredged up the intact, uncorrupted body of an imperial palace concubine who had drowned herself to escape the rampaging troops, clutching a brocade ribbon wrapped around her neck.
          </BlogListItem>
          <BlogListItem label="The Red Box:">
            Tied to the ribbon was a vermilion lacquer box containing the Heirloom Seal of the Realm, its gold-inlaid corner gleaming through the dark waters.
          </BlogListItem>
          <BlogListItem label="The Catalyst of Empires:">
            Sun Jian concealed his discovery, but secret intelligence leaked, igniting bitter feuds that directly accelerated the fracture of China into the legendary <strong>Three Kingdoms</strong> period (Wei, Shu, and Wu).
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mt-4 font-normal">
          The seal subsequently passed to warlord Yuan Shu, then to Cao Cao and the Cao Wei state, before descending through the Western Jin, the tumultuous Sixteen Kingdoms, the Northern and Southern Dynasties, and finally uniting under the golden era of the <strong>Sui and Tang Dynasties</strong>.
        </p>
      </BlogSection>

      {/* Section 4: Dynastic Timeline Table */}
      <BlogSection title="Historical Custody of the Heirloom Seal (221 BC – 936 AD)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Across eleven centuries, the Heirloom Seal survived thirty-five imperial regimes, multiple palace sieges, and foreign conquests:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Dynasty / Era</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Key Custodian</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Physical Condition &amp; Event</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Historical Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Qin Dynasty (221–206 BC)</td>
                  <td className="py-2.5 px-3 sm:px-4">Qin Shi Huang &amp; Li Si</td>
                  <td className="py-2.5 px-3 sm:px-4">Carved from Heshibi jade; 8 seal characters inscribed</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Creation of the Supreme Talisman</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Western Han (206 BC – 9 AD)</td>
                  <td className="py-2.5 px-3 sm:px-4">Liu Bang (Emperor Gaozu)</td>
                  <td className="py-2.5 px-3 sm:px-4">Surrendered by Ziying; housed in Weiyang Palace</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Foundational Han Dynastic Palladium</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Xin Dynasty (9–23 AD)</td>
                  <td className="py-2.5 px-3 sm:px-4">Wang Mang &amp; Empress Wang</td>
                  <td className="py-2.5 px-3 sm:px-4">Corner chipped on floor; inlaid with pure gold</td>
                  <td className="py-2.5 pl-3 sm:pl-4">The Iconic Gold Corner Repair</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Three Kingdoms (189–280 AD)</td>
                  <td className="py-2.5 px-3 sm:px-4">Sun Jian, Yuan Shu, Cao Pi</td>
                  <td className="py-2.5 px-3 sm:px-4">Retrieved from Luoyang well; transferred to Wei</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Subject of the Romance of the Three Kingdoms</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Tang Dynasty (618–907 AD)</td>
                  <td className="py-2.5 px-3 sm:px-4">Emperor Taizong &amp; Empress Wu</td>
                  <td className="py-2.5 px-3 sm:px-4">Stored in the Grand Imperial Treasury of Chang&apos;an</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Pinnacle of Imperial Chinese Power</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Later Tang (923–936 AD)</td>
                  <td className="py-2.5 px-3 sm:px-4">Emperor Li Congke</td>
                  <td className="py-2.5 px-3 sm:px-4">Taken into Xuanwu Tower during siege; consumed by fire</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Final Verifiable Historical Record</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Infernal Pyre of Xuanwu Tower */}
      <BlogSection title="The Doomed Pyre of Xuanwu Tower (936 AD)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The ultimate tragedy that plunged the Imperial Seal into the realm of myth unfolded in the winter of 936 AD, during the chaotic <strong>Five Dynasties and Ten Kingdoms</strong> period. Rebellious military governor Shi Jingtang secured the intervention of the formidable Khitan cavalry of the northern Liao Empire, agreeing to cede the strategic Sixteen Prefectures in exchange for imperial backing.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Trapped inside the palace citadel of Luoyang with enemy battering rams splintering the gates, the last emperor of the Later Tang, <strong>Li Congke</strong> (Emperor Fei), resolved that the most sacred relic of Chinese civilization would never fall into the hands of northern nomads or treacherous generals.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Li Congke assembled his empress, the imperial family, loyal court eunuchs, and the accumulated treasures of the Tang Dynasty inside the towering wooden <strong>Xuanwu Tower</strong> (Tower of Mysterious Prowess). Barricading the heavy cedar doors from within, the emperor tossed burning torches onto stockpiles of silk, oil, and resin:
        </p>
        <blockquote className="my-4 pl-4 border-l-4 border-[#2C2504]/40 py-2 italic text-xs sm:text-sm text-[#2C2504]/85 bg-[#D8D1B6]/30 rounded-r-lg">
          &quot;On the day of Xin-Chou, as the Khitan cavalry encircled the walls, Emperor Li Congke took the Heirloom Seal, climbed the Xuanwu Tower with his family, and perished in a roaring sea of flame. When the ashes grew cold, neither the emperor&apos;s remains nor the jade of heaven could be found.&quot;
          <span className="block mt-1 font-semibold not-italic text-[11px] sm:text-xs text-[#2C2504]/70">
            — Ouyang Xiu, Historical Records of the Five Dynasties (Xin Wudaishi)
          </span>
        </blockquote>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          When Shi Jingtang and his Khitan allies sifted through the smoldering ash, the Heirloom Seal of the Realm had vanished. It had endured for 1,157 years—and in a single night of fire and grief, the physical link to Qin Shi Huang was severed.
        </p>
      </BlogSection>

      {/* Section 6: Phantoms, Replicas, and Qianlong's Skepticism */}
      <BlogSection title="Centuries of Phantoms, Forgeries &amp; Qianlong's Verdict">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the centuries following the fire of Luoyang, the absence of the authentic seal cast a shadow over subsequent dynasties. Emperors were haunted by the knowledge that they ruled without the true Mandate stone:
        </p>
        <BlogList>
          <BlogListItem label="The Northern Song Discovery (1096 AD):">
            A farmer in Xiazhou unearthed a jade seal matching the ancient dimensions, which court scholars declared the genuine Qin artifact. Emperor Zhezong celebrated with nationwide amnesties, but when the Jurchen Jin dynasty sacked the capital of Kaifeng in the Jingkang Incident (1127 AD), the relic was hauled away into northern Manchuria, never to be seen again.
          </BlogListItem>
          <BlogListItem label="The Ming Dynasty Desperation (1368 AD):">
            When Hongwu Emperor Zhu Yuanzhang drove the Mongol rulers of the Yuan Dynasty out of Beijing, his primary objective was capturing the Heirloom Seal. He dispatched General Xu Da on three relentless military campaigns across the Gobi Desert to Karakorum specifically to recover the seal, but returned empty-handed, lamenting its loss as one of the great regrets of his reign.
          </BlogListItem>
          <BlogListItem label="Emperor Qianlong's Forensic Scrutiny (1740s):">
            During the Qing Dynasty, an antique dealer presented an exquisite jade seal complete with a gold-inlaid corner to Emperor Qianlong—one of history&apos;s most astute collectors and jade connoisseurs. After rigorous textual analysis, Qianlong determined the calligraphy was a Ming-era reproduction. In an imperial treatise, Qianlong famously concluded that a true Son of Heaven rules through moral virtue and the welfare of the people, not a talisman of stone.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 7: Where Lies the Jade of Heaven? Modern Archaeological Theories */}
      <BlogSection title="Where Lies the Jade of Heaven? Modern Archaeological Theories">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          More than a millennium after Li Congke&apos;s inferno, the true fate of the Imperial Seal remains one of the world&apos;s paramount archaeological enigmas. Modern researchers and antiquarians point to four compelling hypotheses:
        </p>
        <BlogList>
          <BlogListItem label="1. The Subterranean Vaults of Luoyang:">
            Prior to setting the Xuanwu Tower ablaze, loyal palace eunuchs or the emperor himself may have buried the seal inside a deep drainage tunnel or brick vault beneath the foundations of ancient Luoyang. Centuries of flooding by the Yellow River have blanketed these ruins in thick layers of alluvial silt that remain largely unexcavated.
          </BlogListItem>
          <BlogListItem label="2. Surviving the Inferno:">
            Nephrite jade withstands moderate heat, but will calcify and fracture at temperatures exceeding 900°C. However, the heavy pure gold corner repair and dense jade core could have survived in a charred, blackened state, buried among the tower&apos;s rubble and mistaken for an ordinary burnt cobble.
          </BlogListItem>
          <BlogListItem label="3. Carried into the Northern Steppe:">
            If Khitan reconnaissance troops or early Mongol riders secretly salvaged the seal from the ruins of Luoyang, it may have been transported deep into the grasslands of Inner Mongolia or the Altai Mountains, buried in an unmarked royal kurgan alongside nomad chieftains.
          </BlogListItem>
          <BlogListItem label="4. The Necropolis of Qin Shi Huang:">
            A radical fringe theory suggests that the seal destroyed in 936 AD was an early Han dynasty duplicate, while the genuine original Heshibi seal was secretly interred with Qin Shi Huang himself within the subterranean mercury rivers of his unexcavated mausoleum mound in Xi&apos;an.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mt-4 font-normal">
          Whether pulverized in the apocalyptic blaze of Xuanwu Tower, slumbering beneath the loess clay of the Central Plains, or waiting in the silence of a forgotten tomb, the Imperial Seal of China endures as the ultimate holy grail of Eastern archaeology—the lost stone that once held the cosmic destiny of an empire.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'Sword of Kusanagi | Legends Troves',
  description: 'Forged in divine myth and veiled in centuries of imperial secrecy, the Sword of Kusanagi (Kusanagi-no-Tsurugi) stands as the most revered and mysterious of Japan’s Three Imperial Regalia.',
};

export default function SwordOfKusanagiPage() {
  return (
    <BlogLayout
      category="land"
      title="Sword of Kusanagi"
      imageSrc="/images/sword-of-kusanagi.jpg"
      imageAlt="The legendary divine Japanese blade Kusanagi-no-Tsurugi resting on a ceremonial lacquer stand inside a sacred Shinto shrine sanctuary"
    >
      {/* Section 1: The Serpent's Tail & Divine Origin */}
      <BlogSection title="The Serpent's Tail: Mythological Genesis">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the foundational chronicles of ancient Japan—the 8th-century <em>Kojiki</em> (Record of Ancient Matters) and the <em>Nihon Shoki</em> (Chronicles of Japan)—the origin of the sword begins not at an earthly forge, but in the realm of celestial gods and primeval monsters.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Cast down from Takamagahara (the High Plain of Heaven) for his tempestuous defiance, the storm god <strong>Susanoo-no-Mikoto</strong> descended into the mist-shrouded province of Izumo along the Hi River. There, he encountered an elderly earthly deity and his wife weeping beside their daughter, Princess Kushinada-hime. For seven consecutive years, a terrifying behemoth—the <strong>Yamata no Orochi</strong>, an eight-headed, eight-tailed dragon whose mountainous body spanned eight valleys and eight peaks—had crawled from the dark waters each autumn to devour their daughters. Princess Kushinada was the last.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Promising to save the maiden in exchange for her hand in marriage, Susanoo prepared a lethal trap. He commanded the construction of a circular wooden palisade with eight gates, placing a great vat filled with eight-fold refined sake inside each opening. Enticed by the aroma, each of the dragon&apos;s monstrous heads drank deeply from a vat until the beast collapsed into a drunken slumber.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Susanoo drew his ten-span sword, the <em>Totsuka-no-Tsurugi</em>, and hacked the dragon into pieces, turning the Hi River crimson with blood. But as he sliced into the fourth tail of the slain monstrosity, his blade struck an unyielding, diamond-hard obstruction that notched the iron edge of his sword. Splitting the serpent&apos;s tail open, Susanoo unearthed a wondrous, pristine double-edged blade gleaming with celestial brilliance. Because thick clouds and torrential vapors had perpetually hovered over the serpent&apos;s lair, he christened the holy weapon <strong>Ame-no-Murakumo-no-Tsurugi</strong> (天叢雲剣, &quot;Heavenly Sword of Gathering Clouds&quot;).
        </p>
        <blockquote className="my-4 pl-4 border-l-4 border-[#D4AF37] italic text-sm sm:text-base text-[#2C2504]/95 bg-[#D8D1B6]/30 py-3 rounded-r-lg">
          &quot;When Susanoo sliced open the tail of the great serpent, his blade was nicked. Puzzled, he thrust in the point of his sword and split the flesh, discovering inside an extraordinary sword. Considering it a divine treasure, he presented it to the Sun Goddess in heaven.&quot;
          <span className="block mt-1 font-semibold not-italic text-xs sm:text-sm text-[#2C2504]/80">
            — Nihon Shoki (Chronicles of Japan, c. 720 AD)
          </span>
        </blockquote>
      </BlogSection>

      {/* Section 2: The Grass-Cutter & Prince Yamato Takeru */}
      <BlogSection title="The Plains of Suruga: Prince Yamato Takeru">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Recognizing the sword&apos;s otherworldly aura, Susanoo ascended to the heavens to present the weapon to his elder sister, <strong>Amaterasu Omikami</strong>, the supreme Sun Goddess. Generations later, when Amaterasu dispatched her grandson Ninigi-no-Mikoto to rule over the reed plains of Japan during the <em>Tenson Kōrin</em> (Heavenly Descent), she bestowed upon him three sacred talismans to legitimize the imperial dynasty forever: the mirror (<em>Yata no Kagami</em>), the jewel (<em>Yasakani no Magatama</em>), and the celestial sword.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The blade passed through the early imperial line until the reign of Emperor Keiko, who dispatched his formidable son, the legendary hero-warrior <strong>Prince Yamato Takeru</strong>, to subjugate rebellious clans across eastern Japan. Before departing, Yamato Takeru visited his aunt, Princess Yamato-hime, the high priestess of the Grand Shrine of Ise. Sensing imminent peril, she gifted him the divine sword along with a mysterious flint fire-striker bag.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          The priestess&apos;s foresight saved the prince&apos;s life in the wilds of Suruga Province (modern-day Shizuoka):
        </p>
        <BlogList>
          <BlogListItem label="The Grassland Ambush:">
            Treacherous local warlords invited Yamato Takeru to hunt deer across a vast savanna of towering prairie grasses, only to stealthily encircle the perimeter and set the plains ablaze with flaming arrows.
          </BlogListItem>
          <BlogListItem label="Cutting the Firestorm:">
            Trapped in a raging vortex of suffocating smoke and advancing fire, Yamato Takeru unsheathed the celestial sword. Striking with supernatural fury, the blade conjured howling gusts of wind that mowed down the burning grasses around him with effortless precision.
          </BlogListItem>
          <BlogListItem label="The Counter-Blaze:">
            Using the flint from his aunt&apos;s pouch, Yamato Takeru ignited the cut brush, and the sword&apos;s controlled winds turned the roaring firestorm back onto his ambushing enemies, consuming them entirely.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          In honor of this miraculous deliverance, the blade was renamed <strong>Kusanagi-no-Tsurugi</strong> (草薙の剣, &quot;The Grass-Cutting Sword&quot;), forever linking its name with warrior valor, elemental mastery, and divine protection of the imperial crown.
        </p>
      </BlogSection>

      {/* Section 3: The Three Regalia Overview (Table) */}
      <BlogSection title="The Three Sacred Treasures of Japan (Sanshu no Jingi)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Together, the Three Sacred Treasures form the metaphysical bedrock of the Japanese monarchy—the oldest continuous hereditary monarchy in human history:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Sacred Regalia</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Imperial Virtue</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Traditional Sanctuary</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Current Physical Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Kusanagi-no-Tsurugi (Sword)</td>
                  <td className="py-2.5 px-3 sm:px-4">Valor &amp; Martial Righteousness (勇)</td>
                  <td className="py-2.5 px-3 sm:px-4">Atsuta Shrine (Nagoya) &amp; Imperial Palace</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Enshrined; strictly unseen by mortals</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Yata no Kagami (Eight-Span Mirror)</td>
                  <td className="py-2.5 px-3 sm:px-4">Wisdom &amp; Absolute Truth (知)</td>
                  <td className="py-2.5 px-3 sm:px-4">Grand Shrine of Ise (Naiku)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Enshrined as Amaterasu&apos;s physical embodiment</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Yasakani no Magatama (Jewel)</td>
                  <td className="py-2.5 px-3 sm:px-4">Benevolence &amp; Compassion (仁)</td>
                  <td className="py-2.5 px-3 sm:px-4">Tokyo Imperial Palace (Three Palace Sanctuaries)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Original comma-shaped jade relic intact</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 4: The Sea of Shimonoseki & The Battle of Dan-no-ura */}
      <BlogSection title="The Abyss of Dan-no-ura: The Sword Lost to the Sea (1185 AD)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The most tragic and perplexing chapter in the sword&apos;s epic chronicle unfolded on April 25, 1185, during the cataclysmic naval <strong>Battle of Dan-no-ura</strong> in the narrow, turbulent Shimonoseki Strait. The battle marked the bloody finale of the Genpei War, pitting the doomed ruling Taira (Heike) clan against the ascendant Minamoto (Genji) samurai under Yoshitsune.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Aboard the flagship of the Taira fleet stood the child emperor, six-year-old <strong>Emperor Antoku</strong>, guarded by his grandmother, Lady Nii (Taira no Tokiko). As the Taira warships were shattered by archers and Minamoto warriors boarded the royal barge, defeat was total and inescapable.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Determined to deny their mortal enemies the triumph of capturing the sovereign of Japan or the divine regalia, Lady Nii made a fateful decision recorded in the tragic epic <em>The Tale of the Heike</em>:
        </p>
        <BlogList>
          <BlogListItem label="The Final Comfort:">
            Dressing the weeping boy emperor in ceremonial dove-grey robes and binding his hair, Lady Nii told him to turn east to bid farewell to the Sun Goddess at Ise, then west to recite the Nembutsu to Amida Buddha.
          </BlogListItem>
          <BlogListItem label="The Capital Beneath the Waves:">
            When the child innocently asked where she was taking him, Lady Nii wept and replied: <em>&quot;There is a capital city beneath the rolling waves&quot;</em> (波の下にも都の候ふぞ).
          </BlogListItem>
          <BlogListItem label="The Plunge:">
            Clasping the sacred sword firmly to her side and holding Emperor Antoku tightly in her arms, Lady Nii leaped over the gunwale into the swirling tidal whirlpools of the Hayatomo Strait, sinking immediately to the ocean bottom.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          Following the battle, Minamoto divers combed the seafloor. They successfully recovered the sacred mirror (which had remained aboard a secondary barge) and the jewel casket (which miraculously floated to the surface on its buoyant cedar box). But the sacred sword—heavy, forged of celestial metal, and swallowed by ferocious undersea currents—vanished into the abyssal depths forever.
        </p>
      </BlogSection>

      {/* Section 5: The Atsuta Enigma: Original or Replica? */}
      <BlogSection title="The Atsuta Enigma: Did the True Sword Drown?">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The apparent loss of the supreme imperial sword at Dan-no-ura triggered a profound existential crisis across medieval Japan. When Emperor Go-Toba ascended the Chrysanthemum Throne later that year, he was forced to conduct his enthronement without the sacred blade—an irregular coronation that haunted his turbulent reign.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          However, centuries of Shinto theology and imperial scholarship present a captivating paradox: <strong>Did the genuine Sword of Kusanagi ever leave Atsuta Shrine?</strong>
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Two major historical traditions explain the mystery:
        </p>
        <BlogList>
          <BlogListItem label="The Atsuta Shrine Sanctuary:">
            According to the ancient records of Atsuta Shrine in modern-day Nagoya, Prince Yamato Takeru left the original Kusanagi in the care of his beloved wife, Princess Miyazu-hime, before setting off on his final ill-fated mountain expedition. Following the prince&apos;s death, Miyazu-hime founded Atsuta Shrine in approximately 113 AD specifically to house and venerate the original weapon.
          </BlogListItem>
          <BlogListItem label="The Court Replica (Kata-shiro):">
            During the reign of Emperor Sujin (c. 1st century BC), the emperor was overcome with fear at living in direct proximity to the overpowering divine aura of the original treasures. He commissioned master craftsmen to forge a consecrated proxy (<em>kata-shiro</em>, 形代), transferring the original to Ise (and later Atsuta), while the court retained the spiritual copy.
          </BlogListItem>
          <BlogListItem label="The Second Court Sword:">
            If this tradition is accurate, the blade that drowned with Emperor Antoku at Dan-no-ura was the court proxy. In 1189 AD, the imperial court designated a sacred ceremonial sword gifted from the Grand Shrine of Ise as the new court proxy, which continues to be used in modern enthronement ceremonies today.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 6: Forbidden Eyes: The Edo Desecration & The Sacred Box */}
      <BlogSection title="Forbidden Sight: The Edo Desecration &amp; The Curse">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In Shinto tradition, looking directly upon the sacred body of a deity (<em>shintai</em>) is considered a grave, taboo desecration. Throughout the millennia, neither the public, the Shinto clergy, nor even the Emperor of Japan has been permitted to view the Sword of Kusanagi unclad.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Yet, one clandestine breach is recorded in historical annals. During the Edo period, around 1686, a Shinto priest named <strong>Matsuoka Masanao</strong> along with several colleagues at Atsuta Shrine took advantage of repairs to the innermost sanctuary to secretly pry open the sacred nested boxes protecting the sword.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          According to Matsuoka&apos;s illicit diary entries, the priests unlocked an outer cedar chest, followed by a series of five nested cypress and gold-lacquered boxes, each bound with sacred hemp ropes and wrapped in fine silk. Deep within the final box, cushioned on red silk brocade, rested the relic:
        </p>
        <BlogList>
          <BlogListItem label="Length and Shape:">
            The blade was approximately 82 to 84 centimeters long, shaped like a long calamus water-reed leaf (double-edged, symmetrical, and tapering gradually to a sharp point).
          </BlogListItem>
          <BlogListItem label="Cross-Section &amp; Thickness:">
            The sword possessed a pronounced, ridge-like spine running down the center, thicker near the hilt (roughly 8 millimeters) and tapering toward the tip.
          </BlogListItem>
          <BlogListItem label="Unearthly Luster:">
            Unlike medieval folded-steel katana with curved single edges, the weapon resembled ancient bronze-age or archaic iron swords. Most astonishingly, despite centuries in a sealed wooden chamber, the metal gleamed with an icy, immaculate white sheen, completely untouched by rust or decay.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          The aftermath of this taboo trespass became legend. Within weeks of opening the chest, the head priest and several conspirators succumbed to violent fevers and died. Matsuoka himself was struck by a severe, debilitating sickness, surviving only after offering intense prayers of repentance. The Shogunate intervened, resealing the sanctuary under penalty of instant decapitation, ensuring no human eye would ever gaze upon the blade again.
        </p>
      </BlogSection>

      {/* Section 7: The Modern Era & The Imperial Accession */}
      <BlogSection title="The Living Mystery of the Chrysanthemum Throne">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the 21st century, the Sword of Kusanagi retains its sacred authority. During the enthronement of <strong>Emperor Naruhito</strong> on May 1, 2019, the world witnessed the historic ceremony of <em>Kenji-to-Shokei-no-gi</em> (Inheritance of the Imperial Treasures) broadcast live across the globe.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Chamberlains of the Imperial Household entered the Matsu-no-Ma stateroom in the Tokyo Imperial Palace, reverently carrying dark lacquered boxes wrapped in elaborate purple silk fabrics. Inside those boxes rested the sacred jewel and the court replica of Kusanagi. Neither the prime minister, the gathered ministers of state, the royal family, nor the Emperor himself laid eyes upon the naked blade. Its physical reality remains perpetually veiled, existing as a profound bridge between living history and ancient myth.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Whether the primordial divine sword forged from the dragon&apos;s tail rests in the peaceful cedar groves of Atsuta Shrine in Nagoya, or lies encased in seabed sediment beneath the churning tides of the Shimonoseki Strait, the <strong>Sword of Kusanagi</strong> endures as one of humanity&apos;s greatest treasures—an unbroken emblem of sovereignty, myth, and timeless mystery.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

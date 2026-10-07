import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'Padmanabhaswamy Temple Vault B | Legends Troves',
  description: 'Deep beneath the ancient Dravidian corridors of Sree Padmanabhaswamy Temple in Kerala lies Vault B—an unopened subterranean sanctum sealed with the legendary Naga Bandham and guarded by serpent lore.',
};

export default function PadmanabhaswamyTempleVaultBPage() {
  return (
    <BlogLayout
      category="land"
      title="Padmanabhaswamy Temple Vault B"
      imageSrc="/images/padmanabhaswamy-vault-b.jpg"
      imageAlt="Mysterious cobra-adorned iron portal of Vault B inside the subterranean granite corridors of Sree Padmanabhaswamy Temple, Kerala, India"
    >
      {/* Section 1: The Sanctum of the Sleeping Deity */}
      <BlogSection title="The Sanctum of the Sleeping Deity">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In the heart of Thiruvananthapuram, the capital city of Kerala on India&apos;s southwestern Malabar Coast, stands the monumental <strong>Sree Padmanabhaswamy Temple</strong>. Towering with a magnificent seven-tier Dravidian <em>gopuram</em> adorned with intricate stone sculptures, this holy shrine has stood as a beacon of spirituality and imperial patronage for well over a millennium, mentioned in classical Sangam literature as early as the 6th century AD.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          The principal deity worshipped within is <strong>Lord Vishnu</strong>, enshrined in the eternal yogic posture of <em>Anantha Shayana</em>—reclining upon the coiled five-hooded cosmic serpent Adi Shesha. For centuries, the temple was closely intertwined with the ruling dynasty of the <strong>Kingdom of Travancore</strong>. In 1750, the visionary Maharaja <strong>Marthanda Varma</strong> performed the historic ceremony of <em>Thrippadi Danam</em>, formally surrendering his entire sovereign kingdom, crown, and royal revenues to Lord Padmanabha. Henceforth, the kings of Travancore ruled not as monarchs, but as humble servants bearing the title of <em>Padmanabhadasa</em> (&quot;Servant of Padmanabha&quot;), preserving the temple&apos;s holy vaults as a divine trust.
        </p>
      </BlogSection>

      {/* Section 2: The 2011 Revelation */}
      <BlogSection title="The 2011 Revelation: Earth&apos;s Wealthiest Shrine">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          For generations, local folklore hinted that colossal treasures were sealed in dark stone subterranean chambers (*Kallaras*) carved directly beneath the inner sanctum sanctorum (*Garbhagriha*). In 2011, following a petition filed in the Supreme Court of India regarding temple asset administration, a seven-member court-appointed panel entered the underground labyrinth to conduct an official inventory.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          When the heavy stone slabs and iron grates of Vaults A, C, D, E, and F were slowly prized open under the glare of battery lamps, the inspection committee gasped in utter disbelief. What emerged from centuries of darkness was the single greatest recorded hoard of precious metals and gems in human history:
        </p>
        <BlogList>
          <BlogListItem label="Solid Gold Idols &amp; Regalia:">
            A solid pure-gold idol of Mahavishnu standing over four feet tall, studded with hundreds of uncut Burmese rubies, diamonds, and Ceylon sapphires, alongside an 18-foot solid gold ceremonial throne.
          </BlogListItem>
          <BlogListItem label="Centuries of International Currency:">
            Over 500 kilograms of historic gold coins, including mint Roman Empire <em>aurei</em> from the 1st century AD, Venetian gold ducats, Spanish doubloons, Dutch guilders, and thousands of East India Company gold mohurs, evidencing millennia of flourishing spice trade.
          </BlogListItem>
          <BlogListItem label="Priceless Jewelry &amp; Armor:">
            Sacks overflowing with diamonds, uncounted Colombian emeralds, 35-kilogram ceremonial gold chains, gold bows and arrows, jewel-encrusted crowns, and woven pure-gold robes (*Kanchikatt*) weighing several kilograms.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          Conservatively appraised at baseline bullion value alone, the discovered troves exceeded <strong>$22 billion USD (₹1,00,000+ crore)</strong>. When factoring in historical, numismatic, and cultural rarity, international antiquities experts estimate the collection&apos;s true worth at well over <strong>$100 billion USD</strong>—instantly cementing Sree Padmanabhaswamy Temple as the wealthiest religious institution on planet Earth.
        </p>
      </BlogSection>

      {/* Section 3: The Enigma of Vault B */}
      <BlogSection title="The Enigma of Vault B: Bharatakkon Kallara">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Yet amid the breathtaking revelations of the 2011 survey, one vault remained steadfastly closed: <strong>Vault B</strong>, historically designated in temple palm-leaf records (*Mathilakam*) as the <em>Bharatakkon Kallara</em>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Positioned directly beneath the sacred idol of Lord Padmanabha, Vault B is guarded by a formidable triple-door architectural barrier designed to repel intrusion across centuries:
        </p>
        <BlogList>
          <BlogListItem label="The First Portal (Outer Wood):">
            A heavy teak-and-rosewood timber door bound with iron studs and padlocked with ancient brass mechanisms, which was unlocked by the inspection team.
          </BlogListItem>
          <BlogListItem label="The Second Portal (Iron Grate):">
            An iron lattice security gate anchored deep into the Dravidian granite masonry, leading into a narrow, suffocating antechamber.
          </BlogListItem>
          <BlogListItem label="The Third Portal (The Cobra Door):">
            A massive, monolithic iron-and-granite doorway upon which two enormous embossed <strong>King Cobras</strong> are sculpted, hoods flared in eternal warning. The door possesses no keyholes, no visible latches, no handles, and no hinges.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          When the inventory committee attempted to pry open this third portal, the ironwork resisted every crowbar and mechanical instrument. At that juncture, the Travancore Royal Family and temple high priests (*Thanthris*) voiced vigorous spiritual objections, warning that breaching this innermost portal through mundane mechanical force would invite irreversible divine retribution.
        </p>
      </BlogSection>

      {/* Section 4: The Naga Bandham & Garuda Mantra */}
      <BlogSection title="The Naga Bandham &amp; The Lost Garuda Mantra">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          According to regional esoteric lore preserved in Kerala&apos;s sacred *Tantra Shastra* traditions, Vault B was sealed centuries ago by revered <em>Siddhars</em> and high spiritual masters using an ancient occult lock known as the <strong>Naga Bandham</strong> (or <em>Naga Paasam</em>—the serpent noose).
        </p>
        <blockquote className="my-4 pl-4 border-l-4 border-[#D4AF37] italic text-sm sm:text-base text-[#2C2504]/95 bg-[#D8D1B6]/30 py-3 rounded-r-lg">
          &quot;This chamber was locked not by human keys of metal, but by sound frequencies and tantric incantations tuned to the cosmic serpent deity. It can only be unlocked by a sage possessing pure spiritual intent who correctly chants the sacred Garuda Mantra with precise Sanskrit intonation.&quot;
          <span className="block mt-1 font-semibold not-italic text-xs text-[#2C2504]/75">
            — Oral tradition preserved by the Travancore Royal Council of Priests
          </span>
        </blockquote>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Temple scholars insist that any attempt to breach the door using modern engineering tools, diamond drills, or explosives will destabilize the foundational granite aquifers beneath the temple, causing water from the Arabian Sea to surge through underground conduits and inundate the entire sanctuary. Moreover, local superstition warns that anyone who forcibly disrupts the guardian serpents will succumb to an immediate, untimely death.
        </p>
      </BlogSection>

      {/* Section 5: Vault Inventory Comparison Table */}
      <BlogSection title="Inventory of the Underground Kallaras">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The underground vault system comprises six distinct subterranean chambers, each designated with specific ritual functions throughout Travancore history:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Kallara (Vault)</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Status</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Documented Contents</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Vault A</td>
                  <td className="py-2.5 px-3 sm:px-4 text-emerald-800 font-semibold">Opened (2011)</td>
                  <td className="py-2.5 px-3 sm:px-4">4-foot solid gold Mahavishnu idol, 100,000+ gold coins, sacks of diamonds, 18-foot gold throne</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Estimated $18–$20 Billion</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Vault B</td>
                  <td className="py-2.5 px-3 sm:px-4 text-amber-900 font-bold">Sealed / Untouched</td>
                  <td className="py-2.5 px-3 sm:px-4">Reputed primary royal reserve of Chera, Pandya, and Travancore kings; legendary emerald hoard</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless / Incalculable</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Vaults C &amp; D</td>
                  <td className="py-2.5 px-3 sm:px-4 text-emerald-800 font-semibold">Periodic Access</td>
                  <td className="py-2.5 px-3 sm:px-4">Gold and silver ceremonial umbrellas, royal trumpets, palanquins, and temple feast vessels</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Liturgical Regalia</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Vaults E &amp; F</td>
                  <td className="py-2.5 px-3 sm:px-4 text-emerald-800 font-semibold">Routine Access</td>
                  <td className="py-2.5 px-3 sm:px-4">Gold and silver puja utensils, platters, lamps (*Diyas*), and ritual vestments for daily worship</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Ritual Utensils</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 6: Historical Expeditions & The Serpent Curse */}
      <BlogSection title="Historical Encounters &amp; The Serpent Curse">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The mystique of Vault B is heightened by historical records of previous attempts to penetrate its depths:
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In her 1933 travelogue <em>Travancore: A Guide Book for the Visitor</em>, English writer <strong>Emily Gilchrist Hatch</strong> documented an ominous incident from 1931 during the reign of Sree Chithira Thirunal Balarama Varma. When a team of royal officers attempted to enter the subterranean vault with lanterns, they found the inner threshold teeming with live cobras that hissed furiously from dark fissures in the rock. Terrified of incurring the deity&apos;s wrath, the men bolted the iron doors and abandoned the enterprise.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Modern events seemed to echo these ancient forebodings:
        </p>
        <BlogList>
          <BlogListItem label="The Passing of the Petitioner:">
            In July 2011, just weeks after the initial vault openings were celebrated worldwide, former IPS officer T.P. Sundararajan—the primary litigant whose petition sparked the Supreme Court investigation—fell suddenly ill and passed away at age 70, sending shockwaves through the community.
          </BlogListItem>
          <BlogListItem label="The Divine Devaprasnam (Astrological Trial):">
            In August 2011, temple authorities convened a four-day <em>Ashtamangala Devaprasnam</em> presided over by Kerala&apos;s preeminent Vedic astrologers. The divination concluded that opening Vault B would trigger catastrophic cosmic imbalances, endangering the royal lineage and causing widespread flooding across the Malabar Coast.
          </BlogListItem>
          <BlogListItem label="Supreme Court Standstill:">
            Acknowledging the deep spiritual sensitivities and historical sanctity, the Supreme Court of India officially deferred any attempt to open Vault B, directing round-the-clock paramilitary protection by the Kerala Police Thunderbolts commandos.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 7: The Eternal Secret */}
      <BlogSection title="The Eternal Secret Beneath the Granite Flagstones">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Today, Sree Padmanabhaswamy Temple remains protected by advanced biometric access gates, thermal imaging sensors, bulletproof blast enclosures, and armed commandos. Yet beyond the modern surveillance apparatus, the ancient spiritual boundary holds firm.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Whether Vault B conceals the legendary royal reserves of the Sangam kings, secret subterranean waterways leading into the Indian Ocean, or divine relics guarded by celestial serpents, the heavy iron door remains sealed. In an age where satellite maps and ground-penetrating radar have stripped the earth of its mysteries, Vault B stands as an enduring testament to ancient wisdom, sacred trust, and the eternal majesty of Lord Padmanabha.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

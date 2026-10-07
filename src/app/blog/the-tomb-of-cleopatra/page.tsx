import type { Metadata } from 'next';
import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'The Tomb of Cleopatra | Legends Troves',
  description: 'The final resting place of Queen Cleopatra VII and Roman general Mark Antony remains one of archaeology’s greatest unsolved quests, hidden beneath the sands and waters of Egypt.',
};

export default function TheTombOfCleopatraPage() {
  return (
    <BlogLayout
      category="land"
      title="The Tomb of Cleopatra"
      imageSrc="/images/the-tomb-of-cleopatra.jpg"
      imageAlt="Opulent subterranean Ptolemaic royal tomb chamber of Queen Cleopatra VII illuminated by oil lamps and golden relics near Alexandria, Egypt"
    >
      {/* Section 1: The Final Hours of Egypt's Last Pharaoh */}
      <BlogSection title="The Final Hours of Egypt's Last Pharaoh (30 BC)">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In August of 30 BC, the three-century reign of the Ptolemaic Dynasty—and three millennia of pharaonic civilization—came to a cataclysmic end inside the fortified royal quarter of ancient Alexandria. Following their catastrophic naval defeat against Octavian (the future Roman emperor Augustus) at the Battle of Actium, Queen <strong>Cleopatra VII Philopator</strong> and her lover, the Roman general <strong>Mark Antony</strong>, retreated to the Egyptian capital to face an inescapable doom.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Upon receiving false reports that Cleopatra had already taken her own life, Antony fell upon his sword. Fatally wounded, he was hoisted by ropes through an upper window into Cleopatra&apos;s reinforced two-story mausoleum, breathing his last in the queen&apos;s arms. Days later, refusing to be paraded through the streets of Rome in chains as a humiliated captive in Octavian&apos;s victory triumph, the 39-year-old queen ended her life—tradition says by the venomous bite of an Egyptian asp smuggled in a basket of figs, or via lethal poison concealed in a hollow hairpin.
        </p>
      </BlogSection>

      {/* Section 2: Plutarch's Testimony & The Royal Mausoleum */}
      <BlogSection title="The Splendid Mausoleum Described by Rome">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Ancient Roman biographer Plutarch, writing with access to the firsthand memoirs of Cleopatra&apos;s personal physician Olympus, records that Octavian was moved by the tragic grandeur of their demise. He granted the queen&apos;s dying petition to be embalmed and entombed side-by-side with Mark Antony with the highest sovereign honors:
        </p>
        <blockquote className="my-4 border-l-4 border-[#2C2504]/40 pl-4 py-1 italic text-xs sm:text-sm text-[#2C2504]/85 bg-[#D8D1B6]/30 rounded-r-lg">
          &quot;Her body was given to Antony for burial in splendid and royal fashion, and Octavian gave orders that both should be laid to rest in one and the same tomb.&quot;
          <span className="block mt-1 font-semibold not-italic text-[11px] sm:text-xs text-[#2C2504]/70">— Plutarch, Life of Antony</span>
        </blockquote>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          According to classical chronicles by Cassius Dio and Suetonius, Cleopatra had spent years constructing a monumental tomb adjoining the sacred temple of Isis:
        </p>
        <BlogList>
          <BlogListItem label="Hoarded Royal Treasuries:">
            As Roman legions marched on the capital, Cleopatra ordered the imperial crown jewels, solid gold ingots, chests of raw emeralds and pearls, works of ebony and ivory, and heaps of aromatic cinnamon and incense moved directly into the lower vaults of her tomb.
          </BlogListItem>
          <BlogListItem label="The Funeral Pyre Threat:">
            Cleopatra threatened to set fire to the vast store of combustible pitch, tow, and treasures if Roman troops breached the outer gates, using the immense wealth of Egypt as a final bargaining chip for her children&apos;s lives.
          </BlogListItem>
          <BlogListItem label="Double Sarcophagi:">
            Historians believe the tomb held twin sarcophagi—one crafted according to Roman military custom for Antony, and an elaborate gold-and-basalt anthropoid sarcophagus worthy of the living incarnation of the goddess Isis for Cleopatra.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 3: The Submerged Capital vs. The Desert Sands */}
      <BlogSection title="Sunken Palaces &amp; The Lost Geography of Alexandria">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Why has the tomb of the ancient world&apos;s most celebrated couple eluded discovery for over two millennia? The answer lies in the violent seismic history of the eastern Mediterranean basin.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          During the 4th and 8th centuries AD, catastrophic earthquakes and devastating tsunamis—notably the cataclysmic quake of July 21, 365 AD—caused the fragile coastal limestone of Alexandria to liquefy and slide into the Mediterranean. The entire ancient Royal Port, the island of Antirhodos, Cape Lochias, and the majestic Ptolemaic waterfront palaces sank beneath five to eight meters of seawater and marine silt.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Since 1992, pioneering marine archaeologist Franck Goddio and the European Institute for Underwater Archaeology (IEASM) have mapped the submerged ruins, recovering colossal granite sphinxes, statues of Ptolemaic kings, and paved quays. While many believe Cleopatra&apos;s mausoleum rests on this submerged seabed, other leading scholars argue that the astute queen chose a far more secure, sacred necropolis outside the vulnerable metropolis.
        </p>
      </BlogSection>

      {/* Section 4: Documented & Expected Inventory Table */}
      <BlogSection title="Anticipated Contents of the Lost Imperial Tomb">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Based on Hellenistic royal mortuary traditions, surviving Ptolemaic royal inventories, and Roman accounts of Cleopatra&apos;s mausoleum cache, archaeologists anticipate an unparalleled archaeological assemblage:
        </p>

        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[540px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Artifact Class</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Archaeological Description</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Symbolic / Historical Meaning</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Dual Royal Sarcophagi</td>
                  <td className="py-2.5 px-3 sm:px-4">Carved black basalt, Aswan red granite, and sheet gold</td>
                  <td className="py-2.5 px-3 sm:px-4">Eternal resting place of Cleopatra VII and Roman triumvir Mark Antony</td>
                  <td className="py-2.5 pl-3 sm:pl-4">World-Historical</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Ptolemaic Imperial Regalia</td>
                  <td className="py-2.5 px-3 sm:px-4">Gold uraeus diadems, lapis-lazuli crowns, &amp; ceremonial royal scepters</td>
                  <td className="py-2.5 px-3 sm:px-4">Symbols of divine pharaonic rule and sovereign majesty</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless ($500M+)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Antony&apos;s Roman Military Insignia</td>
                  <td className="py-2.5 px-3 sm:px-4">Ceremonial gilded bronze armor, gladius, &amp; triumviral signet rings</td>
                  <td className="py-2.5 px-3 sm:px-4">Martial accoutrements of Rome&apos;s greatest general and Caesar&apos;s co-consul</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Priceless</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Isis Cult Statuary &amp; Votives</td>
                  <td className="py-2.5 px-3 sm:px-4">Alabaster canopic jars, carved limestone figurines, &amp; bronze incense burners</td>
                  <td className="py-2.5 px-3 sm:px-4">Funerary protections identifying Cleopatra as the Living Isis (Nea Isis)</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Incalculable</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Imperial Archive Papyri</td>
                  <td className="py-2.5 px-3 sm:px-4">Sealed lead cylinders containing royal decrees, letters, &amp; treaties</td>
                  <td className="py-2.5 px-3 sm:px-4">Direct written records from the twilight of the Hellenistic world</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Unmatched Historical Value</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5: The Taposiris Magna Breakthrough */}
      <BlogSection title="The Breakthrough at Taposiris Magna">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          In recent decades, the focal point of the search shifted dramatically 45 kilometers west of Alexandria to the windswept coastal ridge of <strong>Taposiris Magna</strong> (&quot;Great Tomb of Osiris&quot;). Spearheaded by Dominican archaeologist and criminal attorney <strong>Dr. Kathleen Martínez</strong> in collaboration with the Egyptian Supreme Council of Antiquities, the excavation has produced breathtaking revelations.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Martínez hypothesized that Cleopatra, viewing herself as the earthly embodiment of the goddess Isis and Antony as Osiris, would have sought eternal union in an Osiris sanctuary rather than a Roman-controlled necropolis. Over fifteen seasons of excavation, the team unearthed extraordinary evidence:
        </p>
        <BlogList>
          <BlogListItem label="Royal Coins with Cleopatra's Portrait:">
            A hoard of bronze coins minted during Cleopatra&apos;s reign, bearing her sharp profile, hooked nose, and royal diadem, confirming active royal patronage of the temple complex.
          </BlogListItem>
          <BlogListItem label="Mummies with Golden Tongues:">
            A Greco-Roman cemetery containing mummies buried facing the temple, several possessing golden-foil amulets shaped like tongues—an ancient ritual enabling the deceased to speak eloquently before the court of Osiris in the afterlife.
          </BlogListItem>
          <BlogListItem label="The Subterranean 'Geometric Miracle' (2022):">
            In November 2022, Egyptian authorities announced the discovery of a monumental subterranean rock-cut tunnel carved 13 meters below the temple. Measuring over <strong>1,305 meters in length</strong> and two meters in height, the tunnel has been hailed by experts as a masterwork of ancient Hellenistic engineering, remarkably similar to the famous 6th-century BC Tunnel of Eupalinos on the Greek island of Samos.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 6: Modern Underwater Exploration & The Ultimate Quest */}
      <BlogSection title="The Underwater Frontier &amp; The Holy Grail of Archaeology">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Portions of the Taposiris Magna tunnel system extend directly into the Mediterranean Sea, submerged beneath centuries of coastal subsidence and silt. Marine archaeologists and dive teams equipped with ground-penetrating radar, sidescan sonar, and sub-bottom profilers are currently tracing the tunnel&apos;s drowned path toward ancient submerged structures just offshore.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          To this day, the search for the Tomb of Cleopatra stands as archaeology&apos;s ultimate holy grail. Finding the intact burial chamber of Cleopatra and Mark Antony would surpass the 1922 discovery of King Tutankhamun&apos;s tomb in historical significance—finally solving a 2,000-year-old romantic tragedy and unveiling the final, glorious secret of ancient Egypt.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

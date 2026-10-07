import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export default function BlogPage() {
  return (
    <BlogLayout
      category="water"
      title="The Santa Maria"
      imageSrc="/images/santa-maria.png"
      imageAlt="The Santa Maria Ship"
    >
      {/* Section 1 */}
      <BlogSection title="A Christmas Eve Disaster">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          It was the winter of 1492. Christopher Columbus was feeling confident after crossing the Atlantic Ocean. But the sea is unforgiving, and fatigue is a sailor&apos;s worst enemy. On a calm night, Columbus went to sleep. The man left in charge of the tiller decided he was tired too. He handed the steering over to a young, inexperienced cabin boy. That single decision doomed the expedition&apos;s main vessel.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          This ship was the flagship of Christopher Columbus&apos;s first voyage and the vessel ran aground on Christmas Eve 1492. The boy did not notice the coral reef until the ship gently slid onto it. There was no violent crash. The ship simply got stuck. As the tide receded, the wooden hull cracked under its own weight. The Santa Maria was finished.
        </p>
      </BlogSection>

      {/* Section 2 */}
      <BlogSection title="The Missing Flagship">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The wreck happened off the coast of Haiti. Even with that general location known to us, its exact final resting place is one of maritime history&apos;s greatest secrets.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          For over five hundred years, ocean explorers have scoured the northern coast of Hispaniola looking for it. Dozens of marine archaeologists who thought they had found it, only to be disappointed by carbon dating results.
        </p>
      </BlogSection>

      {/* Section 3 */}
      <BlogSection title="Interesting Facts About the Wreck">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-3 font-normal">
          Let us look at a few things that make this missing ship so fascinating to historians.
        </p>
        <BlogList>
          <BlogListItem label="It was not built for discovery.">
            The Santa Maria was a merchant ship called a nao. It was slow, heavy, and meant for carrying cargo. Columbus actually hated how it sailed compared to his other vessels.
          </BlogListItem>
          <BlogListItem label="The first European settlement.">
            Because the ship was wrecked, Columbus had no way to bring all his men back to Spain. He ordered his crew to strip the Santa Maria of its timbers. They used the wood to build a fort called La Navidad on the coast of present-day Haiti.
          </BlogListItem>
          <BlogListItem label="The mystery of the remains.">
            Since the crew salvaged the wood and supplies, what is left to find? We are looking for heavy items that sank into the mud. This includes the ship&apos;s ballast stones, iron fasteners, and perhaps an early cannon called a bombard.
          </BlogListItem>
        </BlogList>
      </BlogSection>

      {/* Section 4 */}
      <BlogSection title="The Fleet Comparison">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          To understand why the loss of the Santa Maria was so significant, we have to look at the other ships on the voyage.
        </p>
        
        {/* Responsive comparison table container */}
        <div className="my-4 rounded-xl bg-[#D8D1B6]/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto p-3 sm:p-4">
            <table className="w-full text-left text-xs sm:text-sm text-[#2C2504] min-w-[480px]">
              <thead>
                <tr className="border-b border-[#2C2504]/30 font-bold">
                  <th className="py-2.5 pr-3 sm:pr-4 font-bold">Ship Name</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Type of Ship</th>
                  <th className="py-2.5 px-3 sm:px-4 font-bold">Role on the Expedition</th>
                  <th className="py-2.5 pl-3 sm:pl-4 font-bold">Fate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2504]/15">
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Santa Maria</td>
                  <td className="py-2.5 px-3 sm:px-4">Nao (Carrack)</td>
                  <td className="py-2.5 px-3 sm:px-4">Flagship</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Wrecked off the coast of Haiti</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Pinta</td>
                  <td className="py-2.5 px-3 sm:px-4">Caravel</td>
                  <td className="py-2.5 px-3 sm:px-4">Scout vessel</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Returned to Spain</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 sm:pr-4 font-semibold">Niña</td>
                  <td className="py-2.5 px-3 sm:px-4">Caravel</td>
                  <td className="py-2.5 px-3 sm:px-4">Escort and later flagship</td>
                  <td className="py-2.5 pl-3 sm:pl-4">Returned to Spain</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:hidden px-3 py-1.5 bg-[#C6BF9E]/40 text-[11px] text-[#2C2504]/70 text-center italic">
            Scroll horizontally to view full table
          </div>
        </div>
      </BlogSection>

      {/* Section 5 */}
      <BlogSection title="The True Treasure">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          Why do people still hunt for it? There are no chests of Aztec gold on board. The Santa Maria sank before the Spanish began moving massive amounts of wealth out of the Americas.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 mb-4 font-normal">
          The true treasure is the ship itself. Finding the remains of the very vessel that initiated contact between the Old World and the New World would be the archaeological discovery of a lifetime. A single rusty iron spike from that hull would be priceless to museums and private collectors.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Until the ocean decides to give up its secrets, the Santa Maria will remain a ghost ship. It is a reminder that the sea claims what it wants, regardless of a captain&apos;s fame or a mission&apos;s importance. Keep your eyes on the horizon. There is always another mystery waiting to be solved.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

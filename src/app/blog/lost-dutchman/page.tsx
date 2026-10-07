import { BlogLayout, BlogSection, BlogList, BlogListItem } from '@/components/blog-layout';

export default function LostDutchmanPage() {
  return (
    <BlogLayout
      category="land"
      title="The Lost Dutchman's Gold Mine"
      imageSrc="/images/lost-dutchman.jpg"
      imageAlt="First-person view looking through a rock crack into the hidden gold treasure cave of the Lost Dutchman's Mine"
    >
      {/* Section 1: The Curse of the Superstition Mountains */}
      <BlogSection title="The Curse of the Superstition Mountains">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Analyzing historical clues to the world&apos;s greatest lost fortunes reveal that very few legends command as much respect and fear as the Lost Dutchman&apos;s Gold Mine. This site is a fabulously wealthy gold deposit hidden in the American Southwest. The specific location remains somewhere within the Superstition Mountains in Arizona, a brutal landscape of jagged basalt rock where summer temperatures easily exceed one hundred degrees.
        </p>
      </BlogSection>

      {/* Section 2: The Massacre and the Immigrant */}
      <BlogSection title="The Massacre and the Immigrant">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mb-3">
          The story begins long before the man who gave the mine its name even arrived. According to local historical accounts, a wealthy Mexican family known as the Peraltas discovered rich gold veins in this rugged territory. During an expedition back to Mexico, Apache warriors ambushed and killed nearly the entire group, creating the infamous Massacre Grounds.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Decades later, a German immigrant named Jacob Waltz entered the picture. Americans mispronounced his nationality as &ldquo;Dutch,&rdquo; which gave the mine its famous name. Waltz found this massive deposit but took the exact location to his grave. He died in 1891, leaving behind a box of high-grade gold ore under his bed but taking the coordinates with him.
        </p>
      </BlogSection>

      {/* Section 3: The Tragic Dutch Hunters */}
      <BlogSection title="The Tragic Dutch Hunters">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mb-3">
          The obsession with finding the lost gold of Jacob Waltz gave birth to prospectors called Dutch Hunters, along with a long list of casualties. The most famous incident occurred in 1931 with an elderly treasure hunter named Adolph Ruth.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal">
          Adolph Ruth traveled to the Superstition Mountains armed with authentic Peralta family maps. He ventured into the harsh terrain alone to locate the lost mine. He disappeared shortly after setting up his camp. Months later, an expedition found his skull resting on the desert floor. The skull had two large bullet holes in it, suggesting a violent murder.
        </p>
      </BlogSection>

      {/* Section 4: What to Look For Today */}
      <BlogSection title="What to Look For Today">
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mb-3">
          Anyone braving the Arizona heat will need to know the specific markers pointing to the gold.
        </p>
        <BlogList>
          <BlogListItem label="Weaver's Needle:">
            A massive rock column casting a specific shadow over the mine entrance during certain seasons.
          </BlogListItem>
          <BlogListItem label="The Peralta Stones:">
            Cryptic stone tablets covered in maps and Spanish symbols discovered in the region decades later.
          </BlogListItem>
          <BlogListItem label="The Cave of Gold:">
            Prospectors believe the entrance is not a traditional shaft but a natural cave facing a canyon wall.
          </BlogListItem>
        </BlogList>
        <p className="text-sm sm:text-base leading-relaxed text-[#2C2504]/90 font-normal mt-4">
          The desert holds its secrets tightly. Every year, people still vanish trying to solve this puzzle. Looking at the clues left by Jacob Waltz, does it seem more likely that the gold is hidden inside a natural cave or an abandoned Spanish tunnel system?
        </p>
      </BlogSection>
    </BlogLayout>
  );
}

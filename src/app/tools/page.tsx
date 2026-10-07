import type { Metadata } from 'next';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: "Yamashita's Treasure | Legends Troves",
  description:
    'Have questions? Reach out to learn more about our work and explore ways you can support/finance our recovery projects.',
};

export default function YamashitaTreasurePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Section: Dark Brown with Yamashita's Treasure & Contact */}
      <section className="relative bg-[#302503] text-[#D8AE31] flex-1 flex flex-col justify-between pt-24 sm:pt-28 pb-14 sm:pb-20 px-4 sm:px-6">
        <Header />

        <div className="w-full max-w-[800px] mx-auto my-auto flex flex-col items-center text-center">
          {/* Main Title */}
          <h1 className="font-gothic text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-[#D8AE31] tracking-wide leading-tight mb-6 sm:mb-8">
            Yamashita&apos;s Treasure
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="font-body font-medium text-[#D8AE31] text-base sm:text-lg md:text-xl lg:text-[22px] max-w-[620px] mx-auto leading-snug sm:leading-normal mb-6 sm:mb-8 px-2">
            Have questions? Reach out to learn more about our work and explore ways you can support/finance{' '}
            <span className="inline-block">our recovery projects.</span>
          </p>

          {/* Contact Email */}
          <a
            href="mailto:contact@legendstroves.com"
            className="font-body font-bold text-2xl sm:text-3xl md:text-[32px] text-[#D8AE31] hover:text-[#e8be3e] hover:underline transition-colors tracking-tight"
          >
            contact@legendstroves.com
          </a>
        </div>
      </section>

      {/* Bottom Section: Cream / Parchment with Photos of the Project Sites */}
      <section className="bg-[#F1EAD0] text-[#302503] flex-1 flex flex-col items-center justify-start pt-[5rem] pb-20 sm:pb-28 px-4 sm:px-6 text-center">
        <div className="w-full max-w-[800px] mx-auto flex flex-col items-center">
          {/* Section Title */}
          <h2 className="font-gothic text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#302503] tracking-wide leading-tight mb-12 sm:mb-16">
            Photos of the project sites
          </h2>

          {/* Placeholder Text */}
          <p className="font-body font-bold text-lg sm:text-xl md:text-2xl text-[#302503]">
            Coming soon...
          </p>
        </div>
      </section>
    </div>
  );
}


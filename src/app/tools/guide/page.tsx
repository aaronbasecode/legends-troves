import { Header } from '@/components/header';
import Image from 'next/image';

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#F4EBD0] text-[#2C2504]">
      <Header />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 flex flex-col items-center">
        <div className="w-full max-w-[1240px] flex flex-col items-center">
          {/* Title */}
          <h1 className="font-gothic text-3xl sm:text-5xl md:text-6xl text-[#2C2504] font-bold text-center mb-8 sm:mb-12 tracking-wide leading-tight">
            Troves Guide
          </h1>

          {/* Cards Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center w-full">
            {/* Card 1 */}
            <div className="flex flex-col items-start w-full max-w-[374px]">
              <div className="w-full aspect-[374/484] rounded-[14px] overflow-hidden relative shadow-sm bg-[#D8D1B6]">
                <Image
                  src="/images/yamashita-treasure.jpg"
                  alt="Codes, Signs, & Symbols: Yamashita Treasure"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="font-bold text-[#2C2504] text-lg sm:text-[20px] md:text-[22px] leading-tight mt-3">
                Codes, Signs, & Symbols: Yamashita Treasure
              </h2>
              <p className="font-gothic text-[#2C2504] text-base sm:text-lg mt-1 text-primary-foreground/80">
                Coming soon...
              </p>
            </div>

            {/* Card 2 Placeholder */}
            <div className="flex flex-col items-start w-full max-w-[374px]">
              <div className="w-full aspect-[374/484] rounded-[14px] bg-[#D8D1B6] shadow-sm flex items-center justify-center">
                <span className="font-gothic text-[#2C2504]/40 text-lg sm:text-xl">Volume II</span>
              </div>
              <h2 className="font-bold text-[#2C2504]/50 text-lg sm:text-[20px] leading-tight mt-3">
                Maritime Signs & Symbols
              </h2>
              <p className="font-gothic text-[#2C2504]/40 text-base mt-1">
                Coming soon...
              </p>
            </div>

            {/* Card 3 Placeholder */}
            <div className="flex flex-col items-start w-full max-w-[374px]">
              <div className="w-full aspect-[374/484] rounded-[14px] bg-[#D8D1B6] shadow-sm flex items-center justify-center">
                <span className="font-gothic text-[#2C2504]/40 text-lg sm:text-xl">Volume III</span>
              </div>
              <h2 className="font-bold text-[#2C2504]/50 text-lg sm:text-[20px] leading-tight mt-3">
                Ancient Cartography Marks
              </h2>
              <p className="font-gothic text-[#2C2504]/40 text-base mt-1">
                Coming soon...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

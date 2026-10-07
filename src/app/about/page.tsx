import { Header } from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F4EBD0] text-[#2C2504]">
      <Header />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 flex flex-col items-center">
        <div className="w-full max-w-[840px] flex flex-col items-center">
          {/* Legends Troves Coin */}
          <div className="mb-4">
            <Image
              src="/images/coin.png"
              alt="Legends Troves Coin"
              width={80}
              height={80}
              className="drop-shadow-md w-[80px] h-[80px]"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="font-gothic text-4xl sm:text-5xl md:text-[60px] text-[#2C2504] font-bold text-center mb-4 tracking-wide leading-tight">
            About Legends Troves
          </h1>

          {/* Subtitle / Lead Paragraph */}
          <p className="text-[20px] text-[#2C2504]/90 text-center max-w-[700px] mb-8 sm:mb-10 leading-relaxed font-medium px-2">
            Unveiling lost history, legendary treasures, and forgotten shipwrecks scattered across the globe.
          </p>

          {/* Two-column Card Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1.42fr_1fr] gap-5 items-stretch">
            {/* Left Column: Two stacked cards */}
            <div className="flex flex-col gap-5">
              {/* Card 1: Our Mission */}
              <section className="bg-[#D8D1B6] rounded-[14px] p-6 sm:p-7 shadow-sm flex flex-col">
                <h2 className="font-gothic text-[30px] font-bold text-[#2C2504] mb-3 leading-tight">
                  Our Mission
                </h2>
                <p className="text-[18px] leading-relaxed text-[#2C2504] font-normal">
                  We started Legends Troves to turn historical research into something you can actually explore. Throughout time, so many ships have been swallowed by the sea and fortunes buried out in the middle of nowhere. We pull together old maritime maps, historical records, and expedition logs to map out these lost sites and bring their stories back to life.
                </p>
              </section>

              {/* Card 2: Built for Treasure Hunters, Explorers & History Enthusiasts */}
              <section className="bg-[#D8D1B6] rounded-[14px] p-6 sm:p-7 shadow-sm flex flex-col flex-1">
                <h2 className="font-gothic text-[30px] font-bold text-[#2C2504] mb-3 leading-[34px]">
                  Built for Treasure Hunters, Explorers &amp; History Enthusiasts
                </h2>
                <p className="text-[18px] leading-relaxed text-[#2C2504] font-normal">
                  Whether you&apos;re a history buff, an armchair explorer, or a seasoned treasure hunter out in the field, we built Legends Troves for you. It&apos;s a place to dig into the actual facts and lingering mysteries behind the world&apos;s greatest lost fortunes.
                </p>
              </section>
            </div>

            {/* Right Column: What You Can Explore */}
            <section className="bg-[#D8D1B6] rounded-[14px] p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="font-gothic text-[30px] font-bold text-[#2C2504] mb-5 leading-tight">
                  What You Can Explore
                </h2>

                <div className="space-y-5">
                  <div>
                    <h3 className="font-bold text-[18px] text-[#2C2504] mb-1.5 leading-snug">
                      Interactive Map
                    </h3>
                    <p className="text-[18px] leading-relaxed text-[#2C2504] font-normal">
                      Browse our map to see the estimated resting places of historic ships, old ruins, and undiscovered treasure sites.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[18px] text-[#2C2504] mb-1.5 leading-snug">
                      Deep Stories
                    </h3>
                    <p className="text-[18px] leading-relaxed text-[#2C2504] font-normal">
                      Dive into the details. We share the actual histories of famous voyages, doomed ships, and fortunes that vanished.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[18px] text-[#2C2504] mb-1.5 leading-snug">
                      Yamashita&apos;s Treasure
                    </h3>
                    <p className="text-[18px] leading-relaxed text-[#2C2504] font-normal">
                      Follow along with our recovery projects. You&apos;ll learn about the signs and codes left behind, and you can even back/finance the project for a cut of the discovery.{' '}
                      <Link
                        href="/yamashita"
                        className="underline underline-offset-2 hover:opacity-80 font-medium"
                      >
                        Contact us.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Disclaimer */}
          <div className="w-full mt-8 sm:mt-10 text-left">
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#2C2504]/90 font-normal">
              <strong className="font-bold text-[#2C2504]">Disclaimer:</strong> The purpose of Legends Troves is to excite and inspire those who are interested in exploring the world&apos;s greatest lost fortunes. While we strive to dig into the actual facts behind historical treasures, please note that many of the stories featured on this site are based purely on tales, legends, myths, and local folklore. Additionally, the locations, coordinates, and markers provided are not strictly accurate and serve as illustrative estimates. We firmly maintain that certain historical hoards, such as Yamashita&apos;s Gold hidden across the Philippines, are entirely real. However, undertaking physical expeditions to locate and excavate these sites carries significant physical and financial risks. Whether you are a casual enthusiast or a seasoned treasure hunter out in the field, this site is meant to fuel your sense of adventure, not serve as a precise navigational guide. To experience the thrill of the hunt without facing the dangers on the ground, you can participate in our ongoing recovery projects and choose to back/finance the expedition for a cut of the discovery.
            </p>
          </div>

          {/* Bottom Medallion Footer */}
          <div className="flex flex-col items-center justify-center pt-10 sm:pt-14 pb-4 space-y-3">
            <Image
              src="/images/coin.png"
              alt="Legends Troves Coin"
              width={120}
              height={120}
              className="drop-shadow-md w-[120px] h-[120px]"
            />
            <p className="text-xs text-[#2C2504]/70 font-medium">© 2026 Legends Troves</p>
          </div>
        </div>
      </main>
    </div>
  );
}

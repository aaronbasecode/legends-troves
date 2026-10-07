"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Map, Compass, ShoppingBag, Shovel, Sparkles } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeaderProps {
  navLinks?: NavItem[];
  actionButton?: {
    label: string;
    href: string;
  };
}

const defaultNavLinks: NavItem[] = [
  { label: 'Map', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Yamashita', href: '/yamashita' },
  { label: 'Shop Merch', href: 'https://legendstroves.etsy.com', external: true },
];

export function Logo({ className = "h-[34px] sm:h-[40px] w-auto" }: { className?: string }) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120.92 40"
      className={className}
      role="img"
      aria-label="Legends Troves Logo"
    >
      <defs>
        <style>{`.cls-1{fill:#d5af33;}`}</style>
      </defs>
      <path
        className="cls-1"
        d="M38.55,7.81q-2.16,1.91-4.71,0a80.28,80.28,0,0,0-8.51-5.23A21.48,21.48,0,0,0,15,0,15.59,15.59,0,0,0,4.27,3.82,11.9,11.9,0,0,0,0,13a8.23,8.23,0,0,0,2.68,6.24,9.57,9.57,0,0,0,6.64,2.6,7.27,7.27,0,0,0,4.25-1c.4-.26.48-.56.29-.89s-.53-.37-.94-.13a5.31,5.31,0,0,1-3.84,1c-5-.5-7.42-3.19-7.33-8a7.57,7.57,0,0,1,2.55-5.5,9.58,9.58,0,0,1,6.81-2.4,17,17,0,0,1,8,2.34c1.25.65,2.45,1.35,3.65,2.05a.52.52,0,0,1,.08.7L22.8,10c-2.25,1.81-4.47,2.58-6.72,2.29-.72,0-1.09.31-1.09,1.12l.08,13.94c0,2.44-.72,3.93-2.11,4.47a.52.52,0,0,0-.37.55.54.54,0,0,0,.52.5c5.67,1.57,9.12,3.84,10.39,6.83.17.41.59.41,1.2,0,.76-.55,4.54-2.86,6.3-4,.66-.48.22-.87.07-1L31,34.69l-1.26-.61-7.25-4.25a.71.71,0,0,1-.41-.72L22,12.55a1.57,1.57,0,0,1,.67-1.23l1.29-1a.48.48,0,0,1,.3-.13.36.36,0,0,1,.22.07c1,.63,2.06,1.28,3,2,2.73,1.81,5.15,1.94,7.29.39l4.75-4c.35-.33.37-.66.09-.94S38.94,7.44,38.55,7.81Z"
        transform="translate(-0.04)"
      />
      <path
        className="cls-1"
        d="M104.13,24.42a1.64,1.64,0,0,1,.74-.21c.24,0,.64.32,1.2.95a6,6,0,0,1,1.21,2.05l2.65-1.83a5.9,5.9,0,0,0-2.14-3,5.06,5.06,0,0,0-3-1.38,4.58,4.58,0,0,0-2.29,1.24,10.15,10.15,0,0,0-2,1.91,4,4,0,0,0-.53,2.07,5.11,5.11,0,0,0,.31,1.91,4.15,4.15,0,0,0,1.51,1.53,22.55,22.55,0,0,0,2.53,1.43,10.14,10.14,0,0,1,1.86,1.08c.25.12.38.46.38,1a1.84,1.84,0,0,1-.31,1.19,2.57,2.57,0,0,1-.62.48,1.52,1.52,0,0,1-.74.21q-.33,0-1.17-.93a5.91,5.91,0,0,1-1.22-2l-2.65,1.81a6.14,6.14,0,0,0,2.15,3,5.12,5.12,0,0,0,3,1.36,4.67,4.67,0,0,0,2.29-1.22,11.37,11.37,0,0,0,2-1.93,4.15,4.15,0,0,0,.52-2.15,3.68,3.68,0,0,0-.26-1.72q-.61-1.2-4.1-3.1a11.67,11.67,0,0,1-1.75-1,1.09,1.09,0,0,1-.47-1,1.86,1.86,0,0,1,.24-1.1A2.11,2.11,0,0,1,104.13,24.42Z"
        transform="translate(-0.04)"
      />
      <polygon
        className="cls-1"
        points="92.99 30.7 97.26 30.7 97.26 27.81 92.99 27.81 92.99 24.52 93.87 23.9 98.31 23.9 98.31 20.98 92.99 20.98 89.7 23.28 89.7 37.98 98.69 37.98 98.69 35.09 92.99 35.09 92.99 30.7"
      />
      <path
        className="cls-1"
        d="M85.84,21,83,23A7.24,7.24,0,0,1,84.13,25a9.38,9.38,0,0,1,.28,2.79v2.8a8.77,8.77,0,0,1-.17,2,4.28,4.28,0,0,1-.69,1.48c-.36.52-.63.78-.79.78s-.42-.26-.78-.78a4.85,4.85,0,0,1-.72-1.48,11.38,11.38,0,0,1-.14-2V21.27h-3.3v9.05a10.74,10.74,0,0,0,.36,3,9.15,9.15,0,0,0,2,3.06c1.13,1.22,2,1.84,2.55,1.84s1.42-.62,2.53-1.84a9,9,0,0,0,2.06-3.06,10.74,10.74,0,0,0,.36-3V26.38a9.77,9.77,0,0,0-.55-3.44A3.91,3.91,0,0,0,85.84,21Z"
        transform="translate(-0.04)"
      />
      <path
        className="cls-1"
        d="M73.77,22.56c-1.13-1-2-1.57-2.55-1.57s-1.44.52-2.58,1.57a8.37,8.37,0,0,0-2.1,2.53,10.5,10.5,0,0,0-.27,3.13V31a10.5,10.5,0,0,0,.27,3.13,8.63,8.63,0,0,0,2.1,2.55q1.71,1.56,2.58,1.56t2.55-1.56a8.61,8.61,0,0,0,2.12-2.55A10.5,10.5,0,0,0,76.16,31V28.22a10.5,10.5,0,0,0-.27-3.13A8.36,8.36,0,0,0,73.77,22.56ZM72.86,31a8.48,8.48,0,0,1-.19,2.41,3.52,3.52,0,0,1-.67.94,1.23,1.23,0,0,1-.78.47,1.33,1.33,0,0,1-.82-.47,3.83,3.83,0,0,1-.64-.94A8.48,8.48,0,0,1,69.57,31V28.22a8.25,8.25,0,0,1,.19-2.39,3.31,3.31,0,0,1,.64-.93,1.31,1.31,0,0,1,.82-.5,1.22,1.22,0,0,1,.78.5,3.08,3.08,0,0,1,.67.93,8.25,8.25,0,0,1,.19,2.39Z"
        transform="translate(-0.04)"
      />
      <path
        className="cls-1"
        d="M64.12,31.2a9,9,0,0,0-1.81-2.12,11.41,11.41,0,0,0,1.55-1.79,4.07,4.07,0,0,0,.26-1.94A2.23,2.23,0,0,0,63.76,24,11.5,11.5,0,0,0,62,22.25,4.11,4.11,0,0,0,59.83,21a6.26,6.26,0,0,0-2.61,1.31A3.41,3.41,0,0,0,56,21l-2.86,2a6.44,6.44,0,0,1,1.14,1.86,8.5,8.5,0,0,1,.29,2.68V38h3.29V31H60a3.51,3.51,0,0,1,.52.84A10.86,10.86,0,0,1,61,34.61c.13,1.53.19,2.65.19,3.37h3.58q0-1.2-.21-3.72A17.5,17.5,0,0,0,64.12,31.2Zm-3.77-4.39a2.86,2.86,0,0,1-.67.88,1.43,1.43,0,0,1-.86.53h-.93V26.38c0-.65,0-1.29-.07-1.91a5.46,5.46,0,0,1,1.62-.31c.13,0,.29.13.48.41a3.67,3.67,0,0,1,.43.74,1.46,1.46,0,0,1,.17.71A2,2,0,0,1,60.35,26.81Z"
        transform="translate(-0.04)"
      />
      <polygon
        className="cls-1"
        points="43.1 24.14 46.21 24.14 46.21 37.98 49.5 37.98 49.5 24.14 52.6 24.14 52.6 21.27 43.1 21.27 43.1 24.14"
      />
      <path
        className="cls-1"
        d="M116.47,8.89a9.53,9.53,0,0,1-1.74-1.05,1,1,0,0,1-.48-1,1.86,1.86,0,0,1,.24-1.1,2.13,2.13,0,0,1,.67-.55A1.64,1.64,0,0,1,115.9,5c.24,0,.64.31,1.19,1A5.85,5.85,0,0,1,118.31,8L121,6.13a5.93,5.93,0,0,0-2.15-3,5.06,5.06,0,0,0-3-1.39A4.67,4.67,0,0,0,113.51,3a10.8,10.8,0,0,0-2,1.9A4,4,0,0,0,111,7a4.92,4.92,0,0,0,.31,1.91,4.1,4.1,0,0,0,1.5,1.53,25.31,25.31,0,0,0,2.53,1.43,9.57,9.57,0,0,1,1.86,1.07c.26.13.39.47.39,1a1.91,1.91,0,0,1-.31,1.19,2.78,2.78,0,0,1-.62.48,1.58,1.58,0,0,1-.74.21q-.34,0-1.17-.93a5.76,5.76,0,0,1-1.22-2l-2.65,1.81a6,6,0,0,0,2.15,3A5.06,5.06,0,0,0,116,19a4.64,4.64,0,0,0,2.3-1.21,10.52,10.52,0,0,0,2-1.94,4.09,4.09,0,0,0,.53-2.14,3.79,3.79,0,0,0-.26-1.72C120.16,11.2,118.79,10.17,116.47,8.89Z"
        transform="translate(-0.04)"
      />
      <path
        className="cls-1"
        d="M104.22,18.73a4.67,4.67,0,0,0,2.6-1.43,8.54,8.54,0,0,0,2.08-2.39,10.64,10.64,0,0,0,.26-3.13V9a10.64,10.64,0,0,0-.26-3.13,8.36,8.36,0,0,0-2.12-2.53c-1.13-1.05-2-1.58-2.51-1.58A4.7,4.7,0,0,0,101.88,3,3.13,3.13,0,0,0,101,1.73l-3.15,2.2A6.48,6.48,0,0,1,99,5.79a9,9,0,0,1,.28,2.72V18.73Zm0-13.58a1.17,1.17,0,0,1,.79.5,3.08,3.08,0,0,1,.67.93A8.25,8.25,0,0,1,105.87,9v3a8.48,8.48,0,0,1-.19,2.41,3.34,3.34,0,0,1-.67.93,1.21,1.21,0,0,1-.79.48h-1.64V7.13a11.05,11.05,0,0,1-.08-1.53A4.51,4.51,0,0,1,104.22,5.15Z"
        transform="translate(-0.04)"
      />
      <path
        className="cls-1"
        d="M86.88,8.51V18.73h3.3V7.13l0-1a2.81,2.81,0,0,1,.74-.81,1.43,1.43,0,0,1,.79-.38,1,1,0,0,1,.69.4,3.11,3.11,0,0,1,.55.74,1.07,1.07,0,0,1,.19.53V18.73h3.32V6.1a2.23,2.23,0,0,0-.36-1.33A12,12,0,0,0,94.26,3a4.24,4.24,0,0,0-2.1-1.27c-.45,0-1.3.52-2.56,1.56a4.18,4.18,0,0,0-1.29-1.56l-2.86,2a7,7,0,0,1,1.15,2A9.58,9.58,0,0,1,86.88,8.51Z"
        transform="translate(-0.04)"
      />
      <polygon
        className="cls-1"
        points="84.57 15.84 78.86 15.84 78.86 11.45 83.14 11.45 83.14 8.56 78.86 8.56 78.86 5.27 79.75 4.65 84.19 4.65 84.19 1.73 78.86 1.73 75.57 4.03 75.57 18.73 84.57 18.73 84.57 15.84"
      />
      <path
        className="cls-1"
        d="M70.85,17.11l.29,1.62h2.31V10.35H68.7V13h1.65a4.08,4.08,0,0,1-.17,1.19,3.37,3.37,0,0,1-.76.91,1.57,1.57,0,0,1-.91.5,1.28,1.28,0,0,1-.83-.48,3.44,3.44,0,0,1-.65-.93,8.48,8.48,0,0,1-.19-2.41V9.25a8.19,8.19,0,0,1,.31-3.12c.51-.78,1-1.17,1.36-1.17.22,0,.61.36,1.17,1.09A7.52,7.52,0,0,1,70.9,8.44L73.55,6.6A6.7,6.7,0,0,0,71.4,3.26a4.82,4.82,0,0,0-3-1.53q-.77,0-2.34,1.44a11.41,11.41,0,0,0-2,2.26,9.6,9.6,0,0,0-.47,3.82v2.53a10.64,10.64,0,0,0,.26,3.13,8.63,8.63,0,0,0,2.1,2.55c1.15,1,2,1.55,2.51,1.55S69.75,18.38,70.85,17.11Z"
        transform="translate(-0.04)"
      />
      <polygon
        className="cls-1"
        points="62.31 15.84 56.6 15.84 56.6 11.45 60.88 11.45 60.88 8.56 56.6 8.56 56.6 5.27 57.49 4.65 61.93 4.65 61.93 1.73 56.6 1.73 53.31 4.03 53.31 18.73 62.31 18.73 62.31 15.84"
      />
      <polygon
        className="cls-1"
        points="51.89 15.86 46.47 15.86 46.47 2.02 43.17 2.02 43.17 18.73 51.89 18.73 51.89 15.86"
      />
    </svg>
  );
}

export function Header({ navLinks = defaultNavLinks, actionButton }: HeaderProps = {}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-[1000] px-4 sm:px-6 py-2 flex justify-between items-center bg-header text-header-foreground border-b border-primary/10">
      <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
        <Logo />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-4">
        {navLinks.map((item) => (
          <Button
            key={item.label}
            asChild
            variant="ghost"
            className="text-primary hover:bg-primary/20 hover:text-primary font-medium shadow-none text-sm lg:text-base px-3 lg:px-4"
          >
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </Button>
        ))}
        {actionButton && (
          <Button
            asChild
            className="bg-primary text-accent hover:bg-primary/90 font-medium shadow-md text-sm lg:text-base px-4"
          >
            <Link href={actionButton.href}>{actionButton.label}</Link>
          </Button>
        )}
      </nav>

      {/* Mobile Hamburger Navigation */}
      <div className="flex md:hidden items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              onClick={() => setIsOpen(true)}
              className="text-primary hover:bg-primary/20 hover:text-primary h-11 w-11 p-0 flex items-center justify-center rounded-lg focus-visible:ring-1 focus-visible:ring-primary [&_svg]:!h-7 [&_svg]:!w-7 cursor-pointer touch-manipulation active:scale-95 transition-transform"
              aria-label="Open navigation menu"
            >
              <Menu className="!h-7 !w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[290px] sm:w-[350px] bg-[#2C2504] text-white border-l border-primary/20 p-6 flex flex-col justify-between"
          >
            <div>
              <SheetHeader className="text-left pb-6 border-b border-white/10">
                <SheetTitle className="flex items-center">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="flex items-center hover:opacity-90 transition-opacity"
                    >
                      <Logo className="h-[34px] w-auto" />
                      <span className="sr-only">Legends Troves</span>
                    </Link>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-6 flex flex-col space-y-2">
                {navLinks.map((item) => {
                  const icon =
                    item.label === 'Map' ? (
                      <Map className="w-5 h-5 text-primary" />
                    ) : item.label === 'Shop' || item.label === 'Shop Merch' ? (
                      <ShoppingBag className="w-5 h-5 text-primary" />
                    ) : item.label === 'Yamashita' ? (
                      <Shovel className="w-5 h-5 text-primary" />
                    ) : (
                      <Compass className="w-5 h-5 text-primary" />
                    );

                  return (
                    <SheetClose key={item.label} asChild>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/90 hover:text-primary hover:bg-primary/15 transition-colors font-medium text-base"
                        >
                          {icon}
                          <span>{item.label}</span>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/90 hover:text-primary hover:bg-primary/15 transition-colors font-medium text-base"
                        >
                          {icon}
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </SheetClose>
                  );
                })}

                {actionButton && (
                  <div className="pt-4 mt-2 border-t border-white/10">
                    <SheetClose asChild>
                      <Link
                        href={actionButton.href}
                        className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-primary text-accent hover:bg-primary/90 font-bold text-base shadow-lg transition-transform active:scale-[0.98]"
                      >
                        <Sparkles className="w-5 h-5" />
                        <span>{actionButton.label}</span>
                      </Link>
                    </SheetClose>
                  </div>
                )}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-[11px] text-primary/80">
                © {new Date().getFullYear()} Legends Troves
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

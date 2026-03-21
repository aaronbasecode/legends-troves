import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-[1000] px-6 py-3 flex justify-end items-center bg-header text-header-foreground">
      <div className="flex gap-4">
        <Button asChild variant="ghost" className="text-primary hover:bg-primary/20 hover:text-primary font-medium shadow-none">
          <Link href="/">Map</Link>
        </Button>
        <Button asChild variant="ghost" className="text-primary hover:bg-primary/20 hover:text-primary font-medium shadow-none">
          <Link href="/blog">Blog</Link>
        </Button>
        <Button asChild variant="ghost" className="text-primary hover:bg-primary/20 hover:text-primary font-medium shadow-none">
          <a href="https://legendstroves.etsy.com" target="_blank" rel="noopener noreferrer">
            Shop Merch
          </a>
        </Button>
        <Button asChild className="bg-primary text-accent hover:bg-primary/90 font-medium shadow-md">
          <Link href="/tools">Shop Treasure Hunting Tools</Link>
        </Button>
      </div>
    </header>
  );
}

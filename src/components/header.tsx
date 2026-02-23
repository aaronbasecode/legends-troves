import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-[1000] px-6 py-3 flex justify-between items-center bg-header text-header-foreground">
      <Link href="/" className="flex items-center gap-2">
        <svg
          role="img"
          aria-label="Legends Troves T Logo"
          className="h-12 w-auto"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M12.42 20.73h-1.1V13H7.32v-1h4V5h1.1v7h4v1h-4v7.73zM9.22 7.53h4.6c0-2-.5-2.7-1.6-2.7s-1.2.3-1.4.6c-.3.4-.4 1-.4 3.1H9.22zM8.12 6.53c.2-1.7 1.2-2.8 2.9-2.8s2.7 1 2.7 3H8.12z"/>
        </svg>
        <div className="flex flex-col -space-y-2">
            <span className="text-lg font-logo font-black uppercase tracking-wider">Legends</span>
            <span className="text-lg font-logo font-black uppercase tracking-wider">Troves</span>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <Button asChild>
          <Link href="/tools">Buy Treasure Hunting Tools</Link>
        </Button>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
          <Link href="/partner">Partner with Us</Link>
        </Button>
      </div>
    </header>
  );
}

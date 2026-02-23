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
          <path d="M21.33 7.18H13.8V5.6c0-.86-.69-1.56-1.56-1.56h-.48c-.87 0-1.56.7-1.56 1.56v1.58H4.67c-.61 0-1.11.5-1.11 1.1v2.72c0 .6.5 1.1 1.11 1.1h5.53v6.72c0 .61.5 1.1 1.11 1.1h.94c.61 0 1.11-.5 1.11-1.1V12.1h5.53c.61 0 1.11-.5 1.11-1.1V8.28c0-.6-.5-1.1-1.11-1.1zM12.24 18.82h-.48V7.18h.48v11.64z"/>
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

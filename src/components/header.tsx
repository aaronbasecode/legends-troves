import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-[1000] px-6 py-3 flex justify-between items-center bg-header text-header-foreground">
      <Link href="/" className="flex items-center gap-2">
        <span className="font-logo font-black text-5xl/none">T</span>
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

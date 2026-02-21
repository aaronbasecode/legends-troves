import { Gem } from "lucide-react";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-[1000] p-4 flex justify-center">
      <div className="flex items-center gap-4 text-primary bg-background/80 backdrop-blur-sm p-3 px-6 rounded-lg shadow-lg w-fit">
        <Gem className="h-8 w-8" />
        <h1 className="text-3xl font-headline font-bold">
          Legends Troves
        </h1>
      </div>
    </header>
  );
}

import { Header } from '@/components/header';

export default function ToolsPage() {
  return (
    <div>
      <Header />
      <main className="pt-24 px-4">
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Treasure Hunting Tools</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Get ready to unearth legendary artifacts! Our shop will feature state-of-the-art tools for every aspiring treasure hunter. Coming soon!
            </p>
        </div>
      </main>
    </div>
  );
}

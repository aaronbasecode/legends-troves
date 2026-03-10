import { Header } from '@/components/header';

export default function ShopPage() {
  return (
    <div>
      <Header />
      <main className="pt-24 px-4">
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Shop Merch</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Gear up for your next adventure with our exclusive legendary treasure hunting merchandise. From explorer hats to antique-style compasses, we have everything you need. Coming soon!
            </p>
        </div>
      </main>
    </div>
  );
}

import { Header } from '@/components/header';

export default function BlogPage() {
  return (
    <div>
      <Header />
      <main className="pt-24 px-4">
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Legendary Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Stories of discovery and adventure are on their way! Coming soon!
            </p>
        </div>
      </main>
    </div>
  );
}

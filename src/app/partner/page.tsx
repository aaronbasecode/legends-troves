import { Header } from '@/components/header';

export default function PartnerPage() {
  return (
    <div>
      <Header />
      <main className="pt-24 px-4">
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Partner with Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Do you have a lead on a legendary treasure? Or perhaps you're a purveyor of fine adventuring equipment? We are always looking for new partners to join our quests. Contact us to discuss opportunities.
            </p>
        </div>
      </main>
    </div>
  );
}

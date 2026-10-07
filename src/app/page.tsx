import { Header } from '@/components/header';
import ClientMap from '@/components/client-map';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative h-screen h-[100dvh] w-screen overflow-hidden">
        <ClientMap />
      </main>
    </>
  );
}

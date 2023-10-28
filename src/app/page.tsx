import CollectionsHeroes from '@/components/CollectionsHeroes';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Header />
      <CollectionsHeroes />
    </main>
  );
}

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';

import { CombatHeroesProvider } from '@/context/combatHeroes';

import { cn } from '@/lib/utils';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Azapfy - Raphael Lima',
  description: 'Teste'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(roboto.className, 'bg-zinc-900 text-zinc-100')}>
        <CombatHeroesProvider>{children}</CombatHeroesProvider>
      </body>
    </html>
  );
}

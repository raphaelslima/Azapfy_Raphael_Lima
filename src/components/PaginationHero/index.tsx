'use client';
import { useState } from 'react';

import Hero from '@/types/Hero';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import CardHero from '../CardHero';
import { Button } from '../ui/button';

type Props = {
  heroes: Hero[];
};
const PaginationHero = ({ heroes }: Props) => {
  const [indexPag, setIndexPag] = useState(10);

  return (
    <div className="w-full">
      <div className="w-full mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {heroes.map(
          (hero, i) =>
            i >= indexPag - 10 &&
            i <= indexPag - 1 && (
              <div key={hero.id} className="w-full mb-8">
                <CardHero hero={hero} />
              </div>
            )
        )}
      </div>
      <div className="w-full flex justify-center items-center gap-4">
        <Button
          className="bg-slate-200 text-zinc-700"
          onClick={() => indexPag - 10 > 0 && setIndexPag(indexPag - 10)}
        >
          <ChevronLeft />
        </Button>
        <Button
          className="bg-slate-200 text-zinc-700"
          onClick={() => indexPag < heroes.length && setIndexPag(indexPag + 10)}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default PaginationHero;

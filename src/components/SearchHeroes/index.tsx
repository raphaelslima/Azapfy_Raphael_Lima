'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import IconSearch from '@/Icons/IconSearch';
import Hero from '@/types/Hero';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

type Props = {
  heroes: Hero[];
};

const SearchHeroes = ({ heroes }: Props) => {
  const router = useRouter();
  const [searchHero, setSearchHero] = useState('');
  const [errorSearch, setErrorSearch] = useState('');

  const findHeroId = () => {
    if (searchHero === '') return;
    const findedHero = heroes.filter(
      (hero) =>
        hero.name.trim().toLocaleLowerCase() ===
        searchHero.trim().toLocaleLowerCase()
    );

    if (findedHero.length === 0) {
      setErrorSearch('Herói não encontrado');
      return;
    }

    router.push(`/hero/${findedHero[0].id}`);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Pesquisar Herói"
          className="text-zinc-900"
          value={searchHero}
          onChange={(e) => setSearchHero(e.target.value)}
        />
        <Button className="bg-green-500" onClick={() => findHeroId()}>
          <IconSearch fontSize={24} />
        </Button>
      </div>
      <p className="text-red-500">
        {errorSearch && searchHero ? errorSearch : false}
      </p>
    </section>
  );
};

export default SearchHeroes;

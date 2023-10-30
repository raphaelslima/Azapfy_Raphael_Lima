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

  const changeValues = (value: string) => {
    setSearchHero(value);
    setErrorSearch('');
  };

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

    setErrorSearch('');
    router.push(`/hero/${findedHero[0].id}`);
  };

  const handlePressFindHero = (code: string) => {
    if (code.toLocaleLowerCase() === 'enter') {
      findHeroId();
    }
  };

  return (
    <section className="w-full flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row w-full max-w-sm items-center justify-between space-x-2">
        <Input
          type="text"
          placeholder="Pesquisar Herói"
          className="text-zinc-900 md:flex-grow"
          value={searchHero}
          onChange={(e) => changeValues(e.target.value)}
          onKeyDown={(e) => handlePressFindHero(e.code)}
        />
        <Button className="bg-green-500" onClick={() => findHeroId()}>
          <IconSearch fontSize={24} />
        </Button>
      </div>
      <p className="text-red-500">{errorSearch ? errorSearch : false}</p>
    </section>
  );
};

export default SearchHeroes;

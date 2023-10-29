'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import { CombatHeroesContext } from '@/context/combatHeroes';
import Hero from '@/types/Hero';

import { Button } from '../ui/button';

type Props = {
  hero: Hero;
};

const CardHero = ({ hero }: Props) => {
  const { heroesFighters, setHeroesFighters, combatHeroes } =
    useContext(CombatHeroesContext);

  const chooseHeroFighter = () => {
    if (!combatHeroes) return;
    if (heroesFighters.length >= 2) {
      const newArrayHero = [...heroesFighters];
      newArrayHero.shift();
      newArrayHero.push(hero);
      setHeroesFighters(newArrayHero);
      return;
    }
    const newArrayHero = [...heroesFighters];
    newArrayHero.push(hero);
    setHeroesFighters(newArrayHero);
  };
  return (
    <div
      className={`w-full flex flex-col justify-center items-center gap-2`}
      onClick={() => chooseHeroFighter()}
    >
      <div>
        <Image
          src={hero.images.sm}
          alt={`Imagem do herói ${hero.name}`}
          width={120}
          height={120}
          className={`object-fill rounded-sm ${
            !combatHeroes ? 'border border-blue-500' : 'border border-red-500'
          }`}
          priority
        />
      </div>
      <p>{hero.name}</p>
      {combatHeroes ? (
        false
      ) : (
        <Link href={`/hero/${hero.id}`}>
          <Button className="bg-blue-500">Visualizar</Button>
        </Link>
      )}
    </div>
  );
};

export default CardHero;

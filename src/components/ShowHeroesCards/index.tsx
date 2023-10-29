'use client';
import { useContext } from 'react';

import { CombatHeroesContext } from '@/context/combatHeroes';
import Hero from '@/types/Hero';

import CardHero from '../CardHero';

type Props = {
  heroes: Hero[];
};

const ShowHeroesCards = ({ heroes }: Props) => {
  const { combatHeroes } = useContext(CombatHeroesContext);
  return (
    <>
      {!combatHeroes ? (
        <h2 className="text-2xl mb-6 text-blue-500">Modo Exibição</h2>
      ) : (
        <h2 className="text-2xl mb-6 text-red-500">Modo Combate</h2>
      )}
      <div className="w-full mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {heroes.length > 0 ? (
          heroes.map((hero) => (
            <div key={hero.id} className="w-full mb-8">
              <CardHero hero={hero} combatHeroes={combatHeroes} />
            </div>
          ))
        ) : (
          <span className="text-lg">Carregando...</span>
        )}
      </div>
    </>
  );
};

export default ShowHeroesCards;

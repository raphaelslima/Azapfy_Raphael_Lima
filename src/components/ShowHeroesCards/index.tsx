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
        <h2 className="text-lg mb-6">Modo Exibição</h2>
      ) : (
        <h2 className="text-lg mb-6">Modo Combate</h2>
      )}
      <div className="w-full grid grid-cols-2 md:grid-cols-4">
        {heroes.length > 0 ? (
          heroes.map((hero) => (
            <div key={hero.id} className="w-full mb-6">
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

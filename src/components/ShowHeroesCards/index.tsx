'use client';
import { useContext } from 'react';

import { CombatHeroesContext } from '@/context/combatHeroes';
import Hero from '@/types/Hero';

import CardHero from '../CardHero';
import { Button } from '../ui/button';

type Props = {
  heroes: Hero[];
};

const ShowHeroesCards = ({ heroes }: Props) => {
  const { combatHeroes, heroesFighters, setHeroesFighters } =
    useContext(CombatHeroesContext);

  return (
    <>
      {!combatHeroes ? (
        <h2 className="text-2xl mb-6 text-blue-500">Modo Exibição</h2>
      ) : (
        <h2 className="text-2xl mb-4 text-red-500">Modo Combate</h2>
      )}

      {combatHeroes && (
        <div className="flex flex-col justify-center items-center mb-6">
          <h3 className="text-lg mb-6 text-red-500">
            {heroesFighters[0] ? heroesFighters[0].name : '???'} VS{' '}
            {heroesFighters[1] ? heroesFighters[1].name : '???'}
          </h3>
          <Button className="bg-red-500" onClick={() => setHeroesFighters([])}>
            Limpar combate
          </Button>
        </div>
      )}
      <div className="w-full mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {heroes.length > 0 ? (
          heroes.map((hero) => (
            <div key={hero.id} className="w-full mb-8">
              <CardHero hero={hero} />
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

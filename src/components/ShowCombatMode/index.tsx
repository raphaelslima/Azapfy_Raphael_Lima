'use client';

import { useContext } from 'react';

import { CombatHeroesContext } from '@/context/combatHeroes';

import { Button } from '../ui/button';

const ShowCombatMode = () => {
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
    </>
  );
};

export default ShowCombatMode;

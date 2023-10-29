'use client';
import { useContext } from 'react';

import { CombatHeroesContext } from '@/context/combatHeroes';

import { Button } from '../ui/button';

const BtnsShowOrCombatMode = () => {
  const { setCombatHeroes } = useContext(CombatHeroesContext);

  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <Button
        className="bg-blue-500 cursor-pointer"
        onClick={() => setCombatHeroes(false)}
      >
        Modo Exibição
      </Button>
      <Button
        className="bg-red-500 cursor-pointer"
        onClick={() => setCombatHeroes(true)}
      >
        Modo Combate
      </Button>
    </div>
  );
};

export default BtnsShowOrCombatMode;

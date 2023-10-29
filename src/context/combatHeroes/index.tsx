'use client';
import { createContext, useState } from 'react';

import Hero from '@/types/Hero';

type CombatHeroesProps = {
  combatHeroes: boolean;
  setCombatHeroes: (combatHeroes: boolean) => void;
  heroesFighters: Hero[];
  setHeroesFighters: (heroFfghter: Hero[]) => void;
};

const CombatHeroesContext = createContext<CombatHeroesProps>(
  {} as CombatHeroesProps
);

const CombatHeroesProvider = ({ children }: { children: React.ReactNode }) => {
  const [combatHeroes, setCombatHeroes] = useState(false);
  const [heroesFighters, setHeroesFighters] = useState<Hero[]>([]);

  return (
    <CombatHeroesContext.Provider
      value={{
        combatHeroes,
        setCombatHeroes,
        heroesFighters,
        setHeroesFighters
      }}
    >
      {children}
    </CombatHeroesContext.Provider>
  );
};

export { CombatHeroesProvider, CombatHeroesContext };

'use client';
import { createContext, useState } from 'react';

type CombatHeroesProps = {
  combatHeroes: boolean;
  setCombatHeroes: (combatHeroes: boolean) => void;
};

const CombatHeroesContext = createContext<CombatHeroesProps>(
  {} as CombatHeroesProps
);

const CombatHeroesProvider = ({ children }: { children: React.ReactNode }) => {
  const [combatHeroes, setCombatHeroes] = useState(false);
  return (
    <CombatHeroesContext.Provider value={{ combatHeroes, setCombatHeroes }}>
      {children}
    </CombatHeroesContext.Provider>
  );
};

export { CombatHeroesProvider, CombatHeroesContext };

'use client';
import Image from 'next/image';
import { useContext } from 'react';

import { CombatHeroesContext } from '@/context/combatHeroes';
import { Progress } from '@material-tailwind/react';

const HeroesCombat = () => {
  const { heroesFighters } = useContext(CombatHeroesContext);

  const findWinner = (): string | undefined => {
    const heroOneValue = Object.values(heroesFighters[0].powerstats);
    const totalHeroOne = heroOneValue.reduce((acc, curr) => acc + curr, 0);

    const heroTwoValue = Object.values(heroesFighters[1].powerstats);
    const totalHeroTwo = heroTwoValue.reduce((acc, curr) => acc + curr, 0);

    if (totalHeroOne === totalHeroTwo) return 'Empate';
    if (totalHeroOne > totalHeroTwo) return heroesFighters[0].name;
    if (totalHeroOne < totalHeroTwo) return heroesFighters[1].name;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-black min-h-screen w-full flex flex-col items-center p-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl">O vencedor é:</h1>
          <span className="text-2xl">{findWinner()}</span>
        </div>
        <div className="flex flex-row justify-between items-center w-full gap-8 mt-6">
          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <h2 className="text-lg">{heroesFighters[0].name}</h2>
            <Image
              src={heroesFighters[0].images.sm}
              alt={`Imagem do herói ${heroesFighters[0].name}`}
              width={80}
              height={80}
              priority
            />
            <div className="w-full flex flex-col justify-between md:justify-center items-start gap-2 mt-2">
              <h2 className="md:text-lg w-full text-center">Status:</h2>
              <ul className="text-sm w-full flex flex-col justify-center items-start md:items-center gap-4 md:w-full md:text-lg">
                <li className="w-full flex justify-between items-center">
                  <p className="md:w-1/3">Combate:</p>
                  <div className="md:w-2/3 flex justify-center items-center">
                    <Progress
                      value={heroesFighters[0].powerstats.combat}
                      color="red"
                      className="h-2 mx-4 bg-slate-400 hidden"
                    />

                    {heroesFighters[0].powerstats.combat >
                    heroesFighters[1].powerstats.combat ? (
                      <span className="text-green-500">
                        {heroesFighters[0].powerstats.combat}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {heroesFighters[0].powerstats.combat}
                      </span>
                    )}
                  </div>
                </li>
                <li className="w-full flex justify-between items-center">
                  <p className="md:w-1/3">Durabilidade:</p>
                  <div className="md:w-2/3 flex justify-center items-center">
                    <Progress
                      value={heroesFighters[0].powerstats.durability}
                      color="red"
                      className="h-2 mx-4 bg-slate-400 hidden"
                    />
                    {heroesFighters[0].powerstats.durability >
                    heroesFighters[1].powerstats.durability ? (
                      <span className="text-green-500">
                        {heroesFighters[0].powerstats.durability}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {heroesFighters[0].powerstats.durability}
                      </span>
                    )}
                  </div>
                </li>
                <li className="w-full flex justify-between items-center">
                  <p className="md:w-1/3">Inteligência:</p>
                  <div className="md:w-2/3 flex justify-center items-center">
                    <Progress
                      value={heroesFighters[0].powerstats.intelligence}
                      color="red"
                      className="h-2 mx-4 bg-slate-400 hidden"
                    />
                    {heroesFighters[0].powerstats.intelligence >
                    heroesFighters[1].powerstats.intelligence ? (
                      <span className="text-green-500">
                        {heroesFighters[0].powerstats.intelligence}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {heroesFighters[0].powerstats.intelligence}
                      </span>
                    )}
                  </div>
                </li>
                <li className="w-full flex justify-between items-center">
                  <p className="md:w-1/3">Poder:</p>
                  <div className="md:w-2/3 flex justify-center items-center">
                    <Progress
                      value={heroesFighters[0].powerstats.power}
                      color="red"
                      className="h-2 mx-4 bg-slate-400 hidden"
                    />
                    {heroesFighters[0].powerstats.power >
                    heroesFighters[1].powerstats.power ? (
                      <span className="text-green-500">
                        {heroesFighters[0].powerstats.power}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {heroesFighters[0].powerstats.power}
                      </span>
                    )}
                  </div>
                </li>
                <li className="w-full flex justify-between items-center">
                  <p className="md:w-1/3">Velocidade:</p>
                  <div className="md:w-2/3 flex justify-center items-center">
                    <Progress
                      value={heroesFighters[0].powerstats.speed}
                      color="red"
                      className="h-2 mx-4 bg-slate-400 hidden"
                    />
                    {heroesFighters[0].powerstats.speed >
                    heroesFighters[1].powerstats.speed ? (
                      <span className="text-green-500">
                        {heroesFighters[0].powerstats.speed}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {heroesFighters[0].powerstats.speed}
                      </span>
                    )}
                  </div>
                </li>
                <li className="w-full flex justify-between items-center">
                  <p className="md:w-1/3">Estratégia:</p>
                  <div className="md:w-2/3 flex justify-center items-center">
                    <Progress
                      value={heroesFighters[0].powerstats.strength}
                      color="red"
                      className="h-2 mx-4 bg-slate-400 hidden"
                    />
                    {heroesFighters[0].powerstats.strength >
                    heroesFighters[1].powerstats.strength ? (
                      <span className="text-green-500">
                        {heroesFighters[0].powerstats.strength}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {heroesFighters[0].powerstats.strength}
                      </span>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <h2 className="text-lg">{heroesFighters[1].name}</h2>
            <Image
              src={heroesFighters[1].images.sm}
              alt={`Imagem do herói ${heroesFighters[1].name}`}
              width={80}
              height={80}
              priority
            />
            <div className="w-full flex flex-col justify-between md:justify-center items-start gap-2 mt-2">
              <h2 className="md:text-lg w-full text-center">Status:</h2>
              <ul className="text-sm w-full flex flex-col justify-center items-start md:items-center gap-4 md:w-full md:text-lg">
                <li className="w-full flex justify-between items-center">
                  <p className="md:w-1/3">Combate:</p>
                  <div className="md:w-2/3 flex justify-center items-center">
                    <Progress
                      value={heroesFighters[1].powerstats.combat}
                      color="red"
                      className="h-2 mx-4 bg-slate-400 hidden"
                    />
                    {heroesFighters[0].powerstats.combat <
                    heroesFighters[1].powerstats.combat ? (
                      <span className="text-green-500">
                        {heroesFighters[1].powerstats.combat}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {heroesFighters[1].powerstats.combat}
                      </span>
                    )}
                  </div>
                </li>
                <li className="w-full flex justify-between items-center">
                  <p className="md:w-1/3">Durabilidade:</p>
                  <div className="md:w-2/3 flex justify-center items-center">
                    <Progress
                      value={heroesFighters[1].powerstats.durability}
                      color="red"
                      className="h-2 mx-4 bg-slate-400 hidden"
                    />
                    {heroesFighters[0].powerstats.durability <
                    heroesFighters[1].powerstats.durability ? (
                      <span className="text-green-500">
                        {heroesFighters[1].powerstats.durability}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {heroesFighters[1].powerstats.durability}
                      </span>
                    )}
                  </div>
                </li>
                <li className="w-full flex justify-between items-center">
                  <p className="md:w-1/3">Inteligência:</p>
                  <div className="md:w-2/3 flex justify-center items-center">
                    <Progress
                      value={heroesFighters[1].powerstats.intelligence}
                      color="red"
                      className="h-2 mx-4 bg-slate-400 hidden"
                    />
                    {heroesFighters[0].powerstats.intelligence <
                    heroesFighters[1].powerstats.intelligence ? (
                      <span className="text-green-500">
                        {heroesFighters[1].powerstats.intelligence}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {heroesFighters[1].powerstats.intelligence}
                      </span>
                    )}
                  </div>
                </li>
                <li className="w-full flex justify-between items-center">
                  <p className="md:w-1/3">Poder:</p>
                  <div className="md:w-2/3 flex justify-center items-center">
                    <Progress
                      value={heroesFighters[1].powerstats.power}
                      color="red"
                      className="h-2 mx-4 bg-slate-400 hidden"
                    />
                    {heroesFighters[0].powerstats.power <
                    heroesFighters[1].powerstats.power ? (
                      <span className="text-green-500">
                        {heroesFighters[1].powerstats.power}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {heroesFighters[1].powerstats.power}
                      </span>
                    )}
                  </div>
                </li>
                <li className="w-full flex justify-between items-center">
                  <p className="md:w-1/3">Velocidade:</p>
                  <div className="md:w-2/3 flex justify-center items-center">
                    <Progress
                      value={heroesFighters[1].powerstats.speed}
                      color="red"
                      className="h-2 mx-4 bg-slate-400 hidden"
                    />
                    {heroesFighters[0].powerstats.speed <
                    heroesFighters[1].powerstats.speed ? (
                      <span className="text-green-500">
                        {heroesFighters[1].powerstats.speed}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {heroesFighters[1].powerstats.speed}
                      </span>
                    )}
                  </div>
                </li>
                <li className="w-full flex justify-between items-center">
                  <p className="md:w-1/3">Estratégia:</p>
                  <div className="md:w-2/3 flex justify-center items-center">
                    <Progress
                      value={heroesFighters[1].powerstats.strength}
                      color="red"
                      className="h-2 mx-4 bg-slate-400 hidden"
                    />
                    {heroesFighters[0].powerstats.strength <
                    heroesFighters[1].powerstats.strength ? (
                      <span className="text-green-500">
                        {heroesFighters[1].powerstats.strength}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {heroesFighters[1].powerstats.strength}
                      </span>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroesCombat;

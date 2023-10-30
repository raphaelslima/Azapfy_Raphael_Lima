'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import { Button } from '@/components/ui/button';
import { CombatHeroesContext } from '@/context/combatHeroes';
import IconHome from '@/Icons/IconHome';
import { ChevronLeft } from 'lucide-react';

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
    <>
      {heroesFighters.length == 2 ? (
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="bg-black min-h-screen w-full flex flex-col items-center p-4">
            <div className="w-full flex flex-row justify-start items-center mb-6 gap-2 lg:gap-4 lg:h-[10vh]">
              <Link href={'/'}>
                <Button variant="outline" size="icon" className="bg-zinc-900">
                  <ChevronLeft className="h-4 w-4 " />
                </Button>
              </Link>
              <h1 className="md:text-xl lg:text-2xl">
                Vitória:{' '}
                {findWinner() === 'Empate' ? (
                  <span>{findWinner()}</span>
                ) : (
                  <span className="text-green-500">{findWinner()}</span>
                )}
              </h1>
            </div>
            <div className="flex flex-row justify-between items-center w-full gap-8 mt-1 md:mt-0 lg:h-[90vh] lg:items-start">
              <div className="flex flex-col justify-center items-center gap-2 w-full">
                <h2
                  className={`text-lg text-center truncate lg:text-xl ${
                    findWinner() === heroesFighters[0].name && 'text-green-500'
                  }`}
                >
                  {heroesFighters[0].name}
                </h2>
                <div className="lg:hidden">
                  <Image
                    src={heroesFighters[0].images.md}
                    alt={`Imagem do herói ${heroesFighters[0].name}`}
                    width={80}
                    height={80}
                    priority
                  />
                </div>
                <div className="hidden lg:block">
                  <Image
                    src={heroesFighters[0].images.md}
                    alt={`Imagem do herói ${heroesFighters[0].name}`}
                    width={120}
                    height={120}
                    priority
                  />
                </div>
                <div className="w-full flex flex-col justify-between  items-start gap-2 mt-2">
                  <h2 className="w-full text-center lg:text-xl">Status:</h2>
                  <ul className="text-sm w-full flex flex-col justify-center items-start gap-4 lg:mt-4 lg:text-lg">
                    <li className="w-full flex justify-between items-center">
                      <p>Combate:</p>
                      <div className="flex justify-center items-center">
                        {heroesFighters[0].powerstats.combat ===
                        heroesFighters[1].powerstats.combat ? (
                          <span>{heroesFighters[0].powerstats.combat}</span>
                        ) : heroesFighters[0].powerstats.combat >=
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
                      <p>Durabilidade:</p>
                      <div className="flex justify-center items-center">
                        {heroesFighters[0].powerstats.durability ===
                        heroesFighters[1].powerstats.durability ? (
                          <span>{heroesFighters[0].powerstats.durability}</span>
                        ) : heroesFighters[0].powerstats.durability >=
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
                      <p>Inteligência:</p>
                      <div className=" flex justify-center items-center">
                        {heroesFighters[0].powerstats.intelligence ===
                        heroesFighters[1].powerstats.intelligence ? (
                          <span>
                            {heroesFighters[0].powerstats.intelligence}
                          </span>
                        ) : heroesFighters[0].powerstats.intelligence >=
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
                      <p>Poder:</p>
                      <div className="flex justify-center items-center">
                        {heroesFighters[0].powerstats.power ===
                        heroesFighters[1].powerstats.power ? (
                          <span>{heroesFighters[0].powerstats.power}</span>
                        ) : heroesFighters[0].powerstats.power >=
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
                      <p>Velocidade:</p>
                      <div className=" flex justify-center items-center">
                        {heroesFighters[0].powerstats.speed ===
                        heroesFighters[1].powerstats.speed ? (
                          <span>{heroesFighters[0].powerstats.speed}</span>
                        ) : heroesFighters[0].powerstats.speed >=
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
                      <p>Estratégia:</p>
                      <div className=" flex justify-center items-center">
                        {heroesFighters[0].powerstats.strength ===
                        heroesFighters[1].powerstats.strength ? (
                          <span>{heroesFighters[0].powerstats.strength}</span>
                        ) : heroesFighters[0].powerstats.strength >=
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
                <h2
                  className={`text-lg text-center truncate lg:text-xl ${
                    findWinner() === heroesFighters[1].name && 'text-green-500'
                  }`}
                >
                  {heroesFighters[1].name}
                </h2>
                <div className="lg:hidden">
                  <Image
                    src={heroesFighters[1].images.sm}
                    alt={`Imagem do herói ${heroesFighters[0].name}`}
                    width={80}
                    height={80}
                    priority
                  />
                </div>
                <div className="hidden lg:block">
                  <Image
                    src={heroesFighters[1].images.md}
                    alt={`Imagem do herói ${heroesFighters[0].name}`}
                    width={120}
                    height={120}
                    priority
                  />
                </div>
                <div className="w-full flex flex-col justify-between  items-start gap-2 mt-2">
                  <h2 className="w-full text-center lg:text-xl">Status:</h2>
                  <ul className="text-sm w-full flex flex-col justify-center items-start gap-4 lg:mt-4 lg:text-lg">
                    <li className="w-full flex justify-between items-center">
                      <p>Combate:</p>
                      <div className="flex justify-center items-center">
                        {heroesFighters[0].powerstats.combat ===
                        heroesFighters[1].powerstats.combat ? (
                          <span>{heroesFighters[1].powerstats.combat}</span>
                        ) : heroesFighters[1].powerstats.combat >=
                          heroesFighters[0].powerstats.combat ? (
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
                      <p>Durabilidade:</p>
                      <div className="flex justify-center items-center">
                        {heroesFighters[0].powerstats.durability ===
                        heroesFighters[1].powerstats.durability ? (
                          <span>{heroesFighters[1].powerstats.durability}</span>
                        ) : heroesFighters[1].powerstats.durability >=
                          heroesFighters[0].powerstats.durability ? (
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
                      <p>Inteligência:</p>
                      <div className=" flex justify-center items-center">
                        {heroesFighters[0].powerstats.intelligence ===
                        heroesFighters[1].powerstats.intelligence ? (
                          <span>
                            {heroesFighters[1].powerstats.intelligence}
                          </span>
                        ) : heroesFighters[1].powerstats.intelligence >=
                          heroesFighters[0].powerstats.intelligence ? (
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
                      <p>Poder:</p>
                      <div className="flex justify-center items-center">
                        {heroesFighters[0].powerstats.power ===
                        heroesFighters[1].powerstats.power ? (
                          <span>{heroesFighters[1].powerstats.power}</span>
                        ) : heroesFighters[1].powerstats.power >=
                          heroesFighters[0].powerstats.power ? (
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
                      <p>Velocidade:</p>
                      <div className=" flex justify-center items-center">
                        {heroesFighters[0].powerstats.speed ===
                        heroesFighters[1].powerstats.speed ? (
                          <span>{heroesFighters[1].powerstats.speed}</span>
                        ) : heroesFighters[1].powerstats.speed >=
                          heroesFighters[0].powerstats.speed ? (
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
                      <p>Estratégia:</p>
                      <div className=" flex justify-center items-center">
                        {heroesFighters[0].powerstats.strength ===
                        heroesFighters[1].powerstats.strength ? (
                          <span>{heroesFighters[1].powerstats.strength}</span>
                        ) : heroesFighters[1].powerstats.strength >=
                          heroesFighters[0].powerstats.strength ? (
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
      ) : (
        <div className="w-full flex flex-col justify-center items-center gap-4 min-h-screen">
          <p className="text-2xl text-red-700">Algo deu errado!!</p>
          <Link href={'/'}>
            <Button className="bg-slate-200 text-zinc-700 flex justify-center items-center">
              <IconHome fontSize={18} />
              <p className="text-lg ml-2">Voltar para Home</p>
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default HeroesCombat;

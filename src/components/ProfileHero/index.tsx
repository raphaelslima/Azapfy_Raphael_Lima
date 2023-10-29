'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Hero from '@/types/Hero';
import { Progress } from '@material-tailwind/react';
import { ChevronLeft } from 'lucide-react';

import { Button } from '../ui/button';

type Props = {
  id: string;
  heroes: Hero[];
};

const ProfileHero = ({ id, heroes }: Props) => {
  const [hero, setHero] = useState<Hero | null>(null);

  const findHero = () => {
    const searchHero = heroes.filter((hero) => hero.id === parseInt(id));
    setHero(searchHero[0]);
  };

  useEffect(() => {
    findHero();
  }, []);
  return (
    <div className="container max-w-screen-lg flex flex-col justify-center items-cente p-4">
      {hero ? (
        <div className="w-full">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full min-h-screen lg:min-h-fit md:mb-8 flex flex-col items-center gap-6 mt-4 ">
              <div className="w-full flex justify-start items-center gap-4">
                <Link href={'/'}>
                  <Button variant="outline" size="icon" className="bg-zinc-900">
                    <ChevronLeft className="h-4 w-4 " />
                  </Button>
                </Link>
                <h1 className="text-center text-2xl md:text-4xl">
                  {hero.name}
                </h1>
              </div>
              <Image
                src={hero.images.md}
                alt={`Imagem do herói ${hero.name}`}
                width={250}
                height={180}
              />
            </div>

            <div className="w-full">
              <div className="w-full flex flex-col justify-between md:justify-center items-start gap-4">
                <h2 className="text-xl md:text-2xl w-full">Status:</h2>
                <ul className="text-sm w-full flex flex-col justify-center items-start md:items-center gap-4 md:w-full md:text-lg">
                  <li className="w-full flex justify-between items-center">
                    <p className="w-1/3">Combate:</p>
                    <div className="w-2/3 flex justify-center items-center">
                      <Progress
                        value={hero.powerstats.combat}
                        color="red"
                        className="h-2 mx-4 bg-slate-400"
                      />
                      {hero.powerstats.combat}
                    </div>
                  </li>
                  <li className="w-full flex justify-between items-center">
                    <p className="w-1/3">Durabilidade:</p>
                    <div className="w-2/3 flex justify-center items-center">
                      <Progress
                        value={hero.powerstats.durability}
                        color="red"
                        className="h-2 mx-4 bg-slate-400"
                      />
                      {hero.powerstats.durability}
                    </div>
                  </li>
                  <li className="w-full flex justify-between items-center">
                    <p className="w-1/3">Inteligência:</p>
                    <div className="w-2/3 flex justify-center items-center">
                      <Progress
                        value={hero.powerstats.intelligence}
                        color="red"
                        className="h-2 mx-4 bg-slate-400"
                      />
                      {hero.powerstats.intelligence}
                    </div>
                  </li>
                  <li className="w-full flex justify-between items-center">
                    <p className="w-1/3">Poder:</p>
                    <div className="w-2/3 flex justify-center items-center">
                      <Progress
                        value={hero.powerstats.power}
                        color="red"
                        className="h-2 mx-4 bg-slate-400"
                      />
                      {hero.powerstats.power}
                    </div>
                  </li>
                  <li className="w-full flex justify-between items-center">
                    <p className="w-1/3">Velocidade:</p>
                    <div className="w-2/3 flex justify-center items-center">
                      <Progress
                        value={hero.powerstats.speed}
                        color="red"
                        className="h-2 mx-4 bg-slate-400"
                      />
                      {hero.powerstats.speed}
                    </div>
                  </li>
                  <li className="w-full flex justify-between items-center">
                    <p className="w-1/3">Estratégia:</p>
                    <div className="w-2/3 flex justify-center items-center">
                      <Progress
                        value={hero.powerstats.strength}
                        color="red"
                        className="h-2 mx-4 bg-slate-400"
                      />
                      {hero.powerstats.strength}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 md:w-1/2">
                <h2 className="text-xl mb-2 md:text-2xl">Biografia:</h2>
                <ul className="text-sm flex flex-col justify-center items-start gap-4 md:text-lg">
                  {!hero.biography.firstAppearance ||
                    (hero.biography.firstAppearance === '-' ? (
                      false
                    ) : (
                      <li>
                        Primeira aparição: {hero.biography.firstAppearance}
                      </li>
                    ))}

                  {!hero.biography.fullName ||
                  hero.biography.fullName === '-' ? (
                    false
                  ) : (
                    <li>Nome verdadeiro: {hero.biography.fullName}</li>
                  )}

                  {!hero.biography.placeOfBirth ||
                  hero.biography.placeOfBirth === '-' ? (
                    false
                  ) : (
                    <li>Nascido em: {hero.biography.placeOfBirth}</li>
                  )}

                  {!hero.biography.publisher ||
                  hero.biography.publisher === '-' ? (
                    false
                  ) : (
                    <li>Personagem de: {hero.biography.publisher}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span className="text-lg">Carregando...</span>
      )}
    </div>
  );
};

export default ProfileHero;

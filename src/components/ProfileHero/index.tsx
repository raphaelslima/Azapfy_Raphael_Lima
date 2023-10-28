'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Hero from '@/types/Hero';
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
            <div className="w-full min-h-screen flex flex-col items-center gap-6 mt-4 ">
              <div className="w-full flex justify-between items-center">
                <Link href={'/'}>
                  <Button variant="outline" size="icon" className="bg-zinc-900">
                    <ChevronLeft className="h-4 w-4 " />
                  </Button>
                </Link>
                <h1 className="text-center text-2xl">{hero.name}</h1>
              </div>
              <Image
                src={hero.images.md}
                alt={`Imagem do herói ${hero.name}`}
                width={250}
                height={180}
              />
            </div>

            <div className="w-full flex flex-col md:flex-row md:justify-around md:items-center">
              <div className="w-full flex flex-col justify-between md:justify-center items-start gap-4 md:w-1/2">
                <h2 className="text-xl w-full text-center">Status:</h2>
                <ul className="text-sm w-full flex flex-row justify-between items-center">
                  <div className="w-full flex flex-col justify-center items-center gap-3">
                    <li>Poder: {hero.powerstats.combat}</li>
                    <li>Durabilidade: {hero.powerstats.durability}</li>
                    <li>Inteligência: {hero.powerstats.intelligence}</li>
                  </div>
                  <div className="w-full flex flex-col justify-center items-center gap-3">
                    <li>Poder: {hero.powerstats.power}</li>
                    <li>Velocidade: {hero.powerstats.speed}</li>
                    <li>Estratégia: {hero.powerstats.strength}</li>
                  </div>
                </ul>
              </div>

              <div className="mt-4 md:w-1/2 md:mt-0">
                <h2 className="text-xl mb-2 text-center">Biografia:</h2>
                <ul className="text-sm flex flex-col justify-center items-center gap-2">
                  {hero.biography.firstAppearance && (
                    <li>Primeira aparição: {hero.biography.firstAppearance}</li>
                  )}

                  {hero.biography.fullName && (
                    <li>Nome verdadeiro:: {hero.biography.fullName}</li>
                  )}

                  {hero.biography.placeOfBirth && (
                    <li>Nascido em: {hero.biography.placeOfBirth}</li>
                  )}

                  {hero.biography.publisher && (
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

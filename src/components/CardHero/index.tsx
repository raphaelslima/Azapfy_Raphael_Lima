import Image from 'next/image';
import Link from 'next/link';

import Hero from '@/types/Hero';

type Props = {
  hero: Hero;
  combatHeroes: boolean;
};

const CardHero = ({ hero, combatHeroes }: Props) => {
  return (
    <Link href={`/hero/${hero.id}`}>
      <div className={`w-full flex flex-col justify-center items-center gap-2`}>
        <div>
          <Image
            src={hero.images.sm}
            alt={`Imagem do herói ${hero.name}`}
            width={120}
            height={120}
            className={`object-fill rounded-sm ${
              !combatHeroes ? 'border border-blue-500' : 'border border-red-500'
            }`}
            priority
          />
        </div>
        <p>{hero.name}</p>
      </div>
    </Link>
  );
};

export default CardHero;

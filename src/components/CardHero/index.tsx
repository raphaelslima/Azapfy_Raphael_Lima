import Image from 'next/image';

import Hero from '@/types/Hero';

type Props = {
  hero: Hero;
};

const CardHero = ({ hero }: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <div>
        <Image
          src={hero.images.sm}
          alt={`Imagem do herói ${hero.name}`}
          width={80}
          height={80}
          className="object-fill rounded-sm"
          priority
        />
      </div>
      <p>{hero.name}</p>
    </div>
  );
};

export default CardHero;

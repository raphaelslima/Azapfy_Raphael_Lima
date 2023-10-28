import ProfileHero from '@/components/ProfileHero';
import { fethHeroes } from '@/helpers/fetchHeroes';
import Hero from '@/types/Hero';

type Props = {
  params: {
    id: string;
  };
};

const HeroDetail = async ({ params }: Props) => {
  const heroes: Hero[] = await fethHeroes(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans'
  );

  return (
    <main>
      <ProfileHero id={params.id} heroes={heroes} />
    </main>
  );
};

export default HeroDetail;

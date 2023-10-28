import { fethHeroes } from '@/helpers/fetchHeroes';
import Hero from '@/types/Hero';

import ShowHeroesCards from '../ShowHeroesCards';

const CollectionsHeroes = async () => {
  const heroes: Hero[] = await fethHeroes(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans'
  );

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <ShowHeroesCards heroes={heroes} />
    </section>
  );
};

export default CollectionsHeroes;

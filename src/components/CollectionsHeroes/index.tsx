import { fethHeroes } from '@/helpers/fetchHeroes';
import Hero from '@/types/Hero';

import PaginationHero from '../PaginationHero';
import ShowCombatMode from '../ShowCombatMode';

const CollectionsHeroes = async () => {
  const heroes: Hero[] = await fethHeroes(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans'
  );

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <ShowCombatMode />
      <div className="w-full">
        {heroes.length > 0 && <PaginationHero heroes={heroes} />}
      </div>
    </section>
  );
};

export default CollectionsHeroes;

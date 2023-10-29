import { fethHeroes } from '@/helpers/fetchHeroes';
import Hero from '@/types/Hero';

import CardHero from '../CardHero';
import ShowCombatMode from '../ShowCombatMode';

const CollectionsHeroes = async () => {
  const heroes: Hero[] = await fethHeroes(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans'
  );

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <ShowCombatMode />
      <div className="w-full mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {heroes.length > 0 ? (
          heroes.map((hero) => (
            <div key={hero.id} className="w-full mb-8">
              <CardHero hero={hero} />
            </div>
          ))
        ) : (
          <span className="text-lg">Carregando...</span>
        )}
      </div>
    </section>
  );
};

export default CollectionsHeroes;

import { fethHeroes } from '@/helpers/fetchHeroes';
import Hero from '@/types/Hero';

import CardHero from '../CardHero';

const CollectionsHeroes = async () => {
  const heroes: Hero[] = await fethHeroes(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans'
  );

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2 className="text-lg mb-6">Modo Exibição</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-4">
        {heroes.length > 0 ? (
          heroes.map((hero) => (
            <div key={hero.id} className="w-full mb-6">
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

import { fethHeroes } from '@/helpers/fetchHeroes';
import Hero from '@/types/Hero';

const CollectionsHeroes = async () => {
  const heroes: Hero[] = await fethHeroes(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans'
  );

  console.log(heroes);

  return (
    <section>
      <h2 className="text-lg">Modo Exibição</h2>
    </section>
  );
};

export default CollectionsHeroes;

import Link from 'next/link';

import { fethHeroes } from '@/helpers/fetchHeroes';
import Hero from '@/types/Hero';

import SearchHeroes from '../SearchHeroes';
import { Button } from '../ui/button';

const Header = async () => {
  const heroes: Hero[] = await fethHeroes(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans'
  );

  return (
    <header className="container max-w-screen-lg flex flex-col justify-center items-center gap-4 p-4">
      <Link href={'/'}>
        <h1 className="text-center text-2xl">Jornada do Herói</h1>
      </Link>
      <SearchHeroes heroes={heroes} />
      <div className="flex flex-row justify-center items-center gap-4">
        <Button className="bg-blue-500">Modo Exibição</Button>
        <Button variant="destructive">Modo Combate</Button>
      </div>
    </header>
  );
};

export default Header;

import Link from 'next/link';

import { fethHeroes } from '@/helpers/fetchHeroes';
import Hero from '@/types/Hero';

import BtnsShowOrCombatMode from '../BtnsShowOrCombatMode';
import SearchHeroes from '../SearchHeroes';

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
      <BtnsShowOrCombatMode />
    </header>
  );
};

export default Header;

import IconSearch from '@/Icons/IconSearch';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

const SearchHeroes = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Pesquisar Herói" />
        <Button className="bg-green-500">
          <IconSearch fontSize={24} />
        </Button>
      </div>
    </section>
  );
};

export default SearchHeroes;

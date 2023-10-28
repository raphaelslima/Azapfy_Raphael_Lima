import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className="container max-w-screen-lg  flex flex-col justify-center items-center p-4">
      <h1 className="text-center text-2xl">Jornada do Herói</h1>
      <div className="flex flex-row justify-center items-center gap-4 mt-6">
        <Button className="bg-blue-500">Modo Exibição</Button>
        <Button variant="destructive">Modo Combate</Button>
      </div>
    </header>
  );
};

export default Header;

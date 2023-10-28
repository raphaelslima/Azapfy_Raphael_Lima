type Hero = {
  id: string;
  name: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
};

export default Hero;

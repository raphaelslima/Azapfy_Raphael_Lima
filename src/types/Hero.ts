type Hero = {
  id: number;
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
  biography: {
    firstAppearance: string;
    fullName: string;
    placeOfBirth: string;
    publisher: string;
  };
};

export default Hero;

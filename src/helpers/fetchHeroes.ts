export const fethHeroes = async (url: string) => {
  const res = await fetch(url, {
    next: {
      revalidate: 300
    }
  });

  return res.json();
};

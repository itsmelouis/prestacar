export const getVehiculeImage = (name: string): string => {
  return new URL(`../assets/jpg/${name}`, import.meta.url).href;
};

export const getVehiculeImageAvif = (name: string): string => {
  return new URL(`../assets/avif/${name}`, import.meta.url).href;
};

export const getVehiculeImageWebp = (name: string): string => {
  return new URL(`../assets/webp/${name}`, import.meta.url).href;
};

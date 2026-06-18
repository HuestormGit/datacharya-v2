const API_URL = import.meta.env.VITE_STRAPI_URL;

export const getHeroSlides = async () => {
  const response = await fetch(
    `${API_URL}/api/hero-slides?populate=*`
  );

  const data = await response.json();

  return data.data;
};
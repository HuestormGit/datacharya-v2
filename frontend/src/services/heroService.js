// const API_URL = import.meta.env.VITE_STRAPI_URL;


export const getHeroSlides = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/hero-slides?populate=*`
  );
//   const response = await fetch(
//     `${API_URL}/api/hero-slides?populate=*`
//   );

  const data = await response.json();

  return data.data;
};

import { authOptions, BASE_URL } from "../utils/helpers";

export async function getMovieDetails(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}`, authOptions);
  if (!response.ok) throw Error("Unable to fetch movies");
  const data = await response.json();
  return data;
}
export async function getCast(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?language=en-US`,
    authOptions
  );
  if (!response.ok) throw Error("Unable to fetch cast and crews");
  const { cast } = await response.json();
  return cast;
}
export async function getCrew(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?language=en-US`,
    authOptions
  );
  if (!response.ok) throw Error("Unable to fetch cast and crews");
  const { crew } = await response.json();
  return crew;
}
export async function getSimilar(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/recommendations?language=en-US&page=1`,
    authOptions
  );
  if (!response.ok) throw Error("Unable to fetch simlar movies");
  const { results: similar } = await response.json();
  return similar;
}

import { authOptions, BASE_URL } from "../utils/helpers";

export async function getDetails(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}`, authOptions);
  if (!response.ok) throw Error("Unable to fetch movies");
  const data = await response.json();
  return data;
}

export async function getVideos(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/videos?language=en-US`,
    authOptions
  );
  if (!response.ok) throw Error("Unable to fetch videos");
  const { results: videos } = await response.json();
  return videos;
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

export async function getRecommended(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/recommendations?language=en-US&page=1`,
    authOptions
  );
  if (!response.ok) throw Error("Unable to fetch simlar movies");
  const { results: recommended } = await response.json();
  return recommended;
}

export async function getSimilar(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/similar?language=en-US&page=1`,
    authOptions
  );
  if (!response.ok) throw Error("Unable to fetch simlar movies");
  const { results: similar } = await response.json();
  return similar;
}

export async function getBio(id) {
  const response = await fetch(
    `${BASE_URL}/person/${id}?language=en-US`,
    authOptions
  );
  if (!response.ok) throw Error("Unable to fetch data");
  const bio = await response.json();
  return bio;
}

export async function searchMovie(searchQuery) {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${searchQuery}&language=en-US&sort_by=popularity.desc&page=1`,
    authOptions
  );
  if (!response.ok) throw Error("Unable to fetch data");
  const { results } = await response.json();
  return results;
}

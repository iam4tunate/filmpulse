import { authOptions, BASE_URL } from "../utils/helpers";

export async function getTrending() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?language=en-US`,
    authOptions
  );
  if (!response.ok) throw Error("Failed getting now playing movies");
  const { results: trending } = await response.json();
  return trending;
}
export async function getNowPlaying() {
  const response = await fetch(`${BASE_URL}/movie/now_playing`, authOptions);
  if (!response.ok) throw Error("Failed getting now playing movies");
  const { results: nowPlaying } = await response.json();
  return nowPlaying;
}
export async function getTopRated() {
  const response = await fetch(`${BASE_URL}/movie/top_rated`, authOptions);
  if (!response.ok) throw Error("Failed getting now playing movies");
  const { results: topRated } = await response.json();
  return topRated;
}
export async function getUpcoming() {
  const response = await fetch(`${BASE_URL}/movie/upcoming`, authOptions);
  if (!response.ok) throw Error("Failed getting now playing movies");
  const { results: upcoming } = await response.json();
  return upcoming;
}
export async function getPopular() {
  const response = await fetch(`${BASE_URL}/movie/popular`, authOptions);
  if (!response.ok) throw Error("Failed getting now playing movies");
  const { results: popular } = await response.json();
  return popular;
}

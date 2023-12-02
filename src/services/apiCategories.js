import { BASE_URL } from "../utils/helpers";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2ZiZjM5YjU3ODk5Y2QwZmVlNDZmMmFiMGNmYjk2NCIsInN1YiI6IjYxODZhODMyMTNhMzg4MDA2NjA2ZDI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nbth2TeJfiI6nAyx-lTvYcBb_onbiFiEOIMe8cfciA4",
  },
};

export async function getTrending() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  if (!response.ok) throw Error("Failed getting now playing movies");
  const { results: trending } = await response.json();
  return trending;
}
export async function getNowPlaying() {
  const response = await fetch(`${BASE_URL}/now_playing`, options);
  if (!response.ok) throw Error("Failed getting now playing movies");
  const { results: nowPlaying } = await response.json();
  return nowPlaying;
}
export async function getTopRated() {
  const response = await fetch(`${BASE_URL}/top_rated`, options);
  if (!response.ok) throw Error("Failed getting now playing movies");
  const { results: topRated } = await response.json();
  return topRated;
}
export async function getUpcoming() {
  const response = await fetch(`${BASE_URL}/upcoming`, options);
  if (!response.ok) throw Error("Failed getting now playing movies");
  const { results: upcoming } = await response.json();
  return upcoming;
}
export async function getPopular() {
  const response = await fetch(`${BASE_URL}/popular`, options);
  if (!response.ok) throw Error("Failed getting now playing movies");
  const { results: popular } = await response.json();
  return popular;
}

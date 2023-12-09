import { authOptions, BASE_URL } from "../utils/helpers";
export async function getGenreNames() {
  const response = await fetch(`${BASE_URL}/genre/movie/list`, authOptions);
  if (!response.ok) throw Error("Unable to fetch movies");
  const { genres } = await response.json();
  return genres;
}
export async function getGenreMovies(id) {
  const response = await fetch(
    `${BASE_URL}/discover/movie?include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`,
    authOptions
  );
  if (!response.ok) throw Error("Unable to fetch movies");
  const { results } = await response.json();
  return results;
}

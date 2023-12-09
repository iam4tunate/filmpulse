import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getGenreMovies } from "../../services/apiGenres";

export function useGenreMovies() {
  const { id } = useParams();
  const {
    isPending,
    data: movies,
    error,
  } = useQuery({
    queryKey: [id],
    queryFn: () => getGenreMovies(id),
  });

  return { isPending, movies, error };
}

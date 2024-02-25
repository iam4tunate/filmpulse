import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { getGenreMovies } from "../../services/apiGenres";

export function useGenreMovies() {
  const { id } = useParams();
  const { page } = useData();
  const {
    isPending,
    data: movies,
    error,
  } = useQuery({
    queryKey: [id, page],
    queryFn: () => getGenreMovies(id, page),
  });

  return { isPending, movies, error };
}

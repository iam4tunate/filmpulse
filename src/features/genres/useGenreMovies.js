import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { getGenreMovies } from "../../services/apiGenres";

export function useGenreMovies() {
  const { id } = useParams();
  const { page } = useContext(DataContext);
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

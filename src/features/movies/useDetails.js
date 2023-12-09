import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/apiMovies";

export function useDetails() {
  const { id } = useParams();
  const {
    isPending,
    data: details,
    error,
  } = useQuery({
    queryKey: ["details", id],
    queryFn: () => getMovieDetails(id),
  });

  return { isPending, details, error };
}

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSimilar } from "../../services/apiMovies";

export function useSimilar() {
  const { id } = useParams();
  const {
    isPending,
    data: similar,
    error,
  } = useQuery({
    queryKey: ["similar", id],
    queryFn: () => getSimilar(id),
  });
  return { isPending, similar, error };
}

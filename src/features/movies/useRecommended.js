import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRecommended } from "../../services/apiMovies";

export function useRecommended() {
  const { id } = useParams();
  const {
    isPending,
    data: recommended,
    error,
  } = useQuery({
    queryKey: ["recommended", id],
    queryFn: () => getRecommended(id),
  });
  return { isPending, recommended, error };
}

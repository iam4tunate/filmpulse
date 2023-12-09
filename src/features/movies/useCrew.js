import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCrew } from "../../services/apiMovies";

export function useCrew() {
  const { id } = useParams();
  const {
    isPending,
    data: crew,
    error,
  } = useQuery({
    queryKey: ['crew',id],
    queryFn: () => getCrew(id),
  });
  return { isPending, crew, error };
}

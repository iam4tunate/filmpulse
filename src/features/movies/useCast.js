import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCast } from "../../services/apiMovies";

export function useCast() {
  const { id } = useParams();
  const {
    isPending,
    data: cast,
    error,
  } = useQuery({
    queryKey: ["cast", id],
    queryFn: () => getCast(id),
  });
  return { isPending, cast, error };
}

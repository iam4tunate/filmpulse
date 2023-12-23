import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDetails } from "../../services/apiMovies";

export function useDetails() {
  const { id } = useParams();
  const {
    isPending,
    data: details,
    error,
  } = useQuery({
    queryKey: ["details", id],
    queryFn: () => getDetails(id),
  });

  return { isPending, details, error };
}

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBio } from "../../services/apiMovies";

export function useBio() {
  const { id } = useParams();
  const {
    isPending,
    data: bio,
    error,
  } = useQuery({
    queryKey: ["bio", id],
    queryFn: () => getBio(id),
  });
  return { isPending, bio, error };
}

import { useQuery } from "@tanstack/react-query";
import { getBio } from "../../services/apiMovies";
import { useData } from "../../context/DataContext";

export function useBio() {
  const { personId } = useData();
  const {
    isPending,
    data: bio,
    error,
  } = useQuery({
    queryKey: ["id", personId],
    queryFn: () => getBio(personId),
  });
  return { isPending, bio, error };
}

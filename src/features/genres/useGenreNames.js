import { useQuery } from "@tanstack/react-query";
import { getGenreNames } from "../../services/apiGenres";

export function useGenreNames() {
  const {
    isPending,
    data: genreNames,
    error: genreNameError,
  } = useQuery({
    queryKey: ["genresNames"],
    queryFn: getGenreNames,
  });

  return { isPending, genreNames, genreNameError };
}

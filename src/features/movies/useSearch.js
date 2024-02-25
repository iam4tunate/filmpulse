import { useQuery } from "@tanstack/react-query";
import { searchMovie } from "../../services/apiMovies";
import { useData } from "../../context/DataContext";

export function useSearch() {
  const { searchQuery } = useData();
  const {
    isPending: isLoading,
    data: results,
    error,
  } = useQuery({
    queryKey: ["results", searchQuery],
    queryFn: () => searchMovie(searchQuery),
  });
  return { isLoading, results, error };
}

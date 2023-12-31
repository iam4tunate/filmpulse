import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../../services/apiCategories";

export function useTrending() {
  const { isPending: isTrendingPending, data: trending } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrending,
  });

  return { isTrendingPending, trending };
}

import { useQuery } from "@tanstack/react-query";
import { getTopRated } from "../../services/apiCategories";

export function useTopRated() {
  const { data: topRated } = useQuery({
    queryKey: ["topRated"],
    queryFn: getTopRated,
  });

  return { topRated };
}

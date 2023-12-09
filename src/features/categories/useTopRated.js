import { useQuery } from "@tanstack/react-query";
import { getTopRated } from "../../services/apiCategories";

export function useTopRated() {
  const { isPending: isTopratedPending, data: topRated } = useQuery({
    queryKey: ["topRated"],
    queryFn: getTopRated,
  });

  return { isTopratedPending, topRated };
}

import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../../services/apiCategories";

export function usePopular() {
  const { data: popular } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopular,
  });

  return { popular };
}

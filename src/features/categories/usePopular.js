import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../../services/apiCategories";

export function usePopular() {
  const { isPending: isPopularPending, data: popular } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopular,
  });

  return { isPopularPending, popular };
}

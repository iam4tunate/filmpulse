import { useQuery } from "@tanstack/react-query";
import { getUpcoming } from "../../services/apiCategories";

export function useUpcoming() {
  const { isPending: isUpcomingPending, data: upcoming } = useQuery({
    queryKey: ["upcoming"],
    queryFn: getUpcoming,
  });

  return { isUpcomingPending, upcoming };
}

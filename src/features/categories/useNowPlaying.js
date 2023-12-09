import { useQuery } from "@tanstack/react-query";
import { getNowPlaying } from "../../services/apiCategories";

export function useNowPlaying() {
  const { isPending: isNowplayingPending, data: nowPlaying } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: getNowPlaying,
  });

  return { isNowplayingPending, nowPlaying };
}

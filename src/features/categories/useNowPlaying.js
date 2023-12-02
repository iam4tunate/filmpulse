import { useQuery } from "@tanstack/react-query";
import { getNowPlaying } from "../../services/apiCategories";

export function useNowPlaying() {
  const { data: nowPlaying } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: getNowPlaying,
  });

  return { nowPlaying };
}

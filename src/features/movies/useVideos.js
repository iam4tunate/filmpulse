import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getVideos } from "../../services/apiMovies";

export function useVideos() {
  const { id } = useParams();
  const {
    isPending,
    data: videos,
    error,
  } = useQuery({
    queryKey: ["videos", id],
    queryFn: () => getVideos(id),
  });
  return { isPending, videos, error };
}

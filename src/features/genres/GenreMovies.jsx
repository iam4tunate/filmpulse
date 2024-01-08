import Card from "../../ui/Card";
import LoadingVideos from "../../ui/LoadingVideos";
import { useGenreMovies } from "./useGenreMovies";

const GenreMovies = () => {
  const { isPending, movies } = useGenreMovies();
  if (isPending) return <LoadingVideos />;

  return (
    <div className="maxW padX flex flex-wrap gap-x-6 gap-y-20 justify-center pb-20">
      {movies &&
        movies.map((movie) => <Card key={movie.id} {...movie} withText/>)}
    </div>
  );
};
export default GenreMovies;

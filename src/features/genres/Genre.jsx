import "swiper/css";
import "swiper/css/navigation";
import GenreNav from "./GenreNav";
import GenreMovies from "./GenreMovies";
import AppLayout from "../../ui/AppLayout";
import PageControl from "../../ui/PageControl";

const Genre = () => {
  return (
    <AppLayout>
      <div id="genre-top" className="pt-16 pb-24">
        <GenreNav />
        <GenreMovies />
        <PageControl />
      </div>
    </AppLayout>
  );
};
export default Genre;

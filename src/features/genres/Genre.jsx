import "swiper/css";
import "swiper/css/navigation";
import GenreNav from "./GenreNav";
import GenreMovies from "./GenreMovies";
import AppLayout from "../../ui/AppLayout";

const Genre = () => {
  return (
    <AppLayout>
      <div className="pt-16 pb-24">
        <GenreNav />
        <GenreMovies />
      </div>
    </AppLayout>
  );
};
export default Genre;

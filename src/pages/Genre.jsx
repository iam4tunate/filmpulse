import Explore from "../ui/Explore";
import Header from "../ui/Header";
import "swiper/css";
import "swiper/css/navigation";
import GenreNav from "../ui/GenreNav";
import Card from "../ui/Card";

const Genre = () => {
  return (
    <div className="">
      <Header />
      <Explore />
      <GenreNav />
      <div className="maxW padX grid grid-cols-4 gap-y-12">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default Genre;

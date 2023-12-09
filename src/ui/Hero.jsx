import BGIMG from "../assets/exploreBg.png";
import OVERLAY from "../assets/bg-noise.gif";
import { Link } from "react-router-dom";
import { useGenreNames } from "../features/genres/useGenreNames";

const Hero = () => {
  const { genreNames: genres = [] } = useGenreNames();
  const bg = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),url(${BGIMG})`,
  };
  return (
    <div
      style={bg}
      className="bg-cover bg-center bg-no-repeat w-full h-screen flex items-end justify-center pt-6 pb-16"
    >
      <div
        style={{ backgroundImage: `url(${OVERLAY})` }}
        className="absolute top-0 left-0 right-0 bottom-0 opacity-[0.06] z-10 w-full h-screen"
      />
      <div className="max-w-screen-lg mx-auto padX opacity-90 text-center z-30">
        <div className="text-6xl font-black font-unica">
          Explore our wide variety of genres.
        </div>
        <p className="font-poppinsLight text-lg w-[80%] mx-auto pt-4 pb-6 leading-normal">
          Whether you&apos;re looking for details on comedy to make you laugh, a
          drama to make you think, or a documentary to learn something new,
          We&apos;ve got you covered.
        </p>
        {genres && (
          <Link
            to={`/genre/${genres[0]?.id}`}
            className="bg-red px-7 py-3 whitespace-nowrap rounded-md font-poppinsMedium cursor-pointer block w-fit mx-auto"
          >
            Explore now
          </Link>
        )}
      </div>
    </div>
  );
};
export default Hero;

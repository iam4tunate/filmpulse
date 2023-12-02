import { Link } from "react-router-dom";
import BG from "../assets/exploreBg.png";

const Explore = ({ exploreNow }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, #000000,#000000dd, #000000df,#000000d5, #e5000037),url(${BG})`,
      }}
      className="w-full bg-cover bg-center bg-no-repeat h-[25rem] flex items-center"
    >
      <div className="maxW padX flex items-center justify-between">
        <div className="w-[70%] opacity-90">
          <div className="text-5xl font-black font-unica pb-3">
            Explore our wide variety of genres
          </div>
          <p className="font-poppinsLight w-[90%]">
            Whether you&apos;re looking for details on comedy to make you laugh,
            a drama to make you think, or a documentary to learn something new,
            We&apos;ve got you covered
          </p>
        </div>
        {exploreNow && (
          <Link
            to="/genre"
            className="bg-red px-10 py-4 whitespace-nowrap rounded-md font-poppinsBold beat cursor-pointer"
          >
            Explore now
          </Link>
        )}
      </div>
    </div>
  );
};
export default Explore;

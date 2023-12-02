import { IoMdStar } from "react-icons/io";
import { IMG_BASE } from "../utils/helpers";

const Card = ({ poster_path, release_date, withText, title }) => {
  return (
    <div className="w-[16rem] cursor-pointer">
      <figure className="w-[16rem] rounded-md">
        <img
          src={IMG_BASE + poster_path}
          alt={title}
          className="h-full w-full object-cover rounded-md"
        />
      </figure>
      {withText && (
        <div className="flex items-center justify-between text-[13px] px-[2px] pt-1.5 font-poppinsLight">
          <span className="opacity-80">{release_date}</span>
          <div className="flex items-center gap-x-[2px]">
            <IoMdStar className="text-yellow text-lg" />
            <span className="opacity-80">8.1</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;

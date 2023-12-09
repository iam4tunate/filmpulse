import moment from "moment";
import { IMG_BASE } from "../utils/helpers";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";

const Card = ({
  id,
  poster_path,
  release_date,
  title,
  vote_average,
  withText,
}) => {
  return (
    <div className="w-[17rem] cursor-pointer">
      <Link to={`/movie/${id}`} className="w-[17rem] h-[25rem] rounded-md">
        <img
          src={IMG_BASE + poster_path}
          alt={title}
          className="h-full w-full object-cover rounded-md bg-dark"
        />
      </Link>
      {withText && (
        <div className="flex items-center justify-between text-xs font-poppinsLight px-[2px] pt-1.5">
          <span className="opacity-80">{moment(release_date).fromNow()}</span>
          <span className="flex items-start text-gray-400 font-poppinsBold">
            <IoMdStar className="mr-[2px] text-[#ffff00] text-sm" />
            {vote_average}
          </span>
        </div>
      )}
    </div>
  );
};
export default Card;

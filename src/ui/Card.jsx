import moment from "moment";
import { IMG_BASE } from "../utils/helpers";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import NO_POSTER from "../assets/no_poster.jpg";

const Card = ({
  id,
  poster_path,
  release_date,
  title,
  vote_average,
  withText,
}) => {
  return (
    <div className="w-[17rem] max-sm:w-fit flex flex-col justify-end truncate ...">
      <Link to={`/movie/${id}`} className={`h-full cursor-pointer mx-auto`}>
        {!poster_path ? (
          <img
            src={NO_POSTER}
            alt="poster unavailable"
            className="h-full w-full object-cover rounded-md"
          />
        ) : (
          <img
            src={IMG_BASE + poster_path}
            alt={title}
            className="h-full w-full object-cover rounded-md"
          />
        )}
      </Link>
      {withText && (
        <div className="px-0.5 pt-1.5 font-poppinsMedium">
          <div className="pb-1 truncate ...">
            {title}
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">
              {moment(release_date).fromNow()}
            </span>
            <span className="flex items-start text-gray-400">
              <IoMdStar className="mr-[2px] text-[#ffff00] text-sm" />
              {vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;

import moment from "moment";

import { IoMdTrendingUp } from "react-icons/io";
import { BiDollarCircle } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaRegCalendarAlt, FaRegFlag } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoLanguageSharp, IoVideocamOutline } from "react-icons/io5";
import { calcMovieRuntime, formatNumber } from "../../utils/helpers";
import Trailer from "./Trailer";

const Aside = ({ details }) => {
  console.log(details);
  const { quotient, remainder } = calcMovieRuntime(details?.runtime, 60);
  return (
    <div className="h-fit bg-dark py-8 rounded-md shadow-2xl font-poppinsLight text-sm">
      <div className="px-6 max-md:px-4 max-sm:px-2.5 space-y-8 pb-10">
        <div className="flex items-start max-[340px]:flex-col gap-x-16 max-sm:gap-x-10 gap-y-6">
          {details?.release_date && (
            <div className="">
              <div className="pb-2 opacity-40 flex items-center gap-x-2">
                <FaRegCalendarAlt />
                Release Date
              </div>
              <p className="leading-relaxed">
                {moment(details?.release_date).fromNow()}
              </p>
            </div>
          )}
          {details?.runtime && (
            <div className="">
              <div className="pb-2 opacity-40 flex items-center gap-x-2">
                <FaClockRotateLeft />
                Runtime
              </div>
              <p className="leading-relaxed">
                {quotient === 0
                  ? `${remainder} mins`
                  : `${quotient} hrs, ${remainder} mins`}
              </p>
            </div>
          )}
        </div>
        {(details?.budget > 0 || details?.revenue > 0) && (
          <div className="flex items-start gap-x-16">
            {details?.budget > 0 && (
              <div className="">
                <div className="pb-2 opacity-40 flex items-center gap-x-2">
                  <BiDollarCircle />
                  Budget
                </div>
                <span className="flex items-center gap-x-[1px] tracking-wider">
                  <BsCurrencyDollar />
                  <span className="leading-relaxed">
                    {formatNumber(details?.budget)}
                  </span>
                </span>
              </div>
            )}
            {details?.revenue > 0 && (
              <div className="">
                <div className="pb-2 opacity-40 flex items-center gap-x-2">
                  <IoMdTrendingUp />
                  Revenue
                </div>
                <span className="flex items-center gap-x-[1px] tracking-wider">
                  <BsCurrencyDollar />
                  <span className="leading-relaxed">
                    {formatNumber(details?.revenue)}
                  </span>
                </span>
              </div>
            )}
          </div>
        )}
        {details?.spoken_languages && (
          <div className="">
            <div className="pb-2 opacity-40 flex items-center gap-x-2">
              <IoLanguageSharp />
              Spoken Languages
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {details?.spoken_languages.map((lang, i) => (
                <span
                  key={i}
                  className="bg-black px-3 py-2 rounded-md shadow-2xl"
                >
                  {lang.english_name}
                </span>
              ))}
            </div>
          </div>
        )}
        {details?.genre && (
          <div className="">
            <div className="pb-2 opacity-40 flex items-center gap-x-2">
              <IoLanguageSharp />
              Genres
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {details?.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-black px-3 py-2 rounded-md shadow-2xl"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        )}
        {details?.production_companies && (
          <div className="">
            <div className="pb-2 opacity-40 flex items-center gap-x-2">
              <IoVideocamOutline />
              Production Companies
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {details?.production_companies.map((company) => (
                <span
                  key={company.id}
                  className="bg-black px-3 py-2 rounded-md shadow-2xl"
                >
                  {company.name}
                </span>
              ))}
            </div>
          </div>
        )}
        {details?.production_countries && (
          <div className="">
            <div className="pb-2 opacity-40 flex items-center gap-x-2">
              <FaRegFlag />
              Production Countries
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {details?.production_countries.map((country, i) => (
                <span
                  key={i}
                  className="bg-black px-3 py-2 rounded-md shadow-2xl"
                >
                  {country.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <Trailer />
    </div>
  );
};
export default Aside;

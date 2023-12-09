import AppLayout from "../../ui/AppLayout";
import OVERLAY from "../../assets/bg-noise.gif";
import { useDetails } from "./useDetails";
import { IMG_BASE } from "../../utils/helpers";
import { FaStar, FaHeart, FaRegStar } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLanguageSharp, IoVideocamOutline } from "react-icons/io5";
import { useCast } from "./useCast";
import CreditsRow from "./CreditsRow";
import { useCrew } from "./useCrew";
import moment from "moment";
import { useSimilar } from "./useSimilar";
import Card from "../../ui/Card";

const Details = () => {
  const { details } = useDetails();
  const { cast } = useCast();
  const { crew } = useCrew();
  const { similar } = useSimilar();
  console.log("crew",crew);
  console.log("cast", cast);

  return (
    <AppLayout>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,1)),url(${
            IMG_BASE + details?.backdrop_path
          })`,
        }}
        className="bg-cover bg-top bg-no-repeat w-full h-[35rem] flex items-end justify-center pt-6 pb-16"
      >
        <div
          style={{ backgroundImage: `url(${OVERLAY})` }}
          className="absolute top-0 left-0 right-0 bottom-0 opacity-[0.06] z-10 w-full h-[35rem]"
        />
        <div className="max-w-screen-lg mx-auto padX opacity-90 text-center z-30">
          <div className="text-6xl font-black font-unica pb-2">
            {details?.title}
          </div>
          <span className="opacity-50 italic">{details?.tagline}</span>
        </div>
      </div>
      <div className="grid grid-cols-[65%_35%] justify-between gap-x-6 max-w-screen-xl mx-auto padX">
        <div className="space-y-6">
          <div className="bg-dark p-6 rounded-md shadow-2xl">
            <div className="pb-2 text-lg font-poppinsBold">Overview</div>
            <p className="font-poppinsLight text-sm leading-relaxed">
              {details?.overview}
            </p>
          </div>
          <CreditsRow
            credits={cast}
            autoplayDuration={3000}
            title="Cast"
            cast
          />
          <CreditsRow credits={crew} autoplayDuration={3500} title="Crew" />
          <div className="bg-dark p-6 rounded-md shadow-2xl">
            <div className="pb-2 text-lg font-poppinsBold">Similar Movies</div>
            <div className="maxW padX flex flex-wrap gap-x-12 gap-y-20 justify-center">
              {similar &&
                similar.map((movie) => (
                  <Card key={movie.id} {...movie} withText />
                ))}
            </div>
          </div>
        </div>

        <div className="h-fit sticky max-lg:relative top-20 max-lg:top-0 bg-dark px-8 py-8 rounded-md shadow-inner font-poppinsLight space-y-8 text-sm overflow-y-scroll max-h-[85vh]">
          <div className="">
            <div className="pb-2 opacity-40 flex items-center gap-x-2">
              <FaRegCalendarAlt />
              Release Date
            </div>
            <p className="leading-relaxed">
              {moment(details?.release_date).fromNow()}
            </p>
          </div>
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
          <div className="">
            <div className="pb-2 opacity-40 flex items-center gap-x-2">
              <FaRegStar />
              Ratings
            </div>
            <div className="flex flex-wrap gap-x-3">
              <div className="bg-black px-3 py-2 rounded-md flex items-center gap-x-1 shadow-2xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>4.5</span>
              </div>
              <div className="bg-black px-3 py-2 rounded-md flex items-center gap-x-2 shadow-2xl">
                <FaHeart />
                9.2k
              </div>
            </div>
          </div>
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
          <div className="">
            <div className="pb-2 opacity-40 flex items-center gap-x-2">
              <IoVideocamOutline />
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
        </div>
      </div>
    </AppLayout>
  );
};
export default Details;

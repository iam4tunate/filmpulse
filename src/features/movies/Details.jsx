import { FaStar } from "react-icons/fa6";
import { IMG_BASE } from "../../utils/helpers";

import Aside from "./Aside";
import { useCrew } from "./useCrew";
import { useCast } from "./useCast";
import CreditsRow from "./CreditsRow";
import Recommended from "./Recommended";
import { useDetails } from "./useDetails";
import AppLayout from "../../ui/AppLayout";
import OVERLAY from "../../assets/bg-noise.gif";
import LoadingPage from "../../ui/LoadingPage";
import Bio from "./Bio";
import { useData } from "../../context/DataContext";

const Details = () => {
  const { details } = useDetails();
  const { cast } = useCast();
  const { crew } = useCrew();
  const { isBio } = useData();

  if (!details) return <LoadingPage />;
  return (
    <AppLayout>
      {isBio && <Bio />}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,1)),url(${
            IMG_BASE + details?.backdrop_path
          })`,
        }}
        className="bg-cover bg-top bg-no-repeat w-full h-[35rem] flex items-end justify-center pt-6 pb-16 relative"
      >
        <div
          style={{ backgroundImage: `url(${OVERLAY})` }}
          className="absolute top-0 left-0 right-0 bottom-0 opacity-[0.06] z-10 w-full h-[35rem]"
        />
        <div className="max-w-screen-lg mx-auto padX opacity-90 text-center z-20 flex flex-col items-center">
          <div className="text-6xl max-lg:text-5xl max-md:text-4xl font-black font-unica">
            {details?.title}
          </div>
          <span className="opacity-50 italic py-2 max-md:text-sm">
            {details?.tagline}
          </span>
          <div className="flex flex-wrap gap-x-3">
            <div className="bg-dark px-3 py-3 rounded-md flex items-center gap-x-1 shadow-2xl tracking-wider text-[15px]">
              <span className="flex items-center">
                <FaStar className="text-yellow mr-1" />
                <span className="opacity-60 text-sm max-sm:text-xs">
                  {details?.vote_average.toFixed(1)}
                </span>
              </span>
              <span className="h-4 w-[2px] bg-white block mx-2 bg-opacity-30" />
              <span className="flex items-center text-xs text-left max-sm:text-[10px]">
                {details?.adult === false
                  ? "Non-explicit content suitable for a diverse audience"
                  : "Contains explicit content for adult audiences"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16 padX">
        <div className="grid grid-cols-[65%_35%] max-[1100px]:grid-cols-1 max-[1100px]:max-w-4xl justify-between gap-x-12 max-w-6xl mx-auto">
          <div className="space-y-6 pb-12">
            {details?.overview && (
              <div className="bg-dark py-6 px-6 max-md:px-4 max-sm:px-2.5 rounded-md shadow-2xl">
                <div className="pb-2 text-lg font-poppinsBold">Overview</div>
                <p className="font-poppinsLight text-sm leading-relaxed">
                  {details?.overview}
                </p>
              </div>
            )}
            {/* SIDEBAR */}
            <div className="hidden max-[1100px]:block">
              <Aside details={details} />
            </div>
            <CreditsRow credits={cast} title="Cast" cast />
            <CreditsRow credits={crew} title="Crew" />
          </div>

          <div className="max-[1100px]:hidden">
            <Aside details={details} />
          </div>
        </div>

        <Recommended />
      </div>
    </AppLayout>
  );
};
export default Details;

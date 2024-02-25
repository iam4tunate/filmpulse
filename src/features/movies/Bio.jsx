import { IoPulse } from "react-icons/io5";
import { IMG_BASE } from "../../utils/helpers";
import { useBio } from "./useBio";
import { LiaTimesSolid } from "react-icons/lia";
import { useData } from "../../context/DataContext";
import moment from "moment";

const Bio = () => {
  const { isPending, bio } = useBio();
  const { setBio } = useData();

  return (
    <div className="padX fixed top-0 right-0 left-0 bottom-0 z-50 bg-dark bg-opacity-90 min-h-screen flex items-center justify-center">
      {isPending ? (
        <div className="max-w-4xl mx-auto bg-dark h-[30rem] max-md:min-h-[80vh] flex rounded-lg shadow-xl items-center justify-center w-full border border-red border-opacity-20">
          <IoPulse className="text-8xl max-md:text-7xl text-red" />
        </div>
      ) : (
        <div className="shadow-2xl shadow-dark relative max-w-4xl mx-auto bg-dark h-[30rem] max-md:min-h-[80vh] flex rounded-lg w-full">
          <div className="absolute right-4 top-4 max-md:right-3 max-md:top-1 bg-dark bg-opacity-90 rounded-full p-1">
            <LiaTimesSolid
              onClick={() => setBio(false)}
              className="text-[28px] cursor-pointer "
            />
          </div>
          <img
            src={IMG_BASE + bio?.profile_path}
            alt=""
            className="h-full rounded-tl-lg rounded-bl-lg max-md:hidden"
          />
          <div className="py-4 max-md:py-10 px-5 space-y-4 max-md:space-y-6 text-sm max-sm:text-[13px] overflow-y-auto  overflow-x-hiddenfont-poppinsLight scroll">
            <img
              src={IMG_BASE + bio?.profile_path}
              alt=""
              className="h-[12rem] w-[12rem] max-md:w-full max-md:h-auto object-contain object-top rounded-lg md:hidden"
            />
            {bio?.name && (
              <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
                <span className="opacity-80">Name:</span>
                <span className="">{bio?.name}</span>
              </div>
            )}
            {bio?.gender && bio?.gender !== 0 && (
              <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
                <span className="opacity-80">Gender:</span>
                <span className="">
                  {bio?.gender === 1 ? "Female" : "Male"}
                </span>
              </div>
            )}
            {bio?.birthday && (
              <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
                <span className="opacity-80">Date of birth:</span>
                <span className="">{moment(bio?.birthday).format("LL")}</span>
              </div>
            )}
            {bio?.place_of_birth && (
              <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
                <span className="opacity-80">Place of birth:</span>
                <span className="">{bio?.place_of_birth}</span>
              </div>
            )}
            {bio?.deathday && (
              <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
                <span className="opacity-80">Date of death:</span>
                <span className="">{moment(bio?.deathday).format("LL")}</span>
              </div>
            )}
            {bio?.known_for_department && (
              <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
                <span className="opacity-80">Known for (Department):</span>
                <span className="">{bio?.known_for_department}</span>
              </div>
            )}
            {bio?.biography && (
              <div className="flex flex-col gap-y-1">
                <span className="opacity-80">Biography:</span>
                <p className="leading-relaxed max-sm:leading-loose">
                  {bio?.biography}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Bio;

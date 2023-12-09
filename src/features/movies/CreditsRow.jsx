import { useRef, useState } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IMG_BASE } from "../../utils/helpers";
import NO_POSTER from "../../assets/no_poster.jpg";

const CreditsRow = ({ credits = [], autoplayDuration, title, cast }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  if (!credits.length) return null;
  return (
    <div className="bg-dark px-6 pt-6 pb-2 rounded-md shadow-2xl w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="pb-2 text-lg font-poppinsBold">{title}</div>
        <div className="flex items-center border border-red border-opacity-30 rounded-md py-1.5 px-1.5 space-x-5">
          <span
            ref={prevRef}
            className={`${
              isBegin && "opacity-20"
            } py-1 px-2 bg-dark rounded-md cursor-pointer border-[1px] border-white border-opacity-5`}
          >
            <IoArrowBackOutline />
          </span>
          <span
            ref={nextRef}
            className={`${
              isEnd && "opacity-20"
            } py-1 px-2 b2-dark rounded-md cursor-pointer border-[1px] border-white border-opacity-5`}
          >
            <IoArrowForwardOutline />
          </span>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setIsBegin(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        autoplay={{
          delay: autoplayDuration,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        onInit={() => setInit(true)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          700: {
            slidesPerView: 4,
          },
        }}
      >
        {credits.map((credit) => (
          <SwiperSlide key={credit?.credit_id}>
            <figure className="bg-blue-50 rounded-md">
              {!credit.profile_path ? (
                <img
                  src={NO_POSTER}
                  alt="poster unavailable"
                  className="h-[17rem] object-cover rounded-md"
                />
              ) : (
                <img
                  src={IMG_BASE + credit.profile_path}
                  alt={credit.name}
                  className="rounded-md h-[17rem] object-cover"
                />
              )}
            </figure>
            <div className="flex flex-col gap-y-[3px] text-sm pt-1">
              <span className="text-sm">{credit.original_name}</span>
              {cast ? (
                credit?.character && (
                  <span className="italic opacity-40 text-xs">
                    {credit?.character.length < 20
                      ? `(as ${credit?.character.slice(0, 20)})`
                      : `(as ${credit?.character.slice(0, 20)}...)`}
                  </span>
                )
              ) : (
                <span className="italic opacity-40 text-xs truncate ...">
                  {credit?.job}
                </span>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-end pt-6">
        <p className="text-[10px] italic opacity-60">
          Click on poster to view artist full bio
        </p>
      </div>
    </div>
  );
};
export default CreditsRow;

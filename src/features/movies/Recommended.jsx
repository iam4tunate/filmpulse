import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

import Card from "../../ui/Card";
import { useRecommended } from "./useRecommended";

import "swiper/css";
import "swiper/css/navigation";
import { useSimilar } from "./useSimilar";

const Recommended = () => {
  const { recommended } = useRecommended();
  const { similar } = useSimilar();
  const movies = recommended?.length === 0 ? similar : recommended;

  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  if (!recommended?.length && !similar?.length) return null;

  return (
    <div className="bg-dark py-6 px-6 max-md:px-4 max-sm:px-2.5 rounded-md shadow-2xl max-w-6xl max-[1100px]:max-w-4xl mx-auto mb-10">
      <div className="flex items-center justify-between mb-8">
        <div className="pb-2 text-lg font-poppinsBold">
          {!Recommended.length ? "Similar" : "Recommended"}
        </div>
        <div className="max-sm:hidden flex items-center border border-red border-opacity-30 rounded-md py-1.5 px-1.5 space-x-5">
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
        slidesPerView={1}
        spaceBetween={25}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setIsBegin(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        autoplay={{
          // delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        onInit={() => setInit(true)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1.1,
          },
          460: {
            slidesPerView: 1.3,
          },
          550: {
            slidesPerView: 1.6,
          },
          650: {
            slidesPerView: 2,
          },
          710: {
            slidesPerView: 2.2,
          },
          840: {
            slidesPerView: 2.6,
          },
          950: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 3.5,
          },
        }}
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id} className="rounded-md">
            <Card {...movie} withText />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Recommended;

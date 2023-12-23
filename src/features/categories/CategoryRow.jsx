import { useRef, useState } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../../ui/Card";
import LoadingCategories from "../../ui/LoadingCategories";

const CategoryRow = ({
  title,
  movies = [],
  autoplayDuration,
  isTrending,
  isNowplaying,
  isToprated,
  isPopular,
  isUpcoming,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (
    isTrending ||
    isNowplaying ||
    isToprated ||
    isPopular ||
    isUpcoming ||
    !movies.length
  )
    return <LoadingCategories />;

  return (
    <div className="pt-12 pb-8 max-md:pt-16 max-md:pb-12 last:pb-32">
      <div className="padX flex items-center justify-between mb-8">
        <div className="text-3xl max-sm:text-2xl font-unica font-bold after:bg-red after:opacity-30 after:w-full after:h-[3px] after:block after:mt-1">
          {title}.
        </div>
        <div className="max-sm:hidden flex items-center border border-white border-opacity-20 rounded-md py-2 px-1.5 space-x-5">
          <span
            ref={prevRef}
            className={`${
              isBegin && "opacity-20"
            } py-2 px-3 bg-dark rounded-md cursor-pointer border-[1px] border-white border-opacity-5`}
          >
            <IoArrowBackOutline className="text-lg" />
          </span>
          <span
            ref={nextRef}
            className={`${
              isEnd && "opacity-20"
            } py-2 px-3 bg-dark rounded-md cursor-pointer border-[1px] border-white border-opacity-5`}
          >
            <IoArrowForwardOutline className="text-lg" />
          </span>
        </div>
      </div>
      <div className="pl-12 max-xl:pl-8 max-md:pl-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
            300: {
              slidesPerView: 1.1,
            },
            460: {
              slidesPerView: 1.5,
            },
            610: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2.5,
            },
            780: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 3.5,
            },
            1130: {
              slidesPerView: 4,
            },
            1140: {
              slidesPerView: 4.5,
            },
            1300: {
              slidesPerView: 5,
            },
            1410: {
              slidesPerView: 5.5,
            },
            1540: {
              slidesPerView: 6,
            },
            1670: {
              slidesPerView: 6.5,
            },
            1800: {
              slidesPerView: 7,
            },
            1940: {
              slidesPerView: 7.5,
            },
            2040: {
              slidesPerView: 8,
            },
            2210: {
              slidesPerView: 8.5,
            },
            2320: {
              slidesPerView: 9,
            },
            2450: {
              slidesPerView: 9.5,
            },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Card {...movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default CategoryRow;

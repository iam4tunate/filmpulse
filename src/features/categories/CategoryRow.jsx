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
    <div className="pt-12 pb-8 last:pb-20">
      <div className="maxW padX translate-x-3 flex items-center justify-between mb-8">
        <div className="text-3xl font-unica font-bold after:bg-red after:opacity-30 after:w-full after:h-[3px] after:block after:mt-1">
          {title}.
        </div>
        <div className="flex items-center border border-white border-opacity-20 rounded-md py-2 px-1.5 space-x-5">
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
      <div className="max-w-screen-xl ml-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
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
              slidesPerView: 4.5,
              spaceBetween: 6,
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

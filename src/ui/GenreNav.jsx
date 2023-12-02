import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const GenreNav = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="maxW padX py-12 flex items-center gap-x-2">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={15}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setIsBegin(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={[Navigation]}
        onInit={() => setInit(true)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          360: {
            slidesPerView: 2.5,
          },
          430: {
            slidesPerView: 3,
          },
          490: {
            slidesPerView: 3.5,
          },
          700: {
            slidesPerView: 4.5,
          },
          970: {
            slidesPerView: 5.5,
          },
          1200: {
            slidesPerView: 10,
          },
        }}
      >
        <SwiperSlide>
          <div className="w-fit border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-red shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm">
            Action
          </div>
        </SwiperSlide>
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black z-10" />
      </Swiper>
      <div className="w-fit flex items-center border border-white border-opacity-20 rounded-md px-1.5 py-2 space-x-5 z-10 bg-black">
        <span
          ref={prevRef}
          className={`${
            isBegin && "opacity-20"
          } py-2 px-2 bg-dark rounded-md cursor-pointer`}
        >
          <IoArrowBackOutline className="text-" />
        </span>
        <span
          ref={nextRef}
          className={`${
            isEnd && "opacity-20"
          } py-2 px-2 bg-dark rounded-md cursor-pointer`}
        >
          <IoArrowForwardOutline className="text-" />
        </span>
      </div>
    </div>
  );
};
export default GenreNav;

import { Swiper, SwiperSlide } from "swiper/react";

const GenreNav = () => {
  const items = [...Array(20).keys()];
  return (
    <div className="maxW padX pb-10 pt-16 max-md:pt-12">
      <div className="flex items-center gap-x-2">
        <Swiper
          slidesPerView={22}
          spaceBetween={25}
          breakpoints={{
            310: {
              slidesPerView: 2.5,
            },
            370: {
              slidesPerView: 3,
            },
            440: {
              slidesPerView: 3.5,
            },
            570: {
              slidesPerView: 4.5,
            },
            920: {
              slidesPerView: 5.5,
            },
            1050: {
              slidesPerView: 6.5,
            },
            1200: {
              slidesPerView: 7.5,
            },
          }}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div key={item} className="h-12 w-28 loading" />
            </SwiperSlide>
          ))}
          <div className="absolute top-0 right-0 w-8 max-sm:w-16 h-full bg-gradient-to-l from-black z-10" />
        </Swiper>
        <div className="max-sm:hidden flex items-center border-2 border-dark rounded-md py-2 px-1.5 space-x-5">
          <span className="w-12 h-10 loading" />
          <span className="w-12 h-10 loading" />
        </div>
      </div>
    </div>
  );
};
export default GenreNav;

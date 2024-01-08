import { Swiper, SwiperSlide } from "swiper/react";

const CategoryRow = () => {
  const items = [...Array(20).keys()];

  return (
    <div className="pt-12 pb-8 max-md:pt-16 max-md:pb-12 last:pb-32">
      <div className="padX flex items-center justify-between mb-8">
        <span className="w-48 h-12 loading" />
        <div className="max-sm:hidden flex items-center border-2 border-dark rounded-md py-2 px-1.5 space-x-5">
          <span className="w-12 h-10 loading" />
          <span className="w-12 h-10 loading" />
        </div>
      </div>
      <div className="pl-12 max-xl:pl-8 max-md:pl-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          breakpoints={{
            300: {
              slidesPerView: 1.2,
            },
            460: {
              slidesPerView: 1.8,
            },
            580: {
              slidesPerView: 2.2,
            },
            715: {
              slidesPerView: 2.6,
            },
            890: {
              slidesPerView: 3.2,
            },
            1000: {
              slidesPerView: 3.5,
            },
            1160: {
              slidesPerView: 4.2,
            },
            1410: {
              slidesPerView: 4.5,
            },
            1540: {
              slidesPerView: 5.2,
            },
            1670: {
              slidesPerView: 5.5,
            },
            1800: {
              slidesPerView: 6.2,
            },
            1940: {
              slidesPerView: 6.5,
            },
            2040: {
              slidesPerView: 7.2,
            },
            2210: {
              slidesPerView: 7.5,
            },
            2320: {
              slidesPerView: 8.2,
            },
            2450: {
              slidesPerView: 8.5,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item}>
              <div className="max-[310px] mx-auto max-sm:w-[18rem] max-[350px]:w-[16rem] w-[15rem] h-[25rem] loading" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default CategoryRow;

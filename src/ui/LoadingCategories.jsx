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
            310: {
              slidesPerView: 1.2,
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

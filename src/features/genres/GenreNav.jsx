import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { useGenreNames } from "./useGenreNames";
import { Link, useParams } from "react-router-dom";
import LoadingGenreNav from "../../ui/LoadingGenreNav";

const GenreNav = () => {
  const { id } = useParams();
  const { isPending, genreNames: genres } = useGenreNames();

  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  let item;
  if (id) item = genres?.find((item) => item.id == id);
  if (isPending) return <LoadingGenreNav />;

  return (
    <div className="maxW padX pb-10 pt-16">
      <div className="flex items-center gap-x-2">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={25}
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
              slidesPerView: 7.5,
            },
          }}
        >
          {genres &&
            genres.map((genre) => (
              <SwiperSlide
                key={genre.id}
                className="my-auto flex justify-center items-center"
              >
                <Link
                  to={`/genre/${genre.id}`}
                  className={`${
                    id == genre.id
                      ? "bg-dark border-red text-white"
                      : "bg-black  border-white opacity-50"
                  } border-2   text-center shadow-lg px-6 py-2.5 rounded-md cursor-pointer capitalize font-poppinsLight text-sm`}
                >
                  {genre.name}
                </Link>
              </SwiperSlide>
            ))}
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black z-10" />
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
      <div className="text-3xl font-unica font-bold after:bg-red after:w-full after:h-[1px] after:block after:mt-1 w-fit mt-6">
        {item?.name}.
      </div>
    </div>
  );
};
export default GenreNav;

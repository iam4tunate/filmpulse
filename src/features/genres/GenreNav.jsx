import { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { useGenreNames } from "./useGenreNames";
import { useNavigate, useParams } from "react-router-dom";
import LoadingGenreNav from "../../ui/LoadingGenreNav";
import DataContext from "../../context/DataContext";

const GenreNav = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setPage } = useContext(DataContext);
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
    <div className="maxW padX pb-10 pt-16 max-md:pt-12">
      <div className="flex items-center gap-x-2">
        <Swiper
          slidesPerView={2}
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
              slidesPerView: 2.5,
            },
            500: {
              slidesPerView: 3.5,
            },
            780: {
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
          {genres &&
            genres.map((genre) => (
              <SwiperSlide key={genre.id} className="!w-fit">
                <div
                  onClick={() => {
                    setPage(1);
                    navigate(`/genre/${genre.id}`);
                  }}
                  className={`${
                    id == genre.id
                      ? "bg-dark border-red text-white"
                      : "bg-black  border-white opacity-50"
                  } border-2   text-center shadow-lg w-full py-2 px-2 rounded-md cursor-pointer capitalize font-poppinsLight text-sm`}
                >
                  {genre.name}
                </div>
              </SwiperSlide>
            ))}
          <div className="absolute top-0 right-0 w-8 max-sm:w-16 h-full bg-gradient-to-l from-black z-10" />
        </Swiper>
        <div className="max-sm:hidden w-fit flex items-center border border-white border-opacity-20 rounded-md px-1.5 py-2 space-x-5 z-10 bg-black">
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
      <div className="text-3xl max-sm:text-2xl font-unica font-bold after:bg-red after:w-full after:h-[1px] after:block after:mt-1 w-fit mt-6 max-sm:mt-8">
        {item?.name}.
      </div>
    </div>
  );
};
export default GenreNav;

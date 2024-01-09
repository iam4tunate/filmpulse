import { useContext, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-scroll";
import DataContext from "../context/DataContext";
import { useGenreMovies } from "../features/genres/useGenreMovies";

const PageControl = () => {
  const { page, setPage } = useContext(DataContext);
  const { movies } = useGenreMovies();
  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(page));
  }, [page]);

  const handleNext = () => {
    setPage((prevState) => prevState + 1);
  };
  const handlePrev = () => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <div className="padX flex items-center justify-center max-sm:justify-around gap-x-16 max-sm:gap-x-0 mt-12 pb-6 text-sm uppercase">
      <Link to="genre-top" spy={true}>
        <div
          onClick={handlePrev}
          className="flex items-center gap-x-1 cursor-pointer"
        >
          <BsChevronLeft />
          <div className="flex items-center gap-x-1">
            <span className="sm:hidden">Prev</span>
            <span className="max-sm:hidden">Previous</span>
            <span className="max-sm:hidden">Page</span>
          </div>
        </div>
      </Link>
      <div className="mx-5 text-sm flex items-center gap-x-1">
        <span>{page}</span>/<span>{movies?.length}</span>
      </div>
      <Link to="genre-top" spy={true}>
        <fiv
          onClick={handleNext}
          className="flex items-center gap-x-1 cursor-pointer"
        >
          <div className="flex items-center gap-x-1">
            <span>Next</span>
            <span className="max-sm:hidden">Page</span>
          </div>
          <BsChevronRight />
        </fiv>
      </Link>
    </div>
  );
};

export default PageControl;

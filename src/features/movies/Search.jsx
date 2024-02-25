import { useSearch } from "./useSearch";
import { useState } from "react";
import { useData } from "../../context/DataContext";
import Card from "../../ui/Card";
import LoadingVideos from "../../ui/LoadingVideos";
import AppLayout from "../../ui/AppLayout";

const Search = () => {
  //let the searchg begin after user has typed in 3 or more letters
  const { isLoading, results: movies } = useSearch();
  const [initialQuery, setInitialQuery] = useState("");
  // eslint-disable-next-line no-unused-vars
  const { searchQuery, setSearchQuery } = useData();

  function handleChange(e) {
    setInitialQuery(e.target.value);
    if (initialQuery.length > 2) {
      setSearchQuery(e.target.value);
      localStorage.setItem("searchQuery", e.target.value);
    }
  }

  function handleClearInput() {
    setInitialQuery("");
    setSearchQuery("");
    localStorage.removeItem("searchQuery");
  }

  return (
    <AppLayout>
      <div className="maxW padX py-12 max-md:py-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" flex items-end justify-center gap-x-3 mt-20 mb-10 w-full mx-auto"
        >
          <input
            type="text"
            value={initialQuery || searchQuery}
            onChange={handleChange}
            placeholder="Enter at least 3 characters to search..."
            className="border-b-2 border-b-white border-opacity-80 w-[80%] focus:border-b-red focus:w-full transition-all duration-150 ease-in-out outline-none bg-transparent text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm tracking-wide px-1"
          />
          <span
            onClick={handleClearInput}
            className="text-lg flex items-center gap-x-1 cursor-pointer  font-poppinsMedium max-sm:text-xs max-sm:-mb-1 text-red"
          >
            Cancel
          </span>
        </form>
        {isLoading ? (
          <LoadingVideos />
        ) : (
          <div className="maxw padX flex flex-wrap gap-x-6 gap-y-20 justify-center pb-12">
            {movies &&
              movies.map((movie) => (
                <Card key={movie.id} {...movie} withText />
              ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
};
export default Search;

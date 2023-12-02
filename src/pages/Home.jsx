import Header from "../ui/Header";
import CategoryRow from "../features/categories/CategoryRow";
import Hero from "../ui/Hero";
import { useNowPlaying } from "../features/categories/useNowPlaying";
import { useTopRated } from "../features/categories/useTopRated";
import { usePopular } from "../features/categories/usePopular";
import { useUpcoming } from "../features/categories/useUpcoming";
import { useTrending } from "../features/categories/useTrending";

const Home = () => {
  const { trending } = useTrending();
  const { nowPlaying } = useNowPlaying();
  const { topRated } = useTopRated();
  const { popular } = usePopular();
  const { upcoming } = useUpcoming();

  return (
    <div>
      <Header />
      <Hero />
      <CategoryRow title="Trending" movies={trending} autoplayDuration={2000} />
      <CategoryRow title="Popular" movies={popular} autoplayDuration={2500} />
      <CategoryRow title="Upcoming" movies={upcoming} autoplayDuration={2300} />
      <CategoryRow
        title="Top Rated"
        movies={topRated}
        autoplayDuration={2500}
      />
      <CategoryRow
        title="Now Playing"
        movies={nowPlaying}
        autoplayDuration={2000}
      />
    </div>
  );
};
export default Home;

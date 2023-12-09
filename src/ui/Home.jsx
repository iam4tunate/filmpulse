import Hero from "../ui/Hero";
import CategoryRow from "../features/categories/CategoryRow";
import { useNowPlaying } from "../features/categories/useNowPlaying";
import { useTopRated } from "../features/categories/useTopRated";
import { usePopular } from "../features/categories/usePopular";
import { useUpcoming } from "../features/categories/useUpcoming";
import { useTrending } from "../features/categories/useTrending";
import AppLayout from "./AppLayout";

const Home = () => {
  const { isTrendingPending, trending } = useTrending();
  const { isNowplayingPending, nowPlaying } = useNowPlaying();
  const { isTopratedPending, topRated } = useTopRated();
  const { isPopularPending, popular } = usePopular();
  const { isUpcomingPending, upcoming } = useUpcoming();

  return (
    <AppLayout>
      <Hero />
      <CategoryRow
        title="Trending"
        movies={trending}
        autoplayDuration={2000}
        isTrending={isTrendingPending}
      />
      <CategoryRow
        title="Popular"
        movies={popular}
        autoplayDuration={2500}
        isPopular={isPopularPending}
      />
      <CategoryRow
        title="Upcoming"
        movies={upcoming}
        autoplayDuration={2300}
        isUpcoming={isUpcomingPending}
      />
      <CategoryRow
        title="Top Rated"
        movies={topRated}
        autoplayDuration={2500}
        isToprated={isTopratedPending}
      />
      <CategoryRow
        title="Now Playing"
        movies={nowPlaying}
        autoplayDuration={2000}
        isNowplaying={isNowplayingPending}
      />
    </AppLayout>
  );
};
export default Home;

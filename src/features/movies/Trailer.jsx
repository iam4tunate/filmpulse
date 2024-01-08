import ReactPlayer from "react-player/youtube";
import { useVideos } from "./useVideos";

const Trailer = () => {
  const { videos } = useVideos();
  const trailer = videos?.find((trailer) => trailer.type === "Trailer");

  return (
    <div className="px-4 max-sm:px-2 pb-2 rounded-md shadow-2xl w-full">
      <div className="pb-4 text-lg font-poppinsBold">Trailer</div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${trailer?.key}`}
        light={true}
        muted={true}
        controls={true}
        width="100%"
      />
    </div>
  );
};
export default Trailer;

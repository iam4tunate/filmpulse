const LoadingVideos = () => {
  const items = [...Array(8).keys()];
  return (
    <div className="maxW padX flex flex-wrap gap-x-6 gap-y-20 justify-center pb-20">
      {items.map((item) => (
        <div key={item} className="mx-auto max-sm:w-[18rem] max-[350px]:w-[16rem] w-[17rem] h-[25rem] loading" />
      ))}
    </div>
  );
};
export default LoadingVideos;

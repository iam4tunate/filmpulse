const LoadingVideos = () => {
  const items = [...Array(8).keys()];
  return (
    <div className="maxW padX grid grid-cols-4 gap-x-12 gap-y-20">
      {items.map((item) => (
        <div key={item} className="w-[17rem] h-[25rem] loading">
          <div className="h-[1.5rem] mt-4 rounded-md loading" />
        </div>
      ))}
    </div>
  );
};
export default LoadingVideos;

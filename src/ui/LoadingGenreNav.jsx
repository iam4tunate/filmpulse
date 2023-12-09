const LoadingGenreNav = () => {
  const items = [...Array(9).keys()];
  return (
    <div className="maxW padX pb-10 pt-16">
      <div className="flex items-center gap-x-2 relative">
        <div className="flex items-center gap-x-2 relative overflow-hidden">
        {items.map((item) => (
          <div key={item} className="h-[3.4rem] w-44 loading" />
        ))}
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black z-10" />
        </div>
        <div className="flex items-center border-2 border-dark rounded-md py-2 px-1.5 space-x-5">
          <span className="w-12 h-10 loading" />
          <span className="w-12 h-10 loading" />
        </div>
      </div>
    </div>
  );
};
export default LoadingGenreNav;

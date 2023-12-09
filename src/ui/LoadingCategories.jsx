const LoadingCategories = () => {
  const items = [...Array(4).keys()];
  return (
    <div className="pt-12 pb-8">
      <div className="maxW padX translate-x-3 flex items-center justify-between mb-8">
        <div className="h-10 w-52 loading" />
        <div className="flex items-center border-2 border-dark rounded-md py-2 px-1.5 space-x-5">
          <span className="w-12 h-10 loading" />
          <span className="w-12 h-10 loading" />
        </div>
      </div>
      <div className="max-w-screen-xl ml-auto flex gap-x-12 gap-y-20">
        {items.map((item) => (
          <div
            key={item}
            className="w-[17rem] h-[25rem] loading"
          />
        ))}
        <div className="w-[10rem] h-[25rem] loading"></div>
      </div>
    </div>
  );
};
export default LoadingCategories;

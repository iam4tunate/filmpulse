const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="h-16 w-full flex items-center loading">
      <div className="maxW padX flex items-center justify-between text-sm">
        <span className="">
          Designed and developer by{" "}
          <span className="text-red font-poppinsMedium underline underline-offset-4 pl-1">iamfortunate</span>
        </span>
        <span>&copy; {year}</span>
      </div>
    </footer>
  );
};
export default Footer;

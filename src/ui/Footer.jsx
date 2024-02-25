import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pb-4 w-full flex items-center justify-center">
      <footer className="padX flex flex-wrap items-center justify-end text-xs">
        <span className="">Designed & developed by</span>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://iamfortunate.netlify.app/"
          className="text-red font-poppinsMedium underline underline-offset-4 pl-1"
        >
          iamfortunate
        </Link>
      </footer>
    </footer>
  );
};
export default Footer;

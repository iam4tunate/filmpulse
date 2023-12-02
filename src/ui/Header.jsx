import { IoIosSearch } from "react-icons/io";
import { IoPulseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-3 fixed w-full bg-dark bg-opacity-10 backdrop-blur-md z-50">
      <div className="maxW padX flex items-center justify-between">
        <Link to="/">
          <IoPulseSharp className="text-4xl text-white" />
        </Link>
        <IoIosSearch className="text-2xl" />
      </div>
    </header>
  );
};
export default Header;

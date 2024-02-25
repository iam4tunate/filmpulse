import { IoIosSearch } from "react-icons/io";
import { IoPulseSharp } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className="py-3 fixed w-full bg-dark bg-opacity-10 backdrop-blur-md z-50 border-b border-b-white border-opacity-10">
      <div className="maxW padX flex items-center justify-between">
        <Link to="/">
          <IoPulseSharp className="text-4xl text-white" />
        </Link>
        {pathname === "/search" ? (
          <LiaTimesSolid
            onClick={() => navigate(-1)}
            className="text-[28px] cursor-pointer"
          />
        ) : (
          <IoIosSearch
            onClick={() => navigate("/search")}
            className="text-2xl cursor-pointer"
          />
        )}
      </div>
    </header>
  );
};
export default Header;

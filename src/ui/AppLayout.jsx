import Footer from "./Footer";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div className="relative h-full min-h-screen">
      <Header />
      <div>{children}</div>
      <div className="absolute bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
};
export default AppLayout;

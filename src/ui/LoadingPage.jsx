import { IoPulse } from "react-icons/io5";

const LoadingPage = () => {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-dark flex items-center justify-center">
      <IoPulse className="text-9xl text-red  max-md:text-8xl"/>
    </div>
  );
};
export default LoadingPage;

import BG from "../assets/exploreBg.png";
import OVERLAY from "../assets/bg-noise.gif";

const Explore = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, #000000,#000000dd, #000000df,#000000d5, #e5000037),url(${BG})`,
      }}
      className="w-full bg-cover bg-center bg-no-repeat h-[25rem] flex items-center"
    >
      <div
        style={{ backgroundImage: `url(${OVERLAY})` }}
        className="absolute top-0 left-0 right-0 bottom-0 opacity-[0.06] z-10 w-full h-[25rem]"
      />
      <div className="maxW padX">
        <div className="w-[70%] opacity-90">
          <div className="text-5xl font-black font-unica pb-3">
            Explore our wide variety of genres
          </div>
          <p className="font-poppinsLight w-[90%]">
            Whether you&apos;re looking for details on comedy to make you laugh,
            a drama to make you think, or a documentary to learn something new,
            We&apos;ve got you covered
          </p>
        </div>
      </div>
    </div>
  );
};
export default Explore;

import { useBio } from "./useBio";

const Bio = () => {
  const { isPending, bio } = useBio();
  return <div className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate enim nostrum id veniam quisquam, hic illo facilis quod eaque blanditiis.</div>;
};
export default Bio;

import Btn from "./Btn";
import Info from "./Info";
import MotionBg from "./MotionBg";
import Thumbnail from "./Thumbnail";

function Card() {
  return (
    <article className="group w-[300px] px-10 pt-14 pb-0 text-center bg-white rounded-xl shadow-lg transition-all opacity-80 hover:opacity-100 hover:pb-14  relative">
      <MotionBg />
      <Thumbnail />
      <Info />
      <Btn />
    </article>
  );
}

export default Card;

import Btn from "./Btn";
import Info from "./Info";
import MotionBg from "./MotionBg";
import Thumbnail from "./Thumbnail";

function Card() {
  return (
    // components layer에 group 적용 불가
    <article className="group card">
      <MotionBg />
      <Thumbnail />
      <Info />
      <Btn />
    </article>
  );
}

export default Card;

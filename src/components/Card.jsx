import Btn from "./Btn";
import Info from "./Info";
import Thumbnail from "./Thumbnail";

function Card() {
  return (
    <article className="group w-[300px] px-10 pt-14 pb-0 text-center bg-white rounded-xl shadow-lg transition-all opacity-80 hover:opacity-100 hover:pb-14  relative">
      <div className="absolute top-0 left-0 bg-white opacity-50 size-full group-hover:animate-ping rounded-xl"></div>
      <Thumbnail />
      <Info />
      <Btn />
    </article>
  );
}

export default Card;

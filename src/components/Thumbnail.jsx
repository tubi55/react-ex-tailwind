function Thumbnail() {
  return (
    <figure className="thumbnail">
      <img
        className="absolute object-cover translate-y-4 rounded-full size-full blur-xl saturate-150 brightness-150 "
        src="./img/peter.jpg"
        alt="peter"
      />
      <img
        className="absolute object-cover rounded-full size-full"
        src="./img/peter.jpg"
        alt="peter"
      />
    </figure>
  );
}

export default Thumbnail;

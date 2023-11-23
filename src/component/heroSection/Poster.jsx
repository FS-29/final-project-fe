import object1 from "../../assets/img/object1.png";
import object2 from "../../assets/img/object2.png";

function Poster() {
  return (
    <div className="flex flex-row justify-between overflow-hidden -top-52 -z-10 relative max-xl:h-3/4">
      <img
        src={object1}
        alt="poster1"
        className="relative max-lg:-left-32 -left-32"
      />
      <img
        src={object2}
        alt="poster2"
        className="relative max-lg:right-24 max-xl:-right-10 -right-24"
      />
    </div>
  );
}

export default Poster;

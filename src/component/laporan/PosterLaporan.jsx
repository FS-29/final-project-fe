import content1 from "../../assets/svg/content1.svg";
import content2 from "../../assets/svg/content2.svg";

function PosterLaporan() {
  return (
    <div className="flex flex-shrink flex-row justify-between overflow-hidden -z-10 relative max-xl:h-3/4">
      <img
        src={content1}
        alt="poster1"
        className="relative -left-48"
      />
      <img
        src={content2}
        alt="poster2"
        className="relative max-lg:right-40 max-xl:-right-0 -right-36"
      />
    </div>
  );
}

export default PosterLaporan;

import Definisi from "./Definisi";
import Jenis from "./Jenis";
import Tanda from "./Tanda";
import Dampak from "./Dampak";
import Peran from "./Peran";
import Pencegahan from "./Pencegahan";
import OrangTua from "./OrangTua";

function ContentEdukasi({ idContent }) {
  const styleTitle = "font-bold text-3xl text-center";
  const stylePargf = "font-medium text-xl text-justify";
  const styleList = "font-bold text-2xl";
  switch (idContent) {
    case 1:
      return <Definisi title={styleTitle} para={stylePargf}></Definisi>;
      break;

    case 2:
      return <Jenis title={styleTitle} para={stylePargf} list={styleList}></Jenis>;
      break;

    case 3:
      return <Tanda title={styleTitle} para={stylePargf}></Tanda>;
      break;

    case 4:
      return <Dampak title={styleTitle} para={stylePargf}></Dampak>;
      break;

    case 5:
      return <Peran title={styleTitle} para={stylePargf}></Peran>;
      break;

    case 6:
      return <Pencegahan title={styleTitle} para={stylePargf}></Pencegahan>;
      break;

    case 7:
      return <OrangTua title={styleTitle} para={stylePargf}></OrangTua>;
      break;

    default:
      break;
  }
}

export default ContentEdukasi;

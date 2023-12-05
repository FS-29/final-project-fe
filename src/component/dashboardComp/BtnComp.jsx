import { useDispatch, useSelector } from "react-redux";
import { setContentId } from "../../redux/reducers/dashboard-reducers"

function BtnComp({ text, iconbtn, idBtn }) {
  const { contentId } = useSelector((state) => state.dashUser);
  const dispatch = useDispatch();

  return (
    <button
      onClick={()=>dispatch(setContentId(idBtn))}
      className={`${
        contentId == idBtn
          ? "bg-color4 text-color7 border-color7"
          : "border-white bg-color6 text-gray-400 hover:shadow-none hover:bg-color3"
      } rounded-2xl border-4  shadow-xl p-4 text-left font-jakarta font-semibold flex flex-row gap-4 items-center`}
    >
      {iconbtn}
      <h2>{text}</h2>
    </button>
  );
}
export default BtnComp;

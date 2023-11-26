function BtnSideBar({ onClickEvent, text, isActive, idBtn}) {
    return(
        <button 
            onClick={onClickEvent}
            className={`${isActive==idBtn?'bg-color4 text-color7 border-color7':'border-white bg-color6 text-gray-400 hover:shadow-none hover:bg-color3'} rounded-xl border-4  shadow-xl p-4 text-left font-jakarta font-semibold `}
        >{text}</button>
    )
}

export default BtnSideBar
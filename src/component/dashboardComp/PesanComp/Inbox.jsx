import img from "../../../assets/svg/profilPolos.svg";

function Inbox({imgUser, name, isClick}) {
    return(
        <div className={`${isClick?'bg-color3':'bg-color6'} flex flex-row items-center justify-start gap-2 p-2  rounded-s-2xl`}>
            <img className="w-10 h-10" src={imgUser?imgUser:img} />
            <h1 className="font-bold text-lg text-left">{name}</h1>
        </div>
    )
}

export default Inbox
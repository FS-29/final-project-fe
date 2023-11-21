function BtnProfil({ icons, text }) {
    return (
      <div className="group flex items-center gap-4 bg-white py-2 px-4 rounded-2xl shadow-xl cursor-pointer hover:bg-gray-300  ">
            <div>{icons}</div>
          <h3 className="font-jakarta font-bold text-lg group-hover:text-gray-100 : ">{text}</h3>
      </div>
    );
  }
  
  export default BtnProfil;
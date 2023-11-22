function Poster2Comp({img,title,desc}) {
  return (
    <div className="flex flex-col gap-4 items-center w-72">
      <img className="max-h-32 mx-auto" src={img} alt="" />
      <h2 className="font-jakarta text-center font-semibold text-xl">{title}</h2>
      <p className="font-jakarta text-center text-base text-slate-400">{desc}</p>
    </div>
  );
}

export default Poster2Comp;

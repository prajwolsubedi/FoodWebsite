const ShimmerUI = () => {
  return (
      <div className="flex m-2 p-2 mt-28 flex-wrap">
          {Array(20).fill("").map((e,index) => <div className="bg-slate-400 border-x-black h-80 w-60 m-4 p-4 rounded-lg" key={index}></div>)}
      </div>
  );
};

export default ShimmerUI;

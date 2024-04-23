function Herosections() {
  return (
    <div>
      <div className="container mx-auto">
          <div className=" rounded-lg px-[40px] bg-gradient-to-r from-neutral-950 via-red-950 to-green-950 h-[100vh]">
        
          <div className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./src/assets/images/pexels-julia-m-cameron-4145190.jpg')] h-[100vh]	 w-[100] bg-no-repeat bg-center bg-cover shadow-lg shadow-gray-300">
            <h1 className=" font-bold font-sans text-3xl text-center justify-center ">
              The capacity to learn is a
              <br /> gift the ability to learn
              <br /> is a<span className="text-green-400"> skill</span> is a
              choice
            </h1>
            <button className="border bg-black text-white align-middle justify-center text-center outline-none rounded-lg p-3 border-black">
              Learn Now
            </button>
          </div>
          <div className="flex">
          <div className="w-[350px] m-[30px] text-white rounded-lg px-[40px] bg-gradient-to-r from-neutral-950 via-red-950 to-green-950 h-[350px]">
          <p> helps you learn and understand the local languange</p>
        </div>
        <div className="w-[350px] m-[30px] text-white rounded-lg px-[40px] bg-gradient-to-r from-neutral-950 via-red-950 to-green-950 h-[350px]">
          <p> A little progress each day adds up to big result</p>
        </div>
        <div className="w-[350px] m-[30px] text-white rounded-lg px-[40px] bg-gradient-to-r from-neutral-950 via-red-950 to-green-950 h-[350px]">
          <p> better inspiration through us to learn the skills</p>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Herosections;

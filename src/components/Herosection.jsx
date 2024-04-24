function Herosections() {
  return (
    <div className="container mx-auto">
      <div className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./src/assets/images/pexels-hillaryfox-1595385.jpg')] h-[100vh] mt-3	my-4 w-[100] bg-no-repeat bg-center bg-cover shadow-lg shadow-gray-300">
        <div className=" flex justify-center items-center flex-col mt-3  h-full ">
          <h1 className=" font-bold font-sans text-3xl  text-white  ">
            The capacity to learn is a gift
            <br /> the ability to learn
            <br /> is a<span className="text-green-400"> skill</span> the
            willingness
            <br /> to learn is a choice we help <br/>you understand the local
            languanges
          </h1>

          <div>
            <button className="border bg-black text-white  mt-19 outline-none rounded-lg p-3 border-black">
              Learn Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Herosections;

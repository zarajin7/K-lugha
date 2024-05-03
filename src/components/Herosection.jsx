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
            <br /> to learn is a choice we help <br />
            you understand the local languanges
          </h1>

          <div>
            <button className="border bg-black text-white  mt-19 outline-none rounded-lg p-3 border-black">
              Learn Now
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-evenly">
          <h2 className="text-black text-4xl mt-4">Testimonials</h2>
        </div>
        <div className=" flex gap-12 justify-center h-[56vh] p-2 bg-slate-300">
          <div className="w-[400px] h-[50vh]  bg-white mt-4  flex flex-col items-center justify-center gap-6 rounded-2xl">
            <div>
              <img
                src="src/assets/images/pexels-photo-4143800.jpeg"
                width={200}
              />
            </div>
            <div>
              <p className="w-[300px] text-center leading-[2rem]">
                Using this app was so much intresting .i did not expect that
                much from the site interacting with you was so much awesome
              </p>
            </div>
          </div>
          <div className="w-[400px] h-[50vh] bg-white mt-4 flex flex-col items-center justify-center gap-6 rounded-2xl">
            <div>
              <img
                src="src/assets/images/pexels-photo-4050083.webp"
                width={200}
              />
            </div>

            <div>
              <p className="w-[300px] text-center leading-[2rem]">
                k-lugha you are the best .thanks very much i almost know all the
                languanges through you .keep up guys
              </p>
            </div>
          </div>
          <div className="w-[400px] h-[50vh] bg-white mt-4 flex flex-col items-center justify-center gap-6 rounded-2xl">
            <div>
              <img
                src="src/assets/images/pexels-artempodrez-4492127.jpg"
                width={300}
              />
            </div>

            <div>
              <p className="w-[300px] text-center leading-[2rem]">
                Through you one can learn alot .am able to talk every languange
                perfectly.thanks alot
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center m-9">
        <div className="mt-12 w-[800px] flex flex-col gap-5 items-center justify-center text-center left-[30%]">
          <p className="text-black px-4 py-3">About Us</p>

          <video controls autoplay>
            <source
              src="../src/assets/images/6985307-uhd_3840_2160_25fps.mp4"
              type="video/mp4"
            />
          </video>

          <p className="leading-[2rem]">
            What our app does is that we give a variety of local kenyan
            languages for tourist across the world,to learn and be able to
            communicate in the kenyan language and the skill of being
            multilingual with the kenyan language and have fun ....LEARN FROM
            THE BEST WITH OUR APP K-LUGHA
          </p>
          <button className="border bg-black text-white  mt-19 outline-none rounded-lg p-3 border-black">
            Learn with us
          </button>
        </div>
      </div>
    </div>
  );
}
export default Herosections;

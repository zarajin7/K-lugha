import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


async function handleAudio() {
  const url =
    

  await fetch(url).catch((err) => console.error(err));
}

function Lessons() {
  
  return (
    <>

     

      <audio
        controls
        src="https://api.voicerss.org/?key=c6c62d5c4548485dbe4407f481ce44c6&hl=en-us&src= bedgi hawi maber"
      ></audio>
      <div className=" grid grid-cols-3 gap-3 sm:flex-row">
        <div className="w-[350px] m-[30px] rounded-lg px-[40px] bg-gradient-to-r from-neutral-950 via-red-950 to-green-950 h-[350px]">
          <div></div>
          <div className="flex">
            <img className="my-8 h-[250px]" src="images/luo1.jpeg"></img>
          </div>
          <div>
            <div className="text-white justify-center align-middle text-center font-bold text-[30px]">
              <h3>Luo</h3>
            </div>
            <Link to="/lesson">
              <button className="border bg-black text-white align-middle justify-center text-center outline-none rounded-lg p-3 border-black hover:bg-orange-700">
                Learn Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[350px] m-[30px] rounded-lg px-[40px] bg-gradient-to-r from-neutral-950 via-red-950 to-green-950 h-[350px]">
          <div></div>
          <div className="flex">
            <img
              className="my-8 h-[250px]"
              src="images/NSRW_Africa_Mukamba.png"
            ></img>
          </div>
          <div>
            <div className="text-white justify-center align-middle text-center font-bold text-[30px]">
              <h3>Akamba</h3>
            </div>
            <Link to="/lessonss">
              {" "}
              <button className="border bg-black text-white align-middle justify-center text-center outline-none rounded-lg p-3 border-black hover:bg-orange-700">
                Learn Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[350px] m-[30px] rounded-lg px-[40px] bg-gradient-to-r from-neutral-950 via-red-950 to-green-950 h-[350px]">
          <div></div>
          <div className="flex">
            <img className="my-8 h-[250px]" src="images/kikuyu2.jpeg"></img>
          </div>
          <div>
            <div className="text-white justify-center align-middle text-center font-bold text-[30px]">
              <h3>Kikuyu</h3>
            </div>
            <Link to="/lesso">
              <button className="border bg-black text-white align-middle justify-center text-center outline-none rounded-lg p-3 border-black hover:bg-orange-700">
                Learn Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[350px] m-[30px] rounded-lg px-[40px] bg-gradient-to-r from-neutral-950 via-red-950 to-green-950 h-[350px]">
          <div></div>
          <div className="flex">
            <img className="my-8 h-[250px]" src="images/kisii2.jpeg"></img>
          </div>
          <div>
            <div className="text-white justify-center align-middle text-center font-bold text-[30px]">
              <h3>Kisii</h3>
            </div>
            <Link to="/less">
              <button className="border bg-black text-white align-middle justify-center text-center outline-none rounded-lg p-3 border-black hover:bg-orange-700">
                Learn Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[350px] m-[30px] rounded-lg px-[40px] bg-gradient-to-r from-neutral-950 via-red-950 to-green-950 h-[350px]">
          <div></div>
          <div className="flex">
            <img className="my-8 h-[250px]" src="images/nubii.jpeg"></img>
          </div>
          <div>
            <div className="text-white justify-center align-middle text-center font-bold text-[30px]">
              <h3>Nubian</h3>
            </div>
            <Link to="/les">
              <button className="border bg-black text-white align-middle justify-center text-center outline-none rounded-lg p-3 border-black hover:bg-orange-700">
                Learn Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[350px] m-[30px] rounded-lg px-[40px] bg-gradient-to-r from-neutral-950 via-red-950 to-green-950 h-[350px]">
          <div></div>
          <div className="flex">
            <img className="my-8 h-[250px]" src="images/masai2.jpeg"></img>
          </div>
          <div>
            <div className="text-white justify-center align-middle text-center font-bold text-[30px]">
              <h3>Masai</h3>
            </div>
            <Link to="/len">
              <button className="border bg-black text-white align-middle justify-center text-center outline-none rounded-lg p-3 border-black hover:bg-orange-700">
                Learn Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Lessons;

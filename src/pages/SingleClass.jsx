import { useLocation } from "react-router-dom";
import { useState } from "react";
import AddLessons from "../components/addLessons";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
function Singleclass() {
  const { state } = useLocation();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  console.log(state);

  return (
    <>
        
      <div className="flex flex-col  justify-center items-center  h-[70em] w-[100%] bg-gradient-to-r from-red-900 from-10% via-green-900 via-30% to-red-900 to -50% ...h-100px w-100px px-4">
        <h1>You can add the {state} lessons</h1>

        <button
          onClick={handleOpen}
          className="border bg-black text-white align-middle justify-center text-center outline-none rounded-lg p-3 border-black hover:bg-orange-700"
        >
          Add Lessons
        </button>
      </div>

      <AddLessons isOpen={open} onClose={handleClose}>
        <div className=" flex flex-col bg-gradient-to-r from-red-900 from-10% via-green-900 via-30% to-red-900 to -50% ...h-100px w-100px px-4">
        <label>Title</label>
        <input type="text" placeholder=""/>
        <label>1.</label>
        <input type="text" placeholder="lesson1"/>
        <label>2.</label>

        <input type="text" placeholder="lesson2"/>
        <label>3.</label>

        <input type="text" placeholder="lesson3"/>
        <label>4.</label>

        <input type="text" placeholder="lesson4"/>
        <label>5</label>

        <input type="text" placeholder="lesson5"/>
        <label>6.</label>

        <input type="text" placeholder="lesson6"/>
        <label>7.</label>

        <input type="text" placeholder="lesson7"/>
        <label>8.</label>

        <input type="text" placeholder="lesson8"/>
        <label>9.</label>

        <input type="text" placeholder="lesson9"/>
        <label>10.</label>

        <input type="text" placeholder="lesson10"/>
<button className="border bg-black text-white align-middle justify-center text-center outline-none rounded-lg p-3 border-black hover:bg-white">ADD</button>

            
        
        </div>
      </AddLessons>
    </>
  );
}
export default Singleclass;

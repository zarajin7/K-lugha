import React, { useEffect, useState } from "react";
import Lesson2 from "../components/Lesson2";
import AddClass from "../components/AddClass";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { doc, getDocs } from "firebase/firestore";

function Adminpannel() {
  const [openModal, setOpenModal] = useState(false);
  const [classInput, setClassInput] = useState({
    class: "",
  });
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    getAllClasses();
  }, []);

  async function getAllClasses() {
    const querySnapshot = await getDocs(collection(db, "classes"));
    
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setAllClasses(prev=>([...prev, doc.data()]));
    });
    const filteredArray(newArray)=>{newArray.from(getAllClasses)

    }
    setClassInput.filter
  }

  console.log(allClasses);
  const handleClose = () => {
    setOpenModal(false);
    console.log("clossing modal");
  };

  const handleOpen = () => {
    setOpenModal(true);
    console.log("clossing modal");
  };

  async function handleAddClass() {
    console.log(classInput);
    const classDoc = await addDoc(collection(db, "classes"), classInput);
    console.log(classDoc);
  }

  return (
    <>
      <div className="Container mx-auto ">
        <div className="  bg-gradient-to-r from-red-900 from-10% via-green-900 via-30% to-red-900 to -50% ...h-100px w-100px px-4">
          <h2 className="text-center  text-2xl text-white">
            Welcome to K-languages a platform that provides a solution to
            literacy of kenyans wide variety of Languages this includes;
          </h2>
          <div>
            <ul className="flex justify-evenly list-none text-white font-bold cursor-pointer">
              <li className="border rounded-full px-2  hover:bg-red-700">
                My Class
              </li>

              <li className="border rounded-full px-2  hover:bg-red-700">
                Welcome,Emmanuel
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 text-center py-[10rem]">

            {allClasses.map((classItem) => {
              return (
                <div className="text-2xl border  shadow-transparent  w-[200px] h-[200px] bg-white">
                  <li className="text-center list-none">{classItem.class} </li>
                  <button className="border rounded-full hover:bg-red-700  mt-10">
                    Add Lessons
                  </button>
                </div>
              );
            })}

            <div className="text-2xl border list-none shadow-transparent  w-[200px] h-[200px] bg-white">
              <li>Add Class</li>
              <button
                className="border rounded-full px-2 hover:bg-red-700 shadow-transparent mt-10"
                onClick={handleOpen}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddClass isOpen={handleOpen} onClose={handleClose}>
        <h3 className="text-2xl font-semibold">Add a Class</h3>
        <input
          type="text"
          name="class"
          placeholder="Class Name"
          className="py-5 px-3 outline-none"
          onChange={(e) =>
            setClassInput({ ...classInput, class: e.target.value })
          }
        />
        <button
          className="bg-red-300 py-5 w-[40%] mx-auto"
          onClick={handleAddClass}
        >
          Add
        </button>
      </AddClass>
    </>
  );
}
export default Adminpannel;

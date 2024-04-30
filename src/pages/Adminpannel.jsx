import React, { useEffect, useState } from "react";
import Lesson2 from "../components/Lesson2";
import AddClass from "../components/AddClass";

import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Adminpannel() {
  const [openModal, setOpenModal] = useState(false);
  
  const [classInput, setClassInput] = useState({
    class: "",
  });
  const [allClasses, setAllClasses] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllClasses();
  }, []);

  async function getAllClasses() {
    const querySnapshot = await getDocs(collection(db, "classes"));
    const classesData = [];
    querySnapshot.forEach((doc) => {
      classesData.push({ id: doc.id, ...doc.data() });
    });
    setAllClasses(classesData);
  }

  const handleClose = () => {
    setOpenModal(false);
    console.log("closing modal");
  };

  const handleOpen = () => {
    setOpenModal(true);
    console.log("opening modal");
  };

  async function handleAddClass() {
    console.log(classInput);
    await addDoc(collection(db, "classes"), classInput);
    setClassInput({ class: "" });
    getAllClasses();
  }

  const handleEditClass = async (classId, newClassName) => {
    await updateDoc(doc(db, "classes", classId), { class: newClassName });
    getAllClasses();
  };
  function handleAddLessons(path,options){
  navigate(path,options)
  setOpenModal(true)
  
}




  

  return (
    <>
      <div className="Container mx-auto">
        <div>
          <ul className="flex justify-around ">
            <li className=" hover:bg-green-900">Dashboard</li>
            <li className=" hover:bg-green-900">Lessons</li>
            <li className=" hover:bg-green-900">settings</li>
            <li className=" hover:bg-red-900">log-out</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-red-900 from-10% via-green-900 via-30% to-red-900 to -50% ...h-100px w-100px px-4">
          <h2 className="text-center text-2xl text-white">
            Welcome to K-languages a platform that provides a solution to
            literacy of kenyans wide variety of Languages this includes;
          </h2>
          <div>
            <ul className="flex justify-evenly items-center  list-none text-white font-bold cursor-pointer">
              <li className="border  w-[150px] h-[150px] hover:bg-red-700">
                My Class
              </li>

              <li className="border  w-[150px] h-[150px] text-center px-2 hover:bg-red-700">
                Welcome, Emmanuel
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 text-center py-[10rem]">
            {allClasses.map((classItem, index) => (
              <div
                key={index}
                className="text-2xl border shadow-transparent w-[200px] h-[200px] bg-white"
              >
                <h1>{classItem.class}</h1>

                <div>
                  <button
                    className="border rounded-full hover:bg-red-700 mt-10"
                    onClick={()=>handleAddLessons(`/admin/lessons/${classItem.class.toLowerCase()}`, {state:classItem.class})}
                  >
                    Add lessons
                  </button>
                </div>
              </div>
            ))}

            <div className="text-2xl border list-none shadow-transparent w-[200px] h-[200px] bg-white">
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
      <div className="p-[10em] gap-5">
        <AddClass isOpen={openModal} onClose={handleClose}>
          <h3 className="text-2xl font-semibold bg-gray-400"></h3>
          <input
            type="text"
            name="class"
            placeholder="Class Name"
            className="py-5 border m-10 px-3 "
            value={classInput.class}
            onChange={(e) =>
              setClassInput({ ...classInput, class: e.target.value })
            }
          />
          <button
            className="border rounded-full flex items-center mt-10 bg-red-300 py-5 w-[40%] mx-auto"
            onClick={handleAddClass}
          >
            <h3 className=" flex px-10  text-center">Add</h3>
          </button>
        </AddClass>
       



      </div>
    </>
  );
}

export default Adminpannel;

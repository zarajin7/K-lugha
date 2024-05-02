import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AddLessons from "../components/addLessons";
import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

function Singleclass() {
  const { state } = useLocation();
  const [open, setOpen] = useState(false);
  const [lessonInput, setLessonInput] = useState({ title: '', lessons: [] });
  const [allClasses, setAllClasses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    getAllLessons();
  }, []);

  async function getAllLessons() {
    const querySnapshot = await getDocs(collection(db, "lessons"));
    const classesData = [];
    querySnapshot.forEach((doc) => {
      classesData.push({ id: doc.id, ...doc.data() });
    });
    setAllClasses(classesData);
  }

  async function handleAddLessons() {
    if (lessonInput.title.trim() === '' || lessonInput.lessons.some(lesson => lesson.trim() === '')) {
      setErrorMessage('Please fill in all fields');
      return;
    }
  
    try {
      await addDoc(collection(db, "lessons"), lessonInput);
      setLessonInput({ title: '', lessons: Array(10).fill('') });
      setSuccessMessage('Lessons added successfully');
      setErrorMessage('');
      getAllLessons();
  
      
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setErrorMessage('An error occurred. Please try again.');
    }
  }
  
  
  

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[70em] w-[100%] bg-gradient-to-r from-red-900 from-10% via-green-900 via-30% to-red-900 to -50% ...h-100px w-100px px-4">
        <h1>You can add the {state} lessons</h1>
        <button
          onClick={handleOpen}
          className="border bg-black text-white align-middle justify-center text-center outline-none rounded-lg p-3 border-black hover:bg-orange-700"
        >
          Add Lessons
        </button>
      </div>

      <AddLessons isOpen={open} onClose={handleClose}>
        <div className="flex flex-col flex-wrap gap-5 bg-gradient-to-r from-red-900 from-10% via-green-900 via-30% to-red-900 to -50% ...h-100px w-100px px-4">
          {errorMessage && <p className="addError text-white">{errorMessage}</p>}
          <label>Title</label>
          <input
            type="text"
            name="lesson"
            value={lessonInput.title}
            placeholder=""
            onChange={(e) => setLessonInput({ ...lessonInput, title: e.target.value })}
          />
          {[...Array(10)].map((_, index) => (
            <div key={index}>
              <label>{index + 1}.</label>
              <input
                type="text"
                placeholder={`Lesson ${index + 1}`}
                onChange={(e) => {
                  const newLessons = [...lessonInput.lessons];
                  newLessons[index] = e.target.value;
                  setLessonInput({ ...lessonInput, lessons: newLessons });
                }}
              />
            </div>
          ))}
          <button
            onClick={handleAddLessons}
            className="border bg-black text-white align-middle justify-center text-center outline-none rounded-lg p-3 border-black hover:bg-white"
          >
            ADD
          </button>
        </div>
      </AddLessons>
    </>
  );
}

export default Singleclass;



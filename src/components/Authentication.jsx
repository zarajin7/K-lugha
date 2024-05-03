import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { auth,db } from "../firebase";
import { RotatingLines } from "react-loader-spinner";
import Loader from "./Loader";
import {
  createUserWithEmailAndPassword,signInWithEmailAndPassword
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 

function Authentication() {
  const [showForm, setShowForm] = useState("signup");
  const [showError, setShowError] = useState("");
  const [formDataSignUp, setFormDataSignUp] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  
  const [confirmPassword, setConfirmPassword] = useState("");
   const [loading,setLoading]=useState(false)
  function toggleForm(formName) {
    setShowForm(formName);
  }

  function handleChange(e) {
    setFormDataSignUp({ ...formDataSignUp, [e.target.name]: e.target.value });
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError("")

    console.log(confirmPassword);

    if (formDataSignUp.fullName === "") {
      setShowError("kindly fill in your name");
    } else if (formDataSignUp.email === "") {
      setShowError("kindly fill in the email address");
    } else if (formDataSignUp.password === "") {
      setShowError("kindly fill in the password");
    } else if (confirmPassword === "") {
      setShowError("kindly confirm your password");
    } else if (confirmPassword !== formDataSignUp.password) {
      setShowError("Passwords do not match");
    } 
    else if(formDataSignUp.password.length<6){
      setShowError("password should have at least 6 characters")
    }
    else {
      setLoading(true)
      await createUserWithEmailAndPassword(
        auth,
        formDataSignUp.email,
        formDataSignUp.password
      )
        .then(async(userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("Registered successfully");
          console.log(user);
          setLoading(false)
        
          if (user){
            const saveUsers=await addDoc(collection(db, "users"), formDataSignUp)
            console.log(saveUsers)
          }
          setShowForm("login");
          // ...
        })
        .catch((error) => {
         console.log(error)

          // ..
        });

        
      
        

        
     
             }
    }




const[formDataSignIn,setFormDataSignIn]=useState({
  email: "",
  password: "",
})

function handleChangeNow(e) {
  setFormDataSignIn({ ...formDataSignIn, [e.target.name]: e.target.value });
}

const handleLogin = async (e) => {
  e.preventDefault();
  setShowError("")

  console.log(confirmPassword);

  if (formDataSignIn.email === "") {
    setShowError("kindly fill in the email address");
  } else if (formDataSignIn.password === "") {
    setShowError("kindly fill in the password");
  } 
  
  else if(formDataSignIn.password.length<6){
    setShowError("password should have at least 6 characters")
  }
  else {
    await signInWithEmailAndPassword(
      auth,
      formDataSignIn.email,
      formDataSignIn.password
    )
      .then(async(userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logged in successfully");
        console.log(user);
        // if (user){
        //   const saveUsers=await addDoc(collection(db, "users"), formDataSignUp)
        //   console.log(saveUsers)
        // }
        setShowForm("login");
        // ...
      })
      .catch((error) => {
       console.log(error)

        // ..
      });

      
    
      

      
   
           }
  }



  
  return (
    <>
      <div className="container mx-auto">
        { loading && <Loader/>}
        <div className="flex justify-center gap-3">
          <p
            className="py-3 px-5 bg-slate-300 text-black cursor-pointer"
            onClick={() => toggleForm("signup")}
            style={{
              backgroundColor: showForm === "signup" && "black",
              color: showForm === "signup" && "white",
            }}
          >
            Signup
          </p>
          <p
            className="py-3 px-5  bg-slate-300 text-black  cursor-pointer"
            onClick={() => toggleForm("login")}
            style={{
              backgroundColor: showForm === "login" && "black",
              color: showForm === "login" && "white",
            }}
          >
            Login
          </p>
        </div>

        <div className="bg-gray-300">
          {showForm === "signup" ? (
            <div className=" bg-white box-boder shadow-lg p-[50px] rounded-xl ">
              <div className="flex">
                <div className="bg-white w-[100%] h-[60]">
                  <img
                    src="src/assets/images/4e3667b19c63078812be127ab9a95350.jpg"
                    width={400}
                  />
                </div>
                <div className="flex flex-col gap-5 ">
                  <div className="border-2  rounded-lg w-full shadow-lg">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
                      name="fullName"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="border-2  rounded-lg w-full shadow-lg">
                    <input
                      type="text"
                      placeholder="Email"
                      className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
                      name="email"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="border-2  rounded-lg  shadow-lg flex">
                    <input
                      type="text"
                      placeholder="password"
                      className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
                      name="password"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="border-2  rounded-lg w-full shadow-lg">
                    <input
                      type="text"
                      placeholder="confirmPasssword"
                      className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
                      name="confirmPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <p className="text-red-400">{showError}</p>
                  <div className="flex justify-center ">
                    <button
                      className="bg-red-300 px-[5em] py-5 rounded-[2em] shadow-lg text-white font-bold"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="flex justify-center text-[25px]">
                    Already Have An Account{" "}
                    <a href="/login" className="text-red-300 ">
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white p-[10em] shadow-xl box-border rounded-xl flex flex-col gap-[2em]">
              <div className="border-2  rounded-lg w-full shadow-lg ">
                <input
                  type="text"
                  placeholder="Email"
                  className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
                  name="email"
                  onChange={(e) => handleChangeNow(e)}
                />
              </div>
              <div className="border-2  rounded-lg  shadow-lg flex">
                <input
                  type="text"
                  placeholder="password"
                  className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
                  name="password"
                  onChange={(e) => handleChangeNow(e)}
                />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="w-4 h-4 mr-2" />
                  <p>Remember me</p>
                </div>
                <p className="text-red-300 underline underline-offset-2 cursor-pointer">
                  Forgot Password?
                </p>
              </div>
              <p className="text-red-400">{showError}</p>

              <div className="flex justify-center ">
                <button
                  href="#"
                  className="bg-red-300 px-[7em] py-5 rounded-[2em] shadow-lg text-white font-bold"
                  onClick={(e) => handleLogin(e)}

                >
                  Log in
                </button>
              </div>

              <div className="flex justify-center  text-[20px] my-2">
                Dont Have An Account Yet?
                <a href="/lesson" className="text-red-300">
                  Sign Up Free
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  
  );

          }
export default Authentication;

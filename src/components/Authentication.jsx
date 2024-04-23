import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { auth } from "../firebase";
import { confirmPasswordReset, createUserWithEmailAndPassword } from "firebase/auth";

function Authentication() {
  const [showForm, setShowForm] = useState("signup");

  function toggleForm(formName) {
    setShowForm(formName);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [formDataSignUp, setFormDataSignUp] = useState({});

  function handleChange(e){
setFormDataSignUp(prev=>({}))
  }

  const handleSubmit = async (e) => {
    await createUserWithEmailAndPassword(auth, email, password,confirmPasswordReset)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("Registered successfully");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // ..
      });
  };

  return (
    <>
      <div className="container mx-auto">
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

        <div className="bg-red-300">
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
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  
                  </div>
                  <div className="border-2  rounded-lg w-full shadow-lg">
                    <input
                      type="text"
                      placeholder="Email"
                      className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
                      name="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="border-2  rounded-lg  shadow-lg flex">
                    <input
                      type="text"
                      placeholder="password"
                      className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
                      name="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="border-2  rounded-lg w-full shadow-lg">
                    <input
                      type="text"
                      placeholder="Confirm Passsword"
                      className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
                      name="Confirm Password"
                      value={confirmPasswordReset}
                      onChange={(e) => setconfirmPasswordReset(e.target.value)}

                    />
                  </div>
                  <div className="flex justify-center ">
                    <a
                      href="/login"
                      className="bg-red-300 px-[5em] py-5 rounded-[2em] shadow-lg text-white font-bold"
                      onClick={handleSubmit}
                    >
                      sign up
                    </a>
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
                />
              </div>
              <div className="border-2  rounded-lg  shadow-lg flex">
                <input
                  type="text"
                  placeholder="password"
                  className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
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
              <div className="flex justify-center ">
                <a
                  href="#"
                  className="bg-red-300 px-[7em] py-5 rounded-[2em] shadow-lg text-white font-bold"
                >
                  Log in
                </a>
              </div>

              <div className="flex justify-center  text-[20px] my-2">
                Dont Have An Account Yet?
                <a href="/signup" className="text-red-300">
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

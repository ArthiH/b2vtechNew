import { useEffect, useRef, useState } from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { FaRegEdit } from "react-icons/fa";

export const AccountSetting = () => {
  const [loginFN, setLoginFN] = useState("");
  const [loginLN, setLoginLN] = useState("");
  const [loginPN, setLoginPN] = useState("");

  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const phoneNumberInputRef = useRef(null);


  useEffect(() => {
    const loginFN = localStorage.getItem("LoginFN");
    const loginLN = localStorage.getItem("LoginLN");
      const loginPN = localStorage.getItem("LoginPN");
    //   if (loginPN === undefined) {
    //       const LPN=
    //   }
    setLoginFN(loginFN);
    setLoginLN(loginLN);
    setLoginPN(loginPN);
  }, []);

  const handleEditClick = (inputRef) => {
    inputRef.current.focus();
  
  };

  const handleSaveClick = () => {
    console.log(loginFN);
    
  };
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center h-screen">
        <section className="bg-white max-w-[500px] w-full flex items-center flex-col p-10 rounded-xl shadow-2xl">
          <h1 className="text-skyBlue text-2xl font-semibold">
            Edit Your Details
          </h1>

          <section className="w-full">
            <label
              className="text-secondary text-lg font-semibold"
              htmlFor="firstName"
            >
              First name
            </label>
            <div className="w-full border border-primary rounded-xl my-2 flex gap-3 items-center">
              <input
                ref={firstNameInputRef}
                className="outline-none my-2 py-2 mx-3 w-full"
                type="text"
                placeholder="Enter your First Name"
                name="firstName"
                value={loginFN}
                id="firstName"
                onChange={(e) => {
                  setLoginFN(e.target.value);
                }}
              />
              <p
                className="text-2xl mr-3 text-primary"
                onClick={() => handleEditClick(firstNameInputRef)}
              >
                <FaRegEdit />
              </p>
            </div>
          </section>

          <section className="w-full">
            <label
              className="text-secondary text-lg font-semibold"
              htmlFor="lastName"
            >
              Last name
            </label>
            <div className="w-full border border-primary rounded-xl my-2 flex gap-3 items-center">
              <input
                className="outline-none my-2 py-2 mx-3 w-full"
                type="text"
                placeholder="Enter your LastName"
                name="lastName"
                id="lastName"
                value={loginLN}
              />
              <p className="text-2xl mr-3 text-primary">
                <FaRegEdit />
              </p>
            </div>
          </section>

          <section className="w-full">
            <label
              className="text-secondary text-lg font-semibold"
              htmlFor="email"
            >
              Phone number
            </label>
            <div className="w-full border border-primary rounded-xl my-2 flex gap-3 items-center">
              <input
                className="outline-none my-2 py-2 mx-3 w-full"
                type="text"
                placeholder="Enter your phoneNumber"
                name="phoneNumber"
                id="phoneNumber"
                value={loginPN}
              />
              <p className="text-2xl mr-3 text-primary">
                <FaRegEdit />
              </p>
            </div>
          </section>

          <button
            className="px-8 py-2 bg-primary text-white text-xl mt-5 rounded-lg"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedBold } from "react-icons/pi";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { useLocation } from "react-router-dom";

export const Register = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [isvisible, setIsVisible] = useState(false);
  const [cpEye, setCPEye] = useState(false);
  const inputFields = [
    { label: "Username", type: "text", placeholder: "Username" },
    { label: "Lastname", type: "text", placeholder: "Lastname" },
    { label: "Phone Number", type: "number", placeholder: "Phone Number" },
    { label: "Email ID", type: "email", placeholder: "Email" },
    {
      label: "Password",
      type: isvisible ? "text" : "password",
      placeholder: "Password",
    },
    {
      label: "ConfirmPassword",
      type: cpEye ? "text" : "password",
      placeholder: "Confirm Password",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="flex justify-center mt-10">
        <div className="bg-white max-w-[500px] w-full flex items-center flex-col p-10 rounded-xl shadow-2xl">
          <h1 className="text-skyBlue text-2xl font-semibold ">Register</h1>
          <section className="w-[90%] mt-3">
            {inputFields.map((field, index) => (
              <section key={index} className="mt-3">
                <label>
                  {field.label} <span className="text-[red]">*</span>
                </label>
                <div className="group border-litegrey border py-1 px-5 mt-1 rounded-full flex items-center focus-within:border-2 focus-within:border-primary">
                  <input
                    className="focus:outline-none w-full p-2"
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                  {field.label === "Password" && (
                    <span
                      className="text-2xl text-secondary"
                      onClick={() => setIsVisible(!isvisible)}
                    >
                      {isvisible ? <PiEyeClosedBold /> : <FaEye />}
                    </span>
                  )}
                  {field.label === "ConfirmPassword" && (
                    <span
                      className="text-2xl text-secondary"
                      onClick={() => setCPEye(!cpEye)}
                    >
                      {cpEye ? <PiEyeClosedBold /> : <FaEye />}
                    </span>
                  )}
                </div>
              </section>
            ))}
          </section>
          <section className="w-[90%] mt-3 flex flex-col">
            <label htmlFor="role">
              Choose a role: <span className="text-[red]">*</span>
            </label>
            <div className="border-litegrey  border p-3 mt-1 rounded-full flex items-center focus-within:border-2 focus-within:border-primary">
              <select className="w-full focus:outline-none" name="role">
                <option className="text-xl" value="intern">
                  Intern
                </option>
                <option className="text-xl" value="mentor">
                  Mentor
                </option>
              </select>
            </div>
          </section>

          <button className="border w-[90%] py-3 rounded-full bg-primary mt-8 text-white font-bold text-xl">
            Register
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

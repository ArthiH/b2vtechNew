import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedBold } from "react-icons/pi";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../Component/Validation";
import axios from "axios";

export const Register = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(RegisterSchema) });
  const [isvisible, setIsVisible] = useState(false);
  const [cpEye, setCPEye] = useState(false);
  const inputFields = [
    {
      label: "Username",
      type: "text",
      placeholder: "Username",
      valid: "firstName",
    },
    {
      label: "Lastname",
      type: "text",
      placeholder: "Lastname",
      valid: "lastName",
    },
    {
      label: "Phone Number",
      type: "number",
      placeholder: "Phone Number",
      valid: "phoneNumber",
    },
    { label: "Email ID", type: "email", placeholder: "Email", valid: "email" },
    {
      label: "Password",
      type: isvisible ? "text" : "password",
      placeholder: "Password",
      valid: "password",
    },
    {
      label: "ConfirmPassword",
      type: cpEye ? "text" : "password",
      placeholder: "Confirm Password",
      valid: "Cpassword",
    },
  ];
  const onSubmit = handleSubmit((data) => {
    RegisterStore(data);
    reset({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      Cpassword: "",
    });
  });
  const RegisterStore = (data) => {
    try {
      axios({
        method: "post",
        url: "http://localhost:5000/user/add",
        data: data,
      });
    } catch (error) {
      console.log(error, "error");
    }
  };
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
                    {...register(field.valid)}
                  />
                  {field.label === "Password" && (
                    <span
                      className="text-2xl text-secondary"
                      onClick={() => setIsVisible(!isvisible)}
                    >
                      {isvisible ? <FaEye /> : <PiEyeClosedBold />}
                    </span>
                  )}
                  {field.label === "ConfirmPassword" && (
                    <span
                      className="text-2xl text-secondary"
                      onClick={() => setCPEye(!cpEye)}
                    >
                      {cpEye ? <FaEye /> : <PiEyeClosedBold />}
                    </span>
                  )}
                </div>
                <p className="text-[red] text-sm my-1">
                  {errors[field.valid]?.message}
                </p>
              </section>
            ))}
          </section>

          <fieldset className="w-[90%] mt-3 flex flex-col">
            <legend>
              Choose a role: <span className="text-[red]">*</span>
            </legend>
            <div className="border-litegrey border p-3 mt-1 rounded-full flex items-center focus-within:border-2 focus-within:border-primary">
              <select
                className="w-full focus:outline-none"
                {...register("role")}
              >
                {[
                  { value: "intern", label: "Intern" },
                  { value: "mentor", label: "Mentor" },
                ].map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="text-xl"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>

          <Link
            to="/"
            className="border w-[90%] py-3 text-center rounded-full bg-primary mt-8 text-white font-bold text-xl"
            onClick={onSubmit}
          >
            Register
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

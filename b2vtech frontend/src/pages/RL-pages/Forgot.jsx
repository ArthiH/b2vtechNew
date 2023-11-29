import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedBold } from "react-icons/pi";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotSchema, NPSchema } from "../../Component/Validation";
import axios from "axios";

export const Forgot = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center h-screen">
        <div className="bg-white max-w-[500px] w-full flex items-center flex-col p-10 rounded-xl shadow-xl">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export const FP = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ForgotSchema) });
  const OnSubmit = handleSubmit((data) => {
    SendOtp(data);
  });
  const SendOtp = async (data) => {
    axios({
      method: "post",
      url: "http://localhost:5000/user/forgot",
      data: data,
    })
      .then(() => {
        window.location.href = "/forgot/otp";
      })
      .catch(() => {
        setError("Incorrect email");
      });
  };

  return (
    <>
      <h1 className="text-skyBlue text-2xl font-semibold">Forgot Password</h1>
      {error && <p className="text-[red] mt-5">{error}</p>}
      <section className="w-[90%] mt-5">
        <p className="text-md text-secondary ">Enter your email address</p>
        <div className="group  border-litegrey border py-1 px-5 mt-3 rounded-full focus-within:border-2 focus-within:border-primary">
          <input
            className="focus:outline-none w-full p-2 "
            type="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <p className="text-[red] text-sm my-1">{errors.email?.message}</p>
      </section>
      <Link
        className="border w-[90%] py-3 text-center rounded-full bg-primary text-white font-bold text-xl mt-10"
        onClick={OnSubmit}
      >
        Send
      </Link>
    </>
  );
};

export const OTP = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const SendOtp = async () => {
    axios({
      method: "post",
      url: "http://localhost:5000/user/verifyotp",
      data: { otp },
    })
      .then((res) => {
        const queryString = `?email=${encodeURIComponent(res.data.email)}`;
        window.location.href = "/forgot/fpc" + queryString;
      })
      .catch(() => {
        setError("OTP is Expried");
      });
  };
  return (
    <main>
      <h1 className="text-skyBlue text-2xl font-semibold text-center">
        Verification
      </h1>
      {error && <p className="text-[red] mt-5 text-center">{error}</p>}
      <div className="mt-5 w-full">
        <p className="text-md text-secondary text-center mt-4 mb-2">
          Enter verification code
        </p>
        <OtpInput
          className="w-[90%]"
          inputStyle={{
            height: "50px",
            width: "47px",
            margin: "5px",
            border: "2px solid #9ca3af",
          }}
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span className="text-litegrey">-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <p className="cursor-pointer float-right text-sm text-primary text-center mt-2">
        Resend OTP
      </p>

      <div className="w-full flex justify-center">
        <Link
          className="border w-[95%] py-3 text-center rounded-full bg-primary text-white font-bold text-xl mt-5"
          onClick={SendOtp}
        >
          Verify
        </Link>
      </div>
    </main>
  );
};

export const FPC = () => {
  const [isvisible, setIsVisible] = useState(false);
  const [cpEye, setCPEye] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(NPSchema) });

  const SumbitData = handleSubmit((data) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("email");
    const emailId = {
      email: email,
    };

    NPData({ ...data, ...emailId });
  });

  const NPData = async (data) => {
    axios({
      method: "post",
      url: "http://localhost:5000/user/verifynp",
      data: data,
    })
      .then(() => {
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
  return (
    <>
      <h1 className="text-skyBlue text-2xl font-semibold text-center">
        New Password
      </h1>

      <section className="w-[90%] mt-3">
        <label>
          Enter New Password <span className="text-[red]">*</span>
        </label>
        <div className="group border-litegrey flex items-center border py-1 px-5 mt-1 rounded-full focus-within:border-2 focus-within:border-primary">
          <input
            className="focus:outline-none w-full p-2"
            type={isvisible ? "text" : "password"}
            placeholder="New Password"
            {...register("password")}
          />
          {isvisible && (
            <FaEye
              className="text-2xl text-secondary"
              onClick={() => setIsVisible(!isvisible)}
            />
          )}
          {!isvisible && (
            <PiEyeClosedBold
              className="text-2xl text-secondary"
              onClick={() => setIsVisible(!isvisible)}
            />
          )}
        </div>
        <p className="text-[red] text-sm my-1">{errors.password?.message}</p>
      </section>
      <section className="w-[90%] mt-3">
        <label>
          Confirm Password <span className="text-[red]">*</span>
        </label>
        <div className="group border-litegrey flex items-center border py-1 px-5 mt-1 rounded-full focus-within:border-2 focus-within:border-primary">
          <input
            className="focus:outline-none w-full p-2"
            type={cpEye ? "text" : "password"}
            placeholder="Confirm Password"
            {...register("Cpassword")}
          />
          {cpEye && (
            <FaEye
              className="text-2xl text-secondary"
              onClick={() => setCPEye(!cpEye)}
            />
          )}
          {!cpEye && (
            <PiEyeClosedBold
              className="text-2xl text-secondary"
              onClick={() => setCPEye(!cpEye)}
            />
          )}
        </div>
        <p className="text-[red] text-sm my-1">{errors.Cpassword?.message}</p>
      </section>

      <Link
        to="/login"
        className="border w-[90%] py-3 text-center rounded-full bg-primary text-white font-bold text-xl mt-10"
        onClick={SumbitData}
      >
        Save
      </Link>
    </>
  );
};

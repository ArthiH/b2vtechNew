import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedBold } from "react-icons/pi";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

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
  return (
    <>
      <h1 className="text-skyBlue text-2xl font-semibold">Forgot Password</h1>
      <section className="w-[90%] mt-5">
        <p className="text-md text-secondary">Enter your email address</p>
        <div className="group  border-litegrey border py-1 px-5 mt-1 rounded-full focus-within:border-2 focus-within:border-primary">
          <input
            className="focus:outline-none w-full p-2 "
            type="email"
            placeholder="Email"
          />
        </div>
      </section>
      <Link
        to="/forgot/otp"
        className="border w-[90%] py-3 text-center rounded-full bg-primary text-white font-bold text-xl mt-10"
      >
        Send
      </Link>
    </>
  );
};

export const OTP = () => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <h1 className="text-skyBlue text-2xl font-semibold text-center">
        Verification
      </h1>
      <div className="my-5">
        <p className="text-md text-secondary text-center mt-4 mb-2">
          Enter verification code
        </p>
        <OtpInput
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
      <p>Resend</p>
      <Link
        to="/forgot/fpc"
        className="border w-[90%] py-3 text-center rounded-full bg-primary text-white font-bold text-xl mt-10"
      >
        Verify
      </Link>
    </>
  );
};

export const FPC = () => {
  const [isvisible, setIsVisible] = useState(false);
  const [cpEye, setCPEye] = useState(false);
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
          />
          {!isvisible && (
            <FaEye
              className="text-2xl text-secondary"
              onClick={() => setIsVisible(!isvisible)}
            />
          )}
          {isvisible && (
            <PiEyeClosedBold
              className="text-2xl text-secondary"
              onClick={() => setIsVisible(!isvisible)}
            />
          )}
        </div>
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
          />
          {!cpEye && (
            <FaEye
              className="text-2xl text-secondary"
              onClick={() => setCPEye(!cpEye)}
            />
          )}
          {cpEye && (
            <PiEyeClosedBold
              className="text-2xl text-secondary"
              onClick={() => setCPEye(!cpEye)}
            />
          )}
        </div>
      </section>
      <Link
        to="/login"
        className="border w-[90%] py-3 text-center rounded-full bg-primary text-white font-bold text-xl mt-10"
      >
        Save
      </Link>
    </>
  );
};

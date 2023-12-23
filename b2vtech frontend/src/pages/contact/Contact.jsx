import { Navbar } from "../navbar/Navbar";
import oaLogo from "../../assets/contact/oa logo.svg";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { Footer } from "../footer/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const Contact = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main id="contact">
        <h1 className="text-center w-full text-4xl text-primary font-semibold mb-16 mt-16">
          Contact Us
        </h1>
        <div className="flex justify-center items-center py-5 bg-gradient-to-r from-skyBlue to-primary ">
          <section className="max-w-screen-2xl w-[95%] gap-5 grid grid-cols-2 overflow-hidden max-[850px]:grid-cols-1 ">
            {/* Map linked */}
            <iframe
              className="w-full h-[600px] touch-none my-5"
              src="https://www.google.com/maps/d/u/1/embed?mid=1FsawGHRjB1fvo1NxuMIdxctm9q8XC3M&ehbc=2E312F"
              sallowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>

            <div className="lg:ml-5 bg-white w-full rounded-xl p-3  flex justify-center items-center flex-col my-5">
              <h4 className="text-3xl text-primary font-semibold text-center sm:mb-5 max-md:mt-6 pl-3">
                Contact
              </h4>

              <ContactUs />
            </div>
          </section>
        </div>
        <PCU />
      </main>
      <Footer />
    </>
  );
};

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    msg: "",
  });
  const OnchangeValue = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/contact/contactdata",
      data: formData,
    }).then(() => {
      setFormData({
        email: "",
        phone: "",
        msg: "",
      });
    });
  };

  return (
    <main className="w-[80%] sm:px-2 ">
      <section>
        <label className="text-secondary text-lg font-semibold" htmlFor="email">
          Email
        </label>

        <input
          className="w-full outline-none my-2 py-3 px-3 border border-primary rounded-xl"
          type="email"
          id="email"
          placeholder="Enter your Email ID"
          value={formData.email}
          name="email"
          onChange={OnchangeValue}
        />
      </section>
      <section>
        <label className="text-secondary text-lg font-semibold" htmlFor="tel">
          Phone number
        </label>

        <input
          className="w-full outline-none my-2 py-3 px-3 border border-primary rounded-xl"
          type="tel"
          id="tel"
          value={formData.phone}
          name="phone"
          placeholder="Enter your Phone Number"
          onChange={OnchangeValue}
        />
      </section>
      {/* Textarea */}
      <div className="">
        <label className="text-secondary text-lg font-semibold" htmlFor="msg">
          Message
        </label>
        <textarea
          rows="4"
          value={formData.msg}
          name="msg"
          className="w-full resize-none outline-none my-2 py-3 px-3 border border-primary rounded-xl"
          placeholder="Write your message here..."
          onChange={OnchangeValue}
        ></textarea>
      </div>
      {/* Button */}
      <section className="flex justify-center my-5 w-full ">
        <div className="px-8 py-2 bg-primary text-white text-xl rounded-lg hover:ring-2 hover:ring-skyBlue">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </section>
    </main>
  );
};

export const PCU = () => {
  const LinkOA = () => {
    window.open("https://oceanacademy.co.in/", "_blank");
  };
  return (
    <main className="flex justify-center items-center ">
      <div className="max-w-screen-2xl w-[95%] my-20 px-10">
        <h1 className="text-4xl font-bold text-primary">Our Academy Partner</h1>
        <div className=" flex justify-center flex-wrap gap-20 items-center my-16">
          <div>
            <img src={oaLogo} alt="not found" />
          </div>
          <div className=" p-5 flex flex-col justify-center gap-5">
            <p className="flex items-center gap-3 text-lg font-semibold text-secondary">
              <span className="text-2xl text-skyBlue">
                <FaPhone />
              </span>{" "}
              0413-2240580
            </p>
            <p className="flex  gap-3 text-lg font-semibold text-secondary">
              <span className="text-2xl text-skyBlue">
                <FaLocationDot />
              </span>{" "}
              No. 10, 2nd Floor,
              <br /> 45 Feet Road, Vengateswara Nagar,
              <br /> Near HDFC Bank, Saram,
              <br /> Puducherry-605013.
            </p>
            <button
              className="flex items-center gap-3 text-lg font-semibold text-skyBlue underline"
              onClick={LinkOA}
            >
              <span className="text-2xl text-skyBlue">
                <AiOutlineGlobal />
              </span>{" "}
              https://oceanacademy.co.in/
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

import internship from "../../assets/home-img/intern.jpg";
import { Navbar } from "../navbar/Navbar";

import { PiBooks } from "react-icons/pi";
import { CgSandClock } from "react-icons/cg";
import { IoPersonSharp } from "react-icons/io5";
import { Feature } from "./feature/Feature";
import { Subject } from "./subject/Subject";
import { Footer } from "../footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <header
        className="h-screen relative shadow-xl"
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="25"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="relative">
          <img
            className="bg-cover bg-no-repeat w-full h-screen"
            src={internship}
            alt="not found"
          />
          <div className="absolute h-screen w-full bg-liteblack top-0"></div>
          <section className=" max-w-screen-xl w-full absolute top-1/2 -translate-y-1/2 left-20">
            <div className="w-[50%]">
              <h1 className="text-7xl font-semibold text-primary max-sm:text-5xl max-md:text-center">
                <span>Get An</span>
                <br />
                Internship
              </h1>
              <p className="my-5 text-white font-semibold max-md:text-center pr-5">
                <i>
                  Access resources and guides to help you excel in your
                  internship and future career.our platform offers a wealth of
                  knowledge and tools to help you thrive during your internship
                  and chart a course toward a prosperous career.
                </i>
              </p>
              <div className="flex max-md:justify-center">
                <button className="bg-skyBlue px-8 py-4 rounded-md text-white font-bold text-xl hover:ring-2 hover:ring-white flex max-md:text-center">
                  Join For Free
                </button>
              </div>
            </div>
          </section>
          <div className="absolute -bottom-12 grid grid-cols-3 max-md:justify-items-center gap-3 left-1/2 -translate-x-1/2 max-w-screen-xl w-full px-3 max-md:grid-cols-1 max-md:-bottom-36 max-sm:-bottom-40">
            {HomeCard.map((value, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-5 items-center p-3 text-white rounded-xl bg-primary shadow-xl max-[900px]:px-2 max-[900px]:py-2"
                >
                  <span className="text-5xl ">{value.icon}</span>
                  <article>
                    <h1 className="text-xl mb-2 font-semibold">{value.h1}</h1>
                    <p>{value.p}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </header>
      <Feature />
      <Subject />
      <Footer />
    </>
  );
};

export const HomeCard = [
  {
    icon: <PiBooks />,
    h1: "10+ Internships ",
    p: "Learn and grow within a supportive and engaging work environment.",
  },
  {
    icon: <IoPersonSharp />,
    h1: "Expert instructors",
    p: "The backbone of effective learning and professional development.",
  },
  {
    icon: <CgSandClock />,
    h1: "Life time access",
    p: "This unique offering ensures that once you're in, you're in for life.",
  },
];

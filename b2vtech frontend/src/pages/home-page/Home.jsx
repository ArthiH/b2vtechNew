import internship from "../../assets/home-img/internship.svg";
import student from "../../assets/home-img/student.svg";
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
import { useLocation } from "react-router-dom";

export const Home = () => {
   const { pathname } = useLocation();
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
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
        <div className="relative bg-cover bg-no-repeat bg-center h-screen w-full" style={{backgroundImage:`url(${internship})`}}>
          <div className="absolute h-screen w-full bg-black opacity-40 top-0"></div>
          <section className="flex justify-center items-center ">
            <div className="max-w-screen-2xl w-[95%] h-screen grid grid-cols-2 justify-items-center items-center max-[1050px]:grid-cols-1 gap-5 z-10 mx-10">
              <div className="max-[1050px]:text-center">
                 <h1 className="text-8xl max-[1000px]:text-6xl font-bold text-white max-sm:text-5xl max-md:text-center [text-shadow:_2px_5px_0_#38bdf8]">
                <span className="text-skyBlue [text-shadow:_2px_5px_0_white]">Get An</span>
                <br />
                Internship
              </h1>
              <p className="my-5 text-lg text-white font-semibold  max-[1000px]:text-center max-[1000px]:my-10">
                <i>
                  Access resources and guides to help you excel in your
                  internship and future career.our platform offers a wealth of
                  knowledge and tools to help you thrive during your internship
                  and chart a course toward a prosperous career.
                </i>
                </p>
                 <div className="flex max-[1050px]:justify-center">
                <button className="bg-primary shadow-md shadow-white px-8 py-4 rounded-md text-white font-bold text-xl hover:ring-2 hover:ring-white hover:scale-105 flex max-md:text-center">
                  Join For Free
                </button>
              </div>
                
              </div>
               <div className="w-full flex justify-center mb-16 max-[600px]:hidden">
                <img
            className="object-cover w-full h-full min-w-[500px] max-[1050px]:w-[500px]"
            src={student}
            alt="not found"
          />
            </div>
</div>
          </section>
       
          <div className="absolute -bottom-16 grid grid-cols-3 max-md:justify-items-center gap-3 left-1/2 -translate-x-1/2 max-w-screen-xl w-full px-3 max-md:grid-cols-1 max-md:-bottom-40 max-[300px]:-bottom-72 z-20">
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

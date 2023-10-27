import home from "../../assets/home-img/home.png";
import { Navbar } from "../navbar/Navbar";

import { PiBooks } from "react-icons/pi";
import { CgSandClock } from "react-icons/cg";
import { IoPersonSharp } from "react-icons/io5";
import { Feature } from "./feature/Feature";
import { Subject } from "./subject/Subject";
import { Footer } from "../footer/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <header className="h-screen relative shadow-xl">
        <main className="max-w-screen-xl w-full mx-auto pt-10 h-full">
          <section className="flex items-center gap-5">
            <div className="pl-5 pt-20">
              <h1 className="text-7xl font-semibold text-primary max-sm:text-5xl max-md:text-center">
                Online Learning Platform
              </h1>
              <p className="my-5 text-mediumgrey font-semibold max-md:text-center pr-5">
                <i>
                  Elevate your skills and expand your horizons with our online
                  learning platform. Explore a world of knowledge, connect with
                  experts. Your journey to success starts here.
                </i>
              </p>
              <div className="flex max-md:justify-center">
                <button className="bg-skyBlue px-8 py-4 rounded-md text-white font-bold text-xl hover:ring-2 hover:ring-white flex max-md:text-center">
                  Join For Free
                </button>
              </div>
            </div>
            <img
              className="max-w-[500px] w-full pr-5 max-[900px]:w-[400px] max-md:hidden"
              src={home}
              alt="home img not found"
            />
            <div className="absolute -bottom-12 grid grid-cols-3 max-md:justify-items-center gap-3 left-1/2 -translate-x-1/2 max-w-screen-xl w-full px-3 max-md:grid-cols-1 max-md:-bottom-36 max-sm:-bottom-40">
              {HomeCard.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-5 items-center p-3 rounded-xl bg-gradient-to-r from-primary from-50% to-skyBlue shadow-xl max-[900px]:px-2 max-[900px]:py-2"
                  >
                    <span className="text-5xl text-skyBlue ">{value.icon}</span>
                    <article>
                      <h1 className="text-xl mb-2 text-white font-semibold">
                        {value.h1}
                      </h1>
                      <p className="text-white">{value.p}</p>
                    </article>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
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
    h1: "20 + UX courses",
    p: "The automated process all your website tasks.",
  },
  {
    icon: <IoPersonSharp />,
    h1: "Expert instructors",
    p: "The automated process all your website tasks.",
  },
  {
    icon: <CgSandClock />,
    h1: "Life time access",
    p: "The automated process all your website tasks.",
  },
];

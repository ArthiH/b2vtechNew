import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import internBG from "../../assets/intern/intern_bg.svg";
import bg2 from "../../assets/intern/intern_bg_1.svg";
import boy from "../../assets/intern/intern_boy.svg";
import flutter from "../../assets/intern/flutter.svg";
import react from "../../assets/intern/react.svg";
import dm from "../../assets/intern/DM.svg";
import { Link } from "react-router-dom";

export const Internship = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="w-full relative  h-screen shadow-xl">
          <div className="w-full -z-10 absolute  h-full">
            <img
              className="object-cover w-full h-full"
              src={internBG}
              alt="not found"
            />
          </div>
          <section className=" flex justify-center items-center ">
            <div className="max-w-screen-2xl relative w-full h-screen flex justify-center items-center px-8 flex-wrap">
              <div className="flex-1 max-[500px]:text-center ">
                <h1 className="text-7xl text-primary font-bold my-5 px-3 max-sm:text-6xl max-[390px]:text-3xl">
                  INTERNSHIP{" "}
                </h1>
                <h3 className="text-5xl text-skyBlue font-semibold mb-5 px-3 max-sm:text-4xl max-[390px]:text-2xl">
                  OPPORTUNITY JOB{" "}
                </h3>
                <p className="text-lg text-secondary w-[80%] max-sm:w-full px-3 font-semibold">
                  <em>
                    Join our internship program to accelerate your professional
                    growth through meaningful projects, mentorship, and a
                    supportive learning environment. Develop practical skills
                    while making a valuable impact on our innovative team
                  </em>
                </p>
                <button className="text-4xl text-white bg-primary px-10 py-3 rounded-xl my-10 font-semibold max-[390px]:text-xl">
                  Read more
                </button>
              </div>
              <div className="w-full h-full flex flex-1 justify-center items-center  max-[860px]:hidden">
                <img
                  className="object-cover w-full"
                  src={boy}
                  alt="not found"
                />
              </div>
              <div className="absolute bottom-16 left-0 text-2xl text-skyBlue font-bold m-5 max-[600px]:left-[20%] max-[600px]:text-white">
                <p>
                  Work Together to
                  <br />
                  Great ideas
                </p>
              </div>
            </div>
          </section>
        </div>
        <InternProvide />
      </main>
      <Footer />
    </>
  );
};

export const InternProvide = () => {
  return (
    <main>
      <div
        className="w-full relative bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <section className=" flex justify-center items-center ">
          <div className="max-w-screen-2xl relative w-full px-8">
            <h1 className="text-5xl text-white font-bold my-16 px-3 max-sm:text-4xl ">
              INTERNSHIP <br /> Provide
            </h1>
            <section className="grid grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 gap-3 justify-items-center items-center my-64 max-xl:my-48 ">
              {InternCard.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="my-5 w-full  max-w-sm flex-1 bg-white border-skyBlue shadow-xl border-2 rounded-xl py-5 px-2 flex flex-col justify-center items-center flex-grow"
                  >
                    <div className="w-full flex justify-center items-center  my-5">
                      <img
                        className="max-w-[150px] object-cover w-full max-[400px]:max-w-[100px]"
                        src={value.icon}
                        alt="not found"
                      />
                    </div>
                    <h1 className="text-3xl text-center my-5 text-primary font-semibold max-[400px]:text-2xl">
                      {value.title}
                    </h1>
                    <p className="text-center text-[18px] mb-5 px-2 text-mediumgrey h-28 font-medium max-[400px]:text-[15px] overflow-hidden">
                      {value.p}
                    </p>
                    <Link
                      to="/register"
                      className="text-2xl text-white bg-primary px-10 py-3 rounded-xl my-2 font-semibold max-[400px]:text-xl max-[400px]:px-5"
                    >
                      Find more
                    </Link>
                  </div>
                );
              })}
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export const InternCard = [
  {
    icon: dm,
    title: "Digital Marketing",
    p: "Exciting opportunity for a Digital Marketing professional to spearhead innovative campaigns, enhance online visibility, and elevate brand engagement.",
  },
  {
    icon: flutter,
    title: "Flutter",
    p: "Shape cutting-edge mobile experiences by developing and maintaining high-quality, responsive applications for iOS and Android platforms.",
  },
  {
    icon: react,
    title: "React/React native",
    p: "React Developer to innovate and lead in the creation of dynamic and responsive user interfaces, contributing to the success of our web development projects.",
  },
];

import { Navbar } from "../navbar/Navbar";
import bg from "../../assets/about/about.svg";
import dm from "../../assets/about/dm.svg";
import react from "../../assets/about/react.svg";
import flutter from "../../assets/about/flutter.svg";
import aboutEndBg from "../../assets/about/about_End_bg.svg";
import { Footer } from "../footer/Footer";

export const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="w-full  h-[500px] overflow-hidden shadow-xl relative flex justify-center items-center">
          <img
            className="object-cover w-full h-full absolute"
            src={bg}
            alt="not found"
          />
          <h1 className="z-10 text-6xl text-primary font-bold mt-5 px-5 max-[400px]:text-4xl">
            ABOUT <span className="text-white ml-0 min-[350px]:ml-5">US</span>
          </h1>
        </div>

        <section className="flex justify-center items-center">
          <div className="max-w-screen-2xl w-[95%] flex flex-col justify-center items-center">
            <article className="flex flex-col justify-center items-center my-16">
              <h1 className="text-skyBlue text-3xl font-bold">About Our B2V</h1>
              <p className="w-[80%] text-lg text-mediumgrey my-10">
                Embarking on a transformative journey in the realms of digital
                innovation, our organization is delighted to open its doors to
                passionate individuals seeking an immersive internship
                experience. This unparalleled opportunity spans across the
                dynamic domains of digital marketing, React/React Native
                development, and Flutter application design, offering a
                comprehensive and enriching experience.
              </p>
            </article>

            <AboutCard />
          </div>
        </section>

        <div className="w-full my-20 relative h-96 ">
          <img
            className="object-cover w-full h-full "
            src={aboutEndBg}
            alt="not found"
          />
          <p className="absolute px-3 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white text-xl text-center font-semibold w-[90%] max-[500px]:text-[15px] max-[500px]:leading-tight">
            Join us on this exhilarating internship journey, where you'll not
            only refine your skills in digital marketing, React development,
            React Native, and Flutter development but also forge meaningful
            connections and lay the foundation for a promising future in the
            ever-evolving world of digital innovation. Unleash your potential,
            seize this opportunity, and become part of a community dedicated to
            pushing the boundaries of what's possible in the digital landscape.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export const AboutCard = () => {
  return (
    <section className="grid grid-cols-2 justify-items-center mb-16 items-center w-[90%] max-[870px]:grid-cols-1 max-[870px]:gap-8">
      <div className="w-full ">
        <img className="object-cover w-full" src={dm} alt="not found" />
      </div>
      <div className="text-center px-8 ">
        <h1 className="text-skyBlue text-2xl font-bold my-3">
          Digital Marketing
        </h1>
        <p className="text-mediumgrey text-[16px]">
          Interns will be engaged in real-world projects, collaborating with
          seasoned professionals to develop a deep understanding of online
          advertising, social media dynamics, and data analytics. This
          internship promises not only skill acquisition but also an invaluable
          chance to contribute to impactful marketing campaigns.
        </p>
      </div>
      <div className="text-center px-8 block max-[870px]:hidden">
        <h1 className="text-skyBlue text-2xl font-bold my-3">
          React/React Native
        </h1>
        <p className="text-mediumgrey text-[16px]">
          As a React and React Native intern, you will immerse yourself in the
          principles of component-based architecture, JSX syntax, and the
          virtual DOM for efficient UI rendering. Engage in real-world projects
          that involve state management, routing, and the integration of
          third-party libraries, honing your skills in creating modular and
          scalable user interfaces.
        </p>
      </div>
      <div className="w-full">
        <img className="object-cover w-full" src={react} alt="not found" />
      </div>
      <div className="text-center px-8 hidden max-[870px]:block">
        <h1 className="text-skyBlue text-2xl font-bold my-3">
          React/React Native
        </h1>
        <p className="text-mediumgrey text-[16px]">
          As a React and React Native intern, you will immerse yourself in the
          principles of component-based architecture, JSX syntax, and the
          virtual DOM for efficient UI rendering. Engage in real-world projects
          that involve state management, routing, and the integration of
          third-party libraries, honing your skills in creating modular and
          scalable user interfaces.
        </p>
      </div>
      <div className="w-full">
        <img className="object-cover w-full" src={flutter} alt="not found" />
      </div>
      <div className="text-center px-8">
        <h1 className="text-skyBlue text-2xl font-bold my-3">Flutter</h1>
        <p className="text-mediumgrey text-[16px]">
          As a Flutter intern, you will delve into the intricacies of
          widget-based UI development, state management, and asynchronous
          programming within the Flutter framework. Engage in real-world
          projects that involve optimizing for performance and responsiveness,
          honing your skills in crafting visually appealing and high-performance
          applications.
        </p>
      </div>
    </section>
  );
};

import intern from "../../../assets/subjects/Internship.jpg";
import nextstep from "../../../assets/subjects/next-step.jpg";
import ai from "../../../assets/subjects/ai.jpg";
import animation from "../../../assets/subjects/animation.jpg";
import automachine from "../../../assets/subjects/automachine.jpg";
import laptop from "../../../assets/subjects/laptop.jpg";
import mobile from "../../../assets/subjects/mobile.jpg";
import robot from "../../../assets/subjects/robot.jpg";
import saas from "../../../assets/subjects/saas.jpg";
import learning from "../../../assets/feature/learning.mp4";

import uidesigner from "../../../assets/subjects/ui-designer.jpg";
import { TiTick } from "react-icons/ti";
import { GiPauseButton, GiPlayButton } from "react-icons/gi";
import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Subject = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <main
        className="flex justify-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="25"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="max-w-screen-2xl w-full flex flex-col justify-center my-20 gap-5">
          <h1 className="text-4xl font-bold  text-primary text-center  my-20">
            Explore Top Empowering Careers
          </h1>
          <section className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 max-lg:gap-x-20 max-lg:px-10 justify-items-center gap-y-7 p-5 gap-x-5">
            {SubjectView.map((value, index) => {
              return (
                <div
                  key={index}
                  className="relative h-[150px] w-[250px] overflow-hidden rounded-lg group"
                >
                  <div>
                    <img
                      className="object-cover w-full rounded-lg"
                      src={value.img}
                      alt="not found"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl absolute z-20 left-1/2 top-2/4 -translate-x-2/4 -translate-y-2/4 hover:underline">
                    PROGRAMMING
                  </h3>
                  <div className="h-[150px] w-[250px] bg-primary absolute top-0 rounded-lg opacity-50 -left-full group-hover:-left-0 group-hover:duration-700"></div>
                </div>
              );
            })}
          </section>
          <div className="flex justify-center mt-10 ">
            <button className="border px-8 py-5 border-primary hover:text-white hover:bg-primary hover:duration-700 text-primary font-semibold text-xl rounded-xl">
              View More Intern
            </button>
          </div>
        </div>
      </main>
      <Learner />
      <Video />
      <NextStep />
    </>
  );
};

export const SubjectView = [
  {
    img: laptop,
  },
  {
    img: robot,
  },
  {
    img: saas,
  },
  {
    img: uidesigner,
  },
  {
    img: automachine,
  },
  {
    img: animation,
  },
  {
    img: mobile,
  },
  {
    img: ai,
  },
];

export const Learner = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);
  return (
    <main
      className="flex justify-center"
      data-aos="fade-up-right"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="50"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="2000"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="max-w-screen-2xl w-full grid grid-cols-2 max-md:grid-cols-1 broder px-5 gap-x-5 max-md:gap-y-5">
        <section>
          <img
            className="w-full rounded-lg object-cover h-full"
            src={intern}
            alt="not found"
          />
        </section>
        <section>
          <h1 className="text-3xl font-bold text-primary pl-3 max-md:mt-10">
            Nurturing Talent Through Internships
          </h1>
          <div className="flex flex-col gap-3 mt-10 px-5">
            <article className="flex gap-3">
              <span className="text-skyBlue text-2xl">
                <TiTick />
              </span>
              <p className="text-mediumgrey">
                Internships are not just about gaining work experience; they are
                opportunities to nurture and cultivate your talent.
              </p>
            </article>
            <article className="flex gap-3">
              <span className="text-skyBlue text-2xl">
                <TiTick />
              </span>
              <p className="text-mediumgrey">
                We believe in empowering individuals to become the best versions
                of themselves, and internships are an integral part of that
                journey.
              </p>
            </article>
            <article className="flex gap-3">
              <span className="text-skyBlue text-2xl">
                <TiTick />
              </span>
              <p className="text-mediumgrey">
                It's not just an internship; it's a chance to bloom and flourish
                as a future leader in your industry.
              </p>
            </article>
          </div>
          <button className="bg-primary text-white font-semibold px-5 py-2 rounded-lg my-10 ml-5 hover:scale-105">
            Explore more
          </button>
        </section>
      </div>
    </main>
  );
};

export const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);

  return (
    <main
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="25"
      data-aos-delay="50"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <h1 className="text-4xl font-bold  text-primary text-center  my-20">
        Explore Your Skills
      </h1>
      <div className="flex justify-center my-20 px-5 relative">
        <video className="rounded-lg" ref={videoRef} width="70%" height="300">
          <source src={learning} type="video/mp4" />
        </video>
        <button
          className="absolute  bg-white  text-primary p-3 rounded-[50px] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
          onClick={toggleVideo}
        >
          {isPlaying ? <GiPauseButton className="text-5xl"/> : < GiPlayButton  className="text-5xl"/>}
        </button>
      </div>
    </main>
  );
};

export const NextStep = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);
  return (
    <main
      className="flex justify-center"
      data-aos="fade-up-left"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="75"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="2000"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="max-w-screen-2xl my-20 w-full grid grid-cols-2 max-md:grid-cols-1 broder px-5 gap-x-5 max-md:gap-y-5">
        <section className="px-3 mb-10">
          <h1 className="text-3xl font-bold text-primary ">
            Take the next step toward your personal and professional goals with
            us.
          </h1>
          <p className="text-mediumgrey my-5">
            It acknowledges that individuals have personal aspirations and
            ambitions. Taking the next step is about moving closer to achieving
            those goals, whether they are related to personal growth, career
            advancement, education, or any other aspect of life.
          </p>
          <button className="border bg-primary text-white px-5 py-2 font-bold rounded-lg text-xl">
            Read More
          </button>
        </section>
        <section>
          <img
            className="w-full rounded-lg object-cover h-full"
            src={nextstep}
            alt="not found"
          />
        </section>
      </div>
    </main>
  );
};

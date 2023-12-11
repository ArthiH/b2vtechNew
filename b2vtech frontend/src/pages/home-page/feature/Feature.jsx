import web from "../../../assets/feature/web.jpg";
import cloud from "../../../assets/feature/cloud.jpg";
import devops from "../../../assets/feature/devops.jpg";
import native from "../../../assets/feature/mobile.jpg";
import agile from "../../../assets/feature/agile.jpg";
import chatgpt from "../../../assets/feature/chatgpt.png";
import learn from "../../../assets/feature/learn.png";
import book from "../../../assets/feature/book.png";
import { TiTick } from "react-icons/ti";
import { PiStudentBold } from "react-icons/pi";
import { BsFillLaptopFill } from "react-icons/bs";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import CountUp from "react-countup";
import Slider from "react-slick";
import "./feature.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export const Feature = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <main className="flex justify-center">
        <section
          className="max-w-screen-2xl w-full my-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="25"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h1 className="text-4xl font-bold text-primary text-center mt-48 mb-20">
            Our Features
          </h1>
          <Slider {...settings} className="px-10">
            {FeatureCard.map((value, index) => {
              return (
                <div
                  key={index}
                  className="max-w-md min-w-min bg-white rounded-lg shadow-xl"
                >
                  <img className="rounded-t-xl" src={value.img} />
                  <div className="mt-2 px-3 min-h-[250px]">
                    <h1 className="text-xl text-primary font-bold">
                      {value.h1}
                    </h1>
                    <p className="text-center my-5 text-litegrey text-sm">
                      {value.p}
                    </p>
                  </div>
                  <div className="flex justify-center my-5">
                    <button className="text-center border bg-primary text-white font-bold px-7 py-2 rounded-lg text-xl">
                      Find Out More
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </section>
      </main>
      <CourseCounter />
      <LearnSkills />
    </>
  );
};

export const FeatureCard = [
  {
    img: web,
    h1: "Web Development",
    p: "Revolutionize your online presence with our platform.Our web app development combines the power of React for dynamic front-end experiences, PHP for robust server-side functionality, JavaScript and CSS for interactivity and style, and Node.js for optimal backend performance.",
  },
  {
    img: cloud,
    h1: "Cloud services with AWS and Azure",
    p: " Our platform ensures seamless integration, scalability, and host applications, manage data, or deploy cutting-edge technologies. Take your online endeavors to new heights with our expertly designed AWS and Azure solutions.",
    span: "our",
  },
  {
    img: devops,
    h1: " DevOps",
    p: " Dive into a world of streamlined development and deployment, facilitated by our expertly crafted DevOps tools and resources. Whether you're a seasoned pro or just starting your DevOps , our platform to increased efficiency and collaboration in the software development lifecycle.",
  },
  {
    img: native,
    h1: "Native iOS and Android Mobile App Development",
    p: " We empower you to master native iOS development with Swift/SwiftUI and Android development with Java/Kotlin. Our platform to a comprehensive, equipping you with the skills and knowledge to create world-class mobile apps.",
  },
  {
    img: agile,
    h1: "Agile Project management and its tools",
    p: " We bring together the power of Jira, Rally, and agile practices in a unified environment. From planning and tracking to collaboration and reporting, our platform empowers you to streamline your development process. ",
  },
  {
    img: chatgpt,
    h1: "Chatgpt Open AI ",
    p: "ChatGPT is an advanced AI-powered conversational model developed by OpenAI. It is designed to be a valuable resource for individuals, professionals, and businesses seeking intelligent and context-aware conversation with an AI model.",
  },
];

export const CourseCounter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const increment = [
    { icon: <BsFillLaptopFill />, no: "20", lable: "Internship" },
    { icon: <PiStudentBold />, no: "100", lable: "Student" },
    { icon: <LiaChalkboardTeacherSolid />, no: "10", lable: "Trainers" },
  ];
  return (
    <main className="flex justify-center items-center relative my-200 mt-20">
      <img
        className="h-auto md:h-[22rem] object-cover border w-full"
        src={book}
      />
      <div className="bg-black md:h-[22rem] h-full w-full absolute text-white top-0"></div>
      <section className="absolute max-w-screen-2xl w-full grid grid-cols-3 px-3 max-sm:gap-y-5 justify-items-center gap-y-16 text-white font-extrabold  text-3xl">
        {increment.map((value, index) => {
          return (
            <ScrollTrigger
              key={index}
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <p className="text-7xl text-primary w-full flex justify-center items-center max-sm:text-5xl">
                {value.icon}
              </p>
              <h1 className="text-5xl text-center max-sm:text-3xl">
                {counterOn && <CountUp start={0} end={value.no} duration={3} />}
                +
              </h1>
              <p className="text-lg font-medium text-center mt-2">
                {value.lable}
              </p>
            </ScrollTrigger>
          );
        })}
      </section>
    </main>
  );
};

export const LearnSkills = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);
  return (
    <main
      className="flex justify-center  mt-40"
      data-aos="fade-right"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="50"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="2000"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="max-w-screen-2xl w-full grid grid-cols-2 max-md:grid-cols-1 broder px-5 gap-x-5 max-md:gap-y-5">
        <section className="flex flex-col  py-5 px-5">
          <h1 className="text-3xl font-bold text-primary">
            Exploring Exciting Internship Pathways
          </h1>
          <p className="my-3 text-mediumgrey">
            <i>
              Embark on a journey of self-discovery and professional growth as
              you delve into the realm of 'Exploring Exciting Internship
              Pathways.
            </i>
          </p>
          <div className="flex flex-col gap-3 mt-5">
            <article className="flex gap-3">
              <span className="text-skyBlue text-2xl">
                <TiTick />
              </span>
              <p className="text-mediumgrey">
                Dive into the dynamic landscape of internships, where each
                opportunity is a door to learning, skill development, and
                networking.
              </p>
            </article>
            <article className="flex gap-3">
              <span className="text-skyBlue text-2xl">
                <TiTick />
              </span>
              <p className="text-mediumgrey">
                Our guide provides you with the tools to make informed decisions
                as you step into the world of internships.
              </p>
            </article>
            <article className="flex gap-3">
              <span className="text-skyBlue text-2xl">
                <TiTick />
              </span>
              <p className="text-mediumgrey">
                Let's embark on this journey together, and unlock the thrilling
                world of internship opportunities.
              </p>
            </article>
          </div>
        </section>
        <section className="flex max-md:justify-center">
          <img
            className="h-full w-full object-cover"
            src={learn}
            alt="not found"
          />
        </section>
      </div>
    </main>
  );
};

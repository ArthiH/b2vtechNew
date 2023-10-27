import web from "../../../assets/feature/web.avif";
import cloud from "../../../assets/feature/cloud .jpg";
import devops from "../../../assets/feature/devops.jpg";
import native from "../../../assets/feature/native.jpg";
import agile from "../../../assets/feature/agile.jpg";
import learn from "../../../assets/feature/learn.png";
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
        <section className="max-w-screen-lg w-full my-10">
          <h1 className="text-4xl font-bold text-primary text-center mt-36 max-md:mt-44 mb-20">
            Our Feature Courses
          </h1>
          <Slider {...settings}>
            {FeatureCard.map((value, index) => {
              return (
                <div
                  key={index}
                  className="max-w-md min-w-min bg-white rounded-lg shadow-xl"
                >
                  <img className="rounded-t-xl" src={value.img} />
                  <div className="max-h-[180px] overflow-auto mt-2 px-3 overflow">
                    <h1 className="text-xl text-primary font-bold">
                      {value.h1}
                    </h1>
                    <p className="text-center mt-2 text-mediumgrey">
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
    h1: "Web app development",
    p: "Revolutionize your online presence with our platform.Our web app development combines the power of React for dynamic front-end experiences, PHP for robust server-side functionality, JavaScript and CSS for interactivity and style, and Node.js for optimal backend performance.",
  },
  {
    img: cloud,
    h1: " Cloud services with AWS and Azure ",
    p: " Our platform ensures seamless integration, scalability, and host applications, manage data, or deploy cutting-edge technologies. Take your online endeavors to new heights with our expertly designed AWS and Azure solutions.",
  },
  {
    img: devops,
    h1: " DevOps",
    p: " Dive into a world of streamlined development and deployment, facilitated by our expertly crafted DevOps tools and resources. Whether you're a seasoned pro or just starting your DevOps , our platform to increased efficiency and collaboration in the software development lifecycle.",
  },
  {
    img: native,
    h1: "Native iOS/Swift  and Android/Java Kotlin ",
    p: " We empower you to master native iOS development with Swift and Android development with Java and Kotlin. Our platform to a comprehensive, equipping you with the skills and knowledge to create world-class mobile apps.",
  },
  {
    img: agile,
    h1: " Project management tools Jira,Rally and agile",
    p: " We bring together the power of Jira, Rally, and agile practices in a unified environment. From planning and tracking to collaboration and reporting, our platform empowers you to streamline your development process. ",
  },
];

export const CourseCounter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const increment = [
    { icon: <BsFillLaptopFill />, no: "20", lable: "Online Courses" },
    { icon: <PiStudentBold />, no: "100", lable: "Student" },
    { icon: <LiaChalkboardTeacherSolid />, no: "10", lable: "Teacher" },
  ];
  return (
    <main className="h-60 max-md:h-auto flex justify-center items-center bg-[url('https://c4.wallpaperflare.com/wallpaper/345/197/187/technology-coffee-books-laptop-wallpaper-preview.jpg')] border bg-no-repeat bg-cover">
      <section className="max-w-screen-xl w-full grid grid-cols-3 max-sm:grid-cols-1 justify-items-center gap-y-16 px-5 my-20 text-white font-extrabold  text-3xl">
        {increment.map((value, index) => {
          return (
            <ScrollTrigger
              key={index}
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1>
                <span className="text-5xl">{value.icon}</span>
                {counterOn && <CountUp start={0} end={value.no} duration={3} />}
                +
              </h1>
              <p className="text-sm font-medium">{value.lable}</p>
            </ScrollTrigger>
          );
        })}
      </section>
    </main>
  );
};

export const LearnSkills = () => {
  return (
    <main className="flex justify-center  mt-20">
      <div className="max-w-screen-xl w-full grid grid-cols-2 max-md:grid-cols-1 broder px-5 gap-x-5 max-md:gap-y-5">
        <section className="flex flex-col  py-5 px-5">
          <h1 className="text-3xl font-bold text-primary">
            Learn new skills online with top educators
          </h1>
          <p className="my-3 text-mediumgrey">
            Explore diverse subjects, improve your skills, and advance your
            career with the convenience of online learning.
          </p>
          <div className="flex flex-col gap-3">
            <article className="flex items-center gap-3">
              <span className="text-skyBlue text-2xl">
                <TiTick />
              </span>
              <p className="text-mediumgrey">
                Learning online can often be more cost-effective than
                traditional education.
              </p>
            </article>
            <article className="flex items-center gap-3">
              <span className="text-skyBlue text-2xl">
                <TiTick />
              </span>
              <p className="text-mediumgrey">
                Learning is a lifelong and online platforms support continuous
                improvement.
              </p>
            </article>
            <article className="flex items-center gap-3">
              <span className="text-skyBlue text-2xl">
                <TiTick />
              </span>
              <p className="text-mediumgrey">
                Their guidance ensures high-quality education and a valuable
                learning experience.
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

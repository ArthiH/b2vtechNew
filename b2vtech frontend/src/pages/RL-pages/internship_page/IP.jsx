import { useEffect, useState } from "react";
import { Footer } from "../../footer/Footer";
import { Navbar } from "../../navbar/Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const Intern = () => {
  const [name, setName] = useState("");
  const [viewpdf, setViewPdf] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const stored = localStorage.getItem("LoginFN");
    setName(stored);
  }, []);

  const ViewPdf = async () => {
    try {
      const storedData = localStorage.getItem("LoginId");

      axios({
        method: "get",
        url: `http://localhost:5000/pdf/getpdf/${storedData}`,
      }).then((res) => {
        const store = res.data[0].pdf;
        setViewPdf(store);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center">
        <div className="max-w-screen-2xl w-[95%] h-screen flex flex-col mt-48 items-center">
          <h1 className="text-7xl font-bold text-secondary mx-3 max-[600px]:text-4xl">
            Welcome,{" "}
            <span className="uppercase text-primary">{name || "Guest"}</span>
          </h1>
          <button
            className="text-xl font-medium text-skyBlue my-10"
            onClick={ViewPdf}
          >
            View your syllabus Here
          </button>
          <iframe
            src={viewpdf}
            width="100%"
            height="100%"
            title="PDF Viewer"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
};

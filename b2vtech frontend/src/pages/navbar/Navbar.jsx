import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  function aside() {
    return setSidebar(!sidebar);
  }
  return (
    <>
      {sidebar && <Sidebar onclose={aside} />}
      <main
        style={{ transitionDelay: "2s" }}
        className="sticky top-0 z-40 items-center bg-gradient-to-r from-primary to-skyBlue flex justify-center"
      >
        <section className="max-w-screen-xl w-full flex justify-between items-center px-4 py-2">
          <div className="py-2">
            <img className="max-w-[120px] w-full" src={logo} alt="not found" />
          </div>
          <section className="flex justify-between text-xl items-center gap-12 text-white mr-5 max-md:hidden max-md:text-md">
            <div className="flex gap-8 font-semibold">
              <NavLink to="/">Home</NavLink>
              <NavLink>Courses</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Contact</NavLink>
            </div>
            <div className="flex gap-5 max-[950px]:hidden font-semibold">
              <button className="bg-skyBlue px-10 py-2 rounded-md hover:scale-105">
                Join
              </button>
              <button className="border-2 border-white px-5 py-2 rounded-md hover:scale-105">
                Login In
              </button>
            </div>
          </section>
          <div
            className="text-white font-semibold text-3xl max-md:block hidden mr-4"
            onClick={aside}
          >
            <AiOutlineMenu />
          </div>
        </section>
      </main>
    </>
  );
};

export const Sidebar = (props) => {
  const { onclose } = props;
  return (
    <main className="bg-primary shadow-md z-50 h-screen fixed max-md:block hidden right-0 px-4 top-0 py-2 transition-colors">
      <AiFillCloseCircle
        className="text-3xl my-3 text-white"
        onClick={onclose}
      />
      <section className="text-white text-xl px-10 flex flex-col justify-center">
        <div className="flex flex-col gap-8 my-10">
          <NavLink to="/">Home</NavLink>
          <NavLink>Courses</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </div>
        <div className="flex flex-col gap-5">
          <button className="bg-skyBlue px-8 py-2 rounded-md hover:scale-105">
            Join
          </button>
          <button className="border-2 border-white px-3 py-2 rounded-md hover:scale-105">
            Login In
          </button>
        </div>
      </section>
    </main>
  );
};

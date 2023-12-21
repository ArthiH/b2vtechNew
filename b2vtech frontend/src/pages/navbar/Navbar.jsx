import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { IoPerson } from "react-icons/io5";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showbtn, setShowBtn] = useState(false);
  const [setting, setSetting] = useState(false);
  function set() {
    return setSetting(!setting);
  }
  useEffect(() => {
    const data = localStorage.getItem("LoginId");
    if (data !== null) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, []);

  const ClearStorage = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  function aside() {
    return setSidebar(!sidebar);
  }
  return (
    <>
      {sidebar && (
        <Sidebar onclose={aside} show={showbtn} clearstore={ClearStorage} />
      )}
      <main
        style={{ transitionDelay: "2s" }}
        className="sticky top-0 z-40 items-center bg-gradient-to-r from-primary from-50% to-skyBlue flex justify-center"
      >
        <section className="max-w-screen-2xl w-full flex justify-between items-center px-4 py-2">
          <div className="py-2">
            <img className="max-w-[120px] w-full" src={logo} alt="not found" />
          </div>
          <section className="flex justify-between relative text-xl items-center gap-12 text-white mr-5 max-md:hidden max-md:text-md">
            <div className="flex gap-8 font-semibold ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-skyBlue underline font-bold" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/internship"
                className={({ isActive }) =>
                  isActive ? "text-skyBlue underline font-bold" : ""
                }
              >
                Internship
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-skyBlue underline font-bold" : ""
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
              className={({ isActive }) =>
                isActive ? "text-skyBlue underline font-bold" : ""
              }
              >
                Contact
              </NavLink>
            </div>
            <div className="flex gap-5 max-[950px]:hidden font-semibold">
              {!showbtn ? (
                <Link
                  to="/login"
                  className="border-2 border-white px-5 py-2 rounded-md hover:scale-105"
                >
                  Log In
                </Link>
              ) : (
                <div className="flex gap-5 items-center">
                  <Link to="/intern">Syllabus</Link>
                  <button className="text-3xl" onClick={set}>
                    <IoPerson />
                  </button>
                </div>
              )}
              <button className="bg-skyBlue px-10 py-2 rounded-md hover:scale-105">
                Join
              </button>
            </div>
            {setting && (
              <div className="absolute -bottom-36 right-5 text-white border bg-primary">
                <ul className="p-5 flex flex-col gap-3">
                  <Link to="/account" className="flex items-center gap-3">
                    <span>
                      <IoPerson />
                    </span>
                    Account Setting
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center gap-3"
                    onClick={ClearStorage}
                  >
                    <span>
                      <LiaSignOutAltSolid />
                    </span>
                    Sign out
                  </Link>
                </ul>
              </div>
            )}
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
  const { onclose, show, clearstore } = props;
  const [setting, setSetting] = useState(false);
  function set() {
    return setSetting(!setting);
  }
  return (
    <main className="bg-primary shadow-md z-50 h-screen fixed max-md:block hidden right-0 px-4 top-0 py-2 transition-colors">
      <AiFillCloseCircle
        className="text-3xl my-3 text-white"
        onClick={onclose}
      />
      <section className="text-white text-xl px-10 flex flex-col justify-center">
        <div className="flex flex-col gap-8 my-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/internship">Internship</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="flex flex-col gap-5">
          {!show ? (
            <Link
              to="/login"
              className="border-2 border-white px-3 py-2 rounded-md hover:scale-105"
            >
              Log In
            </Link>
          ) : (
            <div className="flex flex-col gap-7">
              <Link to="/intern">Syllabus</Link>
              <button className="text-3xl" onClick={set}>
                <IoPerson />
              </button>
            </div>
          )}

          {setting && (
            <div className=" text-primary border rounded-lg bg-white">
              <ul className="p-5 flex flex-col gap-3">
                <Link className="flex items-center gap-3">
                  <span>
                    <IoPerson />
                  </span>
                  Account Setting
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-3"
                  onClick={clearstore}
                >
                  <span>
                    <LiaSignOutAltSolid />
                  </span>
                  Sign out
                </Link>
              </ul>
            </div>
          )}
          <button className="bg-skyBlue px-8 py-2 rounded-md hover:scale-105">
            Join
          </button>
        </div>
      </section>
    </main>
  );
};

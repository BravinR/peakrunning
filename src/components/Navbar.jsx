import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setActivePage(page);
    switch (page) {
      case "home":
        navigate("/");
        break;
      case "team":
        navigate("/team");
        break;
      case "getCoached":
        navigate("/getCoached");
        break;
      case "fanPage":
        navigate("/fanPage");
        break;
      case "contact":
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = (e, page) => {
    e.preventDefault();
    handlePageChange(page);
  };

  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" class="flex items-center">
          <img
            src={logo}
            class="h-6 mr-3 sm:h-9"
            alt="Peak Running Elite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap">
            Peak Running Elite
          </span>
        </Link>
        <button
          onClick={handleNav}
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          class={
            nav
              ? "w-full md:block md:w-auto"
              : "hidden w-full md:block md:w-auto"
          }
          id="navbar-default"
        >
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li>
              <Link
                to="/"
                class={`block py-2 pl-3 pr-4 ${
                  activePage === "home"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                aria-current="page"
                onClick={() => handlePageChange("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                class={`block py-2 pl-3 pr-4 ${
                  activePage === "team"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                onClick={() => handlePageChange("team")}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/getCoached"
                class={`block py-2 pl-3 pr-4 ${
                  activePage === "getCoached"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                onClick={() => handlePageChange("getCoached")}
              >
                Get Coached
              </Link>
            </li>
            <li>
              <Link
                to="/fanPage"
                class={`block py-2 pl-3 pr-4 ${
                  activePage === "fanPage"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                onClick={() => handlePageChange("fanPage")}
              >
                Fan Page
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                class={`block py-2 pl-3 pr-4 ${
                  activePage === "contact"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                onClick={() => handlePageChange("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" hidden md:block md:border-2"></div>
    </nav>
  );
};

export default Navbar;

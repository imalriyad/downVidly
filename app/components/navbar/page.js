"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Navbar = () => {


const router = useRouter();

const goHome = () => {
  router.push("/");
};



  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex justify-between py-4 lg:px-0 px-4 items-center">
      <div className="md:text-3xl text-2xl font-medium  text-primary-color capitalize">
        DownVidly
      </div>

      {/* Mobile side menu */}
      <div className={isOpen ? "block" : "hidden"}>
        <ul className="list-none p-10 absolute  right-4 h-[80vh] top-16 z-10 lg:hidden gap-6 font-medium flex flex-col bg-primary-color ">
          <li
            onClick={goHome}
            className="hover:text-primary-black hover:underline cursor-pointer "
          >
            Youtube Downloader
          </li>
          <li className="hover:text-primary-black hover:underline cursor-pointer ">
            Youtube To MP3
          </li>
          <li className="hover:text-primary-black hover:underline cursor-pointer ">
            Facebook Downloader
          </li>
          <li className="hover:text-primary-black hover:underline cursor-pointer ">
            Language
          </li>
        </ul>
      </div>

      {/* Desktop nav menu */}
      <div>
        <ul className="list-none lg:flex gap-6 font-medium hidden ">
          <li className="hover:text-primary-color hover:underline cursor-pointer ">
            Youtube Downloader
          </li>
          <li className="hover:text-primary-color hover:underline cursor-pointer ">
            Youtube To MP3
          </li>
          <li className="hover:text-primary-color hover:underline cursor-pointer ">
            Facebook Downloader
          </li>
          <li className="hover:text-primary-color hover:underline cursor-pointer ">
            Language
          </li>
        </ul>

        <div
          onClick={() => setOpen(!isOpen)}
          className="lg:hidden block cursor-pointer"
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={30}
              height={30}
              viewBox="0 0 50 50"
              style={{ fill: "#06D001" }}
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={30}
              height={30}
              viewBox="0 0 50 50"
              style={{ fill: "#06D001" }}
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

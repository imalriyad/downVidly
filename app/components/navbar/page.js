
const Navbar = () => {
  const isOpen = false;
  return (
    <div className="flex justify-between py-4 items-center">
      <div className="md:text-3xl text-2xl font-medium  text-primary-color capitalize">
        DownVidly
      </div>
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

          <div className="lg:hidden block cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={30}
              height={30}
              viewBox="0 0 50 50"
              style={{ fill: "#836FFF" }}
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          </div>
        
      </div>
    </div>
  );
};

export default Navbar;

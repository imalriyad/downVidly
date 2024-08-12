

const HeroText = () => {
    return (
      <>
        <div className="text-center drop-shadow-2xl text-primary-color p-6 md:pb-6 pb-2 ">
          <h1 className="md:text-3xl lg:text-4xl xl:text-5xl text-[22px] font-medium  text-primary-color ">
            Download Youtube Video{" "}
          </h1>
          <p className="lg:w-8/12 mx-auto md:pt-6 pt-3 md:text-base text-xs">
            DownVidly is a versatile and user-friendly video downloader that
            empowers users to effortlessly download videos
            <span className="hidden md:inline">
              from various platforms. With support for multiple formats like MP4
              and MP3, DownVidly ensures high-quality downloads with just a few
              clicks.
            </span>
          </p>
        </div>
      </>
    );
};

export default HeroText;
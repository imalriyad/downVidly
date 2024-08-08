const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#121111] md:p-8 p-1 to-[#5b5a5a] h-auto w-full ">
      <div className="text-center text-primary-color p-3 ">
        <h1 className="md:text-3xl lg:text-4xl xl:text-5xl text-xl font-medium  text-primary-color ">
          Download Youtube Video{" "}
        </h1>
        <p className="lg:w-8/12 mx-auto md:pt-6 pt-3 md:text-sm text-xs">
          DownVidly is a versatile and user-friendly video downloader that
          empowers users to effortlessly download videos
          <span className="hidden md:inline">
            from various platforms. With support for multiple formats like MP4
            and MP3, DownVidly ensures high-quality downloads with just a few
            clicks.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;

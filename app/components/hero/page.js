"use client";
import HeroText from "@/app/shared/heroText/page";
import axios from "axios";
import { useState } from "react";

const Hero = () => {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  const handleDownload = async () => {
    if (!url) {
      return;
    }
    const res =
      await axios.get(`https://ab.cococococ.com/ajax/download.php?copyright=0&format=720&url=${url}&api=dfcb6d76f2f6a9894gjkege8a4ab232222
`);
    setVideoId(res.data.id);
    console.log(res);

    const download = await axios.get(
      `https://p.oceansaver.in/ajax/progress.php?id=${videoId}`
    );
    setDownloadLink(download.download_url);
  };

  return (
    <div className="bg-gradient-to-r from-[#121111] md:p-8 p-1 to-[#5b5a5a] rounded-sm h-auto w-full ">
      <HeroText></HeroText>
      <div className="mx-auto text-center py-4 px-2 relative max-w-xl">
        <input
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="Paste Youtube Video Link Here"
          className="px-8 outline-none rounded-lg py-3 w-full"
        />{" "}
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-primary-color lg:w-auto w-full text-black lg:rounded-r-lg lg:rounded-l-none lg:mt-0 md:mt-4 mt-3 rounded-lg font-medium lg:absolute right-0"
        >
         Download
        </button>
      </div>
    </div>
  );
};

export default Hero;

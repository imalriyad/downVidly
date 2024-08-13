"use client";
import HeroText from "@/app/shared/heroText/page";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const incodedUri = process.env.NEXT_PUBLIC_API_URL;
const getDownloadLinkApi = process.env.NEXT_PUBLIC_GET_DOWNLOAD_URL;
const incodedKey = process.env.NEXT_PUBLIC_API_KEY;

const Hero = () => {
  const [url, setUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [videoInfo, setVideoInfo] = useState("");
  const [videoId, setVideoId] = useState("");

  const handleVideoInfo = async () => {
    if (!url) {
      return;
    }

    try {
      const res = await axios.get(
        `${incodedUri}copyright=0&format=720&url=${url}&api=${incodedKey}`
      );

      console.log("Response data:", res.data); // Debugging line

      if (!res.data || !res.data.id) {
        console.error("ID not found in response data");
        return;
      }
      console.log("API response data:", res.data);
      setVideoInfo(res?.data);
      setVideoId(res?.data?.id);
    } catch (error) {
      console.error("Error fetching video info:", error);
    }
  };

 const handleDownload = async (id) => {
   if (!id || downloadLink) {
     // Prevent download if there's no video ID or if the download link is already set
     console.log("Download already triggered or no video ID available.");
     return;
   }

   console.log("Video ID before download:", id);

   try {
     const link = `${getDownloadLinkApi}${id}`;
     console.log("API call:", link);

     const download = await axios.get(link);

     if (download.data && download.data.download_url) {
       setDownloadLink(download.data.download_url);
       console.log("Download Link:", download.data.download_url);

       // Delay the triggering of the download by 2 seconds
       setTimeout(() => {
         const downloadAnchor = document.getElementById("download-link");
         if (downloadAnchor) {
           downloadAnchor.href = download.data.download_url;
           downloadAnchor.click();
         }
       }, 2000); // 2000 milliseconds = 2 seconds
     } else {
        alert("Sorry for Intruped, Try Again");
     }
   } catch (error) {
    alert("Sorry for Intruped, Try Again")
   }
 };
  console.log(downloadLink);
  return (
    <div className="bg-gradient-to-r from-[#121111] md:p-8 p-1 to-[#5b5a5a] rounded-sm h-auto w-full ">
      <HeroText></HeroText>

      <div>
        {videoInfo?.success ? (
          <div className="bg-slate-100 flex md:flex-row flex-col gap-4 items-top rounded-md p-4 max-w-2xl mx-auto">
            <Image
              src={videoInfo?.info?.image}
              alt="thumbnail"
              width={200}
              className="object-cover opacity-90 rounded-md md:w-[340px] w-full h-[200px] "
              height={250}
            />

            <div className="text-primary-color flex flex-col justify-between  md:w-2/4 font-medium w-full">
              <h1 className="text-lg">{videoInfo?.title}</h1>
                 <a
      id="download-link"
                href="#"
                
      download
      style={{ display: "none" }}
    >
      Download Link
    </a>

    <button
      onClick={() => handleDownload(videoId)}
      className="px-6 py-3 bg-primary-color lg:w-auto lg:mt-[0px] mt-[10px] text-black rounded-lg font-medium"
      disabled={!videoId}
    >
      Download
    </button>
            </div>
          </div>
        ) : (
          <div className="mx-auto text-center py-4 px-2 relative max-w-xl">
            <input
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              placeholder="Paste Youtube Video Link Here"
              className="px-8 outline-none rounded-lg py-3 w-full"
            />

            <button
              onClick={handleVideoInfo}
              className="px-6 py-3 bg-primary-color lg:w-auto w-full text-black lg:rounded-r-lg lg:rounded-l-none lg:mt-0 md:mt-4 mt-3 rounded-lg font-medium lg:absolute right-0"
            >
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

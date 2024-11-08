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
  const [loading, setLoading] = useState(false);
  
const handleVideoInfo = async () => {
    if (!url) return;

    try {
      const res = await axios.get(
        `${incodedUri}copyright=0&format=720&url=${url}&api=${incodedKey}`
      );

      if (!res.data || !res.data.id) {
        console.error("ID not found in response data");
        return;
      }
      
      setVideoInfo(res.data);
      setVideoId(res.data.id);
    } catch (error) {
      console.error("Error fetching video info:", error);
    }
  };

  const handleDownload = async (id) => {
    if (!id || loading) return; // Prevent duplicate requests if already loading
    setLoading(true); // Start loading state to show "Downloading..." and loader

    try {
      const link = `${process.env.NEXT_PUBLIC_GET_DOWNLOAD_URL}${id}`;
      const download = await axios.get(link);

      if (download.data && download.data.download_url) {
        setDownloadLink(download.data.download_url);

        // Trigger download after 2 seconds
        setTimeout(() => {
          const downloadAnchor = document.getElementById("download-link");
          if (downloadAnchor) {
            downloadAnchor.href = download.data.download_url;
            downloadAnchor.click();
          }
          setLoading(false); // Stop loading state after initiating download
        }, 2000);
      } else {
        alert("Sorry for Interruption, Try Again");
        setLoading(false); // Stop loading state if download fails
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("Sorry for Interruption, Try Again");
      setLoading(false); // Stop loading state on error
    }
  };

  
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
        className={`px-6 py-3 bg-primary-color lg:w-auto lg:mt-[0px] mt-[10px] text-black rounded-lg font-medium`}
        disabled={!videoId || loading}
      >
        {loading ? (
          <div className="flex items-center">
            <span className="loader mr-2"></span> {/* Loader animation */}
            Download starting...
          </div>
        ) : (
          "Download"
        )}
      </button>

      {downloadLink && (
        <a id="download-link" style={{ display: "none" }} download>
          Download
        </a>
      )}
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
              Get Download Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

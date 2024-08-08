import Hero from "./components/hero/page";
import Navbar from "./components/navbar/page";

export default function Home() {
  return (
    <div className="max-w-screen-xl lg:px-24 md:px-14 px-4 mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}

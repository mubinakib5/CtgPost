import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></section>
  );
};

export default Hero;

import React from "react";
import { useEffect } from "react";
import Button from "@/components/horizontal-btn";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const splitText = new SplitText(".split-animation", {
        type: "chars,lines",
        linesClass: "lines",
        mask: "lines",
      });

      const splitPara =new SplitText(".split-para", {
        type: "words,lines",
        linesClass: "para",
        mask: "lines",
      });

      gsap.from(splitText.chars, {
        yPercent: 110,
        delay:0.2,
        duration:1,
        stagger: 0.02,
        ease:"power3.inOut"
      });
      gsap.from(splitPara.lines, {
        yPercent: 110,
        delay:0.8,
        duration:1,
        stagger: 0.02,
        ease:"power3.inOut"
      });
      gsap.from(".nav-animate",{
        yPercent: 0,
        delay: 0.7,
        scale: 0,
      })
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative h-[100svh] md:h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
      >
        <source src="video/front-page.mp4" />
      </video>

      <div className="bg-black/10 absolute top-0 left-0 h-full w-full"></div>

      <div>
        <div className="relative pt-[32vh] md:pt-[25vh] z-10 flex justify-center items-center w-full text-white text-[11.5vw] sm:text-[9vw] md:text-[5.7vw] flex-col px-4">
          <div className="w-[92%] sm:w-[80%] md:w-[50%] h-fit overflow-hidden flex justify-center">
            <h1 className="w-full text-center leading-[1.05] split-animation font-body tracking-[1] font-semibold">
              <span className="inline-block font-italics font-normal">True </span> to Oneself kind to <span className="font-italics font-normal"> Nature</span>
            </h1>
          </div>

          <div className="w-fit h-fit overflow-hidden pt-2">
            <p className="text-sm sm:text-[2.2vw] md:text-[0.8vw] mt-3 md:mt-2 max-w-[80vw] sm:max-w-[60vw] md:max-w-[20vw] text-center font-body second-one split-para">
              Unreservedly honest products that truly work, be kind to skin and
              the planet – no exceptions!
            </p>
          </div>
        </div>
      </div>

      <div className="absolute items-center bottom-6 md:bottom-10 w-full px-4 flex justify-center">
        <div className="bg-white animated-bar w-[92%] sm:w-auto sm:min-w-[420px] md:w-1/2 md:min-w-0 h-fit rounded-full flex p-2 md:p-[0.5vw] cursor-pointer nav-animate">
          <p className="hidden sm:block w-[40%]"></p>
          <div className="w-full sm:w-[60%] flex items-center justify-between gap-3 pl-4 sm:pl-0">

          <p className="underline font-light text-xs sm:text-sm md:text-[0.9vw] text-neutral-700 font-body flex justify-center items-center whitespace-nowrap">
            EXPLORE ALL PRODUCTS
          </p>
          <div className="shrink-0">
            <Button />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

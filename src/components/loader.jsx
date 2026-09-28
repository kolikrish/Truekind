"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText);

const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = 6;
      const tl = gsap.timeline();

      for (let i = 1; i <= steps; i++) {
        tl.to(".timer", {
         yPercent:-100*i,
          duration: 0.5,
          stagger:0.1
        });
      }

      tl.to(".loader-text-1", {
        yPercent: 100,
        // delay:-0.5,
        duration: 0.5,
      });
      tl.to(".loader-text-2", {
        yPercent: -100,
        delay: -0.5,
        duration: 0.5,
      });

      tl.to(".line", {
        height: "100%",
        duration: 0.7,
        ease: "power3.inOut",
      }).to(".line", {
        opacity: 0,
        duration: 0.5,
      });
      tl.to(".loader-text-1", {
        yPercent: 200,
        duration: 0.5,
      });
      tl.to(".loader-text-2", {
        yPercent: -200,
        delay: -0.5,
        duration: 0.5,
      })
      .to(".bg-remove",{
        opacity:0,
        duration:0,
        delay:-0.5,
      })
      .to(".moving-div", {
          yPercent: -100,
          stagger: 0.08,
          duration: 0.8
      });
      
      tl.to(loaderRef.current, {
        y: '-100%',
        duration: 1,
        delay: 1.5,
        ease: 'power2.inOut',
      });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  const leftDigits = ["0", "2", "6", "8", "9", "9"];
  const rightDigits = ["0", "5", "7", "7", "8", "9"];

  return (
    <div className="flex items-center h-screen justify-center overflow-hidden bg-transparent">
      <div ref={loaderRef} className="flex w-full h-full relative z-50 ">
        <div className="w-screen h-screen absolute top-0 left-0 bg-[#2f2f2f] z-[1] bg-overlay bg-remove"/>
        <div className="absolute left-[50%] bg-white translate-x-[-50%] w-[0.1vw] h-[0px] line origin-top z-[2] "/>
        <div className="w-screen h-screen absolute top-0 left-0 justify-center items-center flex z-[4] gap-[1vw]">
                <div className="h-[25vh] ml-[-1vw] overflow-hidden">
            <div className="text-white text-[3vw] font-bold flex items-center justify-center h-[25vh] font-italics ">
              <div className="h-fit overflow-hidden">
                <span className="loader-text-1 block translate-y-[-100%]">
                  True
                </span>
              </div>
            </div>
          </div>
          <div className="h-[25vh] overflow-hidden">
            <div className="text-white text-[3vw] font-bold flex items-center justify-center h-[25vh] font-display loader-logo2">
              <div className="h-fit overflow-hidden">
                <span className="loader-text-2 block translate-y-[100%]">
                  Kind
                </span>
              </div>
            </div>

           
          </div>

        </div>
        <div className="w-screen h-screen z-[3] flex justify-center items-center absolute top-0 left-0">
          <div className="h-[25vh] overflow-hidden w-fit flex">
            <div className="w-fit flex flex-col items-center justify-center timer translate-y-[250%]">
             

              {leftDigits.map((digit, idx) => (
                <p
                  key={idx}
                  className="text-[10vw] text-center font-semibold text-white h-full w-full"
                >
                  {digit}
                </p>
              ))}

              
            </div>
             <div className="flex flex-col items-center justify-center timer  translate-y-[250%]">
              {rightDigits.map((digit, idx) => (
                <p
                  key={idx}
                  className="text-[10vw] text-center font-semibold text-white h-full w-full"
                >
                  {digit}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Left side */}
        <div className="w-[50%] h-full bg-[#2F2F2F] flex justify-end items-center moving-div"/>
 

        {/* Right side */}
        <div className="w-[50%] h-full bg-[#2F2F2F] moving-div flex justify-start items-center moving-div"/>

      </div>
    </div>
  );
};

export default Loader;

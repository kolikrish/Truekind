import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Button from "./btn";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
gsap.registerEase(ScrollTrigger, SplitText);

const Journal = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const splitText = new SplitText(".journal-text", {
            type: "chars,lines",
            linesClass: "lines",
            mask: "lines",
      });
      gsap.from(splitText.lines, {
        yPercent: 100,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".hit-point-journal",
          start: "30% 90%",
          markers: false,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-fit flex justify-between bg-neutral-800 overflow-x-hidden py-20">
      <div className="mx-10 bg-white h-fit pb-10 relative" id="outer-div">
        <div className="w-full group h-[65vh] cursor-pointer overflow-hidden object-cover hit-point-journal ">
          <Image
            src="/assets/brush.avif"
            width={800}
            height={800}
            alt="brush"
            className="scale-[110%] w-full h-full object-cover  group-hover:scale-[100%] ease-in-out duration-500"
          />
        </div>
        <div className="absolute rounded-xl px-4 py-1 bg-white top-5 left-5">
          <p className="text-[0.8vw] font-body">FEATURED</p>
        </div>

        <div className="mt-4 text-neutral-700 font-body px-4 pb-0">
          <p className="text-[3.5vh] w-lg px-4">
            Beauty Secrets from Around the World: Rituals and Ingredients You
            Need To Try
          </p>
          <p className="text-[0.8vw] text-gray-500 font-body w-[38vw] px-4 mt-2">
            Drawing from our rich ayurvedic legacy of over 30 years and
            embracing dermal science, we aim to create transparent skincare that
            is incredibly effective, safe and without harming the environment or
            the planet.
          </p>

          <div className="flex justify-between px-4 mt-8 pb-0">
            <p className="text-xs font-body">8 feb 2025</p>
            <p className="text-xs font-body underline">Read more</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-16 pl-2 pr-4 ">
        <div className="h-[35%] mb-10">
          <div className="text-white mx-auto ">
            <h2 className="text-[5vw]  px-auto journal-text leading-[1]">
              <span className="block font-display italic text-center p-1">
                clean
              </span>
            
              <span className="block font-body font-semibold text-center">
                JOURNAL
              </span>
            </h2>
            
          </div>
          <p className="text-white font-body text-[0.9vw] w-xs text-center mt-2">
            Healty tips on skincare, regimen and overall a better lifestyle.
          </p>
        </div>
        <div className="flex flex-col justify-between h-[65%] ">
          <div className="flex space-x-2">
            <div className="w-[25vw] bg-white h-[50vh]">
              <div className="w-full h-[65%] group overflow-hidden cursor-pointer">
                <Image
                  src="/assets/brush2.avif"
                  height={900}
                  width={900}
                  alt="brush"
                  className="scale-[110%] w-full h-full object-cover group-hover:scale-[100%] ease-in-out duration-500"
                />
              </div>

              <div className="flex flex-col justify-around text-neutral-700 font-body p-[0.5vw]">
                <p className="text-[0.9vw] font-body w-xs px-2 mt-2">
                  Your skincare and Makeup routine Impacts your well being
                </p>

                <div className="flex justify-between px-4 mt-8 ">
                  <p className="text-[0.9vw] font-body">8 feb 2025</p>
                  <p className="text-[0.9vw] font-body underline">Read more</p>
                </div>
              </div>
            </div>

            <div className="w-[25vw] bg-white h-[50vh]">
              <div className="w-full h-[65%] group overflow-hidden cursor-pointer">
                <Image
                  src="/assets/facemask.avif"
                  height={900}
                  width={900}
                  alt="brush"
                  className="scale-[110%] w-full h-full object-cover group-hover:scale-[100%] ease-in-out duration-500"
                />
              </div>

              <div className="flex flex-col justify-around text-neutral-700 font-body p-[0.5vw]">
                <p className="text-[0.9vw] font-body w-xs px-2 mt-2">
                  How to make your Routine More eco-friendly
                </p>

                <div className="flex justify-between px-4 mt-8 ">
                  <p className="text-[0.9vw] font-body">25 Jan 2025</p>
                  <p className="text-[0.9vw] font-body underline">Read more</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-between cursor-pointer pt-8 items-center ">
            <Button />
            <p className="font-body text-xs underline text-white mt-2">
              SEE ALL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;

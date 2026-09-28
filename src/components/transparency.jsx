'use client';

import React from "react";
import Button from "./btn";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText)

const Transparency = () => {
  const qualities = [
    {
      iconSrc: '/assets/svg/icon-highest-standards.svg',
      heading: "100% Transparent Formulas",
      subheading: "Highest Standards.",
      content:
        "We formulate to the highest standards of efficacyand safety – using only proven, verifiedingredients in bio-compatible bases; and freefrom over 1800 questionable ingredients",
    },
    {
      iconSrc: '/assets/svg/icon-real-results.svg',
      heading: "Only Verified Ingredients",
      subheading: "Real Results.",
      content:
        "Skin care packed with anti oxidants, skinreplenishing and skin restoring agents instable pH levels that don’t promise miracles,but deliver real results.",
    },
  ];

  useEffect(() => {
        const ctx= gsap.context(() => {
          const splitText = new SplitText(".transparency-split-text", {
                  type: "chars,lines",
                  linesClass: "lines",
                  mask: "lines",
          });
          gsap.to(".shades", {
           y: "-80vh",
          scrollTrigger: {
            start: 'top bottom',
            end: 'bottom top',
            trigger: ".shades-container",
            markers: false,
            scrub: true
          }
      }),
      gsap.from(splitText.lines, {
                    yPercent: 100,
                    stagger:0.2,
                    scrollTrigger:{
                        trigger:".hit-point",
                        start:"-10% bottom",
                        markers:false
                    }
        })
      })
        // gsap.from(".third1 , .third2 , .third3 , .third4 ",{      
        //             yPercent: 100,
        //             stagger:0.5,
        //             scrollTrigger:{
        //                 trigger:".hit-point",
        //                 start:"top 90%",
        //                 markers:false
        //             }
        // })
        // })
  return()=>ctx.revert()
  },[])

  

  return (
    <div className="h-fit w-full relative py-[20vw]">
      <div className="w-full flex flex-col justify-center items-center mx-auto font-body text-neutral-700 hit-point">
        <div className="flex items-end justify-baseline  ">
          <div className="mr-20 rounded-xl border border-gray-600 mb-10">
            <p className="text-[8px] font-body px-10 py-1">ETHOS</p>
          </div>
          <div className="w-fit h-fit overflow-hidden ">

          <h2 className="font-body text-9xl font-semibold transparency-split-text">RADICAL</h2>
          </div>
        </div>
        <div className="w-fit h-fit overflow-hidden">

        <h2 className="font-body text-9xl font-semibold transparency-split-text">TRANSPARENCY.</h2>
        </div>
      </div>

      
      <div className="w-full flex justify-between text-neutral-700">
        <div className="w-[40%] pt-5">

          <div className="flex items-start cursor-pointer pl-32 font-body text-neutral-700">
            <Button />
            <div className="ml-2 font-body text-[0.9vw] my-auto">
              <p className="underline">OUR</p>
              <p className="underline">PHILOSOPHY</p>
            </div>
          </div>

        </div>

        <div className="w-[60%] leading-none">

          <div className=" pt-2">


          <h2 className="font-display italic text-9xl transparency-split-text pr-[1vw]">HIDE</h2>
          </div>

          <div className="h-fit w-fit overflow-hidden pt-2">
          <h2 className="items-end font-body text-9xl font-semibold transparency-split-text">
          NOTHING.
        </h2>
          </div>

        </div>

      </div>

      <div className="flex items-center justify-between w-full pr-10 space-y-5 ">
        <div className="h-auto w-[35vw] mx-auto absolute top-[60%] left-[20%] shades-container ">
          <Image alt='texture' src="/assets/texture.png" className="shades w-full h-full object-contain" height={500} width={500}  />
        </div>


      <div className="flex items-end justify-end w-full">
        <div className="flex flex-col items-start justify-between max-w-[40vw] mt-20 mr-6 space-y-5">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="flex justify-between items-start space-x-8"
            >
              
              <div className="h-[3vh] w-[3vw] ">
                <Image src={quality.iconSrc} height={600} width={600} alt='icon'/>
              </div>
              <h3 className="text-[0.9vw] font-display max-w-[10vw]">{quality.heading}</h3>
              <div className="flex flex-col text-[0.9vw] font-body max-w-[18vw]">
                <p className="font-normal">{quality.subheading}</p>
                <p className="font-extralight text-gray-500">{quality.content}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;

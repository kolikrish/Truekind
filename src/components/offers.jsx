'use client';

import React, { useEffect } from 'react';
import Button from "@/components/btn"
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText)

const Offers = () => {

    useEffect(() => {
        const mm = gsap.matchMedia();

        // Desktop-only animations — disabled on mobile for smooth UI
        mm.add("(min-width: 768px)", () => {
        const ctx= gsap.context(() => {
            const splitText = new SplitText(".offers-split-text", {
                    type: "chars,lines",
                    linesClass: "lines",
                    mask: "lines",
                });
            gsap.fromTo(".animated-img",{yPercent:-20}, {
                yPercent: 10,
                scrollTrigger: {
                    trigger: '.img-container',
                    start: "20% bottom",
                    end: "bottom top",
                    // markers: true,
                    scrub: true,
                }
            }),

          gsap.from(splitText.lines,{      
                              yPercent: 100,
                              stagger:0.5,
                              scrollTrigger:{
                                  trigger:".hitt-point",
                                  start:"top 70%",
                                  markers:false
                            }
                  })
        });
        return () => ctx.revert();
        });
        
        return () => mm.revert()
    },[])

  return (
    <div className='flex flex-col md:flex-row md:min-h-[48rem] justify-between pt-16 md:pt-36 overflow-x-clip relative'>

        <div className='px-6 md:pl-20 md:pr-0 md:pt-20 z-10 md:z-50 hitt-point'>
            <div className=''>
                <Image src='/assets/dropper.jpg' height={500} width={500} alt='dropper' className='h-44 w-32 sm:h-56 sm:w-40 md:h-[38vh] md:w-[15vw] object-cover' />
            </div>
            <div className='pt-8 md:pt-16'>
                <div className='w-fit px-4 text-xs md:text-[1.5vh] py-1 border border-gray-400 rounded-xl font-body'>
                    <p className='text-neutral-700 '>QUALITY</p>
                </div>
                <div>
                    <p className='font-body text-neutral-700 text-2xl sm:text-3xl max-w-sm mt-5'>
                        Only proven Ingredients, quality over quantity always!
                    </p>
                    <p className='text-xs sm:text-sm mt-4 font-body max-w-sm text-neutral-400'>
                        Its about what we don’t put in. Squeaky clean formulas with over 1500 Negative Ingredients.
                    </p>
                </div>
            </div>
        </div>
        <div className='hidden md:block w-fit h-[80vh] absolute top-70 -left-10'>
            <Image src='/assets/svg/curved-arrow.svg' height={700} width={700} alt='arrow' />
        </div>
        <div className='px-4 md:px-0 mt-10 md:mt-0'>
            <div className='h-[70vh] sm:h-[80vh] md:h-[100vh] w-full md:w-[45vw] img-container relative overflow-hidden bg-[#E3D8CB] px-6 py-8 md:px-[3.5vw] md:py-[3vw]'>
                <div className='h-full w-full absolute top-[20%] left-0 '>
                <Image src='/assets/product-with-bg.jpg' width={650} height={500} alt='product' className='w-full translate-y-[-10%] h-full object-cover animated-img' />

                </div>

                <div className='relative z-[2]'>
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 sm:gap-4'>

                <div className='font-body text-neutral-700 '>
                    

                    <h2 className='text-4xl sm:text-5xl md:text-[3.5vw] font-semibold offers-split-text leading-[1.05] md:leading-[1] '>
                        
                                <span className='inline-block 1'>

                        EXCITING 
                                </span>
                        
                        
                            <span className='md:text-[3.5vw] font-semibold md:text-nowrap'>OFFERS <span className='font-italics font-light inline-block pr-2 '>awaits</span></span>
                        
                        </h2>
                    
                    <div className='h-fit w-fit overflow-hidden'>

                    
                    </div>
                    <div className='text-xs sm:text-sm md:text-[0.7vw] text-gray-500 mt-3 md:mt-2 offers-split-text'>
                        <p>Shop now to get a chance to win 2 extra products.</p>
                        <p>Grab the offer before it ends</p>
                    </div>
                </div>

                <div className='md:ml-28 shrink-0'>
                    
                        <Button />
                        <p className='underline text-neutral-700 text-xs md:text-[0.9vw] leading-[1] md:text-nowrap mt-2 font-body cursor-pointer'>SHOP NOW</p>
                    
                </div>
                </div>
            </div>
            </div>

            

        </div>
      
    </div>
  )
}

export default Offers

'use client';
import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Connect = () => {

  useEffect(() => {
    const ctx = gsap.context(()=>{
            const splitText = new SplitText(".connect-split-text", {
            type: "chars,lines",
            linesClass: "lines",
            mask: "lines",
        });
      gsap.fromTo(".face-img",{
        yPercent:10
      }, {
          yPercent:-10,
          scrollTrigger: {
            trigger: ".face-img",
            start: "top bottom",
            end: "bottom top",
            scrub:true,
            markers:false
          }
      }),

      gsap.from(splitText.lines,{      
        yPercent: 100,
        stagger:0.5,
        scrollTrigger:{
          trigger:".hit-point-connect",
          start:"top bottom",
          markers:false
        }
      })

    })
    return()=>ctx.revert()
  },[])

  return (
    <section className='px-[4vw] h-full pt-[20%] pb-[10%]' id='connect'>
        <div className='flex justify-between h-full gap-x-[3vw]'>

            <div className=' flex flex-col justify-between items-start h-[80vh] hit-point-connect'>
                <div className='w-[15vw] h-[23vh] face-img'>

                <Image src="/assets/face1.jpg" height={800} width={800} alt='face' className='w-full h-full object-cover' />
                </div>
                <p className=' text-[0.9vw] text-gray-700 w-42 font-body '>Get the latest news about skincare tips and new products.</p>
            </div>

            <div className='relative w-[70vw] h-fit flex justify-center'>
              <div className='w-full h-[80vh]'>
                <Image src='/assets/face2.jpg' height={800} width={800} alt='face' className='h-full w-full object-cover' />
              </div>

              <div className='absolute top-[-15%] flex justify-between items-stretch w-full flex-col h-fit'>
                <div className='flex flex-col justify-between items-center '>
                

                  <h2 className='text-neutral-700 text-[3.5vw] font-body font-semibold leading-[1] text-center mx-auto connect-split-text'>
                      <span className='block '>CONNECT</span>
                        <span className='inline-block '> WITH  US</span>
                      </h2>
                
                <div className='w-fit h-fit overflow-hidden  text-center mx-auto'>

                  
                </div>
                </div>
              </div>
              <div className='absolute bottom-[-15%] flex flex-col w-full justify-between items-center font-display text-center text-[4vw] text-neutral-700 italic'>

                <div className=' '>
                  <p className=' leading-[0.7] justify-between items-center pt-[0.5vw] pr-[0.5vw] text-center mx-auto connect-split-text px-auto'>      
                      <span className='block pr-2'>on</span>
                  <span className=' inline-block p-2'>instagram</span>
                    </p>
                </div>

                  
                
              </div>

            </div>

            <div className='mt-[50vh] w-[20vw] h-[50vh] face-img'>
              <Image src='/assets/face3.jpg' width={800} height={800} className='w-full h-full object-cover ' alt='face' />
            </div>

        </div>

        <div className='w-full flex  justify-center items-center'>
          <div className='flex justify-between items-center px-[0.5vw] py-[0.5vw] text-[0.9vw] font-light rounded-full border border-neutral-300 cursor-pointer'>
            <p className='text-neutral-700 font-body underline pl-[6vw]'> INSTAGRAM</p>
            <div className='p-2 bg-neutral-700 ml-10 rounded-full'>

             <Instagram className='w-[2vw] h-[2vw] text-white '/>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Connect

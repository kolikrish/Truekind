'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Button from './horizontal-btn';
import SplitText from 'gsap/dist/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Explore = () => {
  const pureBrillianceProducts = [
    {
      id: 1,
      image: '/assets/img1.avif',
      title: 'AHA BRIGHTENING EXFOLIANT CLEANSER/FACE WASH',
      price: '$ 899'
    },
    {
      id: 2,
      image: '/assets/img2.avif',
      title: 'BIO EXFOLIANT BRIGHTENING SLEEPING MASK',
      price: '$ 899'
    },
    {
      id: 3,
      image: '/assets/img2.avif',
      title: 'BIO EXFOLIANT BRIGHTENING SLEEPING MASK',
      price: '$ 899'
    }
  ];

  const varnayaBlendsProducts = [
    {
      id: 1,
      image: '/assets/img4.avif',
      title: 'AHA BRIGHTENING EXFOLIANT CLEANSER/FACE WASH',
      price: '$ 899'
    },
    {
      id: 2,
      image: '/assets/img5.avif',
      title: 'ACNE CALMING HERB RESCUE MASK',
      price: '$ 899'
    },
    {
      id: 3,
      image: '/assets/img5.avif',
      title: 'ACNE CALMING HERB RESCUE MASK',
      price: '$ 899'
    },
    {
      id: 4,
      image: '/assets/img5.avif',
      title: 'ACNE CALMING HERB RESCUE MASK',
      price: '$ 899'
    }
  ];

  useEffect (() => {

    const ctx=gsap.context(() => {

        
        const splitText = new SplitText(".explore-split-heading", {
        type: "chars,lines",
        linesClass: "lines",
        mask: "lines",
      });

      const splitsubheading = new SplitText(".explore-split-subheading", {
        type: "chars,lines",
        linesClass: "lines",
        mask: "lines",
      });
        
        gsap.fromTo(".animated-img",{
            yPercent: -20,

        }, {
            yPercent:20,
            // duration:2,
            ease:"none",
            scrollTrigger: {
                trigger: ".animated-img-container",
                start: "top bottom",
                end: "bottom top",
                markers:false,
                scrub:true
            }
        }),
         gsap.fromTo(".animated-img-2",{
            yPercent: -20,

        }, {
            yPercent:20,
            // duration:2,
            ease:"none",
            scrollTrigger: {
                trigger: ".animated-img-container-2",
                start: "top bottom",
                end: "bottom top",
                markers:false,
                scrub:true
            }
        }),
        gsap.from(splitText.lines,{      
            yPercent: 100,
            stagger:0.1,
            scrollTrigger:{
                trigger:".animated-txt3",
                start:"top 70%",
                markers:false
            }
          })
          gsap.from(splitsubheading.lines, {
            yPercent: 100,
            stagger:0.1,
            scrollTrigger:{
                trigger:".second-txt-container",
                start:"top 70%",
                markers:false
            }
          })
    })
    return()=>ctx.revert()
  },[])

  return (
    <div className='w-full h-fit pt-28'>
        <div className='flex flex-col justify-center items-center pb-[5vh] text-neutral-700 '>
            <div className='h-fit w-fit  pt-2 pr-2'>

            <h2 className='font-body font-semibold leading-[1] text-center items-center flex flex-col text-[4vw] animated-txt3 explore-split-heading'>
                
                    <span className='first-heading block'>Explore</span>
                    
                
                    <span className='font-italics font-medium second-heading block pr-[0.5vw] pb-[0.5vw]'>pure potency</span>
                   


            </h2>
            </div>
           
            
        </div>
        
            <div className='grid grid-cols-2'>
                <div className='w-full h-full overflow-hidden object-fill animated-img-container'>
                    

                    <Image src='/assets/explore1.jpg' alt='explore' height={1000} width={600} className='h-full w-full object-cover animated-img'  />
                    
                </div>
                <div className='pb-[1.5vw]'>
                    <div className='pt-16 w-full text-neutral-700 flex justify-between pl-10 pr-2 items-end'>
                        <div>
                            <div className='pr-2 pt-2'>

                            <h2 className='font-body text-[3vw] leading-[0.8] pr-2 first-heading explore-split-heading'>
                                

                                <span className='block p-2'>
                                    Pure
                                    </span>
                                    
                                    

                            <span className='font-italics inline-block text-[3vw] first-heading p-[0.4vw]'>Brilliance</span>
                            
                                
                                </h2>
                            </div>
                            
                        </div>
                        <div className='pr-[2.5vw]'>

                        <Button />
                        </div>
                    </div>

                    
                    <div className='pr-2 mt-8'>

                        <Swiper
                            slidesPerView={2.2}
                            spaceBetween={20}
                            className="mySwiper w-full !pl-[3vw] !pr-[3vw]"
                        >
                            {pureBrillianceProducts.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className='w-full p-2 relative  bg-[#F0CCCE] py-[1.2vw] h-[55vh] px-[0.9vw] rounded-[1.2vw] cursor-pointer flex overflow-hidden flex-col justify-between'>
                                        <div className='flex justify-between relative z-[1] space-x-16'>
                                            <p className='text-[1.5vh] p-1 bg-white rounded-full font-body my-auto px-5'>PURE BRILLIANCE</p>
                                            <div className='bg-white rounded-full p-2'>
                                                    <div className='h-[1vw] w-[1vw]'>

                                                <Image src='/assets/cart.svg' height={500} width={500} alt='' className='w-full h-full object-fill'/>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className='mx-auto w-full h-full absolute top-0 left-0 z-0'>
                                            <Image src={product.image} width={250} alt='product' height={250}  className='w-full h-full object-contain'/>
                                        </div>
                                        <div className='flex gap-[3vw] justify-around items-end text-[0.7vw] absolute bottom-[5%] left-[5%] font-extralight mt-5 font-body text-neutral-700 space-x-10'>
                                            <p className='w-[80%] '>{product.title}</p>
                                            <p className='w-[30%]'>{product.price}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div>
                        <p className='text-xs pt-10 pl-12 font-extralight text-neutral-700 font-body w-xs'>STAY GLOW AND HEALTHY WITHOUT HAVING TO THINK ABOUT IT</p>
                    </div>

                </div>
            </div>


            <div className='grid grid-cols-2 second-txt-container'>
                <div>
                    <div className=''>
                    <div className='pt-20 w-full text-neutral-700 flex justify-between pl-10 pr-4 items-end'>
                        <div>
                            
                            <div className=' '>

                            <h2 className='font-body leading-[0.9] text-[3vw]   explore-split-subheading'>
                               

                                <span className='block second-txtt'> Varnayas
                                    </span>
                                

                                
                                    <span className='font-italics second-txtt text-[3vw] inline-block p-2'>Blends</span>
                                
                                </h2>
                            </div>
                            

                        </div>
                        <div className='pr-10'>
                            <Button />
                        </div>
                    </div>

                    <div className='mt-8'>

                        <Swiper
                            slidesPerView={2.2}
                            spaceBetween={10}
                            dir="rtl"
                            className="mySwiper w-full space-x-4 !pr-[3vw] !pl-[3vw]"
                        >
                            {varnayaBlendsProducts.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className='w-full p-2 bg-[#D8CEC4]  relative py-[1.2vw] h-[55vh] px-[0.9vw] rounded-[1.2vw] cursor-pointer flex overflow-hidden flex-col justify-between'>
                                        <div className='flex justify-between relative z-[1] space-x-16'>
                                            <div className='bg-white rounded-full p-2'>
                                                    <div className='h-[1vw] w-[1vw]'>

                                                <Image src='/assets/cart.svg' height={500} width={500} alt='' className='w-full h-full object-fill'/>
                                                    </div>
                                                </div>
                                            <p className='text-[1.5vh] p-1 bg-white rounded-full font-body my-auto px-5'>VARNAYAS BLENDS</p>
                                            
                                            
                                        </div>
                                        <div className='mx-auto w-full h-full absolute top-0 left-0 z-0'>
                                            <Image src={product.image} width={250} alt='product' height={250}  className='w-full h-full object-contain'/>
                                        </div>
                                        <div className='flex gap-[3vw] justify-around items-start text-[0.7vw] absolute bottom-[5%] left-[5%] font-extralight mt-5 font-body text-neutral-700 space-x-[1.5vw]'>
                                            
                                            <p className='w-[30%] pr-[0.5vw]'>{product.price}</p>
                                            <p className='w-[80%] text-left'>{product.title}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>

                    <div>
                        <p className='text-xs pt-10 pl-10 font-body w-[20vw] text-gray-700'>STAY GLOW AND HEALHY WITHOUT HAVING TO THINK ABOUT IT</p>
                    </div>
                </div>
                </div>

                <div className='h-full w-full overflow-hidden object-fill animated-img-container-2'>
                    <Image width={600} src='/assets/explore2.jpg' height={1000} className='h-full w-full object-cover animated-img-2' alt='explore'  />
                </div>

            </div>
    </div>
  )
}

export default Explore


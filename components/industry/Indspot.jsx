"use client";
import React from "react";

const Indspot = () => {
  return (
    <div>
      <div className="relativew-full aspect-[9/15] overflow-hidden h-[77vh] md:h-[43vh] lg:h-[60svh]  xl:h-[calc(100vh-80px)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full md:h-auto xl:h-full object-cover z-0 md:block hidden"
        >
          <source
            src="/ind/Industrial_Logistics_desktop.mp4"
            type="video/mp4"
          />
          {/* Your browser does not support the video tag. */}
        </video>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-auto object-cover z-0 md:hidden block"
        >
          <source src="/ind/Industrial_Logistics_mobile.mp4" type="video/mp4" />
        </video>

        {/* <img className='w-[100%] md:block hidden' src='/ind/ind.jpg'></img>
        <img
          className='w-[100%] md:!hidden block'
          src='/ind/industry_banner_mob.jpg'
        ></img>

        <div className='absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]'>
          <div className='bw-m px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white '>
            <a href='/' className='text-[13px] md:text-[13px] lg:text-[16px]'>
              Home
            </a>{" "}
            /{" "}
            <a href='#' className='text-[13px] md:text-[13px] lg:text-[16px] '>
              Industrial & Logistics Parks
            </a>
          </div>

          <div className='flex flex-col'>
            <h1 className='bw-m text-white text-[47px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]'>
              Agile
              <span className='md:w-[249px] md:h-[6px] bg-[#fff] mb-[14px] ml-[30px] inline-block'></span>
            </h1>
            <h1 className='bw-r text-white text-[47px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]'>
              Ecosystems of Growth
            </h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Indspot;

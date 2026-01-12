///******************************** */
// components/home/ClientTestimonials/TestimonialsSlider.jsx

// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/pagination";
// import TestimonialCard from "./TestimonialCard";

// const TestimonialsSlider = ({ testimonials = [] }) => {
//   return (
//     <section
//       className="py-12 bg-[#F5F5F5] sm:py-[50px] 1280:py-20 relative"
//       aria-labelledby="client-speak-title"
//     >
//       {/* Background gradient blurs */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute top-0 left-0 flex gap-[25px]">
//           <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] xl:w-[295.8px] xl:h-[469.8px] bg-[#0db14b] opacity-25 blur-[69px]" />
//           <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] xl:w-[219px] xl:h-[226.8px] bg-[#8F53A1] opacity-25 blur-[69px]" />
//         </div>
//       </div>

//       {/* Animated Heading */}
//       <div className="mb-6 fixup sm:mb-10">
//         <motion.h2
//           id="client-speak-title"
//           initial={{ y: "40px", opacity: 0 }}
//           whileInView={{ y: "0", opacity: 1 }}
//           transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
//           viewport={{ once: true, amount: 0.1 }}
//           className="text-[36px] sm:text-[46px] md:text-[48px] lg:text-[52px] bw-r tracking-[-0.04em]  xl:text-[56px] leading-[42px] 768:leading-[60px]"
//         >
//           <motion.span
//             initial={{ y: "40px", opacity: 0 }}
//             whileInView={{ y: "0", opacity: 1 }}
//             transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
//             viewport={{ once: true, amount: 0.1 }}
//             className="bw-m"
//           >
//             Real Experiences, <br />
//           </motion.span>{" "}
//           <div className="flex items-center gap-[14px]">
//             {" "}
//             Real Impact{" "}
//             <span className="mt-1 sm:mt-2.5">
//               <img src="/abstract_pattern.svg" className="abstract_svg" alt="" />
//             </span>
//           </div>
//         </motion.h2>
//       </div>
//       <div className="absolute top-[50px] right-[50px]">
//         <img src="/home/clients/bgfrm.svg" alt="" />
//       </div>
//       {/* Swiper */}
//       <div className="relative h-full px-0 mx-auto overflow-visible max-w-auto">
//         <Swiper
//           modules={[Pagination]}
//           slidesPerView={1.15}
//           centeredSlides
//           spaceBetween={30}
//           initialSlide={1}
//           loop={true}
//           pagination={{
//             clickable: true,
//             el: ".custom-pagination",
//             bulletClass: "custom-bullet",
//             bulletActiveClass: "custom-bullet-active",
//           }}
//           breakpoints={{
//             360: { slidesPerView: 1.2, spaceBetween: 8 },
//             375: { slidesPerView: 1.26, spaceBetween: 25 },
//             412: { slidesPerView: 1.36, spaceBetween: 15 },
//             414: { slidesPerView: 1.2 },
//             425: { slidesPerView: 1.42 },
//             480: { slidesPerView: 1.8 },
//             640: { slidesPerView: 1.65 },
//             768: { slidesPerView: 1.8 },
//             1024: { slidesPerView: 1.86, spaceBetween: 280 },
//             1280: { slidesPerView: 1.5 },
//             1366: { slidesPerView: 1.45 },
//             1440: { slidesPerView: 1.6 },
//             1920: { slidesPerView: 2.2 },
//           }}
//           className="testimonial-swiper"
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={t.id || i}>
//               {({ isActive }) => (
//                 <div className="testimonial-slide h-full w-full  flex items-center justify-center">
//                   <div className="mx-1 swiper-slide-inner">
//                     <TestimonialCard {...t} isActive={isActive} />
//                   </div>
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Custom Pagination */}
//       <div className="flex justify-center mt-[25px]  md:mt-[63px] space-x-3 custom-pagination" />
//     </section>
//   );
// };

// export default TestimonialsSlider;
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// "use client";

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import TestimonialCard from "./TestimonialCard";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Btn from "@/components/global/Btn";

// const TestimonialsSlider = ({ testimonials = [], onViewAll }) => {
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   return (
//     <section
//       className="py-12 bg-white sm:py-[50px] 1280:py-20 relative"
//       aria-labelledby="client-speak-title"
//     >
//       {/* Heading */}
//       <div className="mb-6 fixup sm:mb-10">
//         <motion.h2
//           id="client-speak-title"
//           initial={{ y: "40px", opacity: 0 }}
//           whileInView={{ y: "0", opacity: 1 }}
//           transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
//           viewport={{ once: true, amount: 0.1 }}
//           className="text-[36px] sm:text-[46px] md:text-[48px] lg:text-[52px] bw-r tracking-[-0.04em] xl:text-[56px] leading-[42px] 768:leading-[60px]"
//         >
//           <motion.span
//             initial={{ y: "40px", opacity: 0 }}
//             whileInView={{ y: "0", opacity: 1 }}
//             transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
//             viewport={{ once: true, amount: 0.1 }}
//             className="bw-m"
//           >
//             Real Experiences, <br />
//           </motion.span>
//           <div className="flex items-center gap-[14px]">
//             Real Impact
//             <span className="mt-1 sm:mt-2.5">
//               <img src="/abstract_pattern.svg" className="abstract_svg" alt="" />
//             </span>
//           </div>
//         </motion.h2>
//       </div>

//       {/* Swiper */}
//       <div className="relative h-full px-0 mx-auto overflow-visible max-w-auto">
//         <Swiper
//           modules={[Navigation]}
//           slidesPerView={1.15}
//           centeredSlides
//           spaceBetween={30}
//           loop={false}
//           navigation={{
//             prevEl: ".swiper-button-prev",
//             nextEl: ".swiper-button-next",
//           }}
//           onSlideChange={(swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           breakpoints={{
//             360: { slidesPerView: 1.2, spaceBetween: 8 },
//             640: { slidesPerView: 1.5 },
//             // 1024: { slidesPerView: 1.8, spaceBetween: 80 },
//             // 1440: { slidesPerView: 2.2 },
//           }}
//           className="testimonial-swiper"
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={t.id || i}>
//               <div className="testimonial-slide h-full w-full flex items-center justify-center">
//                 <div className="mx-1 swiper-slide-inner">
//                   <TestimonialCard {...t} />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Navigation + View All */}
//       <div className="flex items-center justify-between mt-4">
//         <div className="flex gap-3">
//           <button
//             className={`swiper-button-prev flex items-center justify-center w-10 h-10 border rounded-full transition-opacity duration-300 ${
//               isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100"
//             }`}
//             disabled={isBeginning}
//           >
//             <ArrowLeft size={20} />
//           </button>
//           <button
//             className={`swiper-button-next flex items-center justify-center w-10 h-10 border rounded-full transition-opacity duration-300 ${
//               isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
//             }`}
//             disabled={isEnd}
//           >
//             <ArrowRight size={20} />
//           </button>
//         </div>
//         <Btn text="View All" onClick={onViewAll} />
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSlider;
// "use client";

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import TestimonialCard from "./TestimonialCard";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Btn from "@/components/global/Btn";

// const TestimonialsSlider = ({ testimonials = [], onViewAll }) => {
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   // Refs for buttons
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <section
//       className="py-12 bg-[#F5F5F5] sm:py-[50px] 1280:py-20 relative"
//       aria-labelledby="client-speak-title"
//     >
//       {/* Heading */}
//       <div className="mb-6 fixup sm:mb-10">
//         <motion.h2
//           id="client-speak-title"
//           initial={{ y: "40px", opacity: 0 }}
//           whileInView={{ y: "0", opacity: 1 }}
//           transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
//           viewport={{ once: true, amount: 0.1 }}
//           className="text-[36px] sm:text-[46px] md:text-[48px] lg:text-[52px] bw-r tracking-[-0.04em] xl:text-[56px] leading-[42px] 768:leading-[60px]"
//         >
//           <motion.span
//             initial={{ y: "40px", opacity: 0 }}
//             whileInView={{ y: "0", opacity: 1 }}
//             transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
//             viewport={{ once: true, amount: 0.1 }}
//             className="bw-m"
//           >
//             Real Experiences, <br />
//           </motion.span>
//           <div className="flex items-center gap-[14px]">
//             Real Impact
//             <span className="mt-1 sm:mt-2.5">
//               <img src="/abstract_pattern.svg" className="abstract_svg" alt="" />
//             </span>
//           </div>
//         </motion.h2>
//       </div>

//       {/* Swiper */}
//       <div className="relative h-full px-0 mx-auto fixup overflow-visible">
//         {/* <Swiper
//           modules={[Navigation]}
//           slidesPerView={1.15}
//           spaceBetween={30}
//           loop={false}
//           navigation={{
//             prevEl: ".swiper-button-prev",
//             nextEl: ".swiper-button-next",
//           }}
//           onSlideChange={(swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           breakpoints={{
//             360: { slidesPerView: 1.2, spaceBetween: 8 },
//             640: { slidesPerView: 1.5 },
//             1280: { slidesPerView: 2, spaceBetween: 40 },
//             1920: { slidesPerView: 2, spaceBetween: 60 },
//           }}
//           className="testimonial-swiper"
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={t.id || i} className="!h-auto">
//               {({ isActive }) => (
//                 <div
//                   className={`h-full w-full flex items-center justify-center transition-all duration-500 ${
//                     isActive ? "scale-100 opacity-100" : "scale-90 opacity-60"
//                   }`}
//                 >
//                   <div className="w-full">
//                     <TestimonialCard {...t} />
//                   </div>
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper> */}
//         <Swiper
//           modules={[Navigation]}
//           slidesPerView={1.15}
//           spaceBetween={30}
//           loop={false}
//           onSlideChange={(swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           breakpoints={{
//             360: { slidesPerView: 1.2, spaceBetween: 8 },
//             640: { slidesPerView: 1.5 },
//             1280: { slidesPerView: 2, spaceBetween: 40 },
//             1920: { slidesPerView: 2, spaceBetween: 60 },
//           }}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//           }}
//           className="testimonial-swiper"
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={t.id || i} className="!h-auto">
//               {({ isActive, isNext, isPrev }) => (
//                 <div
//                   className={`h-full w-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.7,0,0.4,1)]
//             ${
//               isActive
//                 ? "768:scale-50 1024:scale-75 1280:scale-75 scale-100 opacity-100 z-10"
//                 : isNext || isPrev
//                 ? "768:scale-50 1280:scale-50 opacity-60 z-5"
//                 : "scale-85 opacity-40"
//             }`}
//                 >
//                   <div className="w-full">
//                     <TestimonialCard {...t} />
//                   </div>
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="flex items-center justify-end fixup  mt-4">
//           <button
//             ref={prevRef}
//             className="custom-prev absolute bottom-12 right-40   z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-black/20 bg-transparent flex items-center justify-center"
//           >
//             <img src="/state/stateprev.svg" alt="" />
//           </button>
//           <button
//             ref={nextRef}
//             className="custom-next absolute bottom-12  z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-black/20 bg-transparent flex items-center justify-center"
//           >
//             <img src="/state/statenext.svg" alt="" />
//           </button>
//         </div>
//       </div>

//       {/* Navigation + View All */}
//     </section>
//   );
// };

// export default TestimonialsSlider;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import TestimonialCard from "./TestimonialCard";

// const TestimonialsSlider = ({ testimonials = [], onViewAll }) => {
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   // Refs for buttons
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <section
//       className="py-12 bg-[#F5F5F5] sm:py-[50px] 1280:py-20 relative"
//       aria-labelledby="client-speak-title"
//     >
//       {/* Heading */}
//       <div className="mb-6 fixup sm:mb-10">
//         <motion.h2
//           id="client-speak-title"
//           initial={{ y: "40px", opacity: 0 }}
//           whileInView={{ y: "0", opacity: 1 }}
//           transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
//           viewport={{ once: true, amount: 0.1 }}
//           className="text-[36px] sm:text-[46px] md:text-[48px] lg:text-[52px] bw-r tracking-[-0.04em] xl:text-[56px] leading-[42px] 768:leading-[60px]"
//         >
//           <motion.span
//             initial={{ y: "40px", opacity: 0 }}
//             whileInView={{ y: "0", opacity: 1 }}
//             transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
//             viewport={{ once: true, amount: 0.1 }}
//             className="bw-m"
//           >
//             Real Experiences, <br />
//           </motion.span>
//           <div className="flex items-center gap-[14px]">
//             Real Impact
//             <span className="mt-1 sm:mt-2.5">
//               <img src="/abstract_pattern.svg" className="abstract_svg" alt="" />
//             </span>
//           </div>
//         </motion.h2>
//       </div>
//       <div className="absolute top-[50px] right-[50px]">
//         <img
//           src="/home/clients/bgfrm.svg"
//           alt=""
//           className="max-w-full w-auto sm:h-[80%] md:h-[60%] lg:h-[40%] xl:h-[30%] "
//         />
//       </div>

//       {/* Swiper */}
//       <div className="relative h-full px-0 mx-auto fixup overflow-visible">
//         <Swiper
//           modules={[Navigation]}
//           slidesPerView={1.15}
//           spaceBetween={0}
//           loop={true}
//           onSlideChange={(swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           breakpoints={{
//             360: { slidesPerView: 1.2 },
//             640: { slidesPerView: 1.5 },
//             1280: { slidesPerView: 2 },
//             1920: { slidesPerView: 2 },
//           }}
//           // 👇 Fix: assign refs here
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//           }}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           className="testimonial-swiper"
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={t.id || i} className="!h-auto">
//               {({ isActive, isNext, isPrev }) => (
//                 <div
//                   className={`h-full w-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.7,0,0.4,1)]
//             ${
//               isActive
//                 ? "768:scale-50 1024:scale-75 1280:scale-75 scale-100 opacity-100 z-10"
//                 : isNext || isPrev
//                 ? "768:scale-50 1280:scale-50 opacity-60 z-5"
//                 : "scale-85 opacity-40"
//             }`}
//                 >
//                   <div className="w-full">
//                     <TestimonialCard {...t} />
//                   </div>
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation buttons */}
//         <div className="flex items-center justify-end fixup mt-4">
//           <button
//             ref={prevRef}
//             className="absolute bottom-12 bg-white right-24 1440:right-40 z-10 w-10 h-10 md:w-[80px] md:h-[80px] border border-black/20 flex items-center justify-center"
//           >
//             {/* <img
//               src="/state/stateprev.svg"
//               className="w-10 h-10 md:w-[80px] md:h-[80px]"
//               alt="Previous"
//             /> */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="35"
//               height="36"
//               viewBox="0 0 35 36"
//               fill="none"
//             >
//               <path
//                 d="M34.0007 18.0002H1.82738"
//                 stroke="black"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M17.9141 34.0869L1.82738 18.0002L17.9141 1.91355"
//                 stroke="black"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//           <button
//             ref={nextRef}
//             className="absolute bottom-12 right-0 1440:right-16 z-10 w-10 h-10 md:w-[80px] md:h-[80px] border border-black/20 bg-white flex items-center justify-center"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="35"
//               height="36"
//               viewBox="0 0 35 36"
//               fill="none"
//             >
//               <path
//                 d="M0.999257 17.9998H33.1726"
//                 stroke="black"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M17.0859 1.91309L33.1726 17.9998L17.0859 34.0864"
//                 stroke="black"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSlider;

"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialsSlider = ({ testimonials = [], onViewAll }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Refs for buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className=" bg-[#F5F5F5] py-[45px] 1024:pt-[60px] 1280:pb-[30px] 1366:pb-[80px] 1280:pt-[60px] relative"
      aria-labelledby="client-speak-title"
    >
      {/* Heading */}
      <div className="mb-6 fixup sm:mb-10">
        <motion.h2
          id="client-speak-title"
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-[36px] sm:text-[46px] md:text-[48px] lg:text-[52px]  bw-r tracking-[-0.04em] xl:text-[64px] xl:leading-[74px] leading-[42px] 768:leading-[60px]"
        >
          <motion.span
            initial={{ y: "40px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bw-m"
          >
            Real Experiences, <br />
          </motion.span>
          <div className="flex items-center gap-[14px]">
            Real Impact
            <span className="mt-1 sm:mt-2.5">
              <img
                src="/abstract_pattern.svg"
                className="abstract_svg"
                alt=""
              />
            </span>
          </div>
        </motion.h2>
      </div>
      <div className="absolute top-[50px] sm:right-[40px] 1024:right-[50px] xl:right-[65px]">
        <img
          src="/home/clients/bgfrm.svg"
          alt=""
          className="max-w-full w-auto sm:h-[30%] md:h-[10%] md:w-[322px]  lg:h-[40%] lg:w-[400px] xl:h-[30%] xl:w-[500px] 1366:w-auto "
        />
      </div>

      {/* Swiper */}
      <div className="hidden 1024:block relative px-0 mx-auto fixup h-[700px] overflow-visible">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.15}
          spaceBetween={0}
          loop={true}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            360: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 2 },
            1920: { slidesPerView: 2 },
          }}
          // 👇 Fix: assign refs here
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="testimonial-swiper h-[700px]"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={t.id || i} className="!h-full">
              {({ isActive, isNext, isPrev }) => (
                <div
                  className={`
        h-full w-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.7,0,0.4,1)]
        ${isActive ? "scale-100 mt-[0px]" : "scale-[0.925] mt-[-30px]"}
      `}
                >
                  <div className="w-full min-h-full">
                    <TestimonialCard {...t} />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex items-center justify-end  fixup ">
          <button
            ref={prevRef}
            // className="absolute bottom-0 bg-[#F5F5F5] right-24  z-10 w-10 h-10 md:w-[80px] md:h-[80px] border border-black/20 flex items-center justify-center"
            className="absolute bottom-0 1024:bottom-[45px] 1366:bottom-[0px] 1536:-bottom-8   bg-[#F5F5F5] right-24 z-10 w-10 h-10 md:w-[80px] md:h-[80px] border border-black/20 flex items-center justify-center"
          >
            {/* <img
              src="/state/stateprev.svg"
              className="w-10 h-10 md:w-[80px] md:h-[80px]"
              alt="Previous"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
            >
              <path
                d="M34.0007 18.0002H1.82738"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.9141 34.0869L1.82738 18.0002L17.9141 1.91355"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            ref={nextRef}
            // className="absolute bottom-0 right-0  z-10 w-10 h-10 md:w-[80px] md:h-[80px] border border-black/20 bg-[#F5F5F5] flex items-center justify-center"
            className="absolute bottom-0 1024:bottom-[45px] 1366:bottom-0 1536:-bottom-8  right-0 z-10 w-10 h-10 md:w-[80px] md:h-[80px] border border-black/20 bg-[#F5F5F5] flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
            >
              <path
                d="M0.999257 17.9998H33.1726"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.0859 1.91309L33.1726 17.9998L17.0859 34.0864"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Slider */}
      <div className="block 1024:!hidden fixup">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: ".test-prev",
            nextEl: ".test-next",
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={t.id || idx}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation + View All */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-3">
            <button
              className={`test-prev flex border border-black/20 w-12 h-12 items-center justify-center ${
                isBeginning ? "opacity-40 cursor-not-allowed" : ""
              }`}
              disabled={isBeginning}
            >
              <ArrowLeft size={24} strokeWidth={1} />
            </button>
            <button
              className={`test-next flex border border-black/20 w-12 h-12 items-center justify-center ${
                isEnd ? "opacity-40 cursor-not-allowed" : ""
              }`}
              disabled={isEnd}
            >
              <ArrowRight size={24} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;

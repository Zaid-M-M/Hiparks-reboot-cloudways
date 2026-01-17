// import React from "react";
// import Image from "next/image"; // ✅ make sure this is imported
// import Btn from "@/components/global/Btn";
// import { motion } from "framer-motion";

// const Header = () => {
//   return (
//     <div className="flex flex-col z-20 gap-[34px]">
//       {/* <div className="leading-[460%]"> */}
//       <div className="leading-[69.4px]">
//         <h1 className="text-[66px] bw-m h1>
//         <div className="flex items-center gap-[10px]">
//           <span className="text-[66px]  bw-r
//             Solutions
//           </span>
//           <div style={{ width: 133, height: 58, position: "relative" }}>
//             <Image
//               src="/frame.png"
//               alt="Frame"
//               fill // use fill instead of width/height here
//               style={{ objectFit: "contain" }}
//             />
//           </div>
// //         </div>
//         <p className="w-fit pt-[10px] text-[16px] inter-r leading-[30px] m-0">
//           Placeholder for sub-heading here...
//         </p>
//       </div>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.5 }}
//       >
//         <Btn text={"EXPLORE OUR 360° SOLUTIONS"} />
//       </motion.div>
//     </div>
//   );
// };

// export default Header;
// "use client";
// import React from "react";
// import Image from "next/image";
// import Btn from "@/components/global/Btn";
// import { motion } from "framer-motion";

// const Header = () => {
//   return (
//     <div className="flex flex-col z-20 gap-[34px]">
//       <div className="leading-[69.4px]">
//         <motion.h1
//           className="text-[66px] bw-m
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
//         >
//           Our Integrated
//         </motion.h1>
//         {/*
//         <motion.div
//           className="flex items-center gap-[10px]"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           <motion.span
//             className="text-[66px] bw-r
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
//           >
//             Solutions
//           </motion.span>

//           <motion.div
//             style={{ width: 133, height: 58, position: "relative" }}
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
//           >
//             <Image
//               src="/frame.png"
//               alt="Frame"
//               fill
//               style={{ objectFit: "contain" }}
//             />
//           </motion.div>
//         </motion.div> */}

//         <motion.div className="flex items-center gap-[10px]">
//           <motion.span
//             initial={{ opacity: 0, x: -80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
//             className="text-[66px]  bw-r
//           >
//             Solutions
//           </motion.span>
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             animate={{ opacity: 1, x: 0 }}
//             // initial={{ scale: 0.8, opacity: 0 }}
//             // animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
//             style={{ width: 133, height: 58, position: "relative" }}
//           >
//             <Image
//               src="/frame.png"
//               alt="Frame"
//               fill // use fill instead of width/height here
//               style={{ objectFit: "contain" }}
//             />
//           </motion.div>{" "}
//         </motion.div>

//         <motion.p
//           className="w-fit pt-[10px] text-[16px] inter-r leading-[30px] m-0"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.7, duration: 0.4 }}
//         >
//           Placeholder for sub-heading here...
//         </motion.p>
//       </div>

//       <motion.div
//         // initial={{ opacity: 0, y: 20 }}
//         // animate={{ opacity: 1, y: 0 }}
//         // transition={{ delay: 0.6, duration: 0.5 }}
//         initial={{ opacity: 0, x: -80 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
//       >
//         <Btn text={"EXPLORE OUR 360° SOLUTIONS"} />
//       </motion.div>
//     </div>
//   );
// };

// export default Header;

"use client";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
import Btn from "@/components/global/Btn";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [targetWidth, setTargetWidth] = useState(130);

  useEffect(() => {
    const handleResize = () => {
      setTargetWidth(window.innerWidth < 640 ? 84 : 100);
    };
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex flex-col z-20 gap-[30px]">
      <div className="">
        <motion.h2
          className=" text-[36px] whitespace-nowrap overflow-hidden tracking-tight leading-[118%] lg:leading-[60px] xl:leading-[74px] 1440:leading-[125%]  md:text-[45px] lg:text-[56px] xl:text-[64px] bw-m"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, amount: 0.2 }}
          // animate={{ width: 0 }}
          transition={{
            // delay: 0.2,
            duration: 1.4,
            ease: [0.7, 0, 0.4, 1],
            // type: "tween",
          }}
        >
          Integrated
        </motion.h2>

        <motion.div className="flex gap-[10px] md:gap-[17px] h-fit items-end">
          <div className="w-fit">
            <motion.h2
              // initial={{ width: 0 }}
              // whileInView={{ width: "100%" }}
              // viewport={{ once: true, amount: 0.2 }}
              // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              className="text-[36px] whitespace-nowrap max-w-fit overflow-hidden md:text-[45px] leading-[120%] xl:leading-[74px] tracking-tighter lg:text-[56px] xl:text-[64px] bw-r"
            >
              Solutions
            </motion.h2>
          </div>

          <motion.div
            className="lg:flex hidden justify-start h-full items-end  overflow-hidden"
            // initial={{ width: 0 }}
            // whileInView={{ width: "157px" }}
            // viewport={{ once: true, amount: 0.6 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.5 }}
          >
            <img
              src="/Hiparks-patter.webp"
              alt="Truck"
              className="abstract_svg mb-0"
            />
          </motion.div>
          <motion.div
            className="lg:hidden flex justify-start items-center mb-2.5 sm:mb-0 sm:justify-start"
            // initial={{ width: 0 }}
            // whileInView={{ width: "172px" }}
            // viewport={{ once: true, amount: 0.6 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.5 }}
          >
            <img
              src="/Hiparks-patter.webp"
              alt="Truck"
              className="abstract_svg"
            />
          </motion.div>
        </motion.div>
        <motion.p
          className="w-full sm:w-fit sm:pt-[14px] pt-2 text-[16px] md:text-[18px] leading-[28px] 1440:text-[20px] bw-r text-black 1440:leading-[30px] m-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            delay: 0.6,
            duration: 0.65,
            ease: "easeOut",
            type: "tween",
          }}
        >
          Our commitment is to build the systems that keep your business moving.
          Hence, our integrated approach ensures you have everything you need to
          scale smarter and operate faster, while caring for the people who
          power your growth.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          delay: 0.65,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <Btn
          href="/integrated-business-solutions/"
          text={"Integrated Solutions"}
        />
      </motion.div>
    </div>
  );
};

export default Header;

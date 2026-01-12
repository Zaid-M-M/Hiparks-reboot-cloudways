// "use client";

// import React from "react";
// import Btn from "@/components/global/Btn";
// import CardList from "./CardList";
// import { motion } from "framer-motion";
// import FeatherText from "@/components/global/FeatherText"; // ✅ Adjust the path if needed
// import {
//   containerVariants,
//   featherItem,
// } from "../../../../animations/motionVariants";

// const tabData = [
//   {
//     title: "Case Studies – Driving Business Excellence",
//     description:
//       "Strategic implementation of Horizon's top-tier industrial and logistics real estate solutions.",
//     cards: [
//       {
//         title: "Aseptic Carton Manufacturing Facility for SIG Combibloc",
//         image: "/d1.png",
//         category: "Case Studies",
//         // link: "#",
//       },
//       {
//         title: "Elevating Standards: Transforming Industrial Parks...",
//         image: "/d2.png",
//         category: "Case Studies",
//         // link: "#",
//       },
//       {
//         title: "Built-to-Suit Manufacturing Facility for RENK India...",
//         image: "/d3.png",
//         category: "Case Studies",
//         // link: "#",
//       },
//     ],
//   },
//   {
//     title: "Insights from the Blog",
//     description: "Explore expert opinions, tutorials, and development stories.",
//     cards: [
//       {
//         title: "Building Resilient Supply Chains in 2025",
//         image: "/d1.png",
//         category: "Blog",
//         // link: "#",
//       },
//       {
//         title: "The Rise of Smart Warehousing",
//         image: "/d2.png",
//         category: "Blog",
//         // link: "#",
//       },
//     ],
//   },
//   {
//     title: "Company News",
//     description:
//       "Stay informed about Horizon's recent developments and updates.",
//     cards: [
//       {
//         title: "Horizon Opens New Logistics Hub in Pune",
//         image: "/d2.png",
//         category: "News",
//         // link: "#",
//       },
//     ],
//   },
//   {
//     title: "Upcoming Events",
//     description: "Join our conferences, meetups, and webinars.",
//     cards: [
//       {
//         title: "Industrial Infra Conference 2025",
//         image: "/d1.png",
//         category: "Events",
//         // link: "#",
//       },
//     ],
//   },
//   {
//     title: "Press Releases",
//     description: "Official announcements from Horizon leadership.",
//     cards: [
//       {
//         title: "Horizon Announces Strategic Acquisition",
//         image: "/d2.png",
//         category: "Press Release",
//         // link: "#",
//       },
//     ],
//   },
// ];

// const TabContent = ({ activeTab }) => {
//   const content = tabData[activeTab] ?? tabData[0]; // fallback to index 0
//   return (
//     // <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[60px] mt-[60px]">
//     //   {/* Left column with feather text + CTA */}
//     //   <motion.div
//     //     variants={containerVariants}
//     //     initial="hidden"
//     //     whileInView="show"
//     //     viewport={{ once: true, amount: 0.3 }}
//     //     className="flex flex-col justify-center max-w-[70%] gap-[20px]"
//     //   >
//     //     {/* <h1 className="text-[56px] bw-m
//     //       <FeatherText text="Case Studies – Driving Business Excellence" />
//     //     </h1> */}

//     //     {/* <motion.p
//     //       variants={featherItem}
//     //       className="inter-r text-[22px] leading-[32px]"
//     //     >
//     //       Strategic implementation of Horizon's top-tier industrial and
//     //       logistics real estate solutions.
//     //     </motion.p> */}
//     //     {/* <p className="inter-r text-[22px] leading-[32px]">
//     //       <FeatherText text="Strategic implementation of Horizon's top-tier industrial and logistics real estate solutions." />
//     //     </p> */}
//     //     <h1 className="text-[56px] bw-m
//     //       {/* <FeatherText text="Case Studies – Driving Business Excellence" /> */}
//     //       <FeatherText text={content.title} />
//     //     </h1>

//     //     {/* <div className="absolute inset-0 bottom-0 left-0 -z-10 rounded-xl bg-[radial-gradient(circle_at_30%_30%,_#E8D8F9,_#E9FDF6,_transparent)] opacity-80 blur-2xl pointer-events-none"></div> */}
//     //     <motion.p
//     //       initial={{ opacity: 0, y: "80px" }}
//     //       whileInView={{ opacity: 1, y: 0 }}
//     //       transition={{ duration: 2, delay: 0.2, ease: [1, 0, 0.35, 1] }}
//     //       viewport={{ once: true, amount: 0.2 }}
//     //       className="inter-r text-[22px] leading-[32px]"
//     //     >
//     //       {/* <FeatherText text="Strategic implementation of Horizon's top-tier industrial and logistics real estate solutions." /> */}
//     //       Strategic implementation of Horizon's top-tier industrial and
//     //       logistics real estate solutions.
//     //     </motion.p>

//     //     <motion.div
//     //       initial={{ opacity: 0, y: "80px" }}
//     //       whileInView={{ opacity: 1, y: 0 }}
//     //       transition={{ duration: 2, delay: 0.3, ease: [1, 0, 0.35, 1] }}
//     //       viewport={{ once: true, amount: 0.2 }}
//     //     >
//     //       <Btn text="View All" />
//     //     </motion.div>
//     //   </motion.div>

//     //   {/* Right column (CardList) */}
//     //   <div className="flex flex-col gap-[20px] overflow-hidden">
//     //     <CardList />
//     //   </div>
//     // </div>
//     <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[60px] mt-[35px] xl:mt-[60px]">
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//         className="flex flex-col justify-center xl:justify-center max-w-[70%] gap-[15px] xl:gap-[20px]"
//       >
//         <h1 className=" text-[32px] sm:text-[38pxpx] md:text-[46px] xl:text-[56px] bw-m
//           <FeatherText text={content.title} />
//         </h1>

//         <motion.p
//           initial={{ opacity: 0, y: "80px" }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 2, delay: 0.2, ease: [1, 0, 0.35, 1] }}
//           viewport={{ once: true, amount: 0.2 }}
//           className="inter-r text-[22px] leading-[126%] md:leading-[28px] lg:leading-[32px]"
//         >
//           {content.description}
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: "80px" }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 2, delay: 0.3, ease: [1, 0, 0.35, 1] }}
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <Btn text="View All" />
//         </motion.div>
//       </motion.div>

//       <CardList cards={content.cards} />
//     </div>
//   );
// };
// export default TabContent;

// import React from "react";
// // import { tabData } from "../shared/tabData";
// import Btn from "@/components/global/Btn";
// import CardList from "./CardList";
// import { motion } from "framer-motion";
// import FeatherText from "@/components/global/FeatherText";
// import { containerVariants } from "../../../../animations/motionVariants";

// const TabContent = ({ content }) => {
//   // const tabsContent = [posts, events, news, pressRelease];
//   // const content = tabsContent[activeTab] ?? posts; // fallback
//   return (
//     <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 768:gap-[30px] 1024:gap-[0px] xl:gap-[60px] mt-[35px] xl:mt-[60px]">
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//         className="flex flex-col justify-center md:w-[47%] max-w-[70%] lg:w-full md:gap-2 lg:gap-[20px]"
//       >
//         <motion.h1
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 1.4, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
//           className="text-[32px]  sm:text-[38px] lg:text-[46px] xl:text-[56px] bw-m tracking-tight leading-[100%] 1440:leading-[120%] "
//         >
//           {/* <FeatherText text={content.title} /> */}
//           {content[0]?.title}
//         </motion.h1>
//         <motion.p
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3, ease: [1, 0, 0.3, 1] }}
//           viewport={{ once: true, amount: 0.1 }}
//           className="inter-r md:text-[18px] lg:text-[22px] md:leading-[26px] lg:leading-[32px]"
//         >
//           {content.description}
//         </motion.p>
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6, ease: [1, 0, 0.3, 1] }}
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           <Btn text="View All" />
//         </motion.div>
//       </motion.div>
//       <CardList cards={content.cards} />
//     </div>
//   );
// };

// export default TabContent;

// import React from "react";
// import Btn from "@/components/global/Btn";
// import CardList from "./CardList";
// import { motion } from "framer-motion";
// import FeatherText from "@/components/global/FeatherText";
// import { containerVariants } from "../../../../animations/motionVariants";

// const TabContent = ({ content }) => {
//   // Normalize content in case it's an array or single object
//   // const normalizedContent = Array.isArray(content) ? content[0] : content || {};
//   if (!Array.isArray(content) || content.length === 0) {
//     return <p>No content available.</p>;
//   }

//   const [main, ...cards] = content;
//   console.log(content);

//   return (
//     <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 768:gap-[30px] 1024:gap-[0px] xl:gap-[60px] mt-[35px] xl:mt-[60px]">
//       {/* Left Text Section */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//         className="flex flex-col justify-center md:w-[47%] max-w-[70%] lg:w-full md:gap-2 lg:gap-[20px]"
//       >
//         <motion.h1
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 1.4, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
//           className="text-[32px] sm:text-[38px] lg:text-[46px] xl:text-[56px] bw-m tracking-tight leading-[100%] 1440:leading-[120%]"
//         >
//           {/* If you want the animated text effect, uncomment below */}
//           {/* <FeatherText text={normalizedContent.title} /> */}
//           {main.title}
//         </motion.h1>

//         <motion.p
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3, ease: [1, 0, 0.3, 1] }}
//           viewport={{ once: true, amount: 0.1 }}
//           className="inter-r md:text-[18px] lg:text-[22px] md:leading-[26px] lg:leading-[32px]"
//         >
//           {main.description || "No description provided."}
//         </motion.p>

//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6, ease: [1, 0, 0.3, 1] }}
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           <Btn text="View All" />
//         </motion.div>
//       </motion.div>
//       {/* Right Cards Section */}
//       <CardList cards={cards.slice(0, 4)} />{" "}
//     </div>
//   );
// };

// export default TabContent;

// TabContent.jsx (Corrected)
// import React from "react";
// import Btn from "@/components/global/Btn";
// import CardList from "./CardList";
// import { motion } from "framer-motion";
// import FeatherText from "@/components/global/FeatherText";
// import { containerVariants } from "../../../../animations/motionVariants";
// import { tabTexts } from "@/utils/tabTexts";

// const TabContent = ({ content, activeTab }) => {
//   if (!Array.isArray(content) || content.length === 0) {
//     return <p>No content available.</p>;
//   }

//   // Use the first item for the main section, and the rest for the cards.
//   // const main = content[0];
//   const cards = content;
//   // const main = null; // Or skip it
//   // const cards = content.slice(0, 3);

//   console.log(cards.length, cards);

//   return (
//     <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 768:gap-[30px] 1024:gap-[0px] xl:gap-[60px] mt-[35px] xl:mt-[60px] ">
//       {/* Left Text Section */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//         className="flex flex-col justify-center md:w-[47%] max-w-[70%] lg:w-full md:gap-[18px] lg:gap-[20px]"
//       >
//         <motion.h1
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 1.4, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
//           className="text-[32px] sm:text-[38px] lg:text-[46px] xl:text-[56px] bw-m tracking-tight leading-[100%] 1440:leading-[120%]"
//         >
//           {tabTexts[activeTab]?.title}
//         </motion.h1>

//         {/* <motion.p
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3, ease: [1, 0, 0.3, 1] }}
//           viewport={{ once: true, amount: 0.1 }}
//           className=" md:text-[18px] lg:text-[22px] bw-r md:leading-[26px] lg:leading-[32px]"
//         >
//           {tabTexts[activeTab]?.description}
//         </motion.p> */}

//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6, ease: [1, 0, 0.3, 1] }}
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           <Btn text="View All" />
//         </motion.div>
//       </motion.div>
//       {/* Right Cards Section */}
//       <CardList cards={cards} activeTab={activeTab} />
//     </div>
//   );
// };

// export default TabContent;

import React from "react";
import Btn from "@/components/global/Btn";
import { AnimatePresence, motion } from "framer-motion";
import { containerVariants } from "../../../../src/animations/motionVariants";
import { tabTexts } from "@/src/utils/tabTexts";
import { CardSlider } from "../tabbed-mobile/CardSlider";

// const TabContent = ({ content, activeTab, isLoading }) => {
//   if (!Array.isArray(content) || content.length === 0) {
//     return <p>No content available.</p>;
//   }

//   const cards = content;

//   const handleViewAll = () => {
//     console.log("View all clicked for:", tabTexts[activeTab]?.title);
//   };

//   return (
//     <div className="relative z-10 grid grid-cols-1 768:gap-[30px]1024:gap-[0px] xl:gap-[60px] xl:mt-[35px] ">
//       {/* Left Text Section */}

//       {/* Right Cards Section - now a Slider */}
//       <div className="w-full  ">
//         <CardSlider
//           cards={cards}
//           onViewAll={handleViewAll}
//           type={tabTexts[activeTab]?.slug || ""}
//           isLoading={isLoading}
//         />
//       </div>
//     </div>
//   );
// };

// export default TabContent;

const TabContent = ({ content, activeTab, isLoading }) => {
  if (!Array.isArray(content)) return null;

  const cards = content;
  console.log(content);
  const handleViewAll = () => {
    console.log("View all clicked for:", tabTexts[activeTab]?.title);
  };
  console.log("Check Content", content);
  console.log("Current tab type:", tabTexts[activeTab]?.slug);

  return (
    <div className="relative z-10 grid grid-cols-1 768:gap-[30px] 1024:gap-[0px] xl:gap-[60px] xl:mt-[35px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} // important! triggers animation on tab change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Right Cards Section */}
          <div className="w-full">
            <CardSlider
              cards={cards}
              onViewAll={handleViewAll}
              type={tabTexts[activeTab]?.slug || ""}
              isLoading={isLoading}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabContent;

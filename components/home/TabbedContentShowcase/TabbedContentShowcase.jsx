// "use client";
// import React, { useState } from "react";
// import TabHeader from "./TabHeader";
// import TabContent from "./_components/TabContent";

// const TabbedContentShowcase = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div className="relative min-h-[100vh] w-full py-[80px]  overflow-hidden">
//       <div className="hidden sm:block">
//         <div className="fix">
//           <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
//           <TabContent activeTab={activeTab} />
//         </div>
//         <div
//           className="absolute bottom-0 left-0 -translate-x-1/2 w-[420px] h-[290px]
//         bg-[#7F56D9] opacity-50 blur-[80px] pointer-events-none -z-10 rounded-full"
//         />
//       </div>
//       <div className="block sm:hidden">
//         <TabContent activeTab={activeTab} />
//       </div>
//     </div>
//   );
// };

// export default TabbedContentShowcase;

// "use client";
// import React, { useState } from "react";
// import TabHeader from "./TabHeader";
// import TabContent from "./_components/TabContent";
// import MobileTabbedContent from "./MobileTabbedContent";

// const TabbedContentShowcase = ({ tabData }) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const { posts, events, news, pressRelease } = tabData;

//   return (
//     <div className="relative h-auto w-full py-[48px] lg:py-[80px] overflow-hidden">
//       {/* 🖥️ Desktop View */}
//       <div className="absolute w-[438.795px] h-[454.148px] bg-[#7F56D9] bottom-6 left-0 opacity-15 blur-[92px]"></div>
//       {/* <div className="absolute w-[200.795px] h-[150.148px] bg-[#7F56D9] bottom-2 left-0 opacity-15 blur-[92px]"></div> */}

//       <div className="absolute w-[278.128px] h-[442.8px] bg-[#0db14b] bottom-0.5 left-5 opacity-10 blur-[92px] 1920:text-9xl "></div>
//       <div className="relative hidden min-h-full md:block">
//         <div className="fix">
//           <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
//           <TabContent
//             activeTab={activeTab}
//             posts={posts}
//             events={events}
//             news={news}
//             pressRelease={pressRelease}
//           />
//         </div>

//         <div
//           className="absolute bottom-0 left-0 -translate-x-1/2 w-[420px] h-[290px]
//           bg-[#7F56D9] opacity-50 blur-[80px] pointer-events-none -z-10 rounded-full"
//         />
//       </div>

//       {/* 📱 Mobile View */}
//       <div className="block md:hidden">
//         <MobileTabbedContent
//           posts={posts}
//           events={events}
//           news={news}
//           pressRelease={pressRelease}
//         />
//       </div>
//     </div>
//   );
// };

// export default TabbedContentShowcase;
///**************************************************************** */

// "use client";
// import React, { useState, useEffect } from "react";
// import TabHeader from "./TabHeader";
// import TabContent from "./_components/TabContent";
// import { fetchTabContent } from "@/lib/fetchSingleTab";
// import MobileTabbedContent from "./MobileTabbedContent";

// const TabbedContentShowcase = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [tabData, setTabData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch whenever tab changes
//   useEffect(() => {
//     setLoading(true);
//     fetchTabContent(activeTab)
//       .then((data) => {
//         setTabData(data);
//       })
//       .finally(() => setLoading(false));
//   }, [activeTab]);

//   return (
//     <div className="relative h-full w-full py-[48px] lg:py-[80px] overflow-hidden fix">
//       {/* Desktop View */}
//       <div className="relative hidden min-h-[805px] md:block">
//         <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />

//         {loading ? (
//           <p className="p-6">Loading...</p>
//         ) : (
//           <TabContent activeTab={activeTab} content={tabData} />
//         )}
//       </div>

//       {/* Mobile View */}
//       <div className="block md:hidden">
//         {!loading && <MobileTabbedContent tabData={tabData} />}
//       </div>
//     </div>
//   );
// };

// export default TabbedContentShowcase;
///**************************************************************** */

// "use client";
// import React, { useState, useEffect } from "react";
// import TabHeader from "./TabHeader";
// import TabContent from "./_components/TabContent";
// import { fetchTabContent } from "@/src/lib/fetchSingleTab";
// import { fetchAllTabsContent } from "@/src/lib/fetchAllTabsContent"; // you'll add this
// import MobileTabbedContent from "./MobileTabbedContent";
// import { tabTexts } from "@/src/utils/tabTexts";

// const TabbedContentShowcase = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [tabData, setTabData] = useState([]);
//   const [allTabData, setAllTabData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Fetch data whenever activeTab or isMobile changes
//   useEffect(() => {
//     setLoading(true);

//     const fetchData = async () => {
//       try {
//         if (isMobile) {
//           const data = await fetchAllTabsContent();
//           setAllTabData(data);
//         } else {
//           const data = await fetchTabContent(activeTab);
//           setTabData(data);
//         }
//       } catch (error) {
//         console.error("Error fetching tabs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [activeTab, isMobile]);

//   return (
//     <div className="relative h-full w-full py-[45px] lg:py-[100px] 1280:py-[100px] overflow-hidden  ">
//       {/* Gradient Vectors - top right */}
//       <div className="absolute top-0 right-0 1024:right-40 xl:left-auto z-0 pointer-events-none">
//         <img
//           className="green_vctr w-[200px] md:w-[200px] opacity-[0.6] lg:w-[300px] xl:w-[500px] mt-[-50px] xl:right-[-620px] xl:mt-[60px]"
//           src="/green_vector.svg"
//           alt="Green Vector"
//         />
//         <img
//           className="orange_vctr w-[200px] md:w-[200px]  opacity-[0.6] lg:w-[300px] xl:w-[500px] mt-[-200px] 1024:mt-[-50px] xl:right-[800px] xl:mt-[-500px]"
//           src="/orange_vector.svg"
//           alt="Orange Vector"
//         />
//       </div>

//       <div className="fixup">
//         {/* Header Content */}
//         <div className="mb-6 flex flex-col 1024:flex-row gap-[22px] 1024:gap-[60px] 1366:gap-0 sm:mb-[50px] relative z-10">
//           {/* Left: Titles */}
//           <div className="w-full 1024:w-1/2">
//             <h3 className="text-[36px] sm:text-[45px] md:text-[48px] lg:text-[52px]  1280:text-[64px] 1280:leading-[74px] bw-m tracking-[-0.04em] leading-[46px] 768:leading-[55px]">
//               Latest From
//             </h3>
//             <div className="flex gap-[14px]">
//               <h2 className="text-[36px] sm:text-[45px] md:text-[48px] 1280:text-[64px] 1280:leading-[74px] bw-r tracking-[-0.04em] leading-[46px] 768:leading-[55px]">
//                 The Ground
//               </h2>
//               <span className="mt-1 ">
//                 <img
//                   src="/abstract_pattern.svg"
//                   className="abstract_svg"
//                   alt=""
//                 />
//               </span>
//             </div>
//           </div>

//           {/* Right: Description */}
//           <div className="w-full 1024:w-1/2">
//             <p className="bw-r text-[16px] leading-[26px] 1280:text-[18px] 1280:leading-[28px] 1440:text-[20px] mt-2.5 1440:leading-[30px]">
//               Catch up on what’s happening across Horizon’s parks - from new
//               projects and fresh collaborations to stories shaping India’s
//               supply chain growth. Stay tuned for the latest milestones,
//               insights, and on-ground developments driving our journey forward.
//             </p>
//           </div>
//         </div>

//         {/* Desktop View */}
//         <div className="relative hidden h-auto 1024:block z-10">
//           {/* <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
//           {loading ? (
//             <p className="p-6 mt-7  text-3xl">Loading...</p>
//           ) : (
//             <TabContent activeTab={activeTab} content={tabData} />
//           )} */}
//           <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
//           <TabContent
//             activeTab={activeTab}
//             content={tabData}
//             isLoading={loading}
//           />
//         </div>

//         {/* Mobile View */}
//         {isMobile && !loading && <MobileTabbedContent tabData={allTabData} />}
//       </div>
//     </div>
//   );
// };

// export default TabbedContentShowcase;

"use client";
import React, { useState, useEffect } from "react";
import TabHeader from "./TabHeader";
import TabContent from "./_components/TabContent";
import { fetchTabContent } from "@/src/lib/fetchSingleTab";
import { fetchAllTabsContent } from "@/src/lib/fetchAllTabsContent";
import MobileTabbedContent from "./MobileTabbedContent";

const TabbedContentShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState([]); // for desktop single tab
  const [allTabData, setAllTabData] = useState([]); // for mobile all tabs
  const [loading, setLoading] = useState(false);

  // Fetch both desktop (single tab) and mobile (all tabs) data
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const [single, all] = await Promise.all([
          fetchTabContent(activeTab),
          fetchAllTabsContent(),
        ]);
        console.log("allTabData >>>", allTabData);
        setTabData(single);
        setAllTabData(all);
        console.log(single);
      } catch (error) {
        console.error("Error fetching tab data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);
  return (
    <div className="relative h-full w-full py-[45px] lg:py-[100px] overflow-hidden">
      {/* Gradient Vectors */}
      <div className="absolute top-0 right-0 lg:right-40 xl:left-auto z-0 pointer-events-none">
        <img
          className="green_vctr w-[200px] md:w-[200px] opacity-[0.6] lg:w-[300px] xl:w-[500px] mt-[-50px] xl:right-[-620px] xl:mt-[60px]"
          src="/green_vector.svg"
          alt="Green Vector"
        />
        <img
          className="orange_vctr w-[200px] md:w-[200px] opacity-[0.6] lg:w-[300px] xl:w-[500px] mt-[-200px] lg:mt-[-50px] xl:right-[800px] xl:mt-[-500px]"
          src="/orange_vector.svg"
          alt="Orange Vector"
        />
      </div>

      <div className="fixup relative z-10">
        {/* Header Content */}
        <div className="mb-6 flex flex-col lg:flex-row gap-[0px] md:gap-[22px] lg:gap-[60px] sm:mb-[50px]">
          {/* Left: Titles */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-[36px] sm:text-[45px] md:text-[48px] lg:text-[52px] 1280:text-[64px] 1280:leading-[74px] bw-m tracking-[-0.04em] leading-[46px] md:leading-[55px]">
              Latest From
            </h3>
            <div className="flex gap-[10px] md:gap-[17px]">
              <h2 className="text-[36px] sm:text-[45px] md:text-[48px] 1280:text-[64px] 1280:leading-[74px] bw-r tracking-[-0.04em] leading-[46px] md:leading-[55px]">
                The Ground
              </h2>
              <span className="mt-2">
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt=""
                />
              </span>
            </div>
          </div>

          {/* Right: Description */}
          <div className="w-full lg:w-1/2">
            <p className="bw-r text-[16px] leading-[26px] 1280:text-[18px] 1280:leading-[28px] 1440:text-[20px] mt-2.5 1440:leading-[30px]">
              Catch up on what’s happening across Horizon’s parks - from new
              projects and fresh collaborations to stories shaping India’s
              supply chain growth. Stay tuned for the latest milestones,
              insights, and on-ground developments driving our journey forward.
            </p>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabContent
            activeTab={activeTab}
            content={tabData}
            isLoading={loading}
          />
        </div>

        {/* Mobile View */}
      </div>
      <div className="block fixup lg:!hidden">
        <MobileTabbedContent tabData={allTabData} />
      </div>
    </div>
  );
};

export default TabbedContentShowcase;

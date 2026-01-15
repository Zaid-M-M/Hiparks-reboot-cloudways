// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// import { ReactLenis, useLenis } from "lenis/react";
// import HeroBannerClient from "./Hero/HeroBannerClient";
// import Agile from "./Agile/page";
// import Screen from "./Stats/Screen";
// import MobileScreen from "./Stats/MobileScreen";

// // Dynamically import below-the-fold components
// const MapSection = dynamic(() => import("./Map/MapSection"), { ssr: false });
// const HomeMobileMapSection = dynamic(
//   () => import("./Map/HomeMobileMapSection"),
//   { ssr: false }
// );
// const IntegratedSolutionsSection = dynamic(() =>
//   import("./IntegratedSolutions/IntegratedSolutionsSection")
// );
// const KeySectors = dynamic(() => import("./keySectors"));
// const TestMain = dynamic(() => import("./testimonials/TestMain"));
// const BrandShowcase = dynamic(() => import("./Brands/BrandShowcase"));
// const Screen2 = dynamic(() => import("./Sustainaibility/Screen2"));
// const MobileSustainaibility = dynamic(() =>
//   import("./Sustainaibility/mobile/MobileSustainaibility")
// );
// const TabbedContentShowcase = dynamic(() =>
//   import("./TabbedContentShowcase/TabbedContentShowcase")
// );

// const HomeWrapper = ({ heroData, testimonials = [] }) => {
//   useLenis(() => {});

//   return (
//     <ReactLenis
//       root
//       options={{
//         lerp: 0.07,
//         wheelMultiplier: 1.2,
//         smoothWheel: true,
//         smoothTouch: false,
//       }}
//     >
//       <div className="w-full h-full bg-white">
//         <HeroBannerClient heroData={heroData} />
//         <Agile />
//         {/* <Screen /> */}
//         <MobileScreen />
//         <MapSection />
//         <HomeMobileMapSection />
//         <IntegratedSolutionsSection />
//         <KeySectors />
//         <TestMain testimonials={testimonials} />
//         <BrandShowcase />
//         {/* <Screen2 /> */}
//         <MobileSustainaibility />
//         <TabbedContentShowcase />
//       </div>
//     </ReactLenis>
//   );
// };

// export default HomeWrapper;

// --------------------------------------------

// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// import TabbedContentShowcase from "./TabbedContentShowcase/TabbedContentShowcase";
// import BrandShowcase from "./Brands/BrandShowcase";
// import KeySectors from "./keySectors";
// import IntegratedSolutionsSection from "./IntegratedSolutions/IntegratedSolutionsSection";
// import { ReactLenis, useLenis } from "lenis/react";
// import HeroBannerClient from "./Hero/HeroBannerClient";
// import Agile from "./Agile/page";
// import MobileSustainaibility from "./Sustainaibility/mobile/MobileSustainaibility";
// // import Screen from "./Stats/Screen";
// // import Screen2 from "./Sustainaibility/Screen2";
// import MobileScreen from "./Stats/MobileScreen";
// import MapSection from "./Map/MapSection";
// import HomeMobileMapSection from "./Map/HomeMobileMapSection";
// import TestMain from "./testimonials/TestMain";
// import useIdleRender from "@/hooks/useIdleRender";
// // import CardShowcase from "./Hero/CardShowcase";

// // Lazy heavy components
// const Screen = dynamic(() => import("./Stats/Screen"), {
//   ssr: false,
// });

// const Screen2 = dynamic(() => import("./Sustainaibility/Screen2"), {
//   ssr: false,
// });

// const HomeWrapper = ({ heroData, testimonials = [] }) => {
//   useLenis(() => {});

//   const normalReady = useIdleRender(); // rest of the page
//   const heavyReady = useIdleRender(800); // Screen & Screen2 dead last

//   return (
//     <ReactLenis
//       root
//       options={{
//         lerp: 0.07,
//         wheelMultiplier: 1.2,
//         smoothWheel: true,
//         smoothTouch: false,
//       }}
//     >
//       <div className="w-full h-full bg-white">
//         {/* :fire: Priority render */}
//         <HeroBannerClient heroData={heroData} />
//         <Agile />
//         {heavyReady && (
//           <>
//             <Screen />
//           </>
//         )}
//         {/* :bricks: Normal render */}
//         {normalReady && (
//           <>
//             <MobileScreen />
//             <MapSection />
//             <HomeMobileMapSection />
//             <IntegratedSolutionsSection />
//             <KeySectors />
//             <TestMain testimonials={testimonials} />
//             <BrandShowcase />
//             <MobileSustainaibility />
//             <TabbedContentShowcase />
//           </>
//         )}

//         {/* :turtle: Heavy shit renders last */}
//         {heavyReady && (
//           <>
//             <Screen2 />
//           </>
//         )}
//       </div>
//     </ReactLenis>
//   );
// };

// export default HomeWrapper;

"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ReactLenis, useLenis } from "lenis/react";

import HeroBannerClient from "./Hero/HeroBannerClient";
import Agile from "./Agile/page";

import MobileScreen from "./Stats/MobileScreen";
import MapSection from "./Map/MapSection";
import HomeMobileMapSection from "./Map/HomeMobileMapSection";
import IntegratedSolutionsSection from "./IntegratedSolutions/IntegratedSolutionsSection";
import KeySectors from "./keySectors";
import TestMain from "./testimonials/TestMain";
import BrandShowcase from "./Brands/BrandShowcase";
import MobileSustainaibility from "./Sustainaibility/mobile/MobileSustainaibility";
import TabbedContentShowcase from "./TabbedContentShowcase/TabbedContentShowcase";

import useIdleRender from "@/hooks/useIdleRender";

// Heavy components lazy loaded
const Screen = dynamic(() => import("./Stats/Screen"), {
  ssr: false,
});

const Screen2 = dynamic(() => import("./Sustainaibility/Screen2"), {
  ssr: false,
});

const HomeWrapper = ({ heroData, testimonials = [] }) => {
  useLenis(() => {});

  const normalReady = useIdleRender();
  const heavyReady = useIdleRender(800);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
        wheelMultiplier: 1.2,
        smoothWheel: true,
        smoothTouch: false,
      }}
    >
      <div className="w-full h-full bg-white">
        {/* Priority Content */}
        <HeroBannerClient heroData={heroData} />
        <Agile />

        {/* Heavy component loads only when browser is idle */}
        {heavyReady && <Screen />}

        {/* Normal below-the-fold content */}
        {normalReady && (
          <>
            <MobileScreen />
            <MapSection />
            <HomeMobileMapSection />
            <IntegratedSolutionsSection />
            <KeySectors />
            <TestMain testimonials={testimonials} />
            <BrandShowcase />
            <MobileSustainaibility />
            <TabbedContentShowcase />
          </>
        )}

        {/* Heaviest component LAST */}
        {heavyReady && <Screen2 />}
      </div>
    </ReactLenis>
  );
};

export default HomeWrapper;

"use client";
import React from "react";
import TabbedContentShowcase from "./TabbedContentShowcase/TabbedContentShowcase";
import BrandShowcase from "./Brands/BrandShowcase";
import KeySectors from "./keySectors";
import IntegratedSolutionsSection from "./IntegratedSolutions/IntegratedSolutionsSection";
import { ReactLenis, useLenis } from "lenis/react";
import HeroBannerClient from "./Hero/HeroBannerClient";
import Agile from "./Agile/page";
import MobileSustainaibility from "./Sustainaibility/mobile/MobileSustainaibility";
import Screen from "./Stats/Screen";
import Screen2 from "./Sustainaibility/Screen2";
import MobileScreen from "./Stats/MobileScreen";
import useIdleRender from "@/hooks/useIdleRender";
import MapSection from "./Map/MapSection";
import HomeMobileMapSection from "./Map/HomeMobileMapSection";
import TestMain from "./testimonials/TestMain";
// import CardShowcase from "./Hero/CardShowcase";

const HomeWrapper = ({ heroData, testimonials = [] }) => {
  useLenis(() => {});

  const normalReady = useIdleRender(); // rest of the page
  const heavyReady = useIdleRender(600); // Screen & Screen2 dead last

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
        {/* :fire: Priority render */}
        <HeroBannerClient heroData={heroData} />
        <Agile />

        {/* :bricks: Normal render */}
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

        {/* :turtle: Heavy shit renders last */}
        {heavyReady && (
          <>
            <Screen />
            <Screen2 />
          </>
        )}
      </div>
    </ReactLenis>
  );
};

export default HomeWrapper;

"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ReactLenis, useLenis } from "lenis/react";
import HeroBannerClient from "./Hero/HeroBannerClient";
import Agile from "./Agile/page";
import Screen from "./Stats/Screen";
import MobileScreen from "./Stats/MobileScreen";

// Dynamically import below-the-fold components
const MapSection = dynamic(() => import("./Map/MapSection"), { ssr: false });
const HomeMobileMapSection = dynamic(() => import("./Map/HomeMobileMapSection"), { ssr: false });
const IntegratedSolutionsSection = dynamic(() => import("./IntegratedSolutions/IntegratedSolutionsSection"));
const KeySectors = dynamic(() => import("./keySectors"));
const TestMain = dynamic(() => import("./testimonials/TestMain"));
const BrandShowcase = dynamic(() => import("./Brands/BrandShowcase"));
const Screen2 = dynamic(() => import("./Sustainaibility/Screen2"));
const MobileSustainaibility = dynamic(() => import("./Sustainaibility/mobile/MobileSustainaibility"));
const TabbedContentShowcase = dynamic(() => import("./TabbedContentShowcase/TabbedContentShowcase"));

const HomeWrapper = ({ heroData, testimonials = [] }) => {
  useLenis(() => {});

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
        <HeroBannerClient heroData={heroData} />
        <Agile />
        <Screen />
        <MobileScreen />
        <MapSection />
        <HomeMobileMapSection />
        <IntegratedSolutionsSection />
        <KeySectors />
        <TestMain testimonials={testimonials} />
        <BrandShowcase />
        <Screen2 />
        <MobileSustainaibility />
        <TabbedContentShowcase />
      </div>
    </ReactLenis>
  );
};

export default HomeWrapper;

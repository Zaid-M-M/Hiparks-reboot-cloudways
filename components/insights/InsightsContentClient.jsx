// components/insights/InsightsContentClient.tsx
"use client";

import React, { useState, Suspense } from "react";
import WhitePaperTabContent from "./InsightsContent/WhitePaperTabContent";
import EventTabContent from "./InsightsContent/EventTabContent";
import NewsTabContent from "./InsightsContent/news/NewsTabContent";
import PressTabContent from "./InsightsContent/press/PressTabContent";
import InsightsTabs from "./InsightsContent/InsightsTabs";
import InsightsTitleSection from "./InsightsContent/InsightsTitleSection";
import BlogTabContent from "./InsightsContent/BlogTabContent";

const InsightsContentInner = () => {
  const [activeTab, setActiveTab] = useState("Blogs");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [pressReleaseFilter, setPressReleaseFilter] = useState("news");

  const tabsData = [
    { title: "Blogs" },
    { title: "White Papers" },
    { title: "Events" },
    { title: "News" },
    { title: "Press Release" },
  ];

  return (
    <div className="w-full bg-white">
      <InsightsTitleSection activeTab={activeTab} />

      <InsightsTabs
        tabs={tabsData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "Blogs" && (
        <BlogTabContent
          selectedCategory={selectedCategory}
          selectedYear={selectedYear}
        />
      )}
      {activeTab === "White Papers" && <WhitePaperTabContent />}
      {activeTab === "Events" && <EventTabContent />}
      {activeTab === "News" && <NewsTabContent />}
      {activeTab === "Press Release" && <PressTabContent />}
    </div>
  );
};

export default function InsightsContentClient() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-96 flex items-center justify-center">
          Loading insights...
        </div>
      }
    >
      <InsightsContentInner />
    </Suspense>
  );
}

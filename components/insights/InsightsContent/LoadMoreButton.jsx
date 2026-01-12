"use client";
import React from "react";
import { motion } from "framer-motion";

const LoadMoreButton = ({ onLoadMore, loading }) => {
  return (
    <div className="w-full">
      <div className="fixup pb-10 flex justify-center">
        <motion.button
          onClick={onLoadMore}
          disabled={loading}
          className="relative cursor-pointer overflow-hidden bg-black border-2 border-[#000000] px-[40px] py-[14px] bw-m text-[16px] text-white hover:bg-white hover:text-[#000000] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {/* Button text */}
          <span className="relative z-10">
            {loading ? "Loading..." : "LOAD MORE"}
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default LoadMoreButton;

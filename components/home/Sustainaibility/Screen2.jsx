// "use client";
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Sustainaibility from "./Sustainaibility";

// export default function Screen2() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const imagesRef = useRef([]);
//   const lastFrame = useRef(0);

//   const totalFrames = 344;
//   const pixelsPerFrame = 5; // scroll distance per frame
//   const [scrollHeight, setScrollHeight] = useState(0);

//   // ------------------------------
//   // Preload Images
//   // ------------------------------
//   useEffect(() => {
//     const imgs = [];
//     for (let i = 21; i <= totalFrames; i++) {
//       const img = new Image();
//       img.src = `/sustain/susimg/${i}.webp`;
//       imgs.push(img);
//     }
//     imagesRef.current = imgs;
//     imagesRef.current[0]?.addEventListener("load", () => drawFrame(0));
//   }, []);

//   // ------------------------------
//   // Draw Frame
//   // ------------------------------
//   const drawFrame = (i) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext("2d");
//     if (!canvas || !ctx) return;

//     const img = imagesRef.current[i];
//     if (!img || !img.complete) return;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   };

//   // ------------------------------
//   // Scroll → Frame Mapping
//   // ------------------------------
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const total = totalFrames * pixelsPerFrame + window.innerHeight;
//     setScrollHeight(total * 1.4);

//     const onScroll = () => {
//       if (!containerRef.current) return;
//       const scrollTop = window.scrollY - containerRef.current.offsetTop;
//       const maxScroll = containerRef.current.scrollHeight - window.innerHeight;

//       const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
//       const frameIndex = Math.floor(progress * (totalFrames - 1));

//       if (frameIndex !== lastFrame.current) {
//         lastFrame.current = frameIndex;
//         drawFrame(frameIndex);
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // ------------------------------
//   // Card Animation (shifted earlier)
//   // ------------------------------
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["center end", "end center"],
//   });

//   const cardY = useTransform(
//     scrollYProgress,
//     [0.8, 0.95, 1],
//     [200, 0, -100] // slides in then slightly up
//   );
//   const cardOpacity = useTransform(
//     scrollYProgress,
//     [0.8, 0.9, 1],
//     [0, 1, 0.8] // fade in, then slight fade out
//   );

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         style={{ height: scrollHeight ? `${scrollHeight + 200}px` : "100vh" }}
//         className="relative w-full bg-white h-full lg:flex hidden"
//       >
//         {/* Sticky canvas */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <canvas
//             ref={canvasRef}
//             className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full object-cover"
//           />

//           {/* Sustainability card at the end */}
//           <motion.div
//             style={{
//               y: cardY, // keep y-axis the same
//               opacity: cardOpacity,
//               scale: useTransform(scrollYProgress, [0.8, 0.95], [0.9, 1]),
//               filter: useTransform(
//                 scrollYProgress,
//                 [0.8, 0.88], // faster blur-to-clear
//                 ["blur(20px)", "blur(0px)"]
//               ),
//             }}
//             transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
//             className="absolute bottom-6 right-[max(5%,calc((100vw-1340px)/2))] left-[max(5%,calc((100vw-1340px)/2))]"
//           >
//             <Sustainaibility />
//           </motion.div>

//         </div>
//       </section>
//     </ReactLenis>
//   );
// }

// "use client";
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Sustainaibility from "./Sustainaibility";

// export default function Screen2() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const imagesRef = useRef([]);
//   const lastFrame = useRef(0);

//   const totalFrames = 222;
//   const pixelsPerFrame = 5; // scroll distance per frame
//   const [scrollHeight, setScrollHeight] = useState(0);

//   // ------------------------------
//   // Preload Images
//   // ------------------------------
//   useEffect(() => {
//     const imgs = [];
//     for (let i = 1; i <= totalFrames; i++) {
//       const img = new Image();
//       img.src = `/sustain/simages/${i}.webp`;
//       imgs.push(img);
//     }
//     imagesRef.current = imgs;
//     imagesRef.current[0]?.addEventListener("load", () => drawFrame(0));
//   }, []);

//   // ------------------------------
//   // Draw Frame
//   // ------------------------------
//   const drawFrame = (i) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext("2d");
//     if (!canvas || !ctx) return;

//     const img = imagesRef.current[i];
//     if (!img || !img.complete) return;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   };

//   // ------------------------------
//   // Scroll → Frame Mapping
//   // ------------------------------
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const total = totalFrames * pixelsPerFrame + window.innerHeight;
//     setScrollHeight(total * 1.4);

//     const onScroll = () => {
//       if (!containerRef.current) return;
//       const scrollTop = window.scrollY - containerRef.current.offsetTop;
//       const maxScroll = containerRef.current.scrollHeight - window.innerHeight;

//       const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
//       const frameIndex = Math.floor(progress * (totalFrames - 1));

//       if (frameIndex !== lastFrame.current) {
//         lastFrame.current = frameIndex;
//         drawFrame(frameIndex);
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // ------------------------------
//   // Card Animation (shifted earlier)
//   // ------------------------------
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["center end", "end center"],
//   });

//   const cardY = useTransform(scrollYProgress, [0.6, 0.8, 0.95], [200, 0, -50]);
//   const cardOpacity = useTransform(
//     scrollYProgress,
//     [0.6, 0.7, 0.9],
//     [0, 1, 0.8]
//   );

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         style={{ height: scrollHeight ? `${scrollHeight + 200}px` : "100vh" }}
//         className="relative w-full bg-white h-full lg:flex hidden"
//       >
//         {/* Sticky canvas */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <canvas
//             ref={canvasRef}
//             className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full object-cover"
//           />

//           <motion.div
//             style={{
//               y: useTransform(
//                 scrollYProgress,
//                 [0.55, 0.75, 0.95],
//                 [200, 0, -50]
//               ), // appear earlier
//               opacity: useTransform(
//                 scrollYProgress,
//                 [0.55, 0.65, 0.9, 1],
//                 [0, 1, 1, 0.8]
//               ), // hold opacity
//               scale: useTransform(scrollYProgress, [0.55, 0.75], [0.9, 1]),
//               filter: useTransform(
//                 scrollYProgress,
//                 [0.55, 0.6],
//                 ["blur(20px)", "blur(0px)"]
//               ), // short blur
//             }}
//             transition={{
//               duration: 0.6,
//               ease: [0.4, 0, 0.2, 1],
//             }}
//             className="absolute bottom-6 right-[max(5%,calc((100vw-1340px)/2))] left-[max(5%,calc((100vw-1340px)/2))]"
//           >
//             <Sustainaibility />
//           </motion.div>
//         </div>
//       </section>
//     </ReactLenis>
//   );
// }
"use client";
import { ReactLenis } from "lenis/react";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Sustainaibility from "./Sustainaibility";

export default function Screen2() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const imagesRef = useRef({});
  const loadedRef = useRef({});
  const lastFrame = useRef(0);
  const ticking = useRef(false);

  const totalFrames = 222;
  const pixelsPerFrame = 5;

  const [scrollHeight, setScrollHeight] = useState(0);

  // ---------- Optimized Image Loader ----------
  const loadImage = useCallback((index) => {
    if (loadedRef.current[index]) return;

    const img = new Image();
    img.src = `/sustain/simages/${index}.webp`;

    img.onload = () => {
      imagesRef.current[index] = img;
      loadedRef.current[index] = true;

      if (index === lastFrame.current) {
        drawFrame(index);
      }
    };
  }, []);

  // ---------- Progressive Preload ----------
  const preloadSurrounding = useCallback(
    (current) => {
      const range = 8;

      for (let i = current - range; i <= current + range; i++) {
        if (i >= 1 && i <= totalFrames) {
          loadImage(i);
        }
      }
    },
    [loadImage, totalFrames]
  );

  // ---------- Canvas Drawing ----------
  const drawFrame = useCallback((i) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const img = imagesRef.current[i];
    if (!img) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }, []);

  // ---------- Scroll Handler (RAF Optimized) ----------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(lastFrame.current);
    };

    resize();
    window.addEventListener("resize", resize);

    const total = totalFrames * pixelsPerFrame + window.innerHeight;
    setScrollHeight(total * 1.4);

    const onScroll = () => {
      if (!containerRef.current || ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollTop = -rect.top;
        const maxScroll =
          containerRef.current.scrollHeight - window.innerHeight;

        const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
        const frameIndex = Math.floor(progress * (totalFrames - 1)) + 1;

        if (frameIndex !== lastFrame.current) {
          lastFrame.current = frameIndex;
          drawFrame(frameIndex);
          preloadSurrounding(frameIndex);
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial load
    preloadSurrounding(1);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, [drawFrame, preloadSurrounding, totalFrames]);

  // ---------- Framer Motion ----------
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end center"],
  });

  return (
    <ReactLenis root>
      <section
        ref={containerRef}
        style={{ height: scrollHeight ? `${scrollHeight + 200}px` : "100vh" }}
        className="relative w-full bg-white h-full lg:flex hidden"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full object-cover"
          />

          <motion.div
            style={{
              y: useTransform(
                scrollYProgress,
                [0.55, 0.75, 0.95],
                [200, 0, -50]
              ),
              opacity: useTransform(
                scrollYProgress,
                [0.55, 0.65, 0.9, 1],
                [0, 1, 1, 0.8]
              ),
              scale: useTransform(scrollYProgress, [0.55, 0.75], [0.9, 1]),
              filter: useTransform(
                scrollYProgress,
                [0.55, 0.6],
                ["blur(20px)", "blur(0px)"]
              ),
            }}
            className="absolute bottom-6 right-[max(5%,calc((100vw-1340px)/2))] left-[max(5%,calc((100vw-1340px)/2))]"
          >
            <Sustainaibility />
          </motion.div>
        </div>
      </section>
    </ReactLenis>
  );
}

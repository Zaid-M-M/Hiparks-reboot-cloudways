// "use client";
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const texts = [
//   { title: "2200", sub: "Acres" },
//   { title: "58 Million", sub: "Sq ft" },
//   { title: "10", sub: "Markets" },
//   { title: "45", sub: "Parks" },
// ];

// export default function Screen() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const imagesRef = useRef([]);
//   const lastFrame = useRef(0);

//   const totalFrames = 689;
//   const pixelsPerFrame = 5; // faster scroll (was 30)
//   const [scrollHeight, setScrollHeight] = useState(0);
//   const speedFactor = 0.8; // smaller segment = faster text scrollgit

//   // preload images
//   useEffect(() => {
//     const imgs = [];
//     for (let i = 17; i <= totalFrames; i++) {
//       const img = new Image();
//       img.src = `/statimg/${i}.webp`; // :white_check_mark: correct path
//       imgs.push(img);
//     }
//     imagesRef.current = imgs;
//   }, [totalFrames]);

//   // draw frame
//   const drawFrame = (i) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext("2d");
//     if (!canvas || !ctx) return;

//     const img = imagesRef.current[i];
//     if (!img || !img.complete) return;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   };

//   // scroll → frame mapping
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const total = totalFrames * pixelsPerFrame + window.innerHeight;
//     setScrollHeight(total * 1.5); // shorter, faster scroll (was *2)

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

//     // draw first frame once loaded
//     imagesRef.current[0]?.addEventListener("load", () => drawFrame(0));

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [totalFrames, pixelsPerFrame]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 0.7", "end end"],
//   });

//   const transforms = texts.map((t, i) => {
//     const seg = 1 / texts.length;
//     const start = i * seg;
//     const end = start + seg * speedFactor;
//     const holdOffset = (end - start) * 0.25; // controls how long it stays centered

//     return {
//       opacity: useTransform(
//         scrollYProgress,
//         [start, start + 0.02, end - 0.02, end],
//         [0, 1, 1, 0]
//       ),
//       y: useTransform(
//         scrollYProgress,
//         [start, start + holdOffset, end - holdOffset, end],
//         [250, 0, 0, -400] // slide up & out
//       ),
//     };
//   });

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         style={{ height: scrollHeight ? `${scrollHeight}px` : "100vh" }}
//         className="relative w-full bg-white h-full lg:flex hidden"
//       >
//         {/* gradient_overlay */}
//         <div className="absolute top-0 w-full h-[50px] z-10 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_81%)]"></div>

//         {/* sticky canvas */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <canvas
//             ref={canvasRef}
//             className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full object-contain max-w-[100vw]"
//           />

//           {/* text overlay */}
//           <div className="absolute top-0 h-full flex flex-col justify-center pointer-events-none">
//             {texts.map((t, i) => (
//               <motion.div
//                 key={i}
//                 style={transforms[i]}
//                 className="absolute w-[500px] 1920:w-[650px]"
//               >
//                 <motion.div className="absolute left-1/4 1280:left-[70px] 1920:left-1/4 top-[60%] sm:top-1/2 -translate-y-1/2 flex flex-col gap-4 sm:gap-3 1920:gap-0">
//                   <div className="flex items-center gap-4 sm:gap-4">
//                     <h2 className="text-[35px] leading-[1] 768:text-[80px] 768:leading-[90px] 1024:text-[100px] 1280:text-[160px] 1024:leading-[110px] 1280:leading-[170px] font-bold whitespace-nowrap bw-sb m-0">
//                       {t.title}
//                     </h2>
//                   </div>

//                   <motion.div className="flex items-center xl:items-end justify-start gap-4 1600:gap-4 h-auto">
//                     <p className="text-[35px] leading-[1] capitalize 768:text-[50px] 1024:text-[80px] 1024:leading-[90px] 1280:text-[100px] bw-r m-0 1280:leading-[110px]">
//                       {t.sub}
//                     </p>
//                     <img
//                       src="/abstract_pattern.svg"
//                       alt="Truck"
//                       className="object-cover mt-4 xl:mb-4 xl:mt-0 abstract_svg"
//                     />
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </ReactLenis>
//   );
// }
"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";

const texts = [
  { title: "2200", sub: "Acres" },
  { title: "58 Million", sub: "Sq ft" },
  { title: "10", sub: "Markets" },
  { title: "45", sub: "Parks" },
];

export default function Screen() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const lastFrame = useRef(-1);

  const totalFrames = 689;
  const startFrame = 17;
  const frameCount = totalFrames - startFrame;

  // 1. Efficient Preloading
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = [];
      for (let i = startFrame; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `/statimg/${i}.webp`;
        img.decode().catch(() => {}); // Decode in background
        loadedImages.push(img);
      }
      imagesRef.current = loadedImages;

      // Draw frame 0 immediately once images are available
      if (loadedImages[0]) {
        renderFrame(0);
      }
    };

    loadImages();

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(Math.max(0, lastFrame.current));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !ctx || !imagesRef.current[index]) return;

    const img = imagesRef.current[index];
    if (img.complete) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  // 2. STRICT Scroll Mapping
  // This logic ensures frame 0 stays until the section top hits the viewport top.
  useLenis(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // progress is 0 until rect.top hits 0
    // progress is 1 when rect.bottom hits windowHeight
    const totalScrollableDistance = rect.height - windowHeight;
    const currentScrollPosition = -rect.top;

    let progress = currentScrollPosition / totalScrollableDistance;

    // CLAMP: ensure it only animates while sticky
    progress = Math.min(Math.max(progress, 0), 1);

    const frameIndex = Math.floor(progress * (frameCount - 1));

    if (frameIndex !== lastFrame.current && frameIndex >= 0) {
      lastFrame.current = frameIndex;
      requestAnimationFrame(() => renderFrame(frameIndex));
    }
  });

  // 3. Text Overlay Sync
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start start" means when the top of the container hits the top of the viewport
    // "end end" means when the bottom of the container hits the bottom of the viewport
    offset: ["start start", "end end"],
  });

  const transforms = texts.map((_, i) => {
    const seg = 1 / texts.length;
    const start = i * seg;
    const end = (i + 1) * seg;

    return {
      opacity: useTransform(
        scrollYProgress,
        [start, start + 0.1, end - 0.1, end],
        [0, 1, 1, 0]
      ),
      y: useTransform(scrollYProgress, [start, end], [100, -100]),
    };
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white lg:flex hidden"
      style={{ height: "500vh" }} // Increased height for a more comfortable scroll speed
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Progress bar for debugging (optional - remove later) */}
        {/* <motion.div style={{ scaleX: scrollYProgress }} className="absolute top-0 left-0 h-1 bg-blue-500 z-50 origin-left w-full" /> */}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none">
          {texts.map((t, i) => (
            <motion.div
              key={i}
              style={transforms[i]}
              className="absolute left-[10%] w-full"
            >
              <h2 className="text-[120px] font-bold m-0 leading-none text-black">
                {t.title}
              </h2>
              <p className="text-[60px] m-0 text-black/80">{t.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

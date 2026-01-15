"use client";
import { useEffect, useState } from "react";

export default function useIdleRender(delay = 0) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const run = () => setReady(true);

    if ("requestIdleCallback" in window) {
      requestIdleCallback(run, { timeout: 2000 });
    } else {
      setTimeout(run, 300 + delay);
    }
  }, [delay]);

  return ready;
}

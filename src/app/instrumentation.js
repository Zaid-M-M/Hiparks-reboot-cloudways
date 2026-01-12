// src/app/instrumentation.js

export async function register() {
  console.log("🔥 instrumentation registered");

  // Only run in Node.js environment (server-side)
  if (typeof window !== "undefined" || typeof globalThis.fetch !== "function") return;

  const originalFetch = globalThis.fetch;

  globalThis.fetch = async (input, init = {}) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const res = await originalFetch(input, {
        ...init,
        cache: "no-store",
        signal: controller.signal,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...(init.headers || {}),
        },
      });

      if (!res.ok) {
        console.error(
          "[Global Fetch HTTP Error]",
          res.status,
          typeof input === "string" ? input : input.toString()
        );
      }

      return res;
    } catch (err) {
      console.error(
        "[Global Fetch Error]",
        typeof input === "string" ? input : input.toString(),
        err?.name || "Unknown error"
      );

      // Return safe Response to avoid SSR crash
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } finally {
      clearTimeout(timeout);
    }
  };
}

"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a href="/" className="px-6 py-3 bg-[#f47922] text-white rounded-lg hover:bg-[#d66a1e]">
          Go Home
        </a>
      </div>
    </div>
  );
}

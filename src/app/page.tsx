// FILE: src/app/page.tsx
// This is a simple, stable homepage to ensure a successful deployment.
// Please replace the entire contents of your page.tsx with this code.

"use client";

import React from 'react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 font-sans">
      <div className="text-center">
        {/* Simple text-based logo to avoid SVG errors */}
        <div className="mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-4xl font-bold text-white">C</span>
            </div>
        </div>
        
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to ClassCompass
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          The application foundation is now stable.
        </p>

        <div className="mt-8">
            <div className="p-4 bg-white rounded-2xl shadow-md inline-block">
                <p className="text-gray-700">Next Step: <span className="font-semibold text-green-600">Build the App Shell</span></p>
            </div>
        </div>
      </div>
    </main>
  );
}

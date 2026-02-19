// src/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">Edu Connect</h1>
        <p className="text-xl max-w-xl">
          Welcome to Edu Connect! A platform to connect students and courses seamlessly.
        </p>
      </header>

      <main className="flex flex-col items-center space-y-6">
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Get Started
        </button>

        <div className="flex space-x-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-black">Courses</h2>
            <p className="text-1xl text-black">Explore available courses for students and professionals.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-black">Community</h2>
            <p className="text-1xl text-black">Connect with peers, join discussions, and collaborate.</p>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-sm text-white/70">
        &copy; {new Date().getFullYear()} Edu Connect. All rights reserved.
      </footer>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col">
      
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center p-6 px-4 md:px-10">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="LingoFlow Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold text-[#1f2937]">LingoFlow</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-[#1f2937] hover:text-[#2563eb]">Home</a>
          <a href="#" className="text-[#1f2937] hover:text-[#2563eb]">Practice</a>
          <a href="#" className="text-[#1f2937] hover:text-[#2563eb]">Progress</a>
          <a href="#" className="text-[#1f2937] hover:text-[#2563eb]">Leaderboard</a>
          <button className="bg-[#1f2937] text-white px-4 py-2 rounded-lg hover:bg-[#111827]">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between p-10 px-4 md:px-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-6">
            Unlock the World<br />Through Languages!
          </h1>
          <p className="text-[#6b7280] text-lg mb-6">
            Learn Italian, Spanish, French, and more — one step at a time.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-semibold">
              Start Learning
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold text-[#1f2937] hover:bg-gray-100">
              Login / Sign Up
            </button>
          </div>
        </div>

        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img src="./src/components/sections/earth-illustration.png" alt="World Languages" className="w-80 h-80" />
        </div>
      </section>

      {/* Language Options */}
      <section className="w-full p-10 px-4 md:px-10">
        <h2 className="text-3xl font-bold text-center text-[#1f2937] mb-10">Choose a Language to Begin</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Italian", flag: "🇮🇹" },
            { name: "Spanish", flag: "🇪🇸" },
            { name: "French", flag: "🇫🇷" },
            { name: "German", flag: "🇩🇪" },
            { name: "Japanese", flag: "🇯🇵" },
            { name: "Korean", flag: "🇰🇷" },
          ].map((language) => (
            <div key={language.name} className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{language.flag}</div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-2">{language.name}</h3>
              <p className="text-gray-500 mb-4">Speak like a native!</p>
              <div className="flex flex-col gap-2 items-center">
                <Link to="/practice" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 rounded-lg w-full text-center">
                  Go to Practice
                </Link>
                <Link to="/practice" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 rounded-lg w-full text-center">
                  Start Practicing
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

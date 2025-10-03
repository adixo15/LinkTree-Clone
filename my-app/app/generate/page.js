import React from "react";

const Generate = () => {
  return (
    <div className="min-h-screen w-full bg-[#E9C0E9] flex flex-col md:grid md:grid-cols-2">
      {/* Left Side */}
      <div className="flex justify-center items-center flex-col px-6 py-10">
        <div className="flex flex-col gap-8 w-full max-w-lg">
          <h1 className="font-bold text-4xl sm:text-5xl text-center md:text-left text-slate-900">
            Create your LinkTree
          </h1>

          {/* Step 1 */}
          <div className="item">
            <h2 className="font-semibold text-2xl mb-3 text-slate-800">
              Step 1: Claim your Handle
            </h2>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              type="text"
              placeholder="Choose a handle"
            />
          </div>

          {/* Step 2 */}
          <div className="item">
            <h2 className="font-semibold text-2xl mb-3 text-slate-800">
              Step 2: Add your links
            </h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <input
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                type="text"
                placeholder="Enter Link Text"
              />
              <input
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                type="text"
                placeholder="Enter Link URL"
              />
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition">
                + Add Link
              </button>
            </div>
          </div>

          {/* Step 3 */}
          <div className="item">
            <h2 className="font-semibold text-2xl mb-3 text-slate-800">
              Step 3: Add Picture and Finalize
            </h2>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              type="text"
              placeholder="Enter link to your picture"
            />
          </div>

          {/* Final Button */}
          <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition">
            🚀 Generate My LinkTree
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center p-6 bg-[#E9C0E9]">
    <img
  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] h-auto object-contain rounded-xl"
  src="/generate.png"
  alt="Generate your picture"
/>


      </div>
    </div>
  );
};

export default Generate;

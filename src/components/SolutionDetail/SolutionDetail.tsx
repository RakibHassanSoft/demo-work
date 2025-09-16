import React from "react";
import { GlobeAltIcon, StarIcon } from "@heroicons/react/24/outline";

const SolutionDetail: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE IMAGES */}
        <div className="relative flex items-center">
          {/* Main Large Image */}
          <img
            src="https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg"
            alt="Farmer"
            className="w-[420px] h-[420px] object-cover rounded-r-[30px]   shadow-lg"
          />

          {/* Years Badge (top-right over image) */}
          <div className="absolute -top-6 -right-6 bg-teal-600 text-white px-6 py-8 rounded-xl text-center w-[160px] shadow-xl">
            <p className="text-3xl font-bold">15+</p>
            <p className="text-sm">Years Experience</p>
          </div>

          {/* Small Image (bottom-right over image) */}
          <img
            src="https://images.pexels.com/photos/3872370/pexels-photo-3872370.jpeg"
            alt="Customer"
            className="absolute -bottom-6 -right-10 w-[260px] h-[160px] object-cover rounded-xl border-8 border-white shadow-xl"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          {/* Section Label */}
          <p className="text-teal-600 font-medium flex items-center gap-2 mb-2">
            <span className="text-xl">✼</span> About Our Company
          </p>

          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            We Provide Cost Effective Solution For You
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            It is a long established fact that a reader will be distracted the
            readable content of a page when looking at layout the point of using
            lorem the is Ipsum less normal distribution of letters.
          </p>

          {/* Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="p-3 border-2 border-dashed border-gray-300 rounded-lg">
                <GlobeAltIcon className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Worldwide Services
                </h4>
                <p className="text-sm text-gray-600">
                  It is a long established fact that a reader will be distracted
                  the readable content of a page when looking at layout.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 border-t pt-6">
              <div className="p-3 border-2 border-dashed border-gray-300 rounded-lg">
                <StarIcon className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Best Company Award Winner
                </h4>
                <p className="text-sm text-gray-600">
                  It is a long established fact that a reader will be distracted
                  the readable content of a page when looking at layout.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-teal-700 transition">
            Read More →
          </button>
        </div>
      </div>

      {/* CATEGORIES SECTION */}
      <div className="mt-20 text-center">
        <p className="text-teal-600 font-medium flex items-center justify-center gap-2 mb-2">
          <span className="text-xl">✼</span> Categories
        </p>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10">
          Featured Top Categories
        </h3>

        {/* Category Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Vegetables", icon: "🥦" },
            { name: "Fresh Fruits", icon: "🍊" },
            { name: "Milk & Eggs", icon: "🥚" },
            { name: "Bakery", icon: "🧁" },
            { name: "House Hold", icon: "🍽️" },
            { name: "Dry Fruits", icon: "🥜" },
            { name: "Drinks", icon: "🥤" },
          ].map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center border-2 border-dashed border-gray-300 relative  rounded-xl p-5 mt-10 w-32 hover:shadow-md transition bg-gray-100"
            >
              <div className="text-5xl absolute bottom-10 mb-2">{cat.icon}</div>
              <p className="text-sm font-medium text-gray-700">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionDetail;

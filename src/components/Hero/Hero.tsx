import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/button";


const HeroSection = () => {
  return (
    <section className="relative bg-[#f5f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
            Your One - Stop Shop For <br />
            <span className="text-teal-600">Quality Groceries</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Expand your business worldwide in just minutes with tailored currencies,
            languages, and customer experiences designed for every market.
          </p>

          <Button className="mt-6">Shop Now</Button>
        </div>

        {/* Right Content */}
        <div className="mt-10 lg:mt-0 lg:ml-10 text-center lg:text-left">
          
          {/* DaisyUI Avatar Group */}
          <div className="avatar-group -space-x-6 justify-center lg:justify-start">
            <div className="avatar">
              <div className="w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                  alt="Customer 1"
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  alt="Customer 2"
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
                  alt="Customer 3"
                />
              </div>
            </div>
            <div className="avatar avatar-placeholder">
              <div className="bg-teal-600 text-white w-12">
                <span>+99</span>
              </div>
            </div>
          </div>

          {/* Customer Count */}
          <p className="mt-3 text-gray-700 font-medium text-lg">500k +</p>
          <p className="text-gray-500 text-sm">Happy Customer</p>

          {/* Circular Badge with Animation */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="mt-8 w-24 h-24 mx-auto lg:mx-0 border-2 border-gray-300 rounded-full 
                       flex items-center justify-center text-gray-600 text-lg font-bold"
          >
            S.
          </motion.div>
        </div>
      </div>

      {/* Decorative SVG Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src="/decor-grapes.svg"
          alt="grapes"
          className="absolute bottom-8 left-8 w-20 opacity-20"
        />
        <img
          src="/decor-leaf.svg"
          alt="leaf"
          className="absolute top-12 right-12 w-20 opacity-20"
        />
        <img
          src="/decor-meat.svg"
          alt="meat"
          className="absolute bottom-12 right-24 w-20 opacity-20"
        />
      </div>
    </section>
  );
};

export default HeroSection;

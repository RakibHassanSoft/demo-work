// src/components/TopVendor.tsx
import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";

const vendors = [
  {
    id: 1,
    name: "A1 Superstore",
    categories: "Fruits, Snacks, Vegetables",
    logo: "https://tse1.mm.bing.net/th/id/OIP.2uN_ENq6tyatOolS3zzknQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", // dummy
  },
  {
    id: 2,
    name: "Xcart Store",
    categories: "Bakery, Juice, Pickles",
    logo: "https://tse1.mm.bing.net/th/id/OIP.2uN_ENq6tyatOolS3zzknQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    name: "Minia Mart",
    categories: "Drinks, Snacks, Fruits",
    logo: "https://tse1.mm.bing.net/th/id/OIP.2uN_ENq6tyatOolS3zzknQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 4,
    name: "Sprazo Shop",
    categories: "Dryfruits, Pickles, Snacks",
    logo: "https://tse1.mm.bing.net/th/id/OIP.2uN_ENq6tyatOolS3zzknQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const products = [
  { id: 1, name: "Fresh Mango", price: 99, image: "https://tse1.mm.bing.net/th/id/OIP.2uN_ENq6tyatOolS3zzknQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 2, name: "Fresh Orange", price: 29, image: "https://tse1.mm.bing.net/th/id/OIP.2uN_ENq6tyatOolS3zzknQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 3, name: "Sweet Pineapple", price: 56, image: "https://tse1.mm.bing.net/th/id/OIP.2uN_ENq6tyatOolS3zzknQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 4, name: "Juicy Blueberry", price: 19, image: "https://tse1.mm.bing.net/th/id/OIP.2uN_ENq6tyatOolS3zzknQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 5, name: "Healthy Lychee", price: 25, image: "https://tse1.mm.bing.net/th/id/OIP.2uN_ENq6tyatOolS3zzknQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
];

// Countdown helper
const calculateTimeLeft = () => {
  const target = new Date().getTime() + 744 * 24 * 60 * 60 * 1000; // ~744 days
  const now = new Date().getTime();
  const difference = target - now;

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const TopVendor: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-7xl mx-auto px-6 py-12 bg-white">
      {/* Browse Text */}
      <p className="text-center text-teal-600 font-medium mb-2">
        ✽ Browse The Collection
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center mb-8">Top Vendor</h2>

      {/* Vendors */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="flex items-center gap-3 border rounded-xl px-6 py-3 bg-white shadow-sm hover:shadow-md cursor-pointer transition"
          >
            <img src={vendor.logo} alt={vendor.name} className="w-8 h-8" />
            <div>
              <h3 className="font-semibold text-gray-800">{vendor.name}</h3>
              <p className="text-gray-500 text-sm">{vendor.categories}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative rounded-xl overflow-hidden shadow-md group"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-white text-gray-800 font-semibold px-2 py-1 text-sm rounded shadow">
              ${product.price}
            </div>
            <div className="absolute bottom-2 left-2 bg-white text-gray-800 px-3 py-1 text-sm rounded-full shadow">
              {product.name}
            </div>
          </div>
        ))}
      </div>

      {/* Deal + Organic */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Deal of the Week */}
        <div className="border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between bg-white shadow relative">
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-gray-500 mb-2">✽ Deal of the Week</h4>
            <h3 className="text-xl font-semibold mb-1">
              Hurry Up! Offer ends in.
            </h3>
            <p className="text-teal-600 font-medium mb-6">Get UP TO 80% OFF</p>

            {/* Countdown */}
            <div className="flex gap-3 justify-center md:justify-start mb-6">
              <div className="border px-4 py-2 rounded-lg text-center shadow-sm">
                <p className="text-xl font-bold">{timeLeft.days}</p>
                <p className="text-gray-500 text-xs">Days</p>
              </div>
              <div className="border px-4 py-2 rounded-lg text-center shadow-sm">
                <p className="text-xl font-bold">{timeLeft.hours}</p>
                <p className="text-gray-500 text-xs">Hours</p>
              </div>
              <div className="border px-4 py-2 rounded-lg text-center shadow-sm">
                <p className="text-xl font-bold">{timeLeft.minutes}</p>
                <p className="text-gray-500 text-xs">Minutes</p>
              </div>
              <div className="border px-4 py-2 rounded-lg text-center shadow-sm">
                <p className="text-xl font-bold">{timeLeft.seconds}</p>
                <p className="text-gray-500 text-xs">Seconds</p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-md shadow hover:bg-teal-700 mx-auto md:mx-0">
              <FaLock /> Shop Now
            </button>
          </div>

          {/* Man Image */}
          <img
            src="https://e1.pngegg.com/pngimages/130/385/png-clipart-danielle-campbell-1-2-thumbnail.png"
            alt="Deal Person"
            className="mt-6 md:mt-0 md:ml-6"
          />
        </div>

        {/* Organic Fruits */}
        <div className="border rounded-xl p-6 flex flex-col justify-center items-center text-center bg-white shadow relative">
          <h3 className="text-xl font-semibold mb-2">Fresh Fruits</h3>
          <p className="text-teal-600 mb-6">100% Organic</p>

          <button className="bg-teal-600 text-white px-4 py-2 rounded-md shadow hover:bg-teal-700 mb-6 flex items-center gap-2">
            <FaLock /> Shop Now
          </button>

          {/* Price Badge */}
          <div className="absolute bottom-8 left-6 bg-teal-700 text-white px-4 py-2 rounded-full shadow-md text-sm font-medium">
            Only $19.99
          </div>

          {/* Basket Image */}
          <img
            src="https://via.placeholder.com/200x200"
            alt="Fruit Basket"
            className="w-44 h-44 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TopVendor;

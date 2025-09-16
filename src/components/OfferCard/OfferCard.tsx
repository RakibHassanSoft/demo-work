"use client";
import React from "react";

interface OfferCardProps {
  image: string;
  discount: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ image, discount }) => {
  return (
    <div className="relative rounded-xl  overflow-hidden shadow-lg group">
      {/* Image */}
      <img
        src={image}
        alt="Offer"
        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Shop Now Button */}
      <button className="absolute top-3 left-3 bg-white text-xs font-medium text-gray-800 px-3 py-1 rounded-md shadow">
        Shop Now
      </button>

      {/* Discount Badge */}
      <div className="absolute bottom-12 left-3 bg-white/90 text-gray-900 text-md font-medium px-4 py-2 rounded-r-full shadow rounded-t-full " >
        Get up to {discount} off 
      </div>
      <div className="absolute bottom-3 left-3 bg-white/90 text-gray-900 text-md font-semibold px-4 py-2 rounded-r-full rounded-b-full shadow">
        Discounts
      </div>

      {/* Favorite Icon */}
      <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow hover:bg-gray-100 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.014-4.5-4.5-4.5-1.74 0-3.223 1.007-3.938 2.465A4.493 4.493 0 009.75 3.75C7.265 3.75 5.25 5.765 5.25 8.25c0 7.22 6.75 11.25 6.75 11.25s6.75-4.03 6.75-11.25z"
          />
        </svg>
      </button>
    </div>
  );
};

const OfferCards: React.FC = () => {
  const offers = [
    {
      image:
        "https://images.pexels.com/photos/3987390/pexels-photo-3987390.jpeg", // 🥭 Fruits bag
      discount: "15%",
    },
    {
      image:
        "https://images.pexels.com/photos/3768120/pexels-photo-3768120.jpeg", // 👩‍🍳 Lady with vegetables
      discount: "35%",
    },
    {
      image:
        "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg", // 🥦 Vegetables + rice
      discount: "20%",
    },
  ];

  return (
    <div className="w-7xl mx-auto my-8"> 

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50">
      {offers.map((offer, idx) => (
        <OfferCard key={idx} image={offer.image} discount={offer.discount} />
      ))}
    </div>
    </div>
  );
};

export default OfferCards;

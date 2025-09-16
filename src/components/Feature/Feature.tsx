import React, { useState } from "react";
import { Star } from "lucide-react";

type Product = {
  id: number;
  category: string;
  name: string;
  price: number;
  oldPrice?: number;
  weight: string;
  image: string;
  rating: number;
  badge?: string;
  stockLeft?: string;
};

const products: Product[] = [
  {
    id: 1,
    category: "Fruits",
    name: "Fresh Strawberry",
    price: 45,
    oldPrice: 50,
    weight: "500g",
    image:
      "https://images.unsplash.com/photo-1565958011703-44e8585a0143?auto=format&fit=crop&w=500&q=80",
    rating: 3,
    badge: "NEW",
  },
  {
    id: 2,
    category: "Vegetables",
    name: "Fresh Cauliflower",
    price: 10,
    oldPrice: 12,
    weight: "1kg",
    image:
      "https://images.unsplash.com/photo-1615485737456-1d07a2fdd9d7?auto=format&fit=crop&w=500&q=80",
    rating: 4,
  },
  {
    id: 3,
    category: "Dry Fruit",
    name: "Walnut Dry Fruit",
    price: 5,
    weight: "1kg",
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=500&q=80",
    rating: 2,
    stockLeft: "2kg left",
  },
  {
    id: 4,
    category: "Pickles",
    name: "Vegetable Pickles",
    price: 25,
    oldPrice: 30,
    weight: "2kg",
    image:
      "https://images.unsplash.com/photo-1603037126156-fb9f4096ef03?auto=format&fit=crop&w=500&q=80",
    rating: 5,
    badge: "SALE",
  },
  {
    id: 5,
    category: "Fruits",
    name: "Fresh Apples",
    price: 10,
    oldPrice: 12,
    weight: "1kg",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=500&q=80",
    rating: 5,
  },
];

const tabs = ["New Arrivals", "Best Sellers", "Top Rates"];

const Feature: React.FC = () => {
  const [activeTab, setActiveTab] = useState("New Arrivals");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div>
        <p className="text-teal-600 font-medium">✽ Feature Products</p>
        <h2 className="text-3xl font-semibold mt-1">
          Our Features Collection
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mt-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md border text-sm font-medium ${
              activeTab === tab
                ? "bg-teal-600 text-white border-teal-600"
                : "bg-white text-gray-600 hover:bg-gray-100 border-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-6 mt-10">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative border rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md transition"
          >
            {/* Vertical Badge */}
            {p.badge && (
              <span className="absolute left-2 top-2 text-xs text-gray-600 tracking-widest whitespace-pre">
                {p.badge.split("").join("\n")}
              </span>
            )}

            {/* Product Image */}
            <img
              src={p.image}
              alt={p.name}
              className="h-64 w-64 object-cover rounded-md mb-3"
            />

            {/* Category */}
            <p className="text-sm text-gray-500">{p.category}</p>

            {/* Rating */}
            <div className="flex items-center mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i <= p.rating ? "text-teal-500 fill-teal-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Product Name */}
            <h3 className="text-gray-800 font-medium text-lg text-center">
              {p.name}
            </h3>

            {/* Price */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-semibold text-gray-800">
                ${p.price}
              </span>
              {p.oldPrice && (
                <span className="line-through text-gray-400">${p.oldPrice}</span>
              )}
            </div>

            {/* Weight / Stock */}
            <p className="text-sm text-gray-500 mt-1">
              {p.stockLeft ? p.stockLeft : p.weight}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Feature Row */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-12 border rounded-lg p-6 bg-gray-50">
        <div className="flex gap-3 justify-center items-center ">
          <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="" className="h-8" />
          <div>
            <h4 className="font-semibold text-gray-800">Free Shipping</h4>
            <p className="text-sm text-gray-500">
              Free shipping on all US order or order above $200
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <img src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" alt="" className="h-8" />
          <div>
            <h4 className="font-semibold text-gray-800">24X7 Support</h4>
            <p className="text-sm text-gray-500">
              Contact us 24 hours live support, 7 days in a week
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <img src="https://cdn-icons-png.flaticon.com/512/992/992703.png" alt="" className="h-8" />
          <div>
            <h4 className="font-semibold text-gray-800">30 Days Return</h4>
            <p className="text-sm text-gray-500">
              Simply return it within 30 days for an exchange
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" alt="" className="h-8" />
          <div>
            <h4 className="font-semibold text-gray-800">Payment Secure</h4>
            <p className="text-sm text-gray-500">
              Contact us 24 hours live support, 7 days in a week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

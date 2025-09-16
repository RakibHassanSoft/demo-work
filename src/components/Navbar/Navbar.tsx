// src/components/Navbar.tsx
import { useState } from "react";
import {
  FaRegUser,
  FaHeart,
  FaShoppingBag,
  FaSearch,
  FaTh,
  FaMapMarkerAlt,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white w-full font-sans">
      {/* Top Strip */}
      <div className="bg-black text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-2">
          <p>
            Flat <span className="text-green-400">50% Off</span> On Grocery Shop.
          </p>

          <div className="flex gap-4 md:gap-6 items-center relative">
            <a href="#" className="hover:text-green-400 hidden md:inline">Help?</a>
            <a href="#" className="hover:text-green-400 hidden md:inline">Track Order</a>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 hover:text-green-400 text-sm"
              >
                Language <FaChevronDown size={10} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black text-sm shadow rounded z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">English</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">বাংলা</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Español</a>
                </div>
              )}
            </div>

            {/* Currency Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-1 hover:text-green-400 text-sm"
              >
                Currency <FaChevronDown size={10} />
              </button>
              {currencyOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black text-sm shadow rounded z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">USD</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">BDT</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">INR</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Middle Navbar */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-gray-700">Spra</span>
            <span className="text-teal-600">zo</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border border-teal-600 rounded-md overflow-hidden w-1/2">
            <select className="px-3 py-2 border-r border-gray-300 text-sm outline-none">
              <option>Vegetables</option>
              <option>Fruits</option>
              <option>Groceries</option>
            </select>
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-3 py-2 outline-none text-sm"
            />
            <button className="px-4 text-gray-600 hover:text-teal-600">
              <FaSearch />
            </button>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
              <FaRegUser className="text-xl text-gray-700" />
              <span className="leading-tight">
                Account <br />
                <span className="font-semibold text-gray-900">Login</span>
              </span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
              <FaHeart className="text-xl text-gray-700" />
              <span className="leading-tight">
                3 Items <br />
                <span className="font-semibold text-gray-900">Wishlist</span>
              </span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
              <FaShoppingBag className="text-xl text-gray-700" />
              <span className="leading-tight">
                4 Items <br />
                <span className="font-semibold text-gray-900">Cart</span>
              </span>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 text-xl"
            onClick={() => setMobileOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      
        {/* Bottom Navbar */}
        <div className="hidden md:flex justify-between items-center px-6 py-3 border-t border-gray-200">
          <div className="w-7xl mx-auto flex justify-between items-center">

          {/* Left Menu */}
          <div className="flex items-center gap-6 text-gray-700 text-sm">
            <button className="flex items-center gap-2 font-medium">
              <FaTh /> Home ▾
            </button>
            <button>Categories ▾</button>
            <button>Products ▾</button>
            <button>Pages ▾</button>
            <button>Blog ▾</button>
            <button className="flex items-center text-teal-600 font-semibold">
              ⚡ Offers
            </button>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1 text-sm">
            <FaMapMarkerAlt className="text-teal-600" />
            <select className="outline-none bg-transparent">
              <option>Surat</option>
              <option>Dhaka</option>
              <option>New York</option>
            </select>
          </div>
          </div>
        </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/30" onClick={() => setMobileOpen(false)}></div>
          <div className="relative w-3/4 h-full bg-white shadow-lg p-6 overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              <FaTimes size={20} />
            </button>

            <div className="flex flex-col gap-4 text-gray-700 text-base mt-10">
              <a href="#" className="py-2 border-b border-gray-200">Home</a>
              <a href="#" className="py-2 border-b border-gray-200">Categories</a>
              <a href="#" className="py-2 border-b border-gray-200">Products</a>
              <a href="#" className="py-2 border-b border-gray-200">Pages</a>
              <a href="#" className="py-2 border-b border-gray-200">Blog</a>
              <a href="#" className="py-2 border-b border-gray-200 text-teal-600 font-semibold">
                ⚡ Offers
              </a>
            </div>

            {/* Mobile Search */}
            <div className="mt-6 flex items-center border border-teal-600 rounded-md overflow-hidden">
              <select className="px-3 py-2 border-r border-gray-300 text-sm outline-none">
                <option>Vegetables</option>
                <option>Fruits</option>
                <option>Groceries</option>
              </select>
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-3 py-2 outline-none text-sm"
              />
              <button className="px-4 text-gray-600 hover:text-teal-600">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaTwitch,
} from "react-icons/fa6";

import { FaChartBar } from "react-icons/fa";
import Upi from "../assets/upi.png";
import Visa from "../assets/visa.png";
import Mastercard from "../assets/mastercard.png";
import { ChevronsRight } from "lucide-react";

const categories = [
  "Clothing",
  "Footwear",
  "Accessories",
  "Bags",
  "Sportswear",
];

const links = [
  "About Us",
  "Privacy Policy",
  "Terms & Conditions",
  "Shipping Policy",
  "Return & Refund Policy",
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">

      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Left */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">
              <FaChartBar className="text-2xl text-slate-900" />
              <h2 className="text-3xl font-semibold text-slate-900">
                Rank Pilot
              </h2>
            </div>

            <p className="mt-6 text-gray-500 leading-8 max-w-sm">
              Optimize your website for search engines with AI-powered
              insights and real-time tracking.
            </p>

            <div className="flex items-center gap-5 mt-8">

              <FaXTwitter className="text-2xl text-gray-600 hover:text-black cursor-pointer transition" />

              <FaInstagram className="text-2xl text-gray-600 hover:text-pink-500 cursor-pointer transition" />

              <FaFacebook className="text-2xl text-gray-600 hover:text-blue-600 cursor-pointer transition" />

              <FaTwitch className="text-2xl text-gray-600 hover:text-purple-600 cursor-pointer transition" />

            </div>

          </div>

          {/* Product */}

          <div>
            <h3 className="mb-6 text-xl font-semibold text-slate-900">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-500">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 transition-colors duration-200 hover:text-slate-900"
                  >
                    <ChevronsRight
                      size={16}
                      strokeWidth={1.8}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-6 text-xl font-semibold text-slate-900">
              Categories
            </h3>

            <ul className="space-y-4 text-gray-500">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 transition-colors duration-200 hover:text-slate-900"
                  >
                    <ChevronsRight
                      size={16}
                      strokeWidth={1.8}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}

          <div className="space-y-10">
            <div>
              <h3 className="mb-6 text-xl font-semibold text-slate-900">
                Contact
              </h3>

              <ul className="space-y-4 text-gray-500">
                <li>
                  <a href="tel:+919342077629">+91 93420 77629</a>
                </li>

                <li>
                  <a href="https://wa.me/919342077629" target="_blank" rel="noreferrer">
                    +91 93420 77629 - WhatsApp
                  </a>
                </li>

                <li>
                  <a href="mailto:subashharish648@gmail.com">
                    subashharish648@gmail.com
                  </a>
                </li>
              </ul>

              {/* Payment Methods */}
              <div className="mt-4">

                <div className="flex flex-wrap items-center gap-3">
                  <img
                    src={Upi}
                    alt="UPI"
                    className="h-12 w-auto object-contain"
                  />

                  <img
                    src={Visa}
                    alt="Visa"
                    className="h-12 w-auto object-contain"
                  />

                  <img
                    src={Mastercard}
                    alt="Mastercard"
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-base">
            © 2026 <a href="#" className="font-semibold text-gray-900">SmartInBlack</a>. All rights reserved.
          </p>

          <p className="text-gray-500 text-base">
            Developed by:
            <span className="text-green-600 font-medium ml-1">
              Harish AP
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
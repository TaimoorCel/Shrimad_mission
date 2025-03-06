"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  scrollToSchedule: () => void;
  scrollToGaamCelebrations: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSchedule, scrollToGaamCelebrations }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#631019] shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-left">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={300}
            height={52}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 ml-[22.5%]">
          <button
            onClick={scrollToSchedule}
            className="text-[#dad2c3] hover:text-blue-600 transition"
          >
            Schedule
          </button>
          <button
            onClick={scrollToGaamCelebrations}
            className="text-[#dad2c3] hover:text-blue-600 transition"
          >
            Gaam Celebrations
          </button>
          {["Register", "Laabhs", "Reserve Your Stay"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[#dad2c3] hover:text-blue-600 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-1 bg-gray-700 mb-1"></div>
          <div className="w-6 h-1 bg-gray-700 mb-1"></div>
          <div className="w-6 h-1 bg-gray-700"></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 absolute top-16 left-0 w-full">
          <button
            onClick={() => {
              setIsOpen(false);
              scrollToSchedule();
            }}
            className="block px-6 py-2 text-[#dad2c3] hover:text-blue-600 transition"
          >
            Schedule
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              scrollToGaamCelebrations();
            }}
            className="block px-6 py-2 text-[#dad2c3] hover:text-blue-600 transition"
          >
            Gaam Celebrations
          </button>
          {["Register", "Laabhs", "Reserve Your Stay"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-6 py-2 text-[#dad2c3] hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="flex justify-between bg-black p-4">
      {/* Logo */}
      <div className="m-4">
        <Link href="/">
          <Image alt="logo" src={"/images/logo.png"} width="50" height="70" />
        </Link>
      </div>

      {/* Navigation for Large Screens */}
      <nav className="hidden md:flex items-center gap-5 m-4 text-[#ffffff]">
        <ul className="flex gap-5 text-xl font-semibold">
          <li>
            <Link
              className="hover:bg-[#08771a] transform transition-transform duration-300 hover:scale-105 hover:border-b-2 rounded border-lime-500"
              href="/"
              onClick={handleLinkClick} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-[#08771a] hover:border-b-2 rounded border-lime-500"
              href="/components/about"
              onClick={handleLinkClick} // Close menu on click
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-[#08771a] hover:border-b-2 rounded border-lime-500"
              href="/components/projects"
              onClick={handleLinkClick} // Close menu on click
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-[#08771a] hover:border-b-2 rounded border-lime-500"
              href="/components/contact"
              onClick={handleLinkClick} // Close menu on click
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl"
        >
          {menuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-0 left-0 w-full bg-black p-5 md:hidden">
          <ul className="flex flex-col gap-5 text-[#ffffff] text-xl font-semibold">
            <li>
              <Link
                className="hover:bg-[#08771a] transform transition-transform duration-300 hover:scale-105 hover:border-b-2 rounded border-lime-500"
                href="/"
                onClick={handleLinkClick} // Close menu on click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-[#08771a] hover:border-b-2 rounded border-lime-500"
                href="/components/about"
                onClick={handleLinkClick} // Close menu on click
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-[#08771a] hover:border-b-2 rounded border-lime-500"
                href="/components/projects"
                onClick={handleLinkClick} // Close menu on click
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-[#08771a] hover:border-b-2 rounded border-lime-500"
                href="/components/contact"
                onClick={handleLinkClick} // Close menu on click
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Social Icons for Large Screens */}
      <nav className="hidden md:flex gap-5 m-4 text-gray-700">
        <Link
          className="bg-green-500 h-8 rounded-full"
          href="https://github.com/rumaisaayaz"
          target="_blank"
        >
          <Image alt="GitHub" src="/icons/github.png" width="35" height="35" />
        </Link>

        <Link
          href="https://linkedin.com/in/rumaisa-ayaz-730630301"
          target="_blank"
        >
          <Image
            alt="Linkedin"
            src="/icons/linkedin.png"
            width="30"
            height="30"
          />
        </Link>

        <Link href="https://www.npmjs.com/~rumaisa_ayaz" target="_blank">
          <Image alt="NPM" src="/icons/npm.png" width="32" height="32" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;

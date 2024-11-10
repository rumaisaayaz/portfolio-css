"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from '../../styles/header.module.css'; // Adjusted import path


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <Image alt="logo" src={"/images/logo.png"} width="50" height="70" />
        </Link>
      </div>

      {/* Navigation for Large Screens */}
      <nav className={styles.navDesktop}>
        <ul>
          <li>
            <Link
              href="/"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/components/about"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/components/projects"
              onClick={handleLinkClick}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/components/contact"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu for Small Screens */}
      <div className={styles.hamburgerButton}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className={styles.navMobile}>
          <ul>
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/components/about"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/components/projects"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/components/contact"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Social Icons for Large Screens */}
      <nav className={styles.socialIcons}>
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

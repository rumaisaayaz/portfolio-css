import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between bg-black">
  
      <div className="m-4">
      <Link href="/">
      <Image
      alt="logo"
      src={"/images/logo.png"}
      width="50"
      height="70"
      />      
      </Link>

      </div>
      <nav className="text-xl font-semibold ">
        <ul className="flex gap-5 m-4 text-[#ffffff]">
          <li>
            <Link
              className="hover:bg-[#08771a] transform transition-transform duration-300 hover:scale-105 hover:border-b-2 rounded border-lime-500"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-[#08771a] hover:border-b-2 rounded border-lime-500 "
              href="/components/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-[#08771a] hover:border-b-2 rounded border-lime-500 "
              href="/components/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-[#08771a] hover:border-b-2 rounded border-lime-500 "
              href="/components/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

     

      <nav className="flex gap-5 m-4 text-gray-700">

        <Link className="bg-green-500 h-8 rounded-full" href="https://github.com/rumaisaayaz" target="_blank">
          <Image alt="GitHub" src="/icons/github.png" width="35" height="35" />
        </Link>


        <Link
          href="https://linkedin.com/in/rumaisa-ayaz-730630301
"
          target="_blank"
        >
          <Image
            alt="Linkedin"
            src="/icons/linkedin.png"
            width="30"
            height="30"
          />
        </Link>


        <Link  href="https://www.npmjs.com/~rumaisa_ayaz" target="_blank">
          <Image alt="NPM" src="/icons/npm.png" width="32" height="32" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;

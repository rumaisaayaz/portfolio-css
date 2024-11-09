// components/Footer.tsx
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000]  text-black py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <Link
            href="https://linkedin.com/in/rumaisa-ayaz-730630301"
            target="_blank"
          >
            <Image
              className="hover:text-gray-400"
              alt="Linkedin"
              src="/icons/linkedin.png"
              width="32"
              height="32"
            />
          </Link>

          <Link className="bg-green-500 h-8 rounded-full" href="https://github.com/rumaisaayaz" target="_blank">
            <Image
              className="hover:text-gray-400"
              alt="GitHub"
              src="/icons/github.png"
              width="32"
              height="32"
            />
          </Link>

        

          <Link href="https://www.npmjs.com/~rumaisa_ayaz" target="_blank">
            <Image
              className="hover:text-gray-400"
              alt="NPM"
              src="/icons/npm.png"
              width="32"
              height="32"
            />
          </Link>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Rumaisa Ayaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

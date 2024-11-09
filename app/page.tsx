import Link from "next/link";
import Image from "next/image";
import React from "react";
import ContactForm from "@/app/components/contact/page";
import Projects from "@/app/components/projects/page";
import About from "@/app/components/about/page";

const Home = () => {
  return (
    <div>
      <div
        className="hero bg-gradient-to-br from-[#000000] to-[#08771a] text-white min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg1.png')" }} // Add your background image here
      >
        <div className="hero-content flex-col justify-end lg:flex-row-reverse px-6 sm:px-10 md:px-20">
          <div className="w-full lg:w-[50%]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Rumaisa Ayaz
            </h1>
            <p className="py-6 text-lg sm:text-xl">
              I'm a web developer and digital marketer with a focus on creating
              engaging and user-centered experiences. Skilled in TypeScript,
              JavaScript, Next.js, HTML, CSS, Tailwind CSS, and Figma, I bring
              both technical expertise and design insight to every project. With
              a background in building applications and launching impactful
              marketing campaigns, I’m driven to combine creativity, strategy,
              and a dedication to quality. Let’s connect and make something
              remarkable together!
            </p>
            <button className="btn border-green-400 bg-green-400 transform transition-transform duration-300 hover:scale-105 hover:bg-green-950 hover:text-white hover:border-green-400 btn-secondary ml-2 text-lg">
              <Link
                className="flex"
                href="https://static-resume-fawn.vercel.app/"
                target="_blank"
              >
                Resume
                <Image
                  alt="Linkedin"
                  src="/icons/share.png"
                  width="32"
                  height="32"
                />
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b-4 border-[#E2E2B6]">
        <About />
      </div>

      <div className="border-b-4 border-[#E2E2B6]">
        <Projects />
      </div>

      <div
        className="flex flex-col md:flex-row justify-between p-6 shadow-lg bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bgc.jpg')" }} 
      >
        <ContactForm />

        <div className="mt-12 md:mt-36 w-full md:w-[50%] text-xl">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-5 transform transition-transform duration-300 hover:scale-105">
            Let's Connect
          </h1>
          <p className="">
            We're here to connect! Whether you have a project in mind, need more
            information, or just want to chat about potential collaborations,
            feel free to reach out. Fill out the form below, and I’ll get back
            to you as soon as possible. Let’s bring your ideas to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

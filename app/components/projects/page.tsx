import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <div className="flex justify-center text-3xl p-5 font-bold text-white bg-black">
        <h1>Projects</h1>
      </div>
      <div className="flex justify-between p-4 bg-gradient-to-br from-lime-400 to-green-700 ">
        <div>
          <div className="card transform transition-transform duration-300 hover:scale-105 shadow-stone-950  text-black bg-gradient-to-br from-[#30aa44] to-[#08771a] w-[20rem] m-4 h-[30rem] shadow-xl glow-card ">
            <figure>
              <img src="/images/builder.png" alt="Resume-Builder-Pic" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Resume Builder</h2>
              <p>
                {" "}
                Builder: An interactive resume creator using TypeScript, HTML,
                and CSS, hosted on Vercel for quick access.
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-black text-white btn-primary border-black hover:bg-lime-400 hover:text-black">
                  <Link href="https://resume-builder-alpha-dun.vercel.app/">
                    Visit
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="card transform transition-transform duration-300 hover:scale-105 shadow-stone-950  w-[20rem]  text-black bg-gradient-to-br from-[#30aa44] to-[#08771a] m-4 h-[30rem] shadow-xl">
            <figure>
              <img src="/images/myresume.png" alt="Resume-Pic" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Static Resume</h2>
              <p>
                {" "}
                A clean, polished resume designed with TypeScript, HTML, and CSS
                for a professional presentation.{" "}
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-black text-white btn-primary border-black hover:bg-lime-400 hover:text-black">
                  <Link href="https://static-resume-fawn.vercel.app/">
                    visit
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card transform transition-transform duration-300 hover:scale-105 shadow-stone-950  text-black bg-gradient-to-br from-[#30aa44] to-[#08771a] bg-[#E2E2B6] w-[20rem] m-4 h-[30rem] shadow-xl">
            <figure>
              <img src="/images/calculator.png" alt="Calculator-Pic" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Calculator</h2>
              <p>
                {" "}
                A basic calculator created using HTML, CSS, and TypeScript,
                ideal for quick and easy calculations.
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-black text-white btn-primary border-black hover:bg-lime-400 hover:text-black">
                  <Link href="https://calculator-web-based.vercel.app/">
                    Visit
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="card transform transition-transform duration-300 hover:scale-105 shadow-stone-950   text-black bg-gradient-to-br from-[#30aa44] to-[#08771a] w-[20rem] m-4 h-[30rem]  shadow-xl">
            <figure>
              <img src="/images/currency.png" alt="Currancy-Convertor-pic" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Currency Convertor</h2>
              <p>
                {" "}
                A simple converter made with HTML, CSS, and TypeScript to
                quickly exchange rates between currencies.{" "}
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-black text-white btn-primary border-black hover:bg-lime-400 hover:text-black">
                  <Link href="https://github.com/rumaisaayaz/Currency-Converterr.git/">
                    Visit
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card transform transition-transform duration-300 hover:scale-105 shadow-stone-950 w-[20rem] text-black bg-gradient-to-br from-[#30aa44] to-[#08771a]  m-4 h-[30rem] shadow-xl">
            <figure>
              <img src="/images/todo.avif" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">ToDo App</h2>
              <p>
                An engaging adventure game developed entirely in TypeScript,
                featuring interactive challenges and quests.
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-black text-white btn-primary border-black hover:bg-lime-400 hover:text-black">
                  <Link href="https://github.com/rumaisaayaz/-To-do-App.git">
                    Visit
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="card transform transition-transform duration-300 hover:scale-105 shadow-stone-950   w-[20rem] text-black bg-gradient-to-br from-[#30aa44] to-[#08771a] m-4 h-[30rem] shadow-xl">
            <figure>
              <img src="/images/atmmachine2.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">ATM Machine</h2>
              <p>
                A virtual ATM built with TypeScript, simulating key banking
                functions for hands-on experience.
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-black text-white btn-primary border-black hover:bg-lime-400 hover:text-black">
                  <Link href="https://github.com/rumaisaayaz/ATM.git">
                    Visit
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <div className="flex justify-center text-3xl p-5 font-bold text-white bg-black">
        <h1>Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gradient-to-br from-lime-400 to-green-700">
        <div className="card transform transition-transform duration-300 hover:scale-105 shadow-stone-950 text-black bg-gradient-to-br from-[#30aa44] to-[#08771a] w-[20rem] m-4 h-[30rem] shadow-xl glow-card">
          <figure>
            <img src="/images/builder.png" alt="Resume-Builder-Pic" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Resume Builder</h2>
            <p>
              A sleek and user-friendly resume builder featuring a modern UI.
              Built with TypeScript, HTML, and CSS, it streamlines creating
              professional resumes with ease and style.
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

        <div className="card transform transition-transform duration-300 hover:scale-105 shadow-stone-950 w-[20rem] text-black bg-gradient-to-br from-[#30aa44] to-[#08771a] m-4 h-[30rem] shadow-xl">
          <figure>
            <img src="/images/myresume.png" alt="Resume-Pic" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Static Resume</h2>
            <p>
              A clean, static resume template showcasing essential sections like
              skills, experience, and education. Built with HTML, CSS, and
              TypeScript for a structured layout.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-black text-white btn-primary border-black hover:bg-lime-400 hover:text-black">
                <Link href="https://static-resume-fawn.vercel.app/">Visit</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="card transform transition-transform duration-300 hover:scale-105 shadow-stone-950 w-[20rem] text-black bg-gradient-to-br from-[#30aa44] to-[#08771a] m-4 h-[30rem] shadow-xl">
          <figure>
            <img src="/images/calculator.png" alt="Calculator-Pic" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Calculator</h2>
            <p>
              A basic yet effective calculator to handle standard arithmetic
              operations. This project is crafted using HTML, CSS, and
              TypeScript for simplicity and precision.
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

        <div className="card transform transition-transform duration-300 hover:scale-105 shadow-stone-950 w-[20rem] text-black bg-gradient-to-br from-[#30aa44] to-[#08771a] m-4 h-[30rem] shadow-xl">
          <figure>
            <img src="/images/currency.png" alt="Currancy-Convertor-pic" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Currency Convertor</h2>
            <p>
              A responsive currency converter app for accurate exchange rate
              calculations. Built with TypeScript, HTML, and CSS, it simplifies
              foreign currency conversions.
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

        <div className="card transform transition-transform duration-300 hover:scale-105 shadow-stone-950 w-[20rem] text-black bg-gradient-to-br from-[#30aa44] to-[#08771a] m-4 h-[30rem] shadow-xl">
          <figure>
            <img src="/images/todo.avif" alt="todo-app" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">ToDo App</h2>
            <p>
              A user-friendly ToDo app for task management and productivity.
              Developed with TypeScript, HTML, and CSS, it enables adding,
              editing, and deleting tasks efficiently.
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

        <div className="card transform transition-transform duration-300 hover:scale-105 shadow-stone-950 w-[20rem] text-black bg-gradient-to-br from-[#30aa44] to-[#08771a] m-4 h-[30rem] shadow-xl">
          <figure>
            <img src="/images/atmmachine2.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">ATM Machine</h2>
            <p>
              An interactive ATM machine simulation offering withdrawal,
              deposit, and balance check functionalities. Created with
              TypeScript, HTML, and CSS for a realistic experience.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-black text-white btn-primary border-black hover:bg-lime-400 hover:text-black">
                <Link href="https://github.com/rumaisaayaz/ATM.git">Visit</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Link from "next/link";
import styles from "../../styles/Projects.module.css"; // Adjust the import path if needed
const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Projects</h1>
      </div>
      <div className={styles.cardGrid}>
        {/* Card 1 */}
        <div className={styles.card}>
          <figure>
            <img src="/images/builder.png" alt="Resume-Builder-Pic" />
          </figure>
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>Resume Builder</h2>
            <p className="para">
              A sleek and user-friendly resume builder featuring a modern UI.
              Built with TypeScript, HTML, and CSS, it streamlines creating
              professional resumes with ease and style.
            </p>
            <div className={styles.cardActions}>
                <Link href="https://resume-builder-alpha-dun.vercel.app/">
              <button className={styles.button}>
                  Visit
              </button>
                </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <figure>
            <img src="/images/myresume.png" alt="Resume-Pic" />
          </figure>
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>Static Resume</h2>
            <p className="para">
              A clean, static resume template showcasing essential sections like
              skills, experience, and education. Built with HTML, CSS, and
              TypeScript for a structured layout.
            </p>
            <div className={styles.cardActions}>
                <Link href="https://static-resume-fawn.vercel.app/">
              <button className={styles.button}>
              Visit
              </button>
                </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <figure>
            <img src="/images/calculator.png" alt="Calculator-Pic" />
          </figure>
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>Calculator</h2>
            <p className="para">
              A basic yet effective calculator to handle standard arithmetic
              operations. This project is crafted using HTML, CSS, and
              TypeScript for simplicity and precision.
            </p>
            <div className={styles.cardActions}>
                <Link href="https://calculator-web-based.vercel.app/">  
              <button className={styles.button}>
              Visit
              </button>
                </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className={styles.card}>
          <figure>
            <img src="/images/currency.png" alt="Currancy-Convertor-pic" />
          </figure>
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>Currency Convertor</h2>
            <p className="para">
              A responsive currency converter app for accurate exchange rate
              calculations. Built with TypeScript, HTML, and CSS, it simplifies
              foreign currency conversions.
            </p>
            <div className={styles.cardActions}>
                <Link href="https://github.com/rumaisaayaz/Currency-Converterr.git/">
              <button className={styles.button}>
              Visit
              </button>
                </Link>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className={styles.card}>
          <figure>
            <img src="/images/todo.avif" alt="todo-app" />
          </figure>
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>ToDo App</h2>
            <p className="para">
              A user-friendly ToDo app for task management and productivity.
              Developed with TypeScript, HTML, and CSS, it enables adding,
              editing, and deleting tasks efficiently.
            </p>
            <div className={styles.cardActions}>
                <Link href="https://github.com/rumaisaayaz/-To-do-App.git"> 
              <button className={styles.button}>
              Visit
              </button>
                </Link>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className={styles.card}>
          <figure>
            <img src="/images/atmmachine2.png" alt="ATM Machine" />
          </figure>
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>ATM Machine</h2>
            <p className="para">
              An interactive ATM machine simulation offering withdrawal,
              deposit, and balance check functionalities. Created with
              TypeScript, HTML, and CSS for a realistic experience.
            </p>
            <div className={styles.cardActions}>
                <Link href="https://github.com/rumaisaayaz/ATM.git">
              <button className={styles.button}>
              Visit
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
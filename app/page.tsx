import Link from "next/link";
import Image from "next/image";
import React from "react";
import ContactForm from "@/app/components/contact/page";
import Projects from "@/app/components/projects/page";
import About from "@/app/components/about/page";
import styles from "./styles/Home.module.css"; // Relative path


const Home: React.FC = () => {
  return (
    <div>
      <div
        className={`${styles.hero} ${styles.heroContent}`}
        style={{ backgroundImage: "url('/images/bg1.png')" }}
      >
        <div className={styles.heroText}>
          <div className={styles.heroTextLeft}>
            <h1 className={styles.heroHeading}>Rumaisa Ayaz</h1>
            <p className={styles.heroDescription}>
              I'm a web developer and digital marketer with a focus on creating
              engaging and user-centered experiences. Skilled in TypeScript,
              JavaScript, Next.js, HTML, CSS, Tailwind CSS, and Figma, I bring
              both technical expertise and design insight to every project. With
              a background in building applications and launching impactful
              marketing campaigns, I’m driven to combine creativity, strategy,
              and a dedication to quality. Let’s connect and make something
              remarkable together!
            </p>
            <button className={styles.heroButton}>
              <Link
                className={styles.resumeLink}
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

      <div className={styles.border}>
        <About />
      </div>

      <div className={styles.border}>
        <Projects />
      </div>

      <div
        className={`${styles.contactSection} ${styles.contactText}`}
        style={{ backgroundImage: "url('/images/bgc.jpg')" }}
      >
        <ContactForm />
        <div className={styles.contactDescription}>
          <h1 className={styles.contactHeading}>Let's Connect</h1>
          <p>
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

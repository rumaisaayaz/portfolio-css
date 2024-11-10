import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "../../styles/Footer.module.css"; // Import the custom CSS module

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <Link href="https://linkedin.com/in/rumaisa-ayaz-730630301" target="_blank">
            <Image className={styles.icon} alt="Linkedin" src="/icons/linkedin.png" width="32" height="32" />
          </Link>

          <Link className={styles.githubLink} href="https://github.com/rumaisaayaz" target="_blank">
            <Image className={styles.icon} alt="GitHub" src="/icons/github.png" width="32" height="32" />
          </Link>

          <Link href="https://www.npmjs.com/~rumaisa_ayaz" target="_blank">
            <Image className={styles.icon} alt="NPM" src="/icons/npm.png" width="32" height="32" />
          </Link>
        </div>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Rumaisa Ayaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

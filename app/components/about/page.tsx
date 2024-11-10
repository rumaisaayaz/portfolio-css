"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card";
import { CheckCircle } from "lucide-react";
import styles from "../../styles/About.module.css";
 // Import the custom CSS file

export default function AboutComponent() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ];

  const values = [
    "Continuous learning and growth",
    "Clean and efficient code",
    "User-centric design",
    "Collaboration and open communication",
  ];

  return (
    <div className={styles["about-container"]}>
      <Card className={styles.card}>
        <CardHeader className={styles["card-header"]}>
          <CardTitle className={styles["card-title"]}>
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className={styles["card-content"]}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className={styles["image-container"]}>
              <Image
                src="/images/pfp.png"
                alt="Your Name"
                width={199}
                height={155}
                className="object-cover w-full h-full"
              />
            </div>
            <div className={styles["text-container"]}>
              <h3 className="mission-title">My Mission</h3>
              <p>
                To create innovative and user-friendly web applications that
                solve real-world problems, while continuously expanding my
                skills and contributing to the developer community.
              </p>
            </div>
          </div>
          <div className={styles["skills-list"]}>
            <h3 className="title">My Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-black" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["values-list"]}>
            <h3 className="title">My Values</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["approach"]}>
            <h3 className="text-2xl font-bold mb-4 text-black">My Approach</h3>
            <p className="text-lg">
              I believe in crafting clean, efficient, and scalable code that not
              only meets the current requirements but also adapts to future
              needs. My experience with modern web technologies like React and
              Next.js, combined with my proficiency in TypeScript and Tailwind
              CSS, allows me to build robust and visually appealing
              applications. I'm passionate about staying up-to-date with the
              latest industry trends and best practices to deliver cutting-edge
              solutions.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

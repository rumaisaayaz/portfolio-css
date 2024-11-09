'use client'

import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card"
import { CheckCircle } from "lucide-react"
import { Progress } from "@/ui/progress"
import { useState } from 'react'





export default function AboutComponent() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ]

  const values = [
    "Continuous learning and growth",
    "Clean and efficient code",
    "User-centric design",
    "Collaboration and open communication",
  ]

  return (
    <div className="min-h-screen bg-green-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-black text-white shadow-xl border-2 border-green-500">
        <CardHeader className="bg-green-700">
          <CardTitle className="text-3xl font-bold text-center">About Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-500 flex-shrink-0">
              <Image 
                src="/images/pfp.png"
                alt="Your Name"
                width={199}
                height={155}
                className="object-cover flex justify-center"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-400">My Mission</h3>
              <p className="text-lg">
                To create innovative and user-friendly web applications that solve real-world problems, while continuously expanding my skills and contributing to the developer community.
              </p>
            </div>
          </div>
          <div className="space-y-4 bg-green-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-black">My Skills</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-black" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-green-400">My Values</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-black">My Approach</h3>
            <p className="text-lg">
              I believe in crafting clean, efficient, and scalable code that not only meets the current requirements but also adapts to future needs. My experience with modern web technologies like React and Next.js, combined with my proficiency in TypeScript and Tailwind CSS, allows me to build robust and visually appealing applications. I'm passionate about staying up-to-date with the latest industry trends and best practices to deliver cutting-edge solutions.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
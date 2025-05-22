import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/medioks.jpg";
import ipbImg from "@/public/ipb.jpg";
import soicImg from "@/public/image-3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated ",
    location: "Baba Banada Singh Bahadur Engneering Collage, Fatehgarh Sahib",
    description:
      "I graduated in B.tech(CSE) . I immediately found a job as a full stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Full Stack Developer",
    location: "Fresco Web services",
    description:
      "I worked as a full-stack developer for 2 years in  job  and learned lot pf things about mern stack technology.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2025",
  },
  {
    title: "Full-Stack Developer",
    location: "Navabi Markiting PVT LTD",
    description:
      "I'm now a full-stack developer working at navabi markiting pvt. ltd. . My stack includes React, Next.js, TypeScript, Tailwind, Mysql and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
{
  title: "Nestle Medioks Panel",
  description:
    "I worked as a full-stack developer on this project. Nestle is managing its officer hierarchy to distribute medical books as gifts to doctors.",
  tags: ["React", "Next.js", "Mysql", "Tailwind", ],
  imageUrl: corpcommentImg,
},

 {
  title: "IPB India",
  description:
    "Official website for IPB India, a leading publishing and printing company. I contributed to the front-end development using modern technologies. The site includes dynamic content management, responsive design, and optimized performance for showcasing products and company information.",
  tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  imageUrl: ipbImg,
}
,
 {
  title: "SOIC – Stock Market & Finance Learning Platform",
  description:
    "SOIC (School of Intrinsic Compounding) is an educational platform offering in-depth stock market and finance courses. ",
  tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  imageUrl: soicImg,
}

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
 "AWS",
 "PHP",
 "Laravel",
  "MongoDB",
  "Redux",
  "GraphQL",
 "Mysql",
  "Express",
 
] as const;

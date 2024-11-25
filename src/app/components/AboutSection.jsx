"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>JavaScript</li>
        <li>React js</li>
        <li>Next js</li>
        <li>Tailwind css</li>
        <li>Shadcn UI</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor in Computer Science</li>
        <li>Federal Urdu University of Science and Technology, Karachi</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Web Development</li>
        <li>Android Development</li>
        <li>Mern Stack Development</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="flex flex-col md:flex-row gap-6 items-center py-8 px-4 xl:gap-14 sm:py-16 xl:px-16">
        <Image
          src="/images/file.png"
          className="rounded-2xl bg-[#223047] mx-auto"
          alt="about-image"
          width={300}
          height={200}
        />
        <div className="mt-4 md:mt-0 text-center md:text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am proficient in frontend web developer and android app developer.
            With a strong command of frontend development JavaScript, React js, Next js, Tailwind css, XML, Java. I am driven to expand my skill set and knowledge by pursuing a career in full-stack development.
          </p>
          <div className="flex flex-row justify-center md:justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

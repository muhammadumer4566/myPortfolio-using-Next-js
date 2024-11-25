"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This is React base my personal portfolio project using different type of libraries and see all details are mentioned here",
    image: "/images/image.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://my-portfolio-website45.netlify.app/",
  },
  {
    id: 2,
    title: "Shopping Carts Project",
    description: "This is React base project using Redux Toolkit, Redux Documentation, Add To Cart Functionality.",
    image: "/images/s1.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://shopping-carts-using-react.netlify.app/",
  },
  {
    id: 3,
    title: "Top Courses Project",
    description: "This is also React base Project using different Hooks like useState,useEffect, add on Functionality show like or unlike toast.",
    image: "/images/s2.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://react-top-courses12.netlify.app/",
  },
  {
    id: 4,
    title: "Razorpay Website Project",
    description: "This is UI based project, using Html, Css and also use and deep learning Css framework Tailwind Css.",
    image: "/images/s3.JPG",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://razorpay-website23.netlify.app/",
  },
  {
    id: 5,
    title: "Chat Web Application Project",
    description: "Group Chit Chat Web Application, crafted using HTML , Tailwind CSS, vanilla Javascript and connect with firebase.",
    image: "/images/s4.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://chat-web-application34.netlify.app/",
  },
  {
    id: 6,
    title: "Netflix Website Project",
    description: "Built a fully responsive Netflix clone using HTML and CSS. This project allowed me to dive deep into front-end development.",
    image: "/images/s5.JPG",
    tag: ["All", "Web"],
    previewUrl: "https://netflix-website253.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

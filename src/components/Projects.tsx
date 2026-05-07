import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Violin Academy Platform",
    description:
      "A comprehensive promotion and community website for a violin academy. Features admin authentication, gallery management (CRUD), and secure image uploads. Optimized for mobile with a responsive Korean UI.",
    techStack: ["Next.js", "TypeScript", "Mantine UI", "Express", "MongoDB", "Fly.io", "Vercel"],
    image: process.env.PUBLIC_URL + "/cergy.png",
    link: "https://cergymusic.com/",
    isInProgress: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-new">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-header">
          <h2 className="section-title">Personal Projects</h2>
          <p className="projects-subtitle">
            These are personal side projects built to explore modern technologies
            and demonstrate my passion for development. Each project is created
            from scratch with a focus on clean code and intuitive design.
          </p>
        </motion.div>

        <div className="projects-grid-new">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.1}
              isInProgress={project.isInProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

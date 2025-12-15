import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing my projects, skills, and experience. Built with modern React and TypeScript, featuring smooth animations and responsive design.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDF8fHx8MTc2NDkxNzcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isInProgress: true,
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
          <h2 className="section-title">Featured Projects</h2>
          <p className="projects-subtitle">
            These projects are demos reconstructed from features I actually
            developed in B2B systems, with personal information and company
            assets removed. All code has been personally rewritten from scratch.
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

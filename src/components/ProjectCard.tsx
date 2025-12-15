import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { ImageWithFallback } from "./About";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  delay?: number;
  isInProgress?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  delay = 0,
  isInProgress = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="project-card-new">
      <div className="project-image-container">
        <ImageWithFallback
          src={image}
          alt={title}
          className="project-image-new"
        />
        <div className="project-image-overlay" />
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title-new">{title}</h3>
          {isInProgress && <span className="project-badge">In Progress</span>}
        </div>
        <p className="project-description">{description}</p>

        <div className="project-tech-stack">
          {techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <button className="project-view-btn">
          View more
          <ExternalLink className="btn-icon" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

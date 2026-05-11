import React from "react";
import { IconType } from "react-icons";
import {
  SiAngular,
  SiExpress,
  SiFirebase,
  SiFlydotio,
  SiGit,
  SiJavascript,
  SiMantine,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSwagger,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const skills: Array<{ name: string; icon: IconType; color: string }> = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "RESTful APIs", icon: SiSwagger, color: "#85EA2D" },
  { name: "Mantine UI", icon: SiMantine, color: "#339AF0" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Fly.io", icon: SiFlydotio, color: "#24185B" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-badges">
          {skills.map((skill) => {
            // React 19와 react-icons 호환성을 위한 타입 단언
            const IconComponent = skill.icon as React.FC<{
              className?: string;
            }>;
            return (
              <div
                key={skill.name}
                className="skill-badge"
                data-tooltip={skill.name}
                style={{ "--skill-color": skill.color } as React.CSSProperties}>
                <IconComponent className="skill-icon" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

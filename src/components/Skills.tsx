import React from "react";
import {
  SiReact,
  SiTypescript,
  SiNestjs,
  SiMongodb,
  SiAngular,
  SiNodedotjs,
  SiJavascript,
  SiSwagger,
  SiGit,
} from "react-icons/si";
import { IconType } from "react-icons";

const skills: Array<{ name: string; icon: IconType; color: string }> = [
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "RESTful APIs", icon: SiSwagger, color: "#85EA2D" },
  { name: "Git", icon: SiGit, color: "#F05032" },
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

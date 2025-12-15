import React, { useState } from "react";
import profileImage from "../assets/images/profile.png";
import { motion } from "motion/react";
import { Code2, Palette, Zap } from "lucide-react";

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, onError, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${
        className ?? ""
      }`}
      style={style}>
      <div className="flex items-center justify-center w-full h-full"></div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  );
}

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code following best practices and design patterns.",
  },
  {
    icon: Palette,
    title: "User-Centric Design",
    description:
      "Creating intuitive interfaces that prioritize user experience and accessibility.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing applications for speed, efficiency, and seamless user interactions.",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="profile-image-container">
          <ImageWithFallback
            src={profileImage}
            alt="Developer"
            className="profile-image"
            style={{ display: "block" }}
          />
        </div>
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-text-content">
            <h3>Building scalable web interfaces, component by component</h3>
            <p>
              Web developer with {new Date().getFullYear() - 2022} years of
              experience building enterprise B2B systems, specializing in
              Angular, React, and TypeScript for scalable frontend
              architectures.
            </p>
            <p>
              Experienced in integrating backend services using Node.js, NestJS,
              and MongoDB, with a focus on maintainable code and
              production-ready interfaces.
            </p>
          </motion.div>

          <div className="about-stats">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="stat-item">
                <h3>
                  <value.icon className="stat-icon" />
                  {value.title}
                </h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isBackVisible, setIsBackVisible] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setTimeout(() => {
      setIsBackVisible(!isBackVisible);
    }, 100); // Adjust the delay time (in milliseconds) as needed
  };

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          onClick={handleFlip}
          className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-transform duration-500 ${
            isFlipped ? "flipped" : ""
          }`}
          style={{ transform: isFlipped ? "scaleX(-1)" : "scaleX(1)" }}
        >
          <div className="card-inner">
            <div className={`card-front ${isFlipped ? "hidden" : ""}`}>
              <img
                src={icon}
                alt="web-development"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                {title}
              </h3>
            </div>
            <div>
              {isBackVisible && <p>{services[index].backText}</p>}
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 2)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The thrill of problem-solving and the hunger for knowledge are what
        drive me to keep learning and growing in my field. With every challenge
        that I overcome, I become more confident and capable in my abilities.
        And it's not just about building something impressive - it's about the
        impact that technology can have on people's lives. Whether it's making a
        process more efficient, connecting people across the world, or solving a
        real-world problem, technology has the power to make a meaningful
        difference.
      </motion.p>
      <h1>Click Card To Flip</h1>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

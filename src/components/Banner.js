import React from "react";
import { Link } from 'react-scroll'
//images
import Image from "../assets/avatar2.svg";
// Icons
import { FaDribbble, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
// Motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[90px]"
            >
              Mauro <span>Moyano</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Full Stack ",
                  2000,
                  "Web ",
                  2000,
                  "Developer ",
                  2000,
                ]}
                speed={5}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I am a person who is passionate about solving problems in an innovative and creative way. I love working in teams and achieving their integration.
I am a Full Stack Web Developer with a lot of versatility and adaptability. In this SPA created by me, you will see skills that I have, projects and more!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-x-6 max-w-max items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">
                <Link to="contact" smooth={true} spy={true}>
                  Contact me
                </Link>
              </button>
              <a href="portfolio-starter/public/cv.pdf" download className="text-gradient btn-link">
                My CV
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.linkedin.com/in/mauro-moyano-dev-full-stack/" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://github.com/MauroMoyano" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/mauromoyanodev/" target='_blank'>
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="Image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

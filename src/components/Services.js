import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

// services data
const services = [
  {
    name: "Fiorella Belen Frini",
    description:
      "Mauro es una persona integradora, líder, positiva que busca la unión del grupo, y trabajo en equipo. Es disciplinado y le pone mucha pasión a la programación! Siempre esta dispuesto a ayudar a los pares y apuntar al crecimiento. No tengo dudas que le espera un futuro lleno lo de logros!!",
    link: "Learn more",
  },
  {
    name: "Darwin Roa",
    description:
      "Excelente compañero y lider. Compartimos juntos las clases en el bootcamp de Henry, donde se hizo a cargo de crear grupos de estudios en el cuál se ofrecía a aportar sus conocimientos, en varias oportunidades me apoyó, aclaró mis dudas, y así lo hizo con más compañeros. Mauro es una persona entuciasta, lider, no se cansa de apoyar a los demás, mantiene la calma siempre y logra mantener el orden entre quienes integren su equipo.",
    link: "Learn more",
  },
  {
    name: "Carlos Cesar Arnaez Flores",
    description:
      "¡Es un placer poder recomendar a Mauro en LinkedIn!... He tenido el placer de estudiar con Mauro durante el bootcamp de Henry y durante este tiempo, pude ver de primera mano su capacidad para reunir y formar equipos altamente integrados y motivados. Además, Mauro tiene una habilidad excepcional para compartir conocimiento y experiencias con sus compañeros y equipo de trabajo lo que resulta en un ambiente altamente colaborativo y productivo. Pero lo que más destaca de Mauro es su preocupación genuina por las personas que la rodean. Siempre se preocupa por el bienestar de todos, lo que crea un ambiente laboral positivo y acogedor. Si estás buscando un líder excepcional para tu equipo, no dudes en considerar Mauro. Su habilidad para formar equipos integrados y su compromiso con el bienestar de su equipo es algo que cualquier organización valoraría altamente.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image*/}
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">shared experiences</h2>
            <h3 className="font-primary text-[16px] leading-[36px] max-w-[455px] mb-16">
            Discover what those who have had the opportunity to work with me say. In this section, I share the experiences and opinions of people who have trusted my work and have been part of my projects or have studied together.
            </h3>
            <button className="btn btn-sm">
              <Link to="work" smooth={true} spy={true}>
              See my work
              </Link>
              </button>
          </motion.div>
          {/* services */}
          <motion.div
           variants={fadeIn("left", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
           className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-light h-18 line-clamp-3 overflow-hidden overflow-ellipsis">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      {/* Links mapeados */}
                      <a href="https://www.linkedin.com/in/mauro-moyano-dev-full-stack" target="_blank" className="btn w-9 h-9 mb-[42px] flex items-center justify-center">
                        <BsArrowUpRight />
                      </a>
                      <a href="https://www.linkedin.com/in/mauro-moyano-dev-full-stack" target="_blank" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

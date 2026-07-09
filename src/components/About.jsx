import React from "react";
import stackImage from "../assets/about/portfolioimage.png";
import reactImage from "../assets/about/react.png";
import nodeImage from "../assets/about/node.png";
import mongoImage from "../assets/about/mongodb.png";
import javaimg from "../assets/about/java.png";
import javascriptimg from "../assets/about/javascript.png";
import awsimg from "../assets/about/aws.png";
import ansibleimg from "../assets/about/ansible.png";
import nextimg from "../assets/about/next.js.png";
import javamic from "../assets/about/javamicroservices.png";
import n8nimg from "../assets/about/n8n.png";
import html5img from "../assets/about/html5.png";
import reduximg from "../assets/about/redux.png";
import mysqlimg from "../assets/about/mysql.png";
import seliniumimg from "../assets/about/selinium.png";
import aitoolsimg from "../assets/about/aitools.png";

const About = () => {
  // Array mapping for clean, uniform rendering of your tech stack imports
  const techStack = [
    { src: javascriptimg, alt: "JavaScript", delay: 100 },
    { src: javaimg, alt: "Java", delay: 150 },
    { src: html5img, alt: "HTML5", delay: 200 },
    { src: reduximg, alt: "Redux", delay: 250 },
    { src: reactImage, alt: "React", delay: 300 },
    { src: nextimg, alt: "Next.js", delay: 350 },
    { src: nodeImage, alt: "Node.js", delay: 400 },
    { src: mongoImage, alt: "MongoDB", delay: 450 }, // Row 1 Ends (Exactly 8)
    { src: mysqlimg, alt: "MySQL", delay: 500 },
    { src: awsimg, alt: "AWS", delay: 550 },
    { src: ansibleimg, alt: "Ansible", delay: 600 },
    { src: javamic, alt: "Java Microservices", delay: 650 },
    { src: seliniumimg, alt: "Selenium", delay: 700 },
    { src: n8nimg, alt: "n8n", delay: 750 },
    { src: aitoolsimg, alt: "AI Tools", delay: 800 },
  ];

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-24 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Dynamic CSS Injection for the continuous multi-color spinning border animation */}
      <style>{`
        @keyframes spin-gradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-gradient {
          animation: spin-gradient 4s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-[320px] flex justify-center">
          <div data-aos="drop-bounce" className="relative">
            {/* Lanyard */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black rounded-full"></div>

            {/* Clip */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-10 rounded bg-gray-300 border border-gray-400 z-10"></div>

            {/* Badge */}
            <div className="relative z-20 bg-[#1f2937] p-3 rounded-2xl shadow-2xl rotate-[-3deg] hover:rotate-0 duration-500">
              {/* Hole */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#1f2937] rounded-t-xl flex justify-center items-center">
                <div className="w-8 h-2 rounded-full bg-black/30"></div>
              </div>

              <div className="overflow-hidden rounded-xl">
                <img
                  src={stackImage}
                  alt="Profile"
                  className="w-[260px] h-[340px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="flex-1 text-white"
        >
          <p className="uppercase tracking-[6px] text-sm text-yellow-300 font-semibold mb-3">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Hello, I'm{" "}
            <span className="text-[#ffd166]">Shaik Jafer Ali</span>
          </h2>

          <p className="text-[17px] md:text-lg leading-9 text-white/90 max-w-4xl font-light tracking-wide">
            I'm a{" "}
            <span className="font-semibold text-white">
              Results-Driven Full-Stack Developer & DevOps Engineer
            </span>{" "}
            with{" "}
            <span className="font-semibold text-white">
              1.8+ years of professional experience
            </span>{" "}
            building scalable, production-grade web applications at{" "}
            <span className="font-semibold text-white">Physics Wallah</span>. I
            specialize in{" "}
            <span className="text-yellow-300">
              React.js, Next.js, Node.js, Express.js, Microservices, MongoDB,
              AWS, Docker, Jenkins, Ansible, and Apache
            </span>
            , developing secure cloud-native applications, CI/CD pipelines, and
            scalable backend systems. I enjoy solving real-world engineering
            challenges, optimizing application performance, and delivering
            reliable software solutions that create measurable business impact.
          </p>

          {/* 3D Dynamic Skills Grid - 8 columns on desktop layout */}
          <div 
            className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 mt-10 max-w-4xl"
            style={{ perspective: "1000px" }}
          >
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group relative flex justify-center items-center aspect-square rounded-xl bg-slate-950/80 p-[2px] transition-all duration-500 ease-out cursor-pointer [transform-style:preserve-3d] hover:[transform:rotateX(12deg)_rotateY(-12deg)_translateZ(12px)] overflow-hidden"
              >
                {/* COMBINED COLORS CHROMATIC BORDER BACKGROUND LAYER */}
                <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#ff2a2a,#ffae00,#00ff88,#00bfff,#9900ff,#ff2a2a)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-gradient" />

                {/* HIGH INTENSITY BACKDROP LIGHTNING GLOW LAYER */}
                <div 
                  className="absolute inset-0 rounded-xl bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 mix-blend-screen"
                  style={{ transform: "translateZ(-10px)" }}
                />

                {/* THE INNER CARD CONTAINER */}
                <div className="w-full h-full rounded-[10px] bg-slate-900/95 flex justify-center items-center z-10 p-2 transition-colors duration-500 group-hover:bg-slate-950/40">
                  <img
                    data-aos="zoom-in"
                    data-aos-delay={tech.delay}
                    src={tech.src}
                    alt={tech.alt}
                    className="w-14 h-14 md:w-16 md:h-16 object-contain transition-all duration-500 [transform:translateZ(20px)] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] group-hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)] group-hover:scale-110 brightness-90 group-hover:brightness-125"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Torn Paper */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorations */}
      <div className="absolute top-10 right-20 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div
        className="absolute bottom-28 left-20 text-black opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};

export default About;
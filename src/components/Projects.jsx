import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import healthImg from "../assets/about/healthapp.png"; 
import pwioiImg from "../assets/about/pwioi.png"; 

const ProjectCard = ({ title, description, tags, img, githubUrl, liveUrl, isLiveAvailable }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Intercept the click if the project codebase is private
  const handleGithubClick = (e) => {
    if (githubUrl.toLowerCase().includes("private") || !githubUrl.startsWith("http")) {
      e.preventDefault();
      alert("This Project is Private and Confidential");
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="w-full max-w-[510px] bg-slate-950/80 rounded-[2.5rem] p-[2px] relative transition-all duration-500 ease-out cursor-pointer overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
    >
      {/* BACKGROUND REFLECTIVE SHINING CHROMATIC BORDER LAYER */}
      <div 
        className={`absolute inset-[-50%] bg-[conic-gradient(from_0deg,#ff2a2a,#ffae00,#00ff88,#00bfff,#9900ff,#ff2a2a)] transition-opacity duration-700 animate-spin-gradient ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* INNER STRUCTURE FRAME */}
      <div className="w-full h-full bg-[#111827] rounded-[2.4rem] p-6 flex flex-col justify-between z-10 relative transition-colors duration-500 group-hover:bg-slate-900/90">
        
        <div>
          {/* MOCKUP DISPLAY WINDOW */}
          <div className="w-full h-60 rounded-[1.8rem] bg-[#1f2937] overflow-hidden relative border border-gray-800 shadow-inner group-hover:border-gray-700 transition-colors duration-500">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            
            {/* TARGET ACTION CONTROLLERS */}
            <div className="absolute top-4 right-4 flex gap-3">
              <a
                href={githubUrl.startsWith("http") ? githubUrl : "#"}
                onClick={handleGithubClick}
                target={githubUrl.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="w-11 h-11 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg z-30"
                title={githubUrl.startsWith("http") ? "View GitHub Repository" : "Private Repository"}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              {isLiveAvailable && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-[#ff2a2a] hover:bg-red-600 text-white rounded-full flex items-center justify-center border border-red-400/30 transition-all duration-300 transform hover:scale-110 shadow-lg z-30"
                  title="View Live Website"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* PROJECT DESCRIPTION METRICS */}
          <div className="mt-6" style={{ transform: "translateZ(25px)" }}>
            <h3 className="text-2xl font-black text-white tracking-tight mb-3 transition-colors duration-300 group-hover:text-red-400">
              {title}
            </h3>
            <p className="text-sm font-medium text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>

        {/* PILL TAG COMPONENT SECTION */}
        <div className="mt-6 flex flex-wrap gap-2" style={{ transform: "translateZ(15px)" }}>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-bold px-3 py-1.5 rounded-full bg-slate-900 text-gray-400 border border-gray-800 transition-all duration-300 group-hover:border-red-500/30 group-hover:bg-red-500/5 group-hover:text-red-300"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

const Projects = () => {
  const structuralProjects = [
    {
      title: "Health Booker Application",
      description: "Comprehensive full-stack doctor appointment booking platform featuring secure real-time interactive user scheduling and microservices architecture. Fully decoupled client dashboards reduce loading runtimes safely.",
      tags: ["#react", "#Node JS", "#Mongo DB", "#Express", "#JWT Auth"],
      img: healthImg,
      githubUrl: "https://github.com/jaferalilpu/Health-Booker-Application", 
      liveUrl: "#",
      isLiveAvailable: false
    },
    {
      title: "PWIOI UMS",
      description: "An internal, enterprise-grade automated optimization portal architected at Physics Wallah. Integrated with secure workflow clusters reducing deployment steps by eliminating operational overhead metrics.",
      tags: ["#React.js", "#Next.js", "#Node.js", "#Automation", "#n8n", "#Docker"],
      img: pwioiImg,
      githubUrl: "This Project is Private and Confidential", 
      liveUrl: "https://pwioi.club", 
      isLiveAvailable: true
    }
  ];

  return (
    <section
      id="projects" 
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <style>{`
        @keyframes spin-gradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-gradient {
          animation: spin-gradient 5s linear infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative">
        
        {/* HEADER BLOCK SECTION */}
        <div data-aos="fade-up" className="mb-16 text-center md:text-left">
          <div className="inline-block border border-slate-200 text-[#334155] font-semibold rounded-full px-6 py-2 text-sm tracking-wide mb-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)] bg-white">
            My Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-4 tracking-tight">
            Featured System Deployments
          </h2>
          <p className="text-gray-500 text-base max-w-xl font-medium leading-relaxed">
            Real-world enterprise tools and scalable digital products engineered using advanced full-stack capabilities, automated pipelines, and highly available architectures.
          </p>
        </div>

        {/* COLUMNS MATRIX GRID */}
        <div 
          className="flex flex-col md:flex-row justify-center items-stretch gap-8 lg:gap-12 w-full"
          style={{ perspective: "1000px" }}
        >
          {structuralProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              img={project.img}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              isLiveAvailable={project.isLiveAvailable}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
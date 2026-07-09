import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Local PDF Asset Imports
import awsCertificate from "../assets/about/certifications/AWS certificate.pdf";
import metaCertificate from "../assets/about/certifications/Advanced React.pdf"; // Example fallback path
import niitCertificate from "../assets/about/certifications/Serversidescriptnode.pdf"; // Example fallback path

const CertificationCard = ({ title, issuer, date, skills, credentialUrl, glowColor }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D parallax tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 22 });

  // Subtle isometric tilting angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
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
      className="w-full max-w-[380px] bg-slate-900/40 backdrop-blur-xl rounded-[2rem] p-6 relative transition-all duration-500 cursor-pointer border border-slate-800/60 hover:border-slate-700/80 group will-change-transform select-none"
    >
      {/* AMBIENT GLOW BACKDROP LAYER (Triggers on Hover) */}
      <div 
        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{ backgroundColor: glowColor }}
      />

      {/* CARD CONTENT LAYER */}
      <div className="flex flex-col justify-between h-full relative z-10">
        
        <div>
          {/* TOP METRICS & METADATA BADGE */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              Verified Credential
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/50">
              {date}
            </span>
          </div>

          {/* ISSUER BRANDING INDICATOR BAR */}
          <div 
            className="w-8 h-[3px] rounded-full mb-4 transition-all duration-500 group-hover:w-16"
            style={{ backgroundColor: glowColor }}
          />

          {/* TITLE & ORGANISATION */}
          <h3 
            className="text-xl font-bold text-white tracking-tight leading-snug mb-1 transition-colors duration-300 group-hover:text-slate-100"
            style={{ transform: "translateZ(20px)" }}
          >
            {title}
          </h3>
          <p className="text-sm font-semibold text-slate-400 mb-6">{issuer}</p>
        </div>

        {/* BOTTOM SECTION: SKILLS & VERIFICATION ACTION */}
        <div>
          {/* TARGET SKILL CHIPS */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-950/40 text-slate-400 border border-slate-800/80 transition-colors duration-300 group-hover:border-slate-700/60"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* VIEW CREDENTIAL ACTION BUTTON */}
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white text-xs font-bold tracking-wide flex items-center justify-center gap-2 border border-slate-800/80 transition-all duration-300 shadow-md group-hover:border-slate-700/80"
            style={{ transform: "translateZ(10px)" }}
          >
            <span>View certificate</span>
            <svg 
              className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const verifiedCertifications = [
    {
      title: "AWS Cloud Essentials",
      issuer: "Amazon Web Services (AWS)",
      date: "Jan 2025",
      skills: ["Cloud Computing", "AWS EC2", "IAM", "S3 Storage"],
      credentialUrl: awsCertificate, // Connected directly to imported asset file
      glowColor: "#ff9900" 
    },
    {
      title: "Advanced React Development",
      issuer: "Meta",
      date: "May 2024",
      skills: ["React Hooks", "State Architecture", "Performance Optimisation"],
      credentialUrl: metaCertificate, // Connected directly to imported asset file
      glowColor: "#0081fb" 
    },
    {
      title: "Server-Side Development with Node.js",
      issuer: "NIIT",
      date: "Apr 2024",
      skills: ["Node.js Architecture", "Express REST APIs", "Backend Scalability"],
      credentialUrl: niitCertificate, // Connected directly to imported asset file
      glowColor: "#22c55e" 
    }
  ];

  return (
    <section 
      id="certifications"
      className="bg-slate-950 py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      {/* Background Subtle Mesh Design */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1e293b_0%,transparent_50%)] opacity-40 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        
        {/* HEADER BLOCK SECTION */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-block border border-slate-800 text-slate-400 font-semibold rounded-full px-6 py-2 text-sm tracking-wide mb-6 bg-slate-900/50 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
            My Certifications
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-4 tracking-tight">
            Verified Industry Credentials
          </h2>
          <p className="text-slate-400 text-base max-w-xl font-medium leading-relaxed">
            Professional certifications confirming verified engineering standards in full stack application engineering, cloud infrastructure clusters, and automated systems architecture.
          </p>
        </div>

        {/* RESPONSIVE CERTIFICATION GRID MATRIX */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 justify-items-center w-full"
          style={{ perspective: "1000px" }}
        >
          {verifiedCertifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              skills={cert.skills}
              credentialUrl={cert.credentialUrl}
              glowColor={cert.glowColor}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
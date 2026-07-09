// Hero.jsx
// NOTE:
// Browsers block autoplay with sound. This component starts muted and
// unmutes on first user interaction. Resume button included.

import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroVideo from "../assets/hero video/herovideo.mp4";
import resume from "../assets/resume/Jafer_Ali_Resume_Final.pdf";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });

    const firstInteraction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play().catch(() => {});
      }
      window.removeEventListener("click", firstInteraction);
    };

    window.addEventListener("click", firstInteraction);
    return () => window.removeEventListener("click", firstInteraction);
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const next = !videoRef.current.muted;
    videoRef.current.muted = next;
    setIsMuted(next);
    if (videoRef.current.paused) videoRef.current.play().catch(() => {});
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

      <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 flex items-start justify-between pt-28 md:pt-[12%]">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl md:text-6xl font-black mb-5">
            Hi, I'm Shaik Jafer Ali
            <br />
            <span>Full Stack Developer</span>
          </h1>

          <p className="text-lg text-white/90 mb-8">
            I build fast, scalable and modern web applications using React,
            Node.js, Java Microservices and DevOps automation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-full bg-white text-black font-bold">
              View My Work
            </a>

            <a href="#contact" className="px-6 py-3 rounded-full border border-white text-white font-bold">
              Contact Me
            </a>

            <a
              href={resume}
              download="Shaik_Jafer_Ali_Resume.pdf"
              className="px-6 py-3 rounded-full bg-red-600 text-white font-bold"
            >
              Download Resume
            </a>
          </div>
        </div>

        <button
          onClick={toggleMute}
          className="text-white border border-white rounded-full px-5 py-3"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import hariImg from "../assets/hariharan.png";

export default function HeroTwo() {
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        minHeight: "700px",
        background: "#000",        // Pure Black Background
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Big Name - Image visible ONLY inside letters */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(350px, 22vw, 320px)",
          fontWeight: 900,
          lineHeight: 0.68,
          letterSpacing: "-8px",
          color: "#ffffff",
          margin: 0,
          position: "relative",
          zIndex: 2,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          backgroundImage: `url(${hariImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 38%",   // Adjust this if needed
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          width: "100%",
          padding: "0",
          textShadow: "0 10px 50px rgba(0,0,0,0.95)",
        }}
      >
        Hariharan
      </motion.h1>
    </section>
  );
}
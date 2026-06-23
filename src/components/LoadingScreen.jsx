import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const barRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#080808",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        gap: "40px",
      }}
    >
      {/* Netflix-style logo reveal */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ height: "3px", background: "#e50914", borderRadius: "2px" }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "52px",
            letterSpacing: "6px",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          HARIHARAN M
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#e50914",
            textTransform: "uppercase",
          }}
        >
          Software Developer
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ height: "3px", background: "#e50914", borderRadius: "2px" }}
        />
      </motion.div>

      {/* Loading bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ width: "200px" }}
      >
        <div style={{ height: "2px", background: "rgba(255,255,255,0.1)", borderRadius: "1px", overflow: "hidden" }}>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, delay: 0.9, ease: "easeInOut" }}
            style={{ height: "100%", background: "linear-gradient(90deg, #e50914, #ff6b6b)", borderRadius: "1px" }}
          />
        </div>
      </motion.div>

      {/* Decorative dots */}
      <div style={{ display: "flex", gap: "8px" }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: 1.2, delay: 1 + i * 0.15, repeat: Infinity, repeatDelay: 0.3 }}
            style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#e50914" }}
          />
        ))}
      </div>
    </motion.div>
  );
}

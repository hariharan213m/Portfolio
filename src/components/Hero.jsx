import { useRef, useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";

/* ── Typewriter ─────────────────────────────────────── */
const typewriterTexts = [
  "Software Engineer",
  "MERN Stack Developer",
  "React.js Specialist",
  "Front-End Developer",
];

function TypeWriter() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = typewriterTexts[textIndex];
    let timeout;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setTextIndex((p) => (p + 1) % typewriterTexts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, textIndex]);

  return (
    <span style={{ color: "#e50914" }}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        style={{ borderRight: "2px solid #e50914", marginLeft: "2px" }}
      >
        &nbsp;
      </motion.span>
    </span>
  );
}

/* ── CSS animated background ───────────────────────── */
function AnimatedBg() {
  const orbs = [
    {
      size: 420,
      x: "75%",
      y: "20%",
      color: "rgba(229,9,20,0.12)",
      delay: 0,
      dur: 8,
    },
    {
      size: 320,
      x: "80%",
      y: "65%",
      color: "rgba(139,92,246,0.10)",
      delay: 1.5,
      dur: 10,
    },
    {
      size: 240,
      x: "62%",
      y: "45%",
      color: "rgba(6,182,212,0.08)",
      delay: 3,
      dur: 7,
    },
    {
      size: 180,
      x: "88%",
      y: "30%",
      color: "rgba(229,9,20,0.07)",
      delay: 0.8,
      dur: 9,
    },
    {
      size: 280,
      x: "68%",
      y: "80%",
      color: "rgba(139,92,246,0.06)",
      delay: 2,
      dur: 11,
    },
  ];

  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: 40 + Math.random() * 55,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2.5,
    color: i % 3 === 0 ? "#e50914" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4",
    dur: 4 + Math.random() * 8,
    delay: Math.random() * 4,
    opacity: 0.2 + Math.random() * 0.5,
  }));

  return (
    <div
      className="hero-bg"
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="orb"
          animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.08, 1] }}
          transition={{
            duration: orb.dur,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            borderRadius: "50%",
            background: `radial-gradient(circle at 40% 40%, ${orb.color}, transparent 70%)`,
            filter: "blur(40px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          animate={{
            y: [0, -20, 0],
            opacity: [p.opacity, p.opacity * 0.4, p.opacity],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}

      <motion.div
        className="wireframe wireframe-1"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          right: "12%",
          top: "20%",
          width: "200px",
          height: "200px",
          border: "1px solid rgba(229,9,20,0.12)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
      />
      <motion.div
        className="wireframe wireframe-2"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          right: "18%",
          top: "30%",
          width: "130px",
          height: "130px",
          border: "1px solid rgba(139,92,246,0.15)",
          borderRadius: "50%",
        }}
      />
      <motion.div
        className="wireframe wireframe-3"
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          right: "8%",
          top: "55%",
          width: "80px",
          height: "80px",
          border: "1px solid rgba(6,182,212,0.2)",
          transform: "rotate(45deg)",
        }}
      />

      <div
        className="grid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 60% 100% at 80% 50%, black 20%, transparent 80%)",
        }}
      />
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────── */
export default function Hero() {
  const stats = [
    { value: "8+", label: "Months Experience" },
    { value: "5+", label: "Major Projects" },
    { value: "30%", label: "API Latency Cut" },
    { value: "10+", label: "Tech Stacks" },
  ];

  return (
    <>
      <style>{`
        /* ── Base (desktop) ── */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 5rem 1.5rem 2rem;
        }
        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-content {
          max-width: 720px;
          margin: 0 auto;
          text-align: left;
        }
        .hero-cta {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        .scroll-indicator {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        /* ── Tablet (769px - 1024px) ── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-section {
            min-height: auto;          /* content height only */
            padding: 6rem 2rem;
            align-items: center;
          }
          .hero-content {
            max-width: 600px;
            text-align: center;
            margin: 0 auto;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-stats {
            justify-content: center;
            gap: 2rem;
          }
          .hero-gradient {
            background: radial-gradient(ellipse at center, rgba(8,8,8,0.6) 30%, rgba(8,8,8,0.9) 80%) !important;
          }
          .orb {
            width: 250px !important;
            height: 250px !important;
          }
          .wireframe-2, .wireframe-3 {
            display: none;
          }
          .grid-overlay {
            mask-image: radial-gradient(ellipse 80% 80% at center, black 20%, transparent 80%) !important;
          }
          .scroll-indicator {
            display: none;            /* hide on tablet as well */
          }
        }

        /* ── Mobile (≤768px) ── */
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;          /* content height only */
            padding: 6rem 1rem 3rem;
            align-items: center;
          }
          .hero-content {
            text-align: center;
            max-width: 100%;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-stats {
            justify-content: center;
            gap: 1.5rem;
          }
          .scroll-indicator {
            display: none;
          }
          .orb {
            width: 180px !important;
            height: 180px !important;
          }
          .particle {
            display: none;
          }
          .wireframe {
            display: none;
          }
          .grid-overlay {
            mask-image: radial-gradient(ellipse 80% 80% at center, black 20%, transparent 80%) !important;
          }
          .hero-gradient {
            background: linear-gradient(to bottom, rgba(8,8,8,0.95) 40%, rgba(8,8,8,0.7) 100%) !important;
          }
          .hero-gradient-bottom {
            height: 120px !important;
          }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .hero-section {
            padding: 6rem 0.75rem 2rem;
          }
          .hero-stats {
            gap: 1rem;
          }
          .hero-cta {
            gap: 0.75rem;
          }
          .hero-cta a {
            padding: 12px 24px !important;
            font-size: 11px !important;
          }
        }
      `}</style>

      <section id="hero" className="hero-section">
        <AnimatedBg />

        {/* Gradient overlays */}
        <div
          className="hero-gradient"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(to right, rgba(8,8,8,0.92) 40%, rgba(8,8,8,0.3) 100%)",
          }}
        />
        <div
          className="hero-gradient-bottom"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "220px",
            zIndex: 1,
            background: "linear-gradient(to top, #080808, transparent)",
          }}
        />

        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                margin: "18px 0",
              }}
            >
              <div
                style={{ width: "40px", height: "1px", background: "#e50914" }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "4px",
                  color: "#e50914",
                  textTransform: "uppercase",
                }}
              >
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(48px, 12vw, 130px)",
                textAlign: "center",
                lineHeight: "0.9",
                letterSpacing: "2px",
                color: "#ffffff",
                marginBottom: "16px",
              }}
            >
              HARI
              <span style={{ color: "#e50914" }}>HARAN</span>
              <span
                style={{
                  fontSize: "0.6em",
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "1px",
                }}
              >
                {" "}
                M
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(18px, 4vw, 32px)",
                letterSpacing: "3px",
                marginBottom: "28px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TypeWriter />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{
                fontSize: "clamp(14px, 1.8vw, 15px)",
                lineHeight: "1.8",
                color: "rgba(255,255,255,0.5)",
                maxWidth: "520px",
                margin: "0 auto 40px",
                textAlign: "center",
              }}
            >
              Crafting scalable full-stack web applications with React.js,
              Node.js, and modern tooling. Passionate about performance
              optimization and seamless user experiences.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  padding: "14px 36px",
                  background: "#e50914",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "4px",
                  border: "1px solid #e50914",
                  display: "inline-block",
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(229,9,20,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                View Work
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  padding: "14px 36px",
                  background: "transparent",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "inline-block",
                }}
                whileHover={{
                  scale: 1.04,
                  borderColor: "rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.04)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.08 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(28px, 5vw, 36px)",
                      color: "#fff",
                      lineHeight: "1",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              letterSpacing: "3px",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "50px",
              background: "rgba(255,255,255,0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "#e50914",
              }}
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}

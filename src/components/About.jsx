import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import hariImg from "../assets/hariharan.png";

/* ── Add your photo here ──────────────────────────────────────────
   Paste a direct image URL (Imgur, Cloudinary, Google Drive direct
   link, etc.).  Set to null to show the stylised monogram instead.
   ────────────────────────────────────────────────────────────── */
const PHOTO_URL = hariImg; // e.g. "https://i.imgur.com/yourphoto.jpg"

const stats = [
  { val: "8+", label: "Months Exp", color: "#e50914" },
  { val: "6+", label: "Projects Built", color: "#8b5cf6" },
  { val: "~30%", label: "API Perf Boost", color: "#06b6d4" },
  { val: "7.7", label: "CGPA", color: "#f5c518" },
];

const tech = [
  "React.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "Redis",
  "JavaScript",
  "Java",
  "Tailwind CSS",
  "Stripe",
  "Razorpay",
  "Postman",
  "Git",
  "AWS EC2",
  "Next.js",
];

const traits = [
  {
    icon: "⚡",
    label: "Performance-First",
    sub: "Redis caching, query tuning",
  },
  { icon: "🔗", label: "API Craftsman", sub: "RESTful & modular design" },
  { icon: "🧩", label: "Problem Solver", sub: "DSA & algorithmic thinking" },
  { icon: "🤝", label: "Team Player", sub: "Agile sprint delivery" },
];

function BentoCard({ children, style = {}, delay = 0, inView, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "18px",
        overflow: "hidden",
        backdropFilter: "blur(12px)",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section" ref={ref}>
      <div
        className="glow-blob about-glow-1"
        style={{
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
          top: "-10%",
          right: "-200px",
        }}
      />
      <div
        className="glow-blob about-glow-2"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)",
          bottom: "0%",
          left: "-150px",
        }}
      />

      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "48px" }}
        >
          <div className="section-label">01 — About Me</div>
          <h2 className="section-title">
            Who's <span>behind</span> the code
          </h2>
        </motion.div>

        {/* ── BENTO GRID ── */}
        <div
          className="about-bento"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "auto auto auto",
            gap: "14px",
          }}
        >
          {/* 1. Profile card — tall left, full-bleed photo */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            style={{
              gridColumn: "1 / 4",
              gridRow: "1 / 3",
              borderRadius: "18px",
              overflow: "hidden",
              position: "relative",
              minHeight: "380px",
              boxShadow:
                "0 0 0 1px rgba(229,9,20,0.2), 0 0 40px rgba(229,9,20,0.08), 0 0 80px rgba(139,92,246,0.06)",
              background: "#0a0a0a",
            }}
          >
            {/* ── Photo or monogram ── */}
            {PHOTO_URL ? (
              <img
                src={PHOTO_URL}
                alt="Hariharan M"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            ) : (
              /* Stylised monogram background */
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(160deg, rgba(229,9,20,0.12) 0%, rgba(139,92,246,0.1) 50%, rgba(6,182,212,0.06) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={`v${i}`}
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: `${i * 25}%`,
                      width: "1px",
                      background: "rgba(255,255,255,0.025)",
                    }}
                  />
                ))}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div
                    key={`h${i}`}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: `${i * 14.3}%`,
                      height: "1px",
                      background: "rgba(255,255,255,0.025)",
                    }}
                  />
                ))}
                {/* Monogram */}
                <div
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #e50914 0%, #8b5cf6 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "36px",
                    letterSpacing: "3px",
                    color: "#fff",
                    boxShadow:
                      "0 0 60px rgba(229,9,20,0.4), 0 0 120px rgba(139,92,246,0.2)",
                    zIndex: 2,
                    position: "relative",
                  }}
                >
                  HM
                </div>
                {/* Hint text */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "80px",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    color: "rgba(255,255,255,0.15)",
                    textTransform: "uppercase",
                  }}
                >
                  Set PHOTO_URL to add photo
                </div>
              </div>
            )}

            {/* ── Viewfinder corner brackets ── */}
            {[
              {
                top: "14px",
                left: "14px",
                borderTop: "2px solid #e50914",
                borderLeft: "2px solid #e50914",
              },
              {
                top: "14px",
                right: "14px",
                borderTop: "2px solid #e50914",
                borderRight: "2px solid #e50914",
              },
              {
                bottom: "14px",
                left: "14px",
                borderBottom: "2px solid #8b5cf6",
                borderLeft: "2px solid #8b5cf6",
              },
              {
                bottom: "14px",
                right: "14px",
                borderBottom: "2px solid #8b5cf6",
                borderRight: "2px solid #8b5cf6",
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "20px",
                  height: "20px",
                  zIndex: 5,
                  ...s,
                }}
              />
            ))}

            {/* ── Gradient overlay — always shown ── */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: PHOTO_URL
                  ? "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)"
                  : "none",
                zIndex: 3,
              }}
            />

            {/* ── Scan-line overlay (subtle) ── */}
            {/* {PHOTO_URL && (
              <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)",
                zIndex: 4,
                pointerEvents: "none",
              }} />
            )} */}

            {/* ── Floating info — bottom overlay ── */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "24px 20px",
                zIndex: 6,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
                textAlign: "center",
                ...(PHOTO_URL ? {} : { background: "none" }),
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "24px",
                    letterSpacing: "3px",
                    color: "#fff",
                    lineHeight: "1",
                    textShadow: PHOTO_URL
                      ? "0 2px 12px rgba(0,0,0,0.8)"
                      : "none",
                  }}
                >
                  Hariharan M
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    color: "#e50914",
                    marginTop: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  Full Stack Developer
                </div>
              </div>

              {/* Status badge */}
              <motion.div
                animate={{ opacity: [1, 0.55, 1] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 13px",
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.35)",
                  borderRadius: "20px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow: "0 0 8px #10b981",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "1.5px",
                    color: "#10b981",
                  }}
                >
                  Open to Work
                </span>
              </motion.div>

              {/* Location */}
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "1px",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                📍 Theni, Tamil Nadu
              </div>
            </div>

            {/* ── Top accent bar ── */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, #e50914, #8b5cf6, transparent)",
                zIndex: 7,
              }}
            />
          </motion.div>

          {/* 2. Bio card — wide top-center */}
          <BentoCard
            delay={0.08}
            inView={inView}
            className="about-bio-card"
            style={{
              gridColumn: "4 / 10",
              gridRow: "1 / 2",
              padding: "28px 32px",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "#e50914",
                marginBottom: "14px",
                textTransform: "uppercase",
              }}
            >
              About
            </div>
            <p
              className="about-bio-text"
              style={{
                fontSize: "14px",
                lineHeight: "1.85",
                color: "rgba(255,255,255,0.6)",
                margin: "0 0 12px 0",
              }}
            >
              Full-stack developer with hands-on experience building modern web
              applications using{" "}
              <strong style={{ color: "#fff" }}>
                {" "}
                React.js, Next.js, Redux, Node.js, Express, and MySQL
              </strong>
              . I focus on creating responsive user interfaces, scalable backend
              systems, and seamless user experiences.
            </p>
            <p
              className="about-bio-text"
              style={{
                fontSize: "14px",
                lineHeight: "1.85",
                color: "rgba(255,255,255,0.6)",
                margin: 0,
              }}
            >
              From developing full-stack business solutions to integrating{" "}
              <strong style={{ color: "#fff" }}> REST APIs </strong> and
              optimizing{" "}
              <strong style={{ color: "#fff" }}>
                {" "}
                application performance
              </strong>
              , I build reliable, efficient, and maintainable software designed
              for growth.
            </p>
          </BentoCard>

          {/* 3. Stats — top right */}
          <BentoCard
            delay={0.12}
            inView={inView}
            className="about-stats-card"
            style={{
              gridColumn: "10 / 13",
              gridRow: "1 / 2",
              padding: "24px 20px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "10px 10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection:"column",
                  background: `${s.color}08`,
                  border: `1px solid ${s.color}18`,
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div
                  className="about-stat-val"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "36px",
                    color: s.color,
                    lineHeight: "1",
                    marginBottom: "4px",
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "8px",
                    letterSpacing: "1px",
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </BentoCard>

          {/* 4. Traits — center row */}
          <BentoCard
            delay={0.16}
            inView={inView}
            className="about-traits-card"
            style={{
              gridColumn: "4 / 10",
              gridRow: "2 / 3",
              padding: "22px 28px",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                textTransform: "uppercase",
              }}
            >
              Core traits
            </div>
            <div
              className="about-traits-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {traits.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                  }}
                >
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>
                    {t.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#fff",
                        marginBottom: "2px",
                      }}
                    >
                      {t.label}
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.35)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {t.sub}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* 5. Education card — right */}
          <BentoCard
            delay={0.2}
            inView={inView}
            className="about-edu-card"
            style={{
              gridColumn: "10 / 13",
              gridRow: "2 / 3",
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              background:
                "linear-gradient(160deg, rgba(139,92,246,0.07) 0%, rgba(6,182,212,0.04) 100%)",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "#8b5cf6",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Education
            </div>
            <div
              className="about-edu-title"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "20px",
                letterSpacing: "1px",
                color: "#fff",
                lineHeight: "1.1",
              }}
            >
              Bachelor of Computer Applications
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>
              Bishop Heber College, Trichy
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "28px",
                  color: "#f5c518",
                }}
              >
                7.7
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "1px",
                }}
              >
                CGPA · 2022–2025
              </span>
            </div>
          </BentoCard>

          {/* 6. Tech belt — full width bottom */}
          <BentoCard
            delay={0.24}
            inView={inView}
            className="about-tech-card"
            style={{
              gridColumn: "1 / 13",
              gridRow: "3 / 4",
              padding: "18px 0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "rgba(255,255,255,0.2)",
                textTransform: "uppercase",
                padding: "0 24px",
                marginBottom: "14px",
              }}
            >
              Tech stack
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.div
                animate={{ x: [0, "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{
                  display: "flex",
                  gap: "10px",
                  width: "max-content",
                  padding: "0 0 4px 0",
                }}
              >
                {[...tech, ...tech].map((t, i) => (
                  <span
                    key={i}
                    className="about-tech-tag"
                    style={{
                      padding: "6px 16px",
                      borderRadius: "20px",
                      border: `1px solid ${i % 3 === 0 ? "rgba(229,9,20,0.3)" : i % 3 === 1 ? "rgba(139,92,246,0.3)" : "rgba(6,182,212,0.3)"}`,
                      background:
                        i % 3 === 0
                          ? "rgba(229,9,20,0.06)"
                          : i % 3 === 1
                            ? "rgba(139,92,246,0.06)"
                            : "rgba(6,182,212,0.06)",
                      color:
                        i % 3 === 0
                          ? "#e50914"
                          : i % 3 === 1
                            ? "#8b5cf6"
                            : "#06b6d4",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      letterSpacing: "0.5px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>
          </BentoCard>
        </div>
      </div>

      <style>{`
        /* ── Tablet: 2-column reflow, explicit rows so nothing leaves a gap ── */
        @media (max-width: 1024px) {
          #about .about-bento {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
            gap: 12px !important;
          }
          #about .about-bento > *:nth-child(1) { grid-column: 1 / 3 !important; grid-row: 1 !important; min-height: 320px !important; }
          #about .about-bento > *:nth-child(2) { grid-column: 1 / 3 !important; grid-row: 2 !important; }
          #about .about-bento > *:nth-child(3) { grid-column: 1 / 2 !important; grid-row: 3 !important; }
          #about .about-bento > *:nth-child(4) { grid-column: 1 / 3 !important; grid-row: 4 !important; }
          #about .about-bento > *:nth-child(5) { grid-column: 2 / 3 !important; grid-row: 3 !important; }
          #about .about-bento > *:nth-child(6) { grid-column: 1 / 3 !important; grid-row: 5 !important; }
          #about .about-stats-card { grid-template-columns: repeat(4, 1fr) !important; }
        }

        /* ── Mobile: single-column stack ── */
        @media (max-width: 640px) {
          #about .about-bento {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          #about .about-bento > *:nth-child(1) { grid-column: 1 / -1 !important; grid-row: auto !important; min-height: 300px !important; }
          #about .about-bento > *:nth-child(2) { grid-column: 1 / -1 !important; grid-row: auto !important; }
          #about .about-bento > *:nth-child(3) { grid-column: 1 / -1 !important; grid-row: auto !important; }
          #about .about-bento > *:nth-child(4) { grid-column: 1 / -1 !important; grid-row: auto !important; }
          #about .about-bento > *:nth-child(5) { grid-column: 1 / -1 !important; grid-row: auto !important; }
          #about .about-bento > *:nth-child(6) { grid-column: 1 / -1 !important; grid-row: auto !important; }

          #about .about-stats-card { grid-template-columns: 1fr 1fr !important; padding: 16px 14px !important; }
          #about .about-bio-card { padding: 22px 20px !important; }
          #about .about-bio-text { font-size: 13px !important; }
          #about .about-traits-card { padding: 18px 16px !important; }
          #about .about-edu-card { padding: 20px 18px !important; }
          #about .about-edu-title { font-size: 17px !important; }
          #about .about-stat-val { font-size: 28px !important; }

          #about .about-glow-1 { width: 380px !important; height: 380px !important; right: -160px !important; }
          #about .about-glow-2 { width: 240px !important; height: 240px !important; left: -100px !important; }
        }

        /* ── Small phones: tighten further, stack the trait pairs ── */
        @media (max-width: 480px) {
          #about .about-bento > *:nth-child(1) { min-height: 260px !important; }
          #about .about-traits-grid { grid-template-columns: 1fr !important; }
          #about .about-stats-card { gap: 8px !important; }
          #about .about-stat-val { font-size: 24px !important; }
          #about .about-tech-tag { font-size: 10px !important; padding: 5px 12px !important; }
        }
      `}</style>
    </section>
  );
}
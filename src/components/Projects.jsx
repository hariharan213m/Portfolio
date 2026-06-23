import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/*
 * HOW TO UPDATE:
 * — image: paste a direct URL to your project screenshot (e.g. an Imgur/Cloudinary link)
 *          If left as null, a styled gradient placeholder is shown.
 * — liveLink: your deployed app URL  (set to "#" to disable the button)
 * — github:   your GitHub repo URL   (set to "#" to disable the button)
 */
const projects = [
  {
    id: 1,
    num: "01",
    title: "Darklight Chess Academy",
    subtitle: "Chess Coaching & Session Booking Platform",
    type: "Freelance Project · Front-End",
    year: "2025",
    color: "#e50914",
    image: null,
    liveLink: "https://www.darklightchess.com/",
    github: "https://github.com/hariharan213m",
    desc: "A modern chess academy website developed for a freelance client to showcase coaching programs, student achievements, course plans, and training sessions. Built with a responsive user interface and a WhatsApp-integrated booking system to streamline student inquiries and session registrations.",
    highlights: [
      "Responsive design optimized for mobile, tablet, and desktop",
      "Achievement showcase section for student milestones and awards",
      "Course plans and coaching program presentation",
      "Session booking form with WhatsApp lead generation integration",
      "Smooth animations and modern user experience",
    ],
    tech: [
      "React.js",
      "Vite",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Framer Motion",
      "WhatsApp Integration",
    ],
    metrics: [
      { val: "100%", label: "Responsive" },
      { val: "5+", label: "Sections" },
      { val: "24/7", label: "Lead Capture" },
    ],
  },
  {
    id: 2,
    num: "02",
    title: "Groom & Glam",
    subtitle: "Salon Appointment Booking Platform",
    type: "SaaS · Full Stack",
    year: "2025",
    color: "#06b6d4",
    image: null,
    liveLink: "#",
    github: "https://github.com/hariharan213m",
    desc: "A full-stack SaaS booking platform with real-time appointment scheduling, secure payment processing, and modular RESTful API design. Built to handle concurrent booking requests at scale.",
    highlights: [
      "Real-time appointment scheduling system",
      "Stripe & Razorpay dual payment gateway integration",
      "Modular RESTful API with user management",
      "Concurrent booking request optimization",
      "API reliability testing via Postman",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Stripe", "Razorpay"],
    metrics: [
      { val: "100%", label: "Uptime" },
      { val: "2x", label: "Gateways" },
      { val: "<200ms", label: "Response" },
    ],
  },
  {
    id: 3,
    num: "03",
    title: "Prepkart",
    subtitle: "eCommerce Grocery Platform",
    type: "eCommerce · Full Stack",
    year: "2025",
    color: "#8b5cf6",
    image: null,
    liveLink: "#",
    github: "https://github.com/hariharan213m",
    desc: "A comprehensive full-stack eCommerce platform with product catalog management, cart operations, and complete order lifecycle. Features Redis-powered caching for lightning-fast performance under load.",
    highlights: [
      "Full product catalog, cart, and order lifecycle",
      "Scalable REST APIs for product & cart operations",
      "Redis caching for concurrent workload performance",
      "Razorpay secure payment integration",
      "Optimized database queries under high traffic",
    ],
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Razorpay",
    ],
    metrics: [
      { val: "~30%", label: "Faster APIs" },
      { val: "Redis", label: "Caching" },
      { val: "1000+", label: "Products" },
    ],
  },
];

/* ── Browser-frame mock ── */
function ProjectImage({ image, color, title }) {
  return (
    <div
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#0a0a0a",
        flexShrink: 0,
      }}
    >
      {/* Browser chrome bar */}
      <div
        style={{
          height: "28px",
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          gap: "6px",
        }}
      >
        {["#e50914", "#f5c518", "#10b981"].map((c, i) => (
          <div
            key={i}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: c,
              opacity: 0.7,
            }}
          />
        ))}
        <div
          style={{
            flex: 1,
            marginLeft: "8px",
            height: "14px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: color,
              marginRight: "6px",
              opacity: 0.7,
            }}
          />
          <div
            style={{
              fontSize: "9px",
              color: "rgba(255,255,255,0.25)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {title.toLowerCase().replace(/\s/g, "-")}.app
          </div>
        </div>
      </div>

      {/* Image or placeholder */}
      <div
        style={{ height: "180px", position: "relative", overflow: "hidden" }}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        ) : (
          /* Gradient placeholder that looks like a UI */
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg, ${color}10, rgba(0,0,0,0.8))`,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "16px",
            }}
          >
            {/* Fake nav bar */}
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "8px",
                  borderRadius: "4px",
                  background: color,
                  opacity: 0.5,
                }}
              />
              <div style={{ flex: 1 }} />
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: "30px",
                    height: "6px",
                    borderRadius: "3px",
                    background: "rgba(255,255,255,0.06)",
                  }}
                />
              ))}
            </div>
            {/* Fake hero block */}
            <div
              style={{
                flex: 1,
                borderRadius: "6px",
                background: `linear-gradient(135deg, ${color}18, transparent)`,
                border: `1px solid ${color}20`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "10px",
                  borderRadius: "5px",
                  background: "rgba(255,255,255,0.08)",
                }}
              />
              <div
                style={{
                  width: "120px",
                  height: "7px",
                  borderRadius: "3px",
                  background: "rgba(255,255,255,0.04)",
                }}
              />
              <div
                style={{
                  marginTop: "6px",
                  padding: "4px 14px",
                  borderRadius: "4px",
                  background: color,
                  opacity: 0.5,
                  width: "60px",
                  height: "14px",
                }}
              />
            </div>
            {/* Fake cards row */}
            <div style={{ display: "flex", gap: "6px" }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: "28px",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                />
              ))}
            </div>
            {/* Upload hint */}
            {/* <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.5)",
                opacity: 0,
                transition: "opacity 0.2s",
              }}
              className="img-hover-hint"
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: color,
                  letterSpacing: "2px",
                }}
              >
                ADD SCREENSHOT
              </span>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectOne() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section
      id="projects"
      className="section"
      ref={ref}
      style={{ background: "var(--bg2)" }}
    >
      <div
        className="glow-blob"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(229,9,20,0.05) 0%, transparent 70%)",
          top: "0%",
          right: "-200px",
        }}
      />
      <div
        className="glow-blob"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
          bottom: "10%",
          left: "-150px",
        }}
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "70px" }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            03 — Projects
          </div>
          <h2 className="section-title">
            Things I've <span>Built</span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.4)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Production-grade applications spanning SaaS, eCommerce, and tooling.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: "2px",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "20px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          {/* ── LEFT sidebar ── */}
          <div
            className="projects-sidebar"
            style={{
              borderRight: "1px solid rgba(255,255,255,0.05)",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                padding: "18px 22px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                }}
              >
                All Projects
              </span>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "20px",
                  color: "#e50914",
                }}
              >
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <div className="project-list">
              {projects.map((p, i) => (
                <motion.button
                  key={p.id}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="project-btn"
                  style={{
                    width: "100%",
                    padding: "16px 22px",
                    background:
                      active === i
                        ? `linear-gradient(90deg, ${p.color}12, transparent)`
                        : "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    borderLeft:
                      active === i
                        ? `3px solid ${p.color}`
                        : "3px solid transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                  whileHover={{
                    background: `linear-gradient(90deg, ${p.color}08, transparent)`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "17px",
                      color: active === i ? p.color : "rgba(255,255,255,0.2)",
                      transition: "color 0.2s",
                      minWidth: "26px",
                    }}
                  >
                    {p.num}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: active === i ? "#fff" : "rgba(255,255,255,0.55)",
                        marginBottom: "2px",
                        transition: "color 0.2s",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "9px",
                        letterSpacing: "1px",
                        color: active === i ? p.color : "rgba(255,255,255,0.2)",
                        textTransform: "uppercase",
                        transition: "color 0.2s",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {p.type}
                    </div>
                  </div>
                  {active === i && (
                    <motion.span
                      layoutId="arrow"
                      style={{ color: p.color, fontSize: "10px", flexShrink: 0 }}
                    >
                      ▶
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* ── RIGHT detail panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="project-detail"
              style={{
                padding: "32px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Accent glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-80px",
                  right: "-80px",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${project.color}0d, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Row: type badge + year + action buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: "20px",
                    border: `1px solid ${project.color}40`,
                    background: `${project.color}10`,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "1px",
                    color: project.color,
                    textTransform: "uppercase",
                  }}
                >
                  {project.type}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.22)",
                    letterSpacing: "2px",
                  }}
                >
                  {project.year}
                </span>

                <div
                  className="action-buttons"
                  style={{ marginLeft: "auto", display: "flex", gap: "8px" }}
                >
                  {/* GitHub button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(255,255,255,0.3)",
                    }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      padding: "7px 16px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "6px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "1px",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.2s",
                      background: "rgba(255,255,255,0.02)",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </motion.a>

                  {/* Live Demo button */}
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 20px ${project.color}50`,
                    }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      padding: "7px 18px",
                      background: project.color,
                      border: `1px solid ${project.color}`,
                      borderRadius: "6px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "1px",
                      color: "#fff",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.2s",
                      fontWeight: "600",
                    }}
                  >
                    <span>↗</span>
                    Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Two-column: image + info */}
              <div
                className="detail-content"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                  alignItems: "start",
                }}
              >
                {/* Left: browser image */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <ProjectImage
                    image={project.image}
                    color={project.color}
                    title={project.title}
                  />

                  {/* Metrics row */}
                  <div style={{ display: "flex", gap: "8px" }}>
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        style={{
                          flex: 1,
                          padding: "10px 8px",
                          background: `${project.color}08`,
                          border: `1px solid ${project.color}20`,
                          borderRadius: "8px",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "20px",
                            color: project.color,
                            lineHeight: "1",
                            marginBottom: "3px",
                          }}
                        >
                          {m.val}
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
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div
                    className="tech-tags"
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "4px 10px",
                          border: `1px solid ${project.color}30`,
                          borderRadius: "12px",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "9px",
                          color: project.color,
                          background: `${project.color}08`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: title + desc + highlights */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(28px, 3vw, 44px)",
                        letterSpacing: "2px",
                        color: "#fff",
                        lineHeight: "0.95",
                        marginBottom: "5px",
                      }}
                    >
                      {project.title}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                        fontStyle: "italic",
                      }}
                    >
                      {project.subtitle}
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.8",
                      color: "rgba(255,255,255,0.52)",
                      margin: 0,
                    }}
                  >
                    {project.desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    {project.highlights.map((h, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                          padding: "7px 10px",
                          background: "rgba(255,255,255,0.02)",
                          borderRadius: "6px",
                          border: "1px solid rgba(255,255,255,0.04)",
                        }}
                      >
                        <div
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: project.color,
                            flexShrink: 0,
                            marginTop: "5px",
                            boxShadow: `0 0 6px ${project.color}`,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.52)",
                            lineHeight: "1.5",
                          }}
                        >
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prev / Next nav */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  marginTop: "auto",
                }}
              >
                <motion.button
                  onClick={() => setActive((a) => Math.max(0, a - 1))}
                  disabled={active === 0}
                  whileHover={active > 0 ? { x: -3 } : {}}
                  style={{
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "6px",
                    padding: "7px 16px",
                    color:
                      active === 0
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(255,255,255,0.5)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "1px",
                    cursor: active === 0 ? "not-allowed" : "pointer",
                  }}
                >
                  ← Prev
                </motion.button>

                <div style={{ display: "flex", gap: "5px" }}>
                  {projects.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      style={{
                        width: active === i ? "18px" : "5px",
                        height: "5px",
                        borderRadius: "3px",
                        background:
                          active === i
                            ? project.color
                            : "rgba(255,255,255,0.15)",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        padding: 0,
                      }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={() =>
                    setActive((a) => Math.min(projects.length - 1, a + 1))
                  }
                  disabled={active === projects.length - 1}
                  whileHover={active < projects.length - 1 ? { x: 3 } : {}}
                  style={{
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "6px",
                    padding: "7px 16px",
                    color:
                      active === projects.length - 1
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(255,255,255,0.5)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "1px",
                    cursor:
                      active === projects.length - 1
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  Next →
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        /* ── Responsive styles ── */

        /* Tablet: reduce sidebar width and stack detail columns */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 220px 1fr !important;
          }
          .project-detail {
            padding: 28px 24px !important;
          }
          .detail-content {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
          }
        }

        /* Small tablet / large phone: single column, sidebar becomes horizontal scroll */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            border-radius: 16px !important;
          }
          .projects-sidebar {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.05) !important;
            max-height: 200px;
            overflow-y: auto;
          }
          .project-list {
            display: flex !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            padding: 8px 12px !important;
            gap: 8px !important;
            scroll-snap-type: x mandatory !important;
          }
          .project-list .project-btn {
            flex: 0 0 auto !important;
            width: auto !important;
            min-width: 140px !important;
            padding: 12px 18px !important;
            border-left: none !important;
            border-bottom: 3px solid transparent !important;
            border-radius: 8px !important;
            scroll-snap-align: start !important;
          }
          .project-list .project-btn[style*="active"] {
            border-bottom-color: var(--active-color, #e50914) !important;
          }
          .project-list .project-btn span:first-child {
            display: none !important;
          }
          .project-list .project-btn div {
            min-width: 0 !important;
          }
          .project-list .project-btn div div:first-child {
            font-size: 11px !important;
          }
          .project-detail {
            padding: 24px 16px !important;
          }
          .detail-content {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .action-buttons {
            margin-left: 0 !important;
            width: 100%;
            justify-content: flex-start;
          }
          .tech-tags span {
            font-size: 8px !important;
            padding: 3px 8px !important;
          }
          .projects-sidebar > div:first-child {
            padding: 12px 16px !important;
          }
          .projects-sidebar > div:first-child span:first-child {
            font-size: 9px !important;
          }
          .projects-sidebar > div:first-child span:last-child {
            font-size: 18px !important;
          }
        }

        /* Mobile phone: further tweaks */
        @media (max-width: 480px) {
          .project-detail {
            padding: 20px 12px !important;
          }
          .project-detail > div:first-child {
            gap: 8px !important;
          }
          .project-detail > div:first-child span:first-child {
            font-size: 8px !important;
            padding: 3px 8px !important;
          }
          .project-detail > div:first-child span:nth-child(2) {
            font-size: 8px !important;
          }
          .action-buttons a {
            font-size: 9px !important;
            padding: 6px 12px !important;
          }
          .project-detail .detail-content > div:first-child > div:first-child {
            height: 140px !important;
          }
          .project-detail .detail-content > div:first-child > div:first-child > div:last-child {
            padding: 12px !important;
          }
          .project-detail .detail-content > div:first-child > div:nth-child(2) {
            flex-wrap: wrap !important;
          }
          .project-detail .detail-content > div:first-child > div:nth-child(2) > div {
            min-width: 60px !important;
          }
          .project-detail .detail-content > div:last-child > div:first-child > div:first-child {
            font-size: clamp(24px, 8vw, 32px) !important;
          }
          .project-detail .detail-content > div:last-child > div:first-child > div:last-child {
            font-size: 10px !important;
          }
          .project-detail .detail-content > div:last-child p {
            font-size: 12px !important;
          }
          .project-detail .detail-content > div:last-child > div:last-child > div {
            padding: 5px 8px !important;
          }
          .project-detail .detail-content > div:last-child > div:last-child > div span {
            font-size: 10px !important;
          }
          .project-detail > div:last-child {
            flex-wrap: wrap !important;
            gap: 10px !important;
          }
          .project-detail > div:last-child button {
            padding: 5px 12px !important;
            font-size: 9px !important;
          }
          .project-detail > div:last-child > div {
            order: 0 !important;
          }
        }

        /* Hover effect for image placeholder */
        .img-hover-hint:hover {
          opacity: 1 !important;
        }

        /* Force active border color for horizontal mode */
        .project-list .project-btn[data-active="true"] {
          border-bottom-color: var(--active-color) !important;
        }
      `}</style>
    </section>
  );
}
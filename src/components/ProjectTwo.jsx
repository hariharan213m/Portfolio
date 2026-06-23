import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Project Data (only first 3) ──────────────────────────────
const projects = [
  {
    id: 1,
    num: "01",
    title: "Groom & Glam",
    subtitle: "Salon Appointment Booking Platform",
    type: "SaaS · Full Stack",
    year: "2025",
    color: "#e50914",
    image: null,
    liveLink: "#",
    github: "#",
    desc: "A full-stack SaaS booking platform with real-time appointment scheduling, secure payment processing, and modular RESTful API design.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Stripe", "Razorpay"],
  },
  {
    id: 2,
    num: "02",
    title: "Prepkart",
    subtitle: "eCommerce Grocery Platform",
    type: "eCommerce · Full Stack",
    year: "2025",
    color: "#8b5cf6",
    image: null,
    liveLink: "#",
    github: "#",
    desc: "A comprehensive full-stack eCommerce platform with product catalog, cart operations, and order lifecycle, powered by Redis caching.",
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Redis",
      "Razorpay",
    ],
  },
  {
    id: 3,
    num: "03",
    title: "Darklight Chess Academy",
    subtitle: "Chess Learning & Session Booking Platform",
    type: "Freelance · Front-End",
    year: "2025",
    color: "#06b6d4",
    image: null,
    liveLink: "#",
    github: "#",
    desc: "A responsive front-end website developed for a professional chess academy, featuring course plans, achievement showcases, coaching session details, and WhatsApp-based lead generation through an integrated booking system.",
    tech: [
      "React.js",
      "Vite",
      "JavaScript",
      "CSS3",
      "Responsive Design",
      "WhatsApp API",
    ],
  },
];

// ─── Helper: Project Image with browser chrome ──────────────
function ProjectImage({ image, color, title }) {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#0a0a0a",
        flexShrink: 0,
      }}
    >
      {/* Browser chrome */}
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

      {/* Content */}
      <div
        style={{ height: "160px", position: "relative", overflow: "hidden" }}
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
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg, ${color}15, rgba(0,0,0,0.85))`,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "16px",
            }}
          >
            {/* Fake UI placeholder */}
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
            <div
              style={{
                flex: 1,
                borderRadius: "6px",
                background: `linear-gradient(135deg, ${color}20, transparent)`,
                border: `1px solid ${color}30`,
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
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────
export default function ProjectTwo() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="section"
      ref={ref}
      style={{ background: "var(--bg2)" }}
    >
      {/* Background glows */}
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
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
            Production-grade applications spanning SaaS, eCommerce, and internal
            tooling.
          </p>
        </motion.div>

        {/* Grid of project cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{
                background: "rgba(255,255,255,0.02)",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${project.color}60`;
                e.currentTarget.style.boxShadow = `0 8px 30px ${project.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Subtle top glow line */}
              <div
                style={{
                  height: "3px",
                  width: "100%",
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                  opacity: 0.6,
                }}
              />

              <div
                style={{
                  padding: "20px 22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                {/* Project image */}
                <ProjectImage
                  image={project.image}
                  color={project.color}
                  title={project.title}
                />

                {/* Type badge & year */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "16px",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      padding: "3px 12px",
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
                      fontSize: "9px",
                      color: "rgba(255,255,255,0.2)",
                      letterSpacing: "1px",
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Title & subtitle */}
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "24px",
                    letterSpacing: "1px",
                    color: "#fff",
                    margin: "0 0 2px 0",
                    lineHeight: "1.1",
                  }}
                >
                  {project.title}
                </h3>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                    fontStyle: "italic",
                    marginBottom: "12px",
                  }}
                >
                  {project.subtitle}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.6",
                    color: "rgba(255,255,255,0.5)",
                    margin: "0 0 16px 0",
                    flex: 1,
                  }}
                >
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "18px",
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "3px 10px",
                        border: `1px solid ${project.color}30`,
                        borderRadius: "12px",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "8px",
                        color: project.color,
                        background: `${project.color}08`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div
                  style={{ display: "flex", gap: "10px", marginTop: "auto" }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.04,
                      borderColor: "rgba(255,255,255,0.3)",
                    }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      padding: "6px 16px",
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
                      background: "rgba(255,255,255,0.02)",
                      transition: "all 0.2s",
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
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.04,
                      boxShadow: `0 0 20px ${project.color}50`,
                    }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      padding: "6px 18px",
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
                      fontWeight: "600",
                    }}
                  >
                    <span>↗</span>
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        /* Responsive */
        @media (max-width: 1024px) {
          #projects .container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          #projects .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #projects .container > div:last-child > div {
            padding: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

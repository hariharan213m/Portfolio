import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Project data ───────────────────────────────────────────────
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
    desc: "A full-stack SaaS booking platform with real-time appointment scheduling, secure payment processing, and modular RESTful API design. Built to handle concurrent booking requests at scale.",
    highlights: [
      "Real-time appointment scheduling system",
      "Stripe & Razorpay dual payment gateway integration",
      "Modular RESTful API with user management",
      "Concurrent booking request optimization",
      "API reliability testing via Postman",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Stripe", "Razorpay"],
    metrics: [{ val: "100%", label: "Uptime" }, { val: "2x", label: "Gateways" }, { val: "<200ms", label: "Response" }],
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
    desc: "A comprehensive full-stack eCommerce platform with product catalog management, cart operations, and complete order lifecycle. Features Redis-powered caching for lightning-fast performance under load.",
    highlights: [
      "Full product catalog, cart, and order lifecycle",
      "Scalable REST APIs for product & cart operations",
      "Redis caching for concurrent workload performance",
      "Razorpay secure payment integration",
      "Optimized database queries under high traffic",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MySQL", "Redis", "Razorpay"],
    metrics: [{ val: "~30%", label: "Faster APIs" }, { val: "Redis", label: "Caching" }, { val: "1000+", label: "Products" }],
  },
  {
    id: 3,
    num: "03",
    title: "Staff Scheduler",
    subtitle: "Employee Shift Management System",
    type: "Internal Tool · Full Stack",
    year: "2025",
    color: "#06b6d4",
    image: null,
    liveLink: "#",
    github: "#",
    desc: "An internal workforce management tool to schedule employee shifts, track attendance, and generate payroll summaries. Designed with role-based access and real-time dashboards for managers.",
    highlights: [
      "Role-based access control (Admin / Manager / Staff)",
      "Drag-and-drop shift scheduling interface",
      "Automated payroll summary generation",
      "Real-time attendance tracking",
      "MySQL schema optimized for date-range queries",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "Git"],
    metrics: [{ val: "3", label: "Roles" }, { val: "Live", label: "Dashboard" }, { val: "Auto", label: "Payroll" }],
  },
  {
    id: 4,
    num: "04",
    title: "Task Board Pro",
    subtitle: "Agile Project Management App",
    type: "Productivity · Full Stack",
    year: "2024",
    color: "#f5c518",
    image: null,
    liveLink: "#",
    github: "#",
    desc: "A Kanban-style task management web app supporting project boards, task cards, due dates, and team assignments. Features drag-and-drop task movement across columns and real-time status updates.",
    highlights: [
      "Kanban board with drag-and-drop columns",
      "Real-time task status updates via polling",
      "Team member assignment and notifications",
      "Priority tagging and due-date tracking",
      "REST API with paginated task fetching",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "CSS", "Postman"],
    metrics: [{ val: "4", label: "Columns" }, { val: "Team", label: "Collab" }, { val: "Live", label: "Updates" }],
  },
  {
    id: 5,
    num: "05",
    title: "BCA Result Portal",
    subtitle: "Student Academic Result System",
    type: "Academic · Full Stack",
    year: "2024",
    color: "#10b981",
    image: null,
    liveLink: "#",
    github: "#",
    desc: "A college result management portal allowing students to view semester grades, download mark sheets, and track CGPA progression. Admin panel for faculty to upload and manage results securely.",
    highlights: [
      "Student login with secure session management",
      "Semester-wise grade view and CGPA calculator",
      "PDF mark sheet download functionality",
      "Admin panel for result uploads and edits",
      "MySQL schema for multi-semester records",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "HTML/CSS"],
    metrics: [{ val: "CGPA", label: "Tracker" }, { val: "PDF", label: "Download" }, { val: "Secure", label: "Auth" }],
  },
  {
    id: 6,
    num: "06",
    title: "QuickChat API",
    subtitle: "RESTful Messaging Backend",
    type: "Backend · API",
    year: "2024",
    color: "#f97316",
    image: null,
    liveLink: "#",
    github: "#",
    desc: "A high-performance messaging REST API supporting user registration, direct messaging, group chats, and message history retrieval with pagination. Built with Redis session management.",
    highlights: [
      "User auth with JWT and refresh tokens",
      "Direct and group messaging endpoints",
      "Paginated message history with cursor-based API",
      "Redis for session storage and rate limiting",
      "Thoroughly tested via Postman collections",
    ],
    tech: ["Node.js", "Express.js", "MySQL", "Redis", "JWT", "Postman"],
    metrics: [{ val: "JWT", label: "Auth" }, { val: "Redis", label: "Sessions" }, { val: "REST", label: "API" }],
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
      <div style={{ height: "180px", position: "relative", overflow: "hidden" }}>
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
            {/* Fake nav */}
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
            {/* Hero block */}
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
            {/* Cards */}
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
export default function Projects() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const project = projects[active];

  // Scroll the thumbnail strip to center the active item
  const stripRef = useRef(null);
  useEffect(() => {
    if (stripRef.current) {
      const container = stripRef.current;
      const activeEl = container.children[active];
      if (activeEl) {
        const containerWidth = container.offsetWidth;
        const activeLeft = activeEl.offsetLeft;
        const activeWidth = activeEl.offsetWidth;
        const scrollTo = activeLeft - containerWidth / 2 + activeWidth / 2;
        container.scrollTo({ left: scrollTo, behavior: "smooth" });
      }
    }
  }, [active]);

  return (
    <section id="projects" className="section" ref={ref} style={{ background: "var(--bg2)" }}>
      {/* Background glows */}
      <div
        className="glow-blob"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(229,9,20,0.05) 0%, transparent 70%)",
          top: "0%",
          right: "-200px",
        }}
      />
      <div
        className="glow-blob"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
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
            Production-grade applications spanning SaaS, eCommerce, and tooling.
          </p>
        </motion.div>

        {/* Main layout: featured panel + thumbnail strip */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* ─── Featured Project Panel ────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "28px 32px",
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
                  background: `radial-gradient(circle, ${project.color}15, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Top row: type badge, year, action buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    padding: "4px 14px",
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
                <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      padding: "6px 14px",
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
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${project.color}50` }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      padding: "6px 16px",
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

              {/* Image + info grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                  alignItems: "start",
                }}
              >
                {/* Left: image + metrics + tech */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <ProjectImage image={project.image} color={project.color} title={project.title} />

                  {/* Metrics */}
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
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
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

                {/* Right: title, subtitle, desc, highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
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
            </motion.div>
          </AnimatePresence>

          {/* ─── Thumbnail Strip ──────────────────────────────── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxHeight: "600px",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
                paddingLeft: "4px",
              }}
            >
              Projects ({projects.length})
            </div>

            <div
              ref={stripRef}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                overflowY: "auto",
                paddingRight: "4px",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(255,255,255,0.08) transparent",
                flex: 1,
              }}
            >
              {projects.map((p, idx) => (
                <motion.button
                  key={p.id}
                  onClick={() => setActive(idx)}
                  whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 16px",
                    background: active === idx ? `linear-gradient(90deg, ${p.color}15, rgba(255,255,255,0.02))` : "transparent",
                    border: active === idx ? `1px solid ${p.color}40` : "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "12px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  {/* Color bar */}
                  <div
                    style={{
                      width: "4px",
                      height: "32px",
                      borderRadius: "2px",
                      background: active === idx ? p.color : "rgba(255,255,255,0.1)",
                      transition: "background 0.2s",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "16px",
                        color: active === idx ? "#fff" : "rgba(255,255,255,0.4)",
                        lineHeight: "1.2",
                        transition: "color 0.2s",
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "9px",
                        letterSpacing: "1px",
                        color: active === idx ? p.color : "rgba(255,255,255,0.2)",
                        textTransform: "uppercase",
                        transition: "color 0.2s",
                      }}
                    >
                      {p.type}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "9px",
                      color: "rgba(255,255,255,0.15)",
                    }}
                  >
                    {p.year}
                  </div>
                  {active === idx && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: p.color,
                        boxShadow: `0 0 12px ${p.color}`,
                        flexShrink: 0,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* Responsive */
        @media (max-width: 1024px) {
          #projects .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #projects .container > div:last-child > div:last-child {
            max-height: 300px !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            padding-bottom: 8px;
          }
          #projects .container > div:last-child > div:last-child > button {
            flex: 0 0 200px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
            padding: 10px 14px !important;
          }
          #projects .container > div:last-child > div:last-child > button > div:first-child {
            height: 4px !important;
            width: 100% !important;
          }
          #projects .container > div:last-child > div:last-child > button > div:last-child {
            align-self: flex-end !important;
          }
          #projects .container > div:last-child > div:first-child > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          #projects .container > div:last-child > div:first-child {
            padding: 20px 16px !important;
          }
          #projects .container > div:last-child > div:last-child > button {
            flex: 0 0 160px !important;
          }
        }
      `}</style>
    </section>
  );
}
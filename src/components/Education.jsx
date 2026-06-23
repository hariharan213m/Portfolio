import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Education() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const courses = [
    "Data Structures", "Algorithms", "Object-Oriented Programming",
    "Database Management", "Software Engineering", "Computer Networks",
    "Operating Systems", "Web Technologies",
  ];

  return (
    <section id="education" className="section" ref={ref} style={{ background: "var(--bg2)" }}>
      <div className="glow-blob" style={{
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 70%)",
        top: "20%", left: "-150px",
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>05 — Education</div>
          <h2 className="section-title">
            Academic <span>Foundation</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
          {/* Degree card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              background: "linear-gradient(135deg, rgba(245,197,24,0.06) 0%, rgba(229,9,20,0.04) 100%)",
              border: "1px solid rgba(245,197,24,0.12)",
              borderRadius: "24px",
              padding: "clamp(32px, 7vw, 48px)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Year badge */}
              <div style={{
                position: "absolute",
                top: "24px", right: "24px",
                padding: "6px 16px",
                background: "rgba(245,197,24,0.1)",
                border: "1px solid rgba(245,197,24,0.2)",
                borderRadius: "20px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "#f5c518",
              }}>
                2022 — 2025
              </div>

              {/* Degree */}
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "3px",
                color: "#f5c518",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}>
                Bachelor's Degree
              </div>
              <h3 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "38px",
                letterSpacing: "2px",
                color: "#fff",
                lineHeight: "1.05",
                marginBottom: "8px",
              }}>
                Bachelor of Computer Applications
              </h3>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>
                BCA — Computer Science
              </div>

              {/* CGPA highlight */}
              <div style={{
                display: "flex",
                gap: "24px",
                marginBottom: "32px",
                padding: "20px 24px",
                background: "rgba(245,197,24,0.04)",
                border: "1px solid rgba(245,197,24,0.08)",
                borderRadius: "12px",
              }}>
                <div>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "52px",
                    color: "#f5c518",
                    lineHeight: "1",
                  }}>
                    7.7
                  </div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                    marginTop: "4px",
                  }}>
                    CGPA
                  </div>
                </div>
                <div style={{ width: "1px", background: "rgba(255,255,255,0.06)" }} />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>
                    Graduated with strong foundation in
                    <br />Computer Science & Application Development
                  </div>
                </div>
              </div>

              {/* College */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 20px",
                background: "rgba(255,255,255,0.02)",
                borderRadius: "12px",
              }}>
                <div style={{
                  width: "44px", height: "44px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #f5c518, #e5a010)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "16px",
                  color: "#000",
                  flexShrink: 0,
                }}>
                  BHC
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#fff", marginBottom: "2px" }}>
                    Bishop Heber College
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                    Tiruchirappalli, Tamil Nadu
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div style={{
                position: "absolute",
                bottom: "-30px", right: "-30px",
                width: "120px", height: "120px",
                borderRadius: "50%",
                background: "rgba(245,197,24,0.04)",
                border: "1px solid rgba(245,197,24,0.06)",
              }} />
            </div>
          </motion.div>

          {/* Right: Coursework grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ marginBottom: "32px" }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "3px",
                color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}>
                Core Coursework
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {courses.map((course, i) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    style={{
                      padding: "12px 16px",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "10px",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.55)",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div style={{
                      width: "4px", height: "4px",
                      borderRadius: "50%",
                      background: "#f5c518",
                      flexShrink: 0,
                    }} />
                    {course}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key achievements from education */}
            <div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "3px",
                color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}>
                Key Takeaways
              </div>
              {[
                "Strong OOP & DSA concepts applied in production code",
                "REST API design principles mastered academically and practically",
                "Database modeling & normalization expertise",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <div style={{ color: "#f5c518", fontSize: "12px", flexShrink: 0, marginTop: "2px" }}>▸</div>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: "1.6" }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #education .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

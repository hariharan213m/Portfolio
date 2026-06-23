import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: "◈",
    color: "#e50914",
    skills: [
      { name: "React.js & Next.js", level: 90 },
      { name: "Redux", level: 70 },
      { name: "JavaScript", level: 88 },
      { name: "HTML & CSS", level: 92 },
      { name: "Tailwind CSS & Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: "◈",
    color: "#8b5cf6",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Java", level: 65 },
      { name: "Redis", level: 72 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: "◈",
    color: "#06b6d4",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "AWS EC2", level: 65 },
      { name: "Drizzle/Schemas", level: 68 },
      { name: "Hostinger", level: 70 },
      { name: "Query Optimization", level: 80 },
    ],
  },
  {
    title: "Tools & Payments",
    icon: "◈",
    color: "#f5c518",
    skills: [
      { name: "Git & GitHub", level: 86 },
      { name: "Postman", level: 88 },
      { name: "VS Code / Figma", level: 82 },
      { name: "Razorpay", level: 80 },
      { name: "Stripe", level: 78 },
    ],
  },
];

const softSkills = [
  "Problem Solving", "Communication", "Collaboration",
  "Analytical Thinking", "Agile Development", "Unit Testing",
  "OOP Concepts", "Data Structures", "SDLC",
];

function SkillBar({ name, level, color, delay, inView }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "6px",
      }}>
        <span style={{ 
          fontSize: "clamp(12.5px, 3.2vw, 13px)", 
          color: "rgba(255,255,255,0.7)", 
          fontWeight: "500" 
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          color: color,
          fontWeight: "600",
        }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: "3px",
        background: "rgba(255,255,255,0.06)",
        borderRadius: "2px",
        overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "100%",
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            borderRadius: "2px",
            boxShadow: `0 0 10px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section" ref={ref}>
      {/* Background glow */}
      <div className="glow-blob" style={{
        width: "clamp(400px, 70vw, 600px)",
        height: "clamp(400px, 70vw, 600px)",
        background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
        top: "0", right: "-150px",
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "clamp(50px, 8vw, 80px)" }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>04 — Skills</div>
          <h2 className="section-title">
            Tech <span>Arsenal</span>
          </h2>
          <p style={{ 
            fontSize: "clamp(14px, 3.5vw, 15px)", 
            color: "rgba(255,255,255,0.4)", 
            maxWidth: "480px", 
            margin: "0 auto", 
            lineHeight: "1.7" 
          }}>
            Technologies I wield daily to build fast, scalable, production-ready software.
          </p>
        </motion.div>

        {/* Skill category grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(16px, 4vw, 24px)",
          marginBottom: "clamp(40px, 8vw, 60px)"
        }}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="glass-card"
              style={{ 
                padding: "clamp(24px, 5vw, 32px)",
                height: "100%" 
              }}
            >
              {/* Category header */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
                paddingBottom: "16px",
                borderBottom: `1px solid ${cat.color}20`,
              }}>
                <span style={{ fontSize: "20px", color: cat.color }}>{cat.icon}</span>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(18px, 4.5vw, 22px)",
                  letterSpacing: "2px",
                  color: "#fff",
                }}>
                  {cat.title}
                </span>
              </div>

              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={0.3 + ci * 0.1 + si * 0.06}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(9px, 2.5vw, 10px)",
            letterSpacing: "4px",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}>
            Soft Skills & Concepts
          </div>
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "clamp(8px, 2vw, 10px)", 
            justifyContent: "center" 
          }}>
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.04 }}
                whileHover={{ scale: 1.06, background: "rgba(255,255,255,0.07)" }}
                style={{
                  padding: "8px clamp(16px, 4vw, 20px)",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  fontSize: "clamp(12.5px, 3.2vw, 13px)",
                  color: "rgba(255,255,255,0.6)",
                  cursor: "default",
                  transition: "all 0.2s ease",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #skills .container {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </section>
  );
}
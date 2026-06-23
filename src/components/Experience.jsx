import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const stations = [
  {
    id: "origin",
    code: "BHC",
    name: "Bishop Heber College",
    sublabel: "Trichy · Origin",
    pos: 6,
    color: "rgba(255,255,255,0.4)",
    type: "origin",
    year: "2022 - 2025",
    sign: "🎓",
    signName: "The Academy",
    tagline: "Where it all started",
  },
  {
    id: "intern",
    code: "AHS-01",
    name: "Adhoc Softwares",
    sublabel: "Coimbatore · Internship",
    pos: 38,
    color: "#8b5cf6",
    type: "internship",
    year: "May 2025",
    period: "May 2025 — Jul 2025",
    duration: "3 months",
    sign: "⚡",
    role: "Full-Stack Developer Intern",
    signName: "Adhoc Softwares",
    tagline: "Internship · Coimbatore, Tamil Nadu",
    badge: "INTERNSHIP",
    achievements: [
      "Onboarded into full-stack dev with React.js & Node.js in production",
      "Contributed to RESTful API design and backend modules",
      "Participated in code reviews and API testing via Postman",
      "Worked in Agile sprint cycles — planning, execution, delivery",
    ],
    tech: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MySQL",
      "Git & GitHub",
      "Postman",
    ],
    highlight: { val: "3", sub: "months" },
  },
  {
    id: "fulltime",
    code: "AHS-02",
    name: "Adhoc Softwares",
    sublabel: "Coimbatore · Full-Time",
    pos: 68,
    color: "#e50914",
    type: "fulltime",
    year: "Aug 2025",
    period: "Aug 2025 — Jan 2026",
    duration: "6 months",
    sign: "🏎️",
    role: "Full-Stack Developer",
    signName: "Adhoc Softwares",
    tagline: "Full-Time · Coimbatore, Tamil Nadu",
    badge: "FULL-TIME",
    achievements: [
      "Reduced API latency by ~30% via Redis caching on core endpoints",
      "Built & maintained RESTful APIs with optimised DB schemas",
      "Debugged complex issues using Postman & browser DevTools",
      "Delivered features end-to-end in Agile sprint cycles",
      "Designed modular backend architecture for scalability",
    ],
    tech: [
      "React.js",
      "Next.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MySQL",
      "Redis",
    ],
    highlight: { val: "6", sub: "Months" },
  },
  {
    id: "next",
    code: "NXT",
    name: "Your Company",
    sublabel: "Anywhere · Next Stop",
    pos: 94,
    color: "#f5c518",
    type: "future",
    year: "2026",
    sign: "✦",
    signName: "Next Destination",
    tagline: "Open to board",
  },
];

/* SVG car side-view */
function Car({ color }) {
  return (
    <svg
      width="64"
      height="28"
      viewBox="0 0 64 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <rect
        x="4"
        y="12"
        width="56"
        height="12"
        rx="3"
        fill={color}
        opacity="0.9"
      />
      {/* Cabin */}
      <path d="M18 12 L24 4 L44 4 L50 12 Z" fill={color} opacity="0.95" />
      {/* Windows */}
      <path d="M25 11 L28 5.5 L38 5.5 L41 11 Z" fill="rgba(6,182,212,0.5)" />
      <line
        x1="34"
        y1="5.5"
        x2="34"
        y2="11"
        stroke="rgba(0,0,0,0.3)"
        strokeWidth="0.8"
      />
      {/* Wheels */}
      <circle
        cx="16"
        cy="24"
        r="4"
        fill="rgba(20,20,20,0.9)"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <circle cx="16" cy="24" r="1.5" fill={color} opacity="0.6" />
      <circle
        cx="48"
        cy="24"
        r="4"
        fill="rgba(20,20,20,0.9)"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <circle cx="48" cy="24" r="1.5" fill={color} opacity="0.6" />
      {/* Headlight */}
      <rect
        x="58"
        y="15"
        width="4"
        height="5"
        rx="1"
        fill="#f5c518"
        opacity="0.9"
      />
      {/* Tail light */}
      <rect
        x="2"
        y="15"
        width="3"
        height="5"
        rx="1"
        fill="#e50914"
        opacity="0.8"
      />
      {/* Highlight */}
      <path
        d="M18 13 Q34 11 50 13"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

/* Road lane markings */
function RoadLane() {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        height: "2px",
        display: "flex",
        gap: "0",
      }}
    >
      <motion.div
        animate={{ x: [0, -60] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: "16px", width: "max-content" }}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "30px",
              height: "2px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "1px",
              flexShrink: 0,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* Station marker pin on the road */
function StationPin({ station, active, onClick, inView }) {
  const isActive = active === station.id;
  const canClick = station.type !== "origin" && station.type !== "future";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.5 + station.pos * 0.006 }}
      onClick={canClick ? onClick : undefined}
      style={{
        position: "absolute",
        left: `${station.pos}%`,
        bottom: "100%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: canClick ? "pointer" : "default",
        zIndex: isActive ? 10 : 5,
        paddingBottom: "8px",
      }}
    >
      {/* Station sign board */}
      <motion.div
        whileHover={canClick ? { y: -3 } : {}}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "4px",
        }}
      >
        {/* Sign board */}
        <div
          style={{
            padding: "6px 14px",
            background: isActive ? station.color : "rgba(20,20,22,0.95)",
            border: `1px solid ${station.color}${isActive ? "80" : "35"}`,
            borderRadius: "6px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "9px",
            letterSpacing: "1.5px",
            color: isActive ? "#000" : station.color,
            textTransform: "uppercase",
            fontWeight: isActive ? "700" : "400",
            whiteSpace: "nowrap",
            boxShadow: isActive
              ? `0 0 16px ${station.color}60, 0 4px 20px rgba(0,0,0,0.5)`
              : `0 2px 12px rgba(0,0,0,0.4)`,
            transition: "all 0.3s ease",
            position: "relative",
          }}
        >
          {station.code}
          {/* Sign board hanging bolt marks */}
          <div
            style={{
              position: "absolute",
              top: "3px",
              left: "6px",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: isActive
                ? "rgba(0,0,0,0.3)"
                : "rgba(255,255,255,0.1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "3px",
              right: "6px",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: isActive
                ? "rgba(0,0,0,0.3)"
                : "rgba(255,255,255,0.1)",
            }}
          />
        </div>

        {/* Hanging wire */}
        <div
          style={{
            width: "1px",
            height: "12px",
            background: `linear-gradient(to bottom, ${station.color}50, ${station.color}20)`,
          }}
        />

        {/* Station dot on road */}
        {isActive && (
          <motion.div
            animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            style={{
              position: "absolute",
              bottom: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: `1px solid ${station.color}`,
            }}
          />
        )}
      </motion.div>

      {/* Road dot */}
      <div
        style={{
          width: isActive ? "14px" : "8px",
          height: isActive ? "14px" : "8px",
          borderRadius: "50%",
          background: isActive ? station.color : "rgba(255,255,255,0.15)",
          border: `2px solid ${station.color}`,
          boxShadow: isActive
            ? `0 0 12px ${station.color}, 0 0 30px ${station.color}40`
            : "none",
          transition: "all 0.35s ease",
          zIndex: 3,
          flexShrink: 0,
        }}
      />
    </motion.div>
  );
}

/* The illuminated station board card */
function StationBoard({ station }) {
  if (!station || station.type === "origin" || station.type === "future")
    return null;

  return (
    <motion.div
      key={station.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        boxShadow: `0 0 0 1px ${station.color}20, 0 30px 80px rgba(0,0,0,0.6), 0 0 60px ${station.color}08`,
      }}
    >
      {/* Illuminated header — like a shop sign */}
      <div
        style={{
          padding: "20px 32px",
          background: `linear-gradient(135deg, ${station.color}20, ${station.color}08)`,
          borderBottom: `1px solid ${station.color}25`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Neon glow bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${station.color}, transparent)`,
            boxShadow: `0 0 10px ${station.color}`,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Emoji sign */}
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              background: `${station.color}15`,
              border: `1px solid ${station.color}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              boxShadow: `inset 0 0 20px ${station.color}10`,
            }}
          >
            {station.sign}
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "30px",
                color: "#fff",
                letterSpacing: "2px",
                lineHeight: "1",
                marginBottom: "3px",
              }}
            >
              {station.role}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                color: station.color,
                letterSpacing: "1.5px",
                fontWeight: "600",
              }}
            >
              {station.signName}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "1px",
                marginTop: "2px",
              }}
            >
              {station.tagline}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div
            style={{
              padding: "4px 14px",
              display: "flex",
              justifyContent: "center",
              alignItems:"center",
              borderRadius: "20px",
              border: `1px solid ${station.color}50`,
              background: `${station.color}12`,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              letterSpacing: "2px",
              color: station.color,
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            {station.badge}
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "1px",
            }}
          >
            {station.period}
          </div>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          padding: "28px 32px",
          background: "rgba(8,8,10,0.95)",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "32px",
          alignItems: "start",
        }}
      >
        {/* Achievements */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              letterSpacing: "3px",
              color: "rgba(255,255,255,0.2)",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            // What was done here
          </div>
          {station.achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                padding: "11px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: station.color,
                  opacity: 0.5,
                  flexShrink: 0,
                  marginTop: "3px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: station.color,
                  flexShrink: 0,
                  marginTop: "7px",
                  boxShadow: `0 0 8px ${station.color}`,
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  lineHeight: "1.7",
                  color: "rgba(255,255,255,0.58)",
                }}
              >
                {a}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Right: big stat + tech */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            minWidth: "160px",
          }}
        >
          {/* Big metric */}
          <div
            style={{
              padding: "20px",
              borderRadius: "12px",
              background: `${station.color}08`,
              border: `1px solid ${station.color}20`,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at 50% 30%, ${station.color}10, transparent 70%)`,
              }}
            />
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "48px",
                color: station.color,
                lineHeight: "1",
                position: "relative",
                textShadow: `0 0 30px ${station.color}60`,
              }}
            >
              {station.highlight.val}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9px",
                letterSpacing: "2px",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
                position: "relative",
                marginTop: "4px",
              }}
            >
              {station.highlight.sub}
            </div>
            {/* <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "rgba(255,255,255,0.2)", marginTop: "8px", position: "relative" }}>
              {station.duration}
            </div> */}
          </div>

          {/* Tech */}
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9px",
                letterSpacing: "2px",
                color: "rgba(255,255,255,0.2)",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              Stack
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {station.tech.map((t) => (
                <div
                  key={t}
                  style={{
                    padding: "5px 10px",
                    background: `${station.color}08`,
                    border: `1px solid ${station.color}20`,
                    borderRadius: "6px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: station.color,
                    textAlign: "center",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom neon strip */}
      <div
        style={{
          height: "3px",
          background: `linear-gradient(90deg, transparent, ${station.color}60, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("fulltime");

  const activeStation = stations.find((s) => s.id === active);
  const carPos = activeStation ? activeStation.pos : 38;

  return (
    <section
      id="experience"
      className="section"
      ref={ref}
      style={{ background: "var(--bg2)" }}
    >
      {/* Sky glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(to bottom, rgba(139,92,246,0.03), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background:
              "linear-gradient(to top, rgba(229,9,20,0.03), transparent)",
          }}
        />
      </div>

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "60px" }}
        >
          <div className="section-label">02 — Experience</div>
          <h2 className="section-title">
            The Career <span>Journey</span>
          </h2>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              marginTop: "8px",
            }}
          >
            Click a station to stop
          </p>
        </motion.div>

        {/* ── ROAD SCENE ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            position: "relative",
            height: "100px",
            marginBottom: "60px",
          }}
        >
          {/* Road surface */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: "10px",
              height: "40px",
              background:
                "linear-gradient(to bottom, rgba(30,30,35,0.9), rgba(18,18,22,0.95))",
              borderRadius: "4px",
              border: "1px solid rgba(255,255,255,0.05)",
              overflow: "hidden",
            }}
          >
            {/* Road lane dashes */}
            <RoadLane />
            {/* Road edge lines */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "rgba(245,197,24,0.25)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "rgba(255,255,255,0.06)",
              }}
            />
          </div>

          {/* Distance markers */}
          {stations.map((s) => (
            <div
              key={s.id}
              style={{
                position: "absolute",
                left: `${s.pos + 3}%`,
                bottom: "8px",
                transform: "translateX(-50%)",
                width: "1px",
                height: "44px",
                background: `linear-gradient(to top, ${s.color}40, transparent)`,
                zIndex: 2,
              }}
            />
          ))}

          {/* Station pins — above road */}
          {stations.map((s) => (
            <StationPin
              key={s.id}
              station={s}
              active={active}
              onClick={() => setActive(s.id)}
              inView={inView}
            />
          ))}

          {/* Moving car */}
          <motion.div
            animate={{ left: `calc(${carPos + 3}% - 32px)` }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
            style={{
              position: "absolute",
              bottom: "12px",
              zIndex: 5,
              filter: `drop-shadow(0 0 8px ${activeStation?.color || "#e50914"}60)`,
            }}
          >
            <Car color={activeStation?.color || "#e50914"} />
            {/* Headlight beam */}
            <div
              style={{
                position: "absolute",
                right: "-30px",
                top: "14px",
                width: "30px",
                height: "8px",
                background: `linear-gradient(90deg, ${activeStation?.color || "#f5c518"}30, transparent)`,
                borderRadius: "0 4px 4px 0",
                filter: "blur(2px)",
              }}
            />
          </motion.div>

          {/* Ground shadow under car */}
          <motion.div
            animate={{ left: `calc(${carPos}% - 28px)` }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
            style={{
              position: "absolute",
              bottom: "8px",
              width: "56px",
              height: "6px",
              background: "rgba(0,0,0,0.4)",
              borderRadius: "50%",
              filter: "blur(4px)",
              zIndex: 4,
            }}
          />

          {/* Year labels below road */}
          {stations.map((s) => (
            <div
              key={s.id}
              style={{
                position: "absolute",
                left: `${s.pos + 3}%`,
                bottom: "-18px",
                transform: "translateX(-50%)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9px",
                color: active === s.id ? s.color : "rgba(255,255,255,0.18)",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
                transition: "color 0.3s ease",
              }}
            >
              {s.year}
            </div>
          ))}
        </motion.div>

        {/* ── STATION BOARD ── */}
        <div style={{ marginTop: "44px" }}>
          <AnimatePresence mode="wait">
            {activeStation &&
            (activeStation.type === "origin" ||
              activeStation.type === "future") ? (
              <motion.div
                key={activeStation.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  textAlign: "center",
                  padding: "48px",
                  border: `1px dashed ${activeStation.color}25`,
                  borderRadius: "16px",
                  background: `${activeStation.color}04`,
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>
                  {activeStation.sign}
                </div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "28px",
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "3px",
                  }}
                >
                  {activeStation.signName}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "2px",
                    marginTop: "8px",
                  }}
                >
                  {activeStation.tagline}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.15)",
                    marginTop: "6px",
                  }}
                >
                  {activeStation.sublabel}
                </div>
                {activeStation.type === "future" && (
                  <div
                    style={{
                      display: "inline-block",
                      marginTop: "16px",
                      padding: "6px 18px",
                      border: `1px solid ${activeStation.color}40`,
                      borderRadius: "20px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: activeStation.color,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    Open to Work · 2026
                  </div>
                )}
              </motion.div>
            ) : (
              <StationBoard key={active} station={activeStation} />
            )}
          </AnimatePresence>
        </div>

        {/* Station selector row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "24px",
            justifyContent: "center",
          }}
        >
          {stations
            .filter((s) => s.type === "internship" || s.type === "fulltime")
            .map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                style={{
                  padding: "7px 20px",
                  borderRadius: "20px",
                  border: `1px solid ${active === s.id ? s.color + "60" : "rgba(255,255,255,0.08)"}`,
                  background: active === s.id ? `${s.color}10` : "transparent",
                  color: active === s.id ? s.color : "rgba(255,255,255,0.3)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {s.code} · {s.badge}
              </button>
            ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #experience [style*="grid-template-columns: 1fr auto"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

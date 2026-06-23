import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "hariharan213m@gmail.com",
    href: "mailto:hariharan213m@gmail.com",
    color: "#e50914",
    icon: "✉",
  },
  {
    label: "Phone",
    value: "+91 9043473738",
    href: "tel:+919043473738",
    color: "#8b5cf6",
    icon: "☏",
  },
  {
    label: "GitHub",
    value: "github.com/hariharan",
    href: "https://github.com/hariharan213m",
    color: "#06b6d4",
    icon: "⌥",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hariharan",
    href: "https://www.linkedin.com/in/hariharan213/",
    color: "#f5c518",
    icon: "in",
  },
];

export default function Contact() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hariharan213m@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ paddingBottom: "0" }}
      ref={ref}
    >
      {/* Background glow */}
      <div
        className="glow-blob"
        style={{
          width: "clamp(400px, 80vw, 700px)",
          height: "clamp(400px, 80vw, 700px)",
          background:
            "radial-gradient(circle, rgba(229,9,20,0.06) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 8vw, 80px)",
          }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            06 — Contact
          </div>
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 3.5vw, 15px)",
              color: "rgba(255,255,255,0.4)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Available for full-time roles and freelance projects. Let's build
            something great together.
          </p>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            marginBottom: "clamp(40px, 8vw, 60px)",
            padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 80px)",
            background:
              "linear-gradient(135deg, rgba(229,9,20,0.08) 0%, rgba(139,92,246,0.06) 50%, rgba(6,182,212,0.04) 100%)",
            border: "1px solid rgba(229,9,20,0.12)",
            borderRadius: "24px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "clamp(150px, 40vw, 200px)",
              height: "clamp(150px, 40vw, 200px)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(229,9,20,0.08), transparent)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "-40px",
              width: "clamp(120px, 35vw, 160px)",
              height: "clamp(120px, 35vw, 160px)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(139,92,246,0.06), transparent)",
            }}
          />

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(10px, 2.5vw, 11px)",
              letterSpacing: "4px",
              color: "#e50914",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Open to New Opportunities
          </div>

          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(36px, 7vw, 80px)",
              letterSpacing: "2px",
              color: "#fff",
              lineHeight: "0.9",
              marginBottom: "24px",
            }}
          >
            Ready to Make
            <br />
            <span style={{ color: "#e50914" }}>Your Vision</span> Real
          </h3>

          <p
            style={{
              fontSize: "clamp(14px, 3.5vw, 15px)",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "500px",
              margin: "0 auto 40px",
              lineHeight: "1.8",
            }}
          >
            Whether it's a startup MVP, a scalable SaaS platform, or a
            performance optimization challenge — I'm ready for the next chapter.
          </p>

          {/* Email CTA */}
          <motion.button
            onClick={copyEmail}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 50px rgba(229,9,20,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "18px clamp(32px, 6vw, 48px)",
              background: "#e50914",
              border: "none",
              borderRadius: "6px",
              color: "#fff",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(11px, 2.8vw, 12px)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              width: "fit-content",
            }}
          >
            {copied ? "✓ Copied!" : "✉ hariharan213m@gmail.com"}
          </motion.button>
        </motion.div>

        {/* Contact cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              whileHover={{
                scale: 1.04,
                borderColor: link.color,
                boxShadow: `0 0 30px ${link.color}30`,
                y: -4,
              }}
              style={{
                padding: "24px 20px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                minHeight: "140px",
              }}
            >
              <div style={{ fontSize: "22px", color: link.color }}>
                {link.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    color: link.color,
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {link.label}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                    wordBreak: "break-all",
                    lineHeight: "1.4",
                  }}
                >
                  {link.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: "clamp(32px, 6vw, 40px)",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(9px, 2.5vw, 10px)",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
            }}
          >
            📍 Theni, Tamil Nadu, India
          </span>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        style={{
          marginTop: "clamp(60px, 10vw, 80px)",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          padding: "32px clamp(20px, 5vw, 40px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          fontSize: "clamp(13px, 3vw, 14px)",
        }}
      >
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "18px",
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          HM<span style={{ color: "#e50914" }}>.</span>
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(9px, 2.5vw, 10px)",
            letterSpacing: "2px",
            color: "rgba(255,255,255,0.2)",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Designed & Developed by Hariharan M
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "rgba(255,255,255,0.15)",
            textTransform: "uppercase",
          }}
        >
          2026
        </div>
      </motion.footer>

      {/* Additional responsive tweaks */}
      <style>{`
        @media (max-width: 640px) {
          #contact .container {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </section>
  );
}

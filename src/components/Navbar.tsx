import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlane } from "react-icons/fa";

const NAV_OPTIONS = [
  { id: "hero", label: "Technology" },
  { id: "what-we-do", label: "Products" },
  { id: "why-choose", label: "About" },
  { id: "careers", label: "Careers" },
  { id: "contact", label: "Contact Us" }
];

const AIRCRAFT_COLOR = "#004443";
const AIRCRAFT_HOVER_COLOR = "#ffffff";
const RUNWAY_COLOR = "#004443";

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle scroll to close nav
  useEffect(() => {
    const handleScroll = () => {
      if (expanded) triggerExit();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [expanded]);

  // Reset nav after exit
  useEffect(() => {
    if (exiting) {
      navTimeout.current = setTimeout(() => {
        setExpanded(false);
        setExiting(false);
      }, 900);
    }
    return () => {
      if (navTimeout.current) clearTimeout(navTimeout.current);
    };
  }, [exiting]);

  // Scroll logic for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "vision", "what-we-do", "why-choose", "collaboration", "careers", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    triggerExit();
  }

  function triggerExit() {
    setExiting(true);
  }

  // Capsule minimized nav
  return (
    <div className="fixed top-6 left-1/2 z-[100] w-full flex justify-center pointer-events-none select-none">
      {/* AnimatePresence handles exit/entry */}
      <AnimatePresence>
        {!expanded && !exiting && (
          <motion.div
            key="capsule"
            className="pointer-events-auto"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="flex items-center justify-center rounded-full shadow-lg bg-white/80 border border-[#e0fdfa] px-5 py-3 gap-3 hover:scale-105 transition-all duration-200"
              style={{
                minWidth: 72,
                minHeight: 56,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                outline: "none"
              }}
              aria-label="Expand Navigation"
              whileTap={{ scale: 0.95 }}
              onClick={() => setExpanded(true)}
              onMouseEnter={() => setExpanded(true)}
            >
              {/* Aircraft Icon: Diagonal */}
              <motion.span
                initial={{ rotate: -35, color: AIRCRAFT_COLOR }}
                animate={{ rotate: -35, color: AIRCRAFT_COLOR }}
                style={{ fontSize: 34, display: "inline-block" }}
              >
                <FaPlane color={AIRCRAFT_COLOR} style={{ transform: "rotate(-35deg)" }} />
              </motion.span>
            </motion.button>
          </motion.div>
        )}

        {(expanded || exiting) && (
          <motion.div
            key="expanded"
            className="pointer-events-auto"
            initial={{
              x: exiting ? 0 : "-50vw",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 60, damping: 16 }
            }}
            exit={{
              x: "80vw",
              opacity: 0,
              transition: { duration: 0.7, ease: "easeIn" }
            }}
            style={{
              background: "rgba(255,255,255,0.98)",
              borderRadius: 40,
              boxShadow: "0 8px 38px 0 rgba(0,0,0,0.14)",
              border: "1.5px solid #e0fdfa",
              padding: "0 32px 0 32px",
              minHeight: 84,
              display: "flex",
              alignItems: "center",
              position: "relative"
            }}
          >
            {/* Animated Aircraft and Runway */}
            <motion.div
              className="flex items-center relative mr-10"
              initial={false}
              animate={{
                x: expanded && !exiting ? 0 : -80,
              }}
              transition={{ type: "spring", stiffness: 70, damping: 18 }}
            >
              {/* Runway */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: expanded && !exiting ? 76 : 0, opacity: expanded && !exiting ? 1 : 0 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  height: 10,
                  borderRadius: 6,
                  background: RUNWAY_COLOR,
                  marginRight: -28,
                  marginLeft: 25,
                  boxShadow: "0 0 12px 2px #00444344"
                }}
              />
              {/* Aircraft Icon: Animated rotation and color */}
              <motion.span
                initial={{ rotate: -35, color: AIRCRAFT_COLOR }}
                animate={{
                  rotate: expanded && !exiting ? 0 : -35,
                  color: expanded && !exiting ? AIRCRAFT_HOVER_COLOR : AIRCRAFT_COLOR,
                  x: expanded && !exiting ? 40 : 0
                }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                style={{
                  fontSize: 38,
                  position: "relative",
                  zIndex: 2,
                  filter: expanded && !exiting ? "drop-shadow(0 0 12px #004443a0)" : undefined
                }}
              >
                <FaPlane
                  color={expanded && !exiting ? AIRCRAFT_HOVER_COLOR : AIRCRAFT_COLOR}
                  style={{
                    transform: `rotate(${expanded && !exiting ? 0 : -35}deg)`,
                    transition: "all 0.35s"
                  }}
                />
              </motion.span>
            </motion.div>

            {/* Nav Options: Fly-in Animation */}
            <motion.ul
              className="flex gap-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, x: 60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { staggerChildren: 0.08, delayChildren: 0.25 }
                }
              }}
            >
              {NAV_OPTIONS.map((item, idx) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.33 }}
                >
                  <button
                    className={`relative font-semibold text-lg px-5 py-3 rounded-full transition-all duration-200 hover:bg-[#e0fdfa] focus:outline-none whitespace-nowrap font-montserrat ${
                      activeSection === item.id ? "text-[#004443]" : "text-[#1a7a7a]"
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

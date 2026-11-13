import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { prefetchRoute } from "@/lib/routes";
import { Lockup } from "./Brand";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/now", label: "Now" },
];

// The mobile menu has no separate Contact button, so it lists Contact too.
const mobileLinks = [...links, { to: "/contact", label: "Contact" }];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const loc = useLocation();

  useEffect(() => {
    // Passive + rAF-coalesced so the listener never blocks scrolling.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 ${scrolled ? "py-3" : "py-5"}`}
        style={{ transition: "padding 300ms cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <div className="container">
          <div className={`flex items-center justify-between rounded-full px-5 py-2.5 glass-blur transition-colors duration-300 ${scrolled ? "glass-strong shadow-elegant" : "glass"}`}>
            <Link to="/" aria-label="Naman Goel, home" className="shrink-0">
              <Lockup className="text-lg" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => {
                const active = loc.pathname === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onMouseEnter={() => prefetchRoute(l.to)}
                    onFocus={() => prefetchRoute(l.to)}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${active ? "text-brand" : "text-foreground/70 hover:text-foreground"}`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <Button asChild size="sm" className="hidden sm:inline-flex rounded-full">
                <Link to="/contact" onMouseEnter={() => prefetchRoute("/contact")}>Contact</Link>
              </Button>
              <button
                onClick={() => setOpen(!open)}
                aria-label="Menu"
                className="lg:hidden p-2 rounded-full hover:bg-secondary"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl pt-24"
          >
            <nav className="container flex flex-col gap-1">
              {mobileLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={l.to}
                    className="block py-4 font-display text-3xl font-semibold border-b border-border/50 hover:text-brand transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

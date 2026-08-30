"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiriWave } from "@/components/ui/siri-wave";

const ReadyContext = createContext(false);
export const useReady = () => useContext(ReadyContext);

const SESSION_KEY = "mahindra-sys-booted";

export function SiteLoader({ children }: { children: React.ReactNode }) {
  // Skip the boot sequence on internal navigations within the same tab —
  // only the very first load of the session sees it.
  const [loading, setLoading] = useState(() => {
    if (typeof window === "undefined") return true;
    return !window.sessionStorage.getItem(SESSION_KEY);
  });

  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => {
      window.sessionStorage.setItem(SESSION_KEY, "1");
      setLoading(false);
    }, 2200);
    return () => clearTimeout(t);
  }, [loading]);

  return (
    <ReadyContext.Provider value={!loading}>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-bg"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SiriWave variant="fluid-dots" size={200} renderScale={1} />
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-signal-cyan">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-signal-amber" />
              Booting MAHINDRA.SYS
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </ReadyContext.Provider>
  );
}

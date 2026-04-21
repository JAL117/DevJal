"use client";

import { useEffect, useState, useRef } from "react";
import { Terminal, Sparkles, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COMMANDS = [
  "fetching projects...",
  "analyzing system architecture...",
  "optimizing AI agent orchestration...",
  "verifying OWASP compliance...",
  "running genetic algorithms...",
  "status: ready for deployment.",
];

export function AITerminal() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentFullText = COMMANDS[index % COMMANDS.length];
    const typingSpeed = isDeleting ? 30 : 60;
    const nextStepTimeout = isDeleting ? 1000 : 2500;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), nextStepTimeout);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      } else {
        const nextChar = isDeleting
          ? currentFullText.substring(0, displayText.length - 1)
          : currentFullText.substring(0, displayText.length + 1);
        setDisplayText(nextChar);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border/60 glass-strong shadow-2xl transition-all duration-300 hover:border-brand/30"
    >
      <div className="flex items-center justify-between border-b border-border/40 bg-background/50 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <div className="flex gap-1">
            <div className="size-2.5 rounded-full bg-red-500/80" />
            <div className="size-2.5 rounded-full bg-amber-500/80" />
            <div className="size-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
            <Terminal className="size-3" /> Agent_Console.sh
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Sparkles className="size-3 text-brand" />
          <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-tighter">
            AI Active
          </span>
        </div>
      </div>
      <div className="p-4 font-mono text-sm sm:p-5">
        <div className="flex items-center gap-2 text-brand">
          <ChevronRight className="size-4 shrink-0" />
          <span className="break-all">{displayText}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="h-4 w-2 bg-brand/80"
          />
        </div>
        
        <AnimatePresence>
          {!isDeleting && displayText.length > 5 && (
            <motion.div
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2"
            >
              <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1.5">
                <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-emerald-500 uppercase font-bold tracking-tight">System Healthy</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-brand/20 bg-brand/5 px-2.5 py-1.5">
                <div className="size-1.5 rounded-full bg-brand animate-pulse" />
                <span className="text-[10px] text-brand uppercase font-bold tracking-tight">Agents Online</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header";
};

export function FadeIn({
  children,
  delay = 0,
  y = 8,
  className,
  as = "div",
}: FadeInProps) {
  const Tag = motion[as] as unknown as (
    props: HTMLMotionProps<"div">,
  ) => React.ReactElement;

  return (
    <Tag
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}

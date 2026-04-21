"use client";

import { motion, type HTMLMotionProps, Variants } from "framer-motion";
import { createContext, useContext, ReactNode } from "react";

const StaggerContext = createContext<boolean>(false);

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "li";
  viewOnce?: boolean;
};

const variants: Variants = {
  hidden: (y: number) => ({
    opacity: 0,
    y,
  }),
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function FadeIn({
  children,
  delay = 0,
  y = 12,
  className,
  as = "div",
  viewOnce = true,
}: FadeInProps) {
  const isStaggerChild = useContext(StaggerContext);
  const Tag = (motion as any)[as] as unknown as (
    props: HTMLMotionProps<any>,
  ) => React.ReactElement;

  if (isStaggerChild) {
    return (
      <Tag variants={variants} custom={y} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={{ once: viewOnce, margin: "-20px" }}
      variants={variants}
      custom={y}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}

type StaggerContainerProps = {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "ul";
  viewOnce?: boolean;
};

export function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className,
  as = "div",
  viewOnce = true,
}: StaggerContainerProps) {
  const Tag = (motion as any)[as] as unknown as (
    props: HTMLMotionProps<any>,
  ) => React.ReactElement;

  return (
    <StaggerContext.Provider value={true}>
      <Tag
        initial="hidden"
        whileInView="show"
        viewport={{ once: viewOnce, margin: "-20px" }}
        variants={{
          show: {
            transition: {
              staggerChildren,
              delayChildren: delay,
            },
          },
        }}
        className={className}
      >
        {children}
      </Tag>
    </StaggerContext.Provider>
  );
}

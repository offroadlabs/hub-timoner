"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

export function AnimatedButton({
  children,
  href,
  variant = "default",
  className,
  ...props
}: AnimatedButtonProps) {
  const button = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        variant={variant}
        className={cn("font-semibold", className)}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {button}
      </a>
    );
  }

  return button;
}

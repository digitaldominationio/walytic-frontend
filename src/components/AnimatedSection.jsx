// src/components/AnimatedSection.jsx
import React from "react";
import { motion } from "framer-motion";

const animations = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: 50 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: 50 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, y: 50 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, y: 50 },
  },
};

export default function AnimatedSection({
  children,
  animation = "fadeUp", // default animation
  duration = 0.8,
  delay = 0,
}) {
  return (
    <motion.div
      variants={animations[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }} 
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

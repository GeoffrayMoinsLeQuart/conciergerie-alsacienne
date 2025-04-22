"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Biens gérés", value: 120 },
  { label: "Voyageurs accueillis", value: 3_500 },
  { label: "Années d’expérience", value: 8 },
];

export default function StatList() {
  return (
    <motion.ul
      className="mx-auto my-16 flex max-w-4xl justify-around text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {stats.map((stat, i) => (
        <motion.li
          key={stat.label}
          className="flex flex-col items-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="mb-2 text-4xl font-bold text-primary">
            {stat.value.toLocaleString()}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {stat.label}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

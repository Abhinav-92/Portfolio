"use client";

import Link from "next/link";
import Container from "../ui/Container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur-xl"
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          AG
        </Link>

        <Button
          variant="outline"
          className="rounded-full border-white/10 bg-white/5 hover:bg-white/10"
        >
          Resume
        </Button>
      </Container>
    </motion.header>
  );
}
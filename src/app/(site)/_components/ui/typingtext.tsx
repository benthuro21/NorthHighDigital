"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  highlightColor?: string;
  textColor?: string;
}

export function TypingText({
  words,
  typingSpeed = 80,
  deletingSpeed = 70,
  pauseTime = 1200,
  highlightColor = "var(--accent)",
  textColor = "var(--foreground)",
}: TypingTextProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const current = words[loopNum % words.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting && text === current) {
      // highlight phase before deleting
      setHighlight(true);
      timer = setTimeout(() => {
        setHighlight(false);
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1);
        setText(nextText);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

  const currentWord = words[loopNum % words.length];
  const isFullWord = text === currentWord;

  return (
    <motion.span className="relative inline-block px-1">
      {/* Background highlight animation */}
      <motion.span
        className="absolute inset-0 rounded-sm -z-10"
        animate={{
          backgroundColor: highlight ? highlightColor : "rgba(0,0,0,0)",
          scaleX: highlight ? 1 : 0,
          originX: 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Typing text with smooth color transition */}
      <motion.span
        animate={{
          color: isFullWord ? "var(--accent)" : textColor,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {text}
      </motion.span>

      {/* Blinking cursor */}
      <motion.span
        className="inline-block ml-1 w-[2px] h-6 bg-[var(--accent)]"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.span>
  );
}

"use client";

import { useRef } from "react";

export function useSectionScroll() {
  const refs = {
    about: useRef(null),
    services: useRef(null),
    portfolio: useRef(null),
    team: useRef(null),
    contact: useRef(null),
  };

  const scrollTo = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { refs, scrollTo };
}

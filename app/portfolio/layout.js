"use client";

import Header from "../components/header/header";

const navLinks = [
  { href: "/", label: "Home" },
  { label: "Contact", section: "contact" },
];

export default function PortfolioLayout({ children }) {
  return (
    <>
      <Header navLinks={navLinks} />
      {children}
    </>
  );
}

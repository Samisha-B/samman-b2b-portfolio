"use client";
import { useState } from "react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Export", href: "#export" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="nav-brand">
          <div className="nav-logo">
            <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
              <path d="M14 42C14 27 26 16 41 16H48C48 31 36 42 21 42H14Z" fill="currentColor"/>
              <path d="M14 46C14 34 24 24 36 24C36 36 26 46 14 46Z" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="nav-brand-text">
            <strong>Samman Enterprises</strong>
            <span>B2B Produce Supply</span>
          </div>
        </a>

        <nav className="nav-links">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
          <a href="#contact" className="btn btn-green" style={{ minHeight: 40, padding: "0.65rem 1.15rem", fontSize: "0.9rem" }}>
            Get Quote
          </a>
        </nav>

        <button
          className="nav-hamburger"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((p) => !p)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <path d="M18 6L6 18M6 6l12 12"/>
              : <path d="M3 6h18M3 12h18M3 18h18"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="nav-mobile container">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
          <a href="#contact" className="btn btn-green" onClick={() => setOpen(false)}>Get Quote</a>
        </div>
      )}
    </header>
  );
}
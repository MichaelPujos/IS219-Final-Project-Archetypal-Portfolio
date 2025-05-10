import React from 'react';
import styles from '../styles/globals.css'; // Optional if you're using global styles already applied

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Michael Pujos</h1>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

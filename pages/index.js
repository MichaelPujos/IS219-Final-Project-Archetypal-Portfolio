import Head from 'next/head';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef } from 'react';

const Navbar = () => (
  <nav style={{
    position: 'sticky',
    top: 0,
    backgroundColor: '#1D3557',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    zIndex: 1000
  }}>
    <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#00ffff', fontFamily: 'Orbitron' }}>
      Michael Pujos
    </h1>
    <div style={{ display: 'flex', gap: '1.5rem', fontFamily: 'Orbitron', fontSize: '1rem' }}>
      <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
      <a href="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
      <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
      <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>

    </div>
  </nav>
);

export default function Home() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (marqueeRef.current) {
        marqueeRef.current.scrollLeft += 1;
        if (marqueeRef.current.scrollLeft >= marqueeRef.current.scrollWidth / 2) {
          marqueeRef.current.scrollLeft = 0;
        }
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Michael Pujos | Hero Portfolio</title>
      </Head>

      <Navbar />

      <main style={{ padding: '4rem 2rem', textAlign: 'center', color: '#fff' }}>
        {/* Hero Title */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          fontFamily: 'Orbitron',
          color: '#00ffff',
          textShadow: '0 0 5px #00ffff'
        }}>
          <TypeAnimation
            sequence={[
              "Hello, I'm Michael 👋", 2000,
              "AI | Data | Web Dev 🧠", 2000,
              "Building human-centered solutions.", 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p style={{ marginTop: '0.5rem', color: '#ccc', fontFamily: 'Orbitron' }}>
          Driven by impact. Built to solve real problems.
        </p>

        {/* CTA Buttons */}
        <div style={{ marginTop: '2rem' }}>
          <a href="/projects" style={{
            backgroundColor: '#FFC107',
            color: '#1D3557',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            marginRight: '1rem',
            fontFamily: 'Orbitron'
          }}>
            See My Work
          </a>
          <a href="/Michael Pujos 2024 Resume.docx" download style={{
            border: '2px solid #FFC107',
            color: '#FFC107',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontFamily: 'Orbitron'
          }}>
            Download Resume
          </a>
        </div>

        {/* Skills Marquee */}
        <div ref={marqueeRef} style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          margin: '3rem 0',
          backgroundColor: '#1D3557',
          padding: '1rem',
          color: '#FFC107',
          fontWeight: 'bold',
          fontFamily: 'Orbitron'
        }}>
          Next.js • React • Python • SQL • Tableau • Excel • AI • UX/UI • GitHub • Figma • RAG • Web Design • Automation •
        </div>

        {/* About Me Section */}
        <section style={{
          backgroundColor: '#2C2C2C',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          fontFamily: 'Orbitron'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#00ffff' }}>About Me</h2>
          <p>
            I'm a senior Information Systems student at <strong>NJIT</strong> with a passion for solving real-world problems
            using data, design, and emerging AI tools. My work blends technology and empathy — always focused on people.
          </p>
        </section>

        {/* Timeline */}
        <section style={{
          maxWidth: '900px',
          margin: '0 auto',
          color: '#ccc',
          fontFamily: 'Orbitron'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#00ffff' }}>My Journey</h2>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
            <li>🎓 <strong>2020:</strong> Started Information Systems at NJIT</li>
            <li>💡 <strong>2021:</strong> Built my first interactive React app</li>
            <li>📊 <strong>2022:</strong> Published my first data dashboard</li>
            <li>🤖 <strong>2023:</strong> Developed AI-powered song generator</li>
            <li>🚀 <strong>2025:</strong> Launched this professional Hero Portfolio</li>
          </ul>
        </section>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#1D3557',
        color: 'white',
        marginTop: '4rem',
        fontFamily: 'Orbitron'
      }}>
        © 2025 Michael Pujos. All rights reserved.
      </footer>
    </>
  );
}

import Head from 'next/head';

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
    <h1 style={{
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#00ffff',
      fontFamily: 'Orbitron',
      textShadow: '0 0 8px #00ffff'
    }}>
      Michael Pujos
    </h1>
    <div style={{ display: 'flex', gap: '1.5rem' }}>
      <a href="/" style={{ color: '#fff', fontFamily: 'Orbitron', textDecoration: 'none' }}>Home</a>
      <a href="/projects" style={{ color: '#fff', fontFamily: 'Orbitron', textDecoration: 'none' }}>Projects</a>
      <a href="/about" style={{ color: '#fff', fontFamily: 'Orbitron', textDecoration: 'none' }}>About</a>
      <a href="/contact" style={{ color: '#fff', fontFamily: 'Orbitron', textDecoration: 'none' }}>Contact</a>
    </div>
  </nav>
);

export default function About() {
  return (
    <>
      <Head>
        <title>About | Michael Pujos</title>
      </Head>

      <Navbar />

      <main style={{
        minHeight: '100vh',
        backgroundColor: '#0b0c10',
        color: '#fff',
        fontFamily: 'Orbitron',
        padding: '4rem 2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#00ffff',
          textAlign: 'center',
          marginBottom: '0.5rem',
          textShadow: '0 0 10px #00ffff'
        }}>
          Who I Am
        </h1>

        <div style={{
          width: '120px',
          height: '5px',
          background: 'linear-gradient(to right, #ff007a, #00ffff)',
          margin: '0 auto 2rem',
          boxShadow: '0 0 15px #00ffff'
        }}></div>

        <p style={{
          maxWidth: '800px',
          margin: '0 auto',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          textAlign: 'center',
          color: '#ccc'
        }}>
          I'm <strong>Michael Pujos</strong>, a senior Information Systems student at <strong>NJIT</strong>
          with a passion for building sleek, purposeful tech that makes life better. I specialize in
          <span style={{ color: '#00ffff' }}> AI integration</span>, <span style={{ color: '#00ffff' }}>data visualization</span>,
          and <span style={{ color: '#00ffff' }}>user-centered design</span>. When I’m not coding, I’m
          learning how emerging technology can empower others — and I’m committed to always staying
          curious, adaptable, and human-driven.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '4rem',
          gap: '2rem'
        }}>
          <InfoCard title="Mission" content="To create digital experiences that are intuitive, impactful, and human." />
          <InfoCard title="Values" content="Empathy. Clarity. Curiosity. Resilience. Innovation." />
          <InfoCard title="Tech Arsenal" content="React • Next.js • Python • SQL • AI APIs • GitHub • Figma" />
        </div>
      </main>
    </>
  );
}

function InfoCard({ title, content }) {
  return (
    <div style={{
      backgroundColor: '#1D3557',
      borderRadius: '8px',
      padding: '2rem',
      width: '280px',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 0 10px rgba(0, 255, 255, 0.15)',
      cursor: 'default'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.4)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.15)';
    }}
    >
      <h2 style={{ color: '#FFC107', fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h2>
      <p style={{ color: '#ddd', fontSize: '0.95rem', lineHeight: '1.6' }}>{content}</p>
    </div>
  );
}

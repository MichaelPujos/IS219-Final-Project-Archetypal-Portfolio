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

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Michael Pujos</title>
      </Head>

      <Navbar />

      <main style={{
        minHeight: '100vh',
        backgroundColor: '#0b0c10',
        color: '#fff',
        fontFamily: 'Orbitron',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#00ffff',
          textShadow: '0 0 5px #00ffff'
        }}>
          Contact Me
        </h1>

        <div style={{
          width: '120px',
          height: '5px',
          background: 'linear-gradient(to right, #ff007a, #00ffff)',
          margin: '0 auto 2rem',
          boxShadow: '0 0 15px #00ffff'
        }}></div>

        <p style={{
          marginBottom: '2rem',
          color: '#ccc'
        }}>
          Have a question or opportunity? Reach out via email or use the form below.
        </p>

        <form style={{
          maxWidth: '500px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <input type="text" placeholder="Your Name" required style={inputStyle} />
          <input type="email" placeholder="Your Email" required style={inputStyle} />
          <textarea placeholder="Your Message" required rows="5" style={inputStyle}></textarea>
          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '4px',
  border: '1px solid #00ffff',
  backgroundColor: '#111',
  color: '#fff',
  fontFamily: 'Orbitron',
  fontSize: '1rem',
  boxShadow: '0 0 8px rgba(0, 255, 255, 0.2)',
  outline: 'none'
};

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#FFC107',
  color: '#1D3557',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '4px',
  fontFamily: 'Orbitron',
  fontSize: '1rem',
  boxShadow: '0 0 10px #FFC107',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

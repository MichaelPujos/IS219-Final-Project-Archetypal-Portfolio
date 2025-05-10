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

const projects = [
  {
    title: 'Immigration Data Visualization',
    desc: 'React dashboard visualizing immigrant workforce and deportation trends.',
    link: 'https://github.com/yourrepo/immigration-dashboard',
    tag: 'Data'
  },
  {
    title: 'AI Music & Lyrics Generator',
    desc: 'Claude + Suno-powered AI music creation tool.',
    link: 'https://github.com/yourrepo/ai-music-generator',
    tag: 'AI'
  },
  {
    title: 'Web Angels Site Redesign',
    desc: 'Next.js nonprofit redesign with usability testing.',
    link: 'https://github.com/yourrepo/web-angels',
    tag: 'Design'
  }
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Michael Pujos</title>
      </Head>

      <Navbar />

      <main style={{
        padding: '4rem 2rem',
        color: '#fff',
        fontFamily: 'Orbitron',
        backgroundColor: '#0b0c10'
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '0.5rem',
          color: '#00ffff',
          textShadow: '0 0 5px #00ffff'
        }}>
          Featured Projects
        </h1>

        <div style={{
          width: '120px',
          height: '5px',
          background: 'linear-gradient(to right, #ff007a, #00ffff)',
          margin: '0 auto 2rem',
          boxShadow: '0 0 15px #00ffff'
        }}></div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          {projects.map((proj, index) => (
            <div
              key={index}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.15)';
              }}
              style={{
                backgroundColor: '#1D3557',
                padding: '1.5rem',
                borderRadius: '8px',
                width: '300px',
                color: '#fff',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.15)'
              }}
            >
              <h3 style={{ color: '#FFC107', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{proj.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#ccc' }}>{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                marginTop: '1rem',
                color: '#00ffff',
                textDecoration: 'underline',
                fontWeight: 'bold'
              }}>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

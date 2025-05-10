import '../styles/globals.css'
import { useState, createContext } from 'react'

export const ThemeContext = createContext()

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(true)

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className={dark ? 'dark-mode' : 'light-mode'}>
        <button onClick={() => setDark(!dark)} style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000,
          backgroundColor: dark ? '#FFC107' : '#1D3557',
          color: dark ? '#1D3557' : '#fff',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  )
}

export default MyApp

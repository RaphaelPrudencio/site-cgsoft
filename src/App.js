import React, { useState, useEffect } from 'react';
import './global.css';
import avatar from './logo.png';
import sunIcon from './sun-icon.png'; // Substitua com o caminho correto
import moonIcon from './moon-icon.png'; // Substitua com o caminho correto

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Alterna entre temas e salva no localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  // Mantém o tema salvo ao carregar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex flex-col items-center justify-center`}>
      {/* Header */}
      <header className={`w-full max-w-6xl flex justify-between items-center p-4 rounded-full shadow-md ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mt-6`}>
        <div className={`text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>CGSoft</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="https://cgsoft.com.br/" className="hover:text-blue-400">Início</a></li>
            <li><a href="https://cgsoft.com.br/" className="hover:text-blue-400">Sobre</a></li>
            <li><a href="https://cgsoft.com.br/" className="hover:text-blue-400">Contato</a></li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode} className="focus:outline-none">
          <img src={darkMode ? moonIcon : sunIcon } alt="Theme Toggle" className="w-8 h-8" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center mt-16">
        <img
          src={avatar}
          alt="Avatar"
          className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">CGSoft</h1>
        <h2 className="text-2xl text-gray-400 mb-6">Site em construção...</h2>
        <p className="text-gray-400 max-w-2xl mb-8">
          Retornaremos breve.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://cgsoft.com.br/"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Conectar
          </a>
          <a
            href="https://cgsoft.com.br/"
            className="bg-gray-800 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-700 transition"
          >
            Portfólio
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center mt-16 py-6 text-gray-400">
        <p>&copy; {new Date().getFullYear()} CGSoft. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

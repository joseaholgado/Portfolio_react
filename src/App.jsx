import React, { useState, useEffect } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Section1 from './components/Section1/Section1'
import './styles/main.scss'
import Section2 from './components/Section2/Section2'
import Section4 from './components/Section4/Section4'
import Loading from './components/Loading/Loading'
import { AnimatePresence, motion } from 'framer-motion'

//Prueba build
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si el usuario ya ha visitado la página
    const visited = sessionStorage.getItem('hasVisitedPortfolio');
    if (visited) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Guardar en sessionStorage que el usuario ya ha visitado la página
    sessionStorage.setItem('hasVisitedPortfolio', 'true');
  };

  return (
    <div className="App" style={{ overflowX: 'hidden' }}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading onLoadingComplete={handleLoadingComplete} key="loading" />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navbar />
            <main style={{ position: 'relative' }}>
              <Section1/>
              <Section2/>
              <Section4/>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

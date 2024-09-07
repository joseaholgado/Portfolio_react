import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Section1 from './components/Section1/Section1'
import './styles/main.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*Aqui hay que tener en cuenta que el componnente navbar es fijo y hay que meter martgin top al sigiente componente */}
      <Section1/>
    </div>
  );
}

export default App;

import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Section1 from './components/Section1/Section1'
import './styles/main.scss'
import Section2 from './components/Section2/Section2'
import Section4 from './components/Section4/Section4'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1/>
      <Section2/>
      <Section4/>
    </div>
  );
}

export default App;

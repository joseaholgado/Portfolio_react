import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*Aqui hay que tener en cuenta que el componnente navbar es fijo y hay que meter martgin top al sigiente componente */}
    </div>
    
  );
}

export default App;

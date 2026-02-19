import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Ventas from './pages/ventas'; 
import Almacen from './pages/almacen'; // 1. Importar
//import Admin from './pages/admin'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Cuando la dirección sea la principal, muestra el Login */}
        <Route path="/" element={<Login />} />
        
        {/* Cuando la dirección sea /ventas, muestra el módulo de Caja */}
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/almacen" element={<Almacen />} /> 
      </Routes>
    </Router>
  );
}

export default App;

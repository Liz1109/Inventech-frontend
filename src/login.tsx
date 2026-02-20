import { User, Lock, Eye } from 'lucide-react'; 
import logo from './assets/carrito.jpg';
// 1. AÑADIR ESTA IMPORTACIÓN
import { useNavigate } from 'react-router-dom';

function App() {
  // 2. CREAR EL NAVEGADOR DENTRO DE LA FUNCIÓN
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#003d66]">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-2xl">
        
        <div className="mb-2 flex justify-center">
          <div className="h-50 w-full"> 
            <img 
              src={logo} 
              alt="Carrito" 
              className="h-full w-full object-contain" 
            />
          </div>
        </div>

        <h2 className="mb-6 text-center text-xl font-bold text-gray-800 tracking-wide uppercase">
          Iniciar Sesión
        </h2>

        <form className="space-y-6">
          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-500 uppercase">Usuario</label>
            <div className="relative flex items-center">
              <User className="absolute left-3 h-5 w-5 text-purple-600" />
              <input 
                type="text" 
                className="w-full rounded bg-blue-50 py-3 pl-10 pr-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-500 uppercase">Contraseña</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 h-5 w-5 text-gray-400" />
              <input 
                type="password" 
                
                className="w-full rounded bg-blue-50 py-3 pl-10 pr-10 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              />
              <Eye className="absolute right-3 h-5 w-5 cursor-pointer text-gray-400 hover:text-gray-600" />
            </div>
          </div>

          {/* 3. AÑADIR EL onClick AQUÍ ABAJO */}
          <button 
            type="button" 
            onClick={() => navigate('/ventas')}//se cambia para probar
            className="w-full rounded-full bg-gray-500 py-3 text-sm font-bold text-white shadow-md transition hover:bg-gray-600 active:scale-95"
          >
            INGRESAR
          </button>
        </form>

        <p className="mt-8 text-center text-[10px] text-gray-400 font-medium">
          © 2026 All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { Box, CheckCircle, Package, LogOut, ArrowUpDown, Filter } from 'lucide-react';

function Almacen() {
  // 1. Estado para el filtro (por defecto 'Todos')
  const [filtro, setFiltro] = useState('Todos');

  // Datos de ejemplo basados en los requerimientos de InvenTech
  const [pedidos, setPedidos] = useState([
    { id: '101', cliente: 'Dilan Becerra', estado: 'Recibido', items: 3 },
    { id: '102', cliente: 'María Morones', estado: 'En preparación', items: 1 },
    { id: '103', cliente: 'Carlos Ibarra', estado: 'Recibido', items: 5 },
    { id: '104', cliente: 'Irma Ramos', estado: 'En preparación', items: 2 },
    { id: '105', cliente: 'Hugo López', estado: 'En preparación', items: 3 },
  ]);

  // 2. Lógica de filtrado
  const pedidosFiltrados = filtro === 'Todos' 
    ? pedidos 
    : pedidos.filter(p => p.estado === filtro);

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar - Identidad Visual InvenTech */}
      <aside className="w-64 bg-[#003d66] text-white flex flex-col">
        <div className="p-6 text-2xl font-bold flex items-center gap-2">
          <Box className="text-orange-500" />
          InvenTech
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <button className="w-full flex items-center gap-3 bg-white/10 p-3 rounded-lg font-semibold text-left">
            <Package size={20} /> Gestión de Pedidos
          </button>
          <button className="w-full flex items-center gap-3 hover:bg-white/5 p-3 rounded-lg text-left text-gray-300 transition">
            <ArrowUpDown size={20} /> Control de Stock
          </button>
        </nav>
        <button className="m-4 flex items-center gap-3 p-3 text-red-300 hover:text-red-500 transition">
          <LogOut size={20} /> Cerrar Sesión
        </button>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Módulo de Almacén</h1>
          <div className="text-sm text-gray-500">
            Rol: <span className="font-bold text-[#003d66]">Logística</span>
          </div>
        </header>

        <div className="p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-700">Pedidos por Surtir</h2>
            
            {/* 3. Botones de Filtro */}
            <div className="flex bg-white rounded-lg shadow-sm p-1 gap-1 border border-gray-200">
              {['Todos', 'Recibido', 'En preparación'].map((opcion) => (
                <button
                  key={opcion}
                  onClick={() => setFiltro(opcion)}
                  className={`px-4 py-1.5 rounded-md text-xs font-bold transition ${
                    filtro === opcion 
                    ? 'bg-[#003d66] text-white' 
                    : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {opcion.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          
          {/* Lista de Pedidos Filtrados */}
          <div className="grid gap-4">
            {pedidosFiltrados.length > 0 ? (
              pedidosFiltrados.map((pedido) => (
                <div key={pedido.id} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 flex justify-between items-center animate-fadeIn">
                  <div>
                    <p className="text-sm text-gray-400 font-mono">#{pedido.id}</p>
                    <h3 className="font-bold text-gray-800">{pedido.cliente}</h3>
                    <p className="text-sm text-gray-500">{pedido.items} artículos</p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      pedido.estado === 'Recibido' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {pedido.estado}
                    </span>
                    
                    <button className="flex items-center gap-2 bg-[#14cc00] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-opacity-90 shadow-md active:scale-95 transition">
                      <CheckCircle size={18} /> Marcar como LISTO
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-200">
                <p className="text-gray-400 italic">No hay pedidos con el estado "{filtro}"</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Almacen;
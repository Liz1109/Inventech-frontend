import { useState } from 'react';
import { ShoppingCart, Package, LogOut, Search, Plus,  } from 'lucide-react';

function Ventas() {
  // 1. Nuestra "Bodega" de prueba con la Leche de Bebé
  const [productos] = useState([
    { id: 1, nombre: 'Leche de Bebé Etapa 1', precio: 450, stock: 15, categoria: 'Nutrición' },
    { id: 2, nombre: 'Pañales Etapa G', precio: 320, stock: 20, categoria: 'Higiene' },
    { id: 3, nombre: 'Toallitas Húmedas', precio: 85, stock: 50, categoria: 'Higiene' },
  ]);

  // 2. El estado del carrito (lo que el cajero va seleccionando)
  const [carrito, setCarrito] = useState<{id: number, nombre: string, precio: number, cantidad: number}[]>([]);

  // 3. Función para agregar al carrito
  const agregarAlCarrito = (producto: any) => {
    const existe = carrito.find(item => item.id === producto.id);
    if (existe) {
      setCarrito(carrito.map(item => 
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // 4. Calcular el total
  const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar con tu azul profundo #003d66 */}
      <aside className="w-64 bg-[#003d66] text-white flex flex-col">
        <div className="p-6 text-2xl font-bold flex items-center gap-2">
          <ShoppingCart className="text-orange-500" />
          InvenTech
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <button className="w-full flex items-center gap-3 bg-white/10 p-3 rounded-lg font-semibold">
            <Package size={20} /> Nueva Venta
          </button>
        </nav>
        <button className="m-4 flex items-center gap-3 p-3 text-red-300 hover:text-red-500 transition">
          <LogOut size={20} /> Cerrar Sesión
        </button>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center px-8">
          <h1 className="text-xl font-bold text-gray-800 uppercase tracking-tighter">Módulo de Caja</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            Rol: <span className="font-bold text-[#003d66]">Administrador</span>
          </div>
        </header>

        <div className="p-6 flex gap-6 flex-1 overflow-hidden">
          {/* SECCIÓN IZQUIERDA: BUSCADOR Y PRODUCTOS */}
          <div className="flex-[2] flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Buscar 'Leche'..." 
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-100 outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
              </div>
            </div>

            {/* Cuadrícula de productos */}
<div className="grid grid-cols-2 gap-6 overflow-y-auto pr-2 pb-6">
  {productos.map(prod => (
    <div 
      key={prod.id} 
      /* - shadow-md: Sombra base elegante.
         - hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]: Sombra profunda al pasar el mouse.
         - hover:-translate-y-1: Hace que la tarjeta "suba" un poquito.
      */
      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:border-orange-300 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] font-black bg-blue-50 text-[#003d66] px-2 py-1 rounded-md uppercase tracking-wider">
          {prod.categoria}
        </span>
        <span className="text-xs font-bold text-gray-400">Stock: {prod.stock}</span>
      </div>

      {/* Imagen simulada o icono con sombra suave */}
      <div className="mb-4 flex justify-center bg-gray-50 rounded-lg p-4 shadow-inner">
        <Package className="text-gray-300 group-hover:text-orange-400 transition-colors" size={48} />
      </div>

      <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#003d66] transition-colors">
        {prod.nombre}
      </h3>
      <p className="text-[#003d66] font-black text-xl mb-4">${prod.precio}.00</p>
      
      <button 
        onClick={() => agregarAlCarrito(prod)}
        className="w-full flex items-center justify-center gap-2 bg-gray-100 text-[#003d66] py-3 rounded-xl font-bold group-hover:bg-orange-500 group-hover:text-white shadow-sm transition-all active:scale-95"
      >
        <Plus size={18} /> AGREGAR
      </button>
    </div>
  ))}
</div>
</div>

          {/* SECCIÓN DERECHA: CARRITO / TICKET */}
          <div className="flex-1 bg-white rounded-xl shadow-xl p-6 flex flex-col border-t-8 border-orange-500">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-gray-800">
              <ShoppingCart size={20} className="text-orange-500" />
              Resumen de Venta
            </h3>
            
            <div className="flex-1 overflow-y-auto space-y-4 mb-6">
              {carrito.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-300 italic text-sm">No hay productos seleccionados</p>
                </div>
              ) : (
                carrito.map(item => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-3 animate-fadeIn">
                    <div>
                      <p className="font-bold text-gray-700 text-sm">{item.nombre}</p>
                      <p className="text-xs text-gray-400">{item.cantidad} x ${item.precio}</p>
                    </div>
                    <p className="font-bold text-gray-800">${item.precio * item.cantidad}</p>
                  </div>
                ))
              )}
            </div>

            <div className="border-t-2 border-dashed pt-6">
              <div className="flex justify-between text-2xl font-black text-gray-900 mb-6">
                <span>TOTAL:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button 
                disabled={carrito.length === 0}
                className="w-full bg-[#003d66] text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg active:scale-95 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                FINALIZAR PEDIDO
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Ventas;
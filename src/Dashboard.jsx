import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    hora: '--:--',
    fecha: '--/--/----',
    peatones_cruzando: 0,
    peatones_dia: 0,
    vehiculos: 0,
    silla_ruedas: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('https://wheelchair-backend.onrender.com/api/stats');
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error('Error al obtener estadísticas:', error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="min-h-screen bg-white text-black">
      <header className="text-center py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Sistema Inteligente<br />
          de Gestión de Tráfico Basado<br />
          en IA para Reconocimiento y<br />
          Predicción de Trayectorias de Peatones
        </h1>
        <p className="text-lg text-gray-600 mt-2">Calle Francisco I. Madero</p>
      </header>

      <section className="flex justify-center mb-10">
        <img
          src="https://wheelchair-backend.onrender.com/video_feed"
          alt="Detección en vivo"
          className="rounded-xl shadow-xl max-h-[480px] object-contain"
        />
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center text-sm md:text-base mt-6">
        <div className="bg-gray-800 text-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform p-4">
          <p className="font-semibold">Hora</p>
          <p>{stats.hora}</p>
        </div>
        <div className="bg-gray-800 text-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform p-4">
          <p className="font-semibold">Fecha</p>
          <p>{stats.fecha}</p>
        </div>
        <div className="bg-gray-800 text-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform p-4">
          <p className="font-semibold">Peatones Cruzando</p>
          <p>{stats.peatones_cruzando}</p>
        </div>
        <div className="bg-gray-800 text-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform p-4">
          <p className="font-semibold">Peatones del día</p>
          <p>{stats.peatones_dia}</p>
        </div>
        <div className="bg-gray-800 text-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform p-4">
          <p className="font-semibold">Vehículos</p>
          <p>{stats.vehiculos}</p>
        </div>
        <div className="bg-gray-800 text-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform p-4">
          <p className="font-semibold">Usuarios de silla de ruedas</p>
          <p>{stats.silla_ruedas}</p>
        </div>
      </section>
    </div>
  );
}

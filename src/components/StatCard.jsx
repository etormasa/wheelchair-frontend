// src/components/StatCard.jsx
export default function StatCard({ label, value }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 w-full max-w-[150px]">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-800 mb-2">
        {value}
      </div>
      <p className="text-sm font-semibold text-gray-700 text-center">{label}</p>
    </div>
  );
}

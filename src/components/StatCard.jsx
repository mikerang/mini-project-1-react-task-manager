function StatCard({ label, value }) {
  return (
    <div className="flex-1 rounded border border-gray-200 bg-white p-4 text-center">
      <p className="text-3xl font-semibold text-purple-700">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  )
}

export default StatCard
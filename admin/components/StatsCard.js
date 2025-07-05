function StatsCard({ title, value, icon, color, trend }) {
  try {
    return (
      <div className="admin-card rounded-xl p-6" data-name="stats-card" data-file="admin/components/StatsCard.js">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">{title}</p>
            <p className="text-2xl font-bold text-white mt-1">{value}</p>
            {trend && (
              <p className={`text-sm mt-1 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {trend > 0 ? '+' : ''}{trend}% este mês
              </p>
            )}
          </div>
          <div className={`w-12 h-12 bg-${color}-600 rounded-lg flex items-center justify-center`}>
            <div className={`icon-${icon} text-white text-lg`}></div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StatsCard error:', error);
    return null;
  }
}
export default function FilterBar({ 
  filterCategory, setFilterCategory, 
  filterStatus, setFilterStatus, 
  sortBy, setSortBy 
}) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 flex flex-col md:flex-row gap-4 justify-between items-center border border-pink-50">
      <div className="flex items-center gap-2">
        <label className="text-sm font-semibold text-slate-600">Category:</label>
        <select 
          value={filterCategory} 
          onChange={(e) => setFilterCategory(e.target.value)}
          className="bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
          <option value="All">All</option>
          <option value="Learning">Learning</option>
          <option value="Health">Health</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>

      <div className="flex bg-slate-100 p-1 rounded-xl">
        {['All', 'Active', 'Completed'].map(status => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${filterStatus === status ? "bg-white shadow-md text-[#3B1F2B]" : "text-slate-500 hover:text-slate-700"}`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-semibold text-slate-600">Sort by:</label>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-violet-300"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="priority">Priority (High→Low)</option>
        </select>
      </div>
    </div>
  );
}

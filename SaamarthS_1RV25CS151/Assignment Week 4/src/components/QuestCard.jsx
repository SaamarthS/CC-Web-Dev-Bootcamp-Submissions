// Priority color logic
const priorityColors = {
  High: "bg-pink-100 text-pink-800",
  Medium: "bg-amber-100 text-amber-800",
  Low: "bg-emerald-100 text-emerald-800"
};

// Category colors
const categoryColors = {
  Learning: "bg-blue-100 text-blue-800",
  Health: "bg-rose-100 text-rose-800",
  Work: "bg-violet-100 text-violet-800",
  Personal: "bg-orange-100 text-orange-800"
};

export default function QuestCard({ quest, onToggle, onDelete }) {
  return (
    <div className={`p-5 rounded-2xl shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg bg-white flex items-center justify-between border-l-4 ${quest.completed ? 'opacity-75 border-l-emerald-300 bg-emerald-50/30' : 'border-l-pink-300'} mb-4 animate-in fade-in zoom-in duration-300`}>
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={() => onToggle(quest.id)}
          className="text-2xl hover:scale-110 transition-transform"
          title={quest.completed ? "Mark incomplete" : "Mark complete"}
        >
          {quest.completed ? "🌟" : "⭕"}
        </button>
        <div className="flex flex-col gap-1">
          <h3 className={`text-lg font-bold font-serif transition-colors ${quest.completed ? "line-through text-slate-400" : "text-[#3B1F2B]"}`}>
            {quest.title}
          </h3>
          <div className="flex gap-2 text-xs font-semibold">
            <span className={`px-2 py-1 rounded-full ${categoryColors[quest.category]}`}>
              {quest.category}
            </span>
            <span className={`px-2 py-1 rounded-full ${priorityColors[quest.priority]}`}>
              {quest.priority}
            </span>
          </div>
        </div>
      </div>
      <button 
        onClick={() => onDelete(quest.id)}
        className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition-all text-xl ml-2"
        title="Delete Quest"
      >
        🗑️
      </button>
    </div>
  );
}

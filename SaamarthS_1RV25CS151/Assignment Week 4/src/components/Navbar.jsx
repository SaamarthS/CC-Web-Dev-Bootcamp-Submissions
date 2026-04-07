import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm px-6 py-4 flex justify-between items-center transition-all">
      <div className="font-serif text-2xl font-bold text-[#3B1F2B]">
        QuestBoard ⚔️
      </div>
      <div className="flex gap-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `px-4 py-2 font-semibold rounded-full transition-all ${
              isActive ? "bg-pink-100 text-pink-700 font-bold" : "text-slate-600 hover:bg-pink-50"
            }`
          }
        >
          My Quests
        </NavLink>
        <NavLink 
          to="/stats" 
          className={({ isActive }) => 
            `px-4 py-2 font-semibold rounded-full transition-all ${
              isActive ? "bg-violet-100 text-violet-700 font-bold" : "text-slate-600 hover:bg-violet-50"
            }`
          }
        >
          Stats 📊
        </NavLink>
      </div>
    </nav>
  );
}

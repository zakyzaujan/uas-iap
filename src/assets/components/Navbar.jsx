import { NavLink } from "react-router-dom";
import { User, Utensils } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-white/80 border-b border-gray-200 backdrop-blur-sm px-4 py-2.5 sticky top-0 z-10 pb-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-primary">Resep API</h1>

        <nav className="flex items-center space-x-5">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold flex items-center gap-1"
                : "text-muted-foreground hover:text-primary flex items-center gap-1"
            }
          >
            <User size={18} />
            Profil
          </NavLink>

          <NavLink
            to="/meals"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold flex items-center gap-1"
                : "text-muted-foreground hover:text-primary flex items-center gap-1"
            }
          >
            <Utensils size={18} />
            Resep
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export { Navbar };

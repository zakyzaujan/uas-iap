import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2.5 sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink className="text-2xl font-semibold text-gray-800 hover:text-gray-600">
          Resep API
        </NavLink>

        <nav className="flex items-center space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-gray-900"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            Profil
          </NavLink>
          <NavLink
            to="/meals"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-gray-900"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            Resep
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

import { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { ArrowBigLeftDash } from "lucide-react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const isOnMealsHome = location.pathname === "/meals";

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const q = query.trim();
      if (!q) return;
      navigate(`/meals/search/${encodeURIComponent(q)}`);
      setQuery("");
    },
    [query, navigate]
  );

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      {!isOnMealsHome && (
        <Button className="cursor-pointer" onClick={() => navigate("/meals")}>
          <ArrowBigLeftDash className="w-5 h-5" />
        </Button>
      )}
      <Input
        type="search"
        placeholder="Cari resep..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-l-md bg-white/50 backdrop-blur-sm"
      />
      <Button type="submit" variant={"outline"} className="cursor-pointer">
        <Search className="w-5 h-5" />
      </Button>
    </form>
  );
}

export default SearchBar;

import { useState, useCallback } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, ArrowBigLeftDash } from "lucide-react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const matchHome = useMatch({ path: "/meals", end: true });

  const matchCategory = useMatch("/meals/category/:name");

  const matchSearch = useMatch("/meals/search/:query");

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

  const isValidMealsRoute = matchHome || matchCategory || matchSearch;
  if (!isValidMealsRoute) {
    return null;
  }

  const isOnMealsHome = Boolean(matchHome);

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

export { SearchBar };

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import SearchResults from "./SearchResults";

const MealsRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="category/:name" element={<Category />} />
      <Route path="search/:query" element={<SearchResults />} />
    </Routes>
  );
};

export default MealsRouter;

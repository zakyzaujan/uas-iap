import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import SearchResults from "./SearchResults";
import NotFound from "./NotFound";

const MealsRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="category/:name" element={<Category />} />
      <Route path="search/:query" element={<SearchResults />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MealsRouter;

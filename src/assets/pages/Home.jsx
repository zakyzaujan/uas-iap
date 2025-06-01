import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../services/mealApi";
import { MealCard } from "../components/MealCard";
import { SkeletonCard } from "../components/SkeletonCard";
import useTitle from "@/hooks/useTitle";
import { ViewToggle } from "../components/ViewToggle";

const Home = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewMode, setViewMode] = useState("grid");

  useTitle("Resep Makanan");

  useEffect(() => {
    setLoading(true);
    fetchCategories()
      .then((data) => setCats(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="px-4">
      <h1 className="text-2xl mb-4 text-center font-semibold">
        Kategori Resep
      </h1>

      <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />

      {loading ? (
        <SkeletonCard />
      ) : (
        <div
          className={
            viewMode === "grid"
              ? "flex flex-wrap justify-center gap-4"
              : "flex flex-col gap-4"
          }
        >
          {cats.map((c) => (
            <Link key={c.idCategory} to={`/meals/category/${c.strCategory}`}>
              <div className={viewMode === "list" ? "w-full" : ""}>
                <MealCard
                  meal={{
                    idMeal: c.idCategory,
                    strMeal: c.strCategory,
                    strMealThumb: c.strCategoryThumb,
                  }}
                  listView={viewMode === "list"}
                  className={viewMode === "list" ? "!w-full" : ""}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

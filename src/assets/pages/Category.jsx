import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMealsByCategory } from "../services/mealApi";
import { MealCard } from "../components/MealCard";
import { MealDetailModal } from "../components/MealDetailModal";
import { SkeletonCard } from "../components/SkeletonCard";
import { ViewToggle } from "../components/ViewToggle";

const Category = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    setLoading(true);
    fetchMealsByCategory(name)
      .then((data) => {
        if (!data || data.length === 0) {
          navigate("/meals/404", { replace: true });
        } else {
          setMeals(data);
        }
      })
      .catch((err) => {
        console.error("Error fetchMealsByCategory:", err);
        navigate("/meals/404", { replace: true });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name, navigate]);

  return (
    <div className="px-4">
      <h1 className="text-2xl mb-4 text-center font-semibold">Resep {name}</h1>

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
          {meals.map((m) => (
            <MealDetailModal key={m.idMeal} mealId={m.idMeal}>
              <div
                className={
                  viewMode === "list"
                    ? "cursor-pointer w-full"
                    : "cursor-pointer"
                }
              >
                <MealCard
                  meal={m}
                  listView={viewMode === "list"}
                  className={viewMode === "list" ? "!w-full" : ""}
                />
              </div>
            </MealDetailModal>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMealsByCategory } from "../services/mealApi";
import MealDetailModal from "../components/MealDetailModal";
import MealCard from "../components/MealCard";
import SkeletonCard from "../components/SkeletonCard";

const Category = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <h1 className="text-2xl mb-8 text-center font-semibold">Resep {name}</h1>

      {loading ? (
        <SkeletonCard />
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {meals.map((m) => (
            <MealDetailModal key={m.idMeal} mealId={m.idMeal}>
              <div className="cursor-pointer">
                <MealCard meal={m} />
              </div>
            </MealDetailModal>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;

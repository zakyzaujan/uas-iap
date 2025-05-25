import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMealsByCategory } from "../services/mealApi";
import MealDetailModal from "../components/MealDetailModal";
import MealCard from "../components/MealCard";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMealsByCategory(name).then(setMeals);
  }, [name]);

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl mb-8 text-center font-semibold">Resep {name}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {meals.map((m) => (
          <MealDetailModal key={m.idMeal} mealId={m.idMeal}>
            <div className="cursor-pointer">
              <MealCard meal={m} />
            </div>
          </MealDetailModal>
        ))}
      </div>
    </div>
  );
};

export default Category;

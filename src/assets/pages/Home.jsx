import { useEffect, useState } from "react";
import { fetchCategories } from "../services/mealApi";
import MealCard from "../components/MealCard";
import useTitle from "@/hooks/useTitle";

const Home = () => {
  const [cats, setCats] = useState([]);

  useTitle("Resep Makanan");

  useEffect(() => {
    fetchCategories().then(setCats);
  }, []);

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl mb-8 text-center font-semibold">
        Kategori Resep
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {cats.map((c) => (
          <MealCard
            key={c.idCategory}
            meal={{
              idMeal: c.idCategory,
              strMeal: c.strCategory,
              strMealThumb: c.strCategoryThumb,
            }}
            to={`/meals/category/${c.strCategory}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

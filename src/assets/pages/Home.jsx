import { useEffect, useState } from "react";
import { fetchCategories } from "../services/mealApi";
import MealCard from "../components/MealCard";
import useTitle from "@/hooks/useTitle";
import SkeletonCard from "../components/SkeletonCard";

const Home = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useTitle("Resep Makanan");

  useEffect(() => {
    setLoading(true);
    fetchCategories()
      .then((data) => setCats(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="px-4">
      <h1 className="text-2xl mb-8 text-center font-semibold">
        Kategori Resep
      </h1>

      {loading ? (
        <SkeletonCard />
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
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
      )}
    </div>
  );
};

export default Home;

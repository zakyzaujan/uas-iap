import { useEffect, useState } from "react";
import { fetchCategories } from "../services/mealApi";
import { Link } from "react-router-dom";
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
          <Link
            key={c.idCategory}
            to={`/meals/category/${c.strCategory}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg"
          >
            <img
              src={c.strCategoryThumb}
              alt={c.strCategory}
              className="w-full h-28 object-cover"
            />
            <div className="p-2 text-center font-semibold">{c.strCategory}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

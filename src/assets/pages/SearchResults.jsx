import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMeals } from "../services/mealApi";
import { MealCard } from "../components/MealCard";
import { MealDetailModal } from "../components/MealDetailModal";
import { SkeletonCard } from "../components/SkeletonCard";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchResults() {
      setLoading(true);
      setErrorMessage(null);
      try {
        const data = await searchMeals(query);
        setResults(data || []);
      } catch (err) {
        if (err.response?.status === 429) {
          const message =
            err.response.data?.message ||
            "Terlalu banyak permintaan. Silakan coba lagi dalam beberapa detik.";
          setErrorMessage(message);
        } else {
          setErrorMessage("Terjadi kesalahan saat memuat data.");
          console.error(err);
        }
      }
      setLoading(false);
    }

    fetchResults();
  }, [query]);

  return (
    <div className="px-4">
      <h2 className="text-2xl mb-8 text-center font-semibold">
        Resep dengan Keyword: "{query}"
      </h2>
      {loading ? (
        <SkeletonCard />
      ) : errorMessage ? (
        <p className="text-center text-red-500">{errorMessage}</p>
      ) : results.length === 0 ? (
        <p className="text-center">Tidak ada resep ditemukan :(</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {results.map((m) => (
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

export default SearchResults;

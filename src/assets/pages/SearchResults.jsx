import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMeals } from "../services/mealApi";
import MealDetailModal from "../components/MealDetailModal";

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
            "Terlalu banyak permintaan. Silakan coba lagi dalam 10 detik.";
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
    <div className="px-4 py-6">
      <h2 className="text-2xl mb-8 text-center font-semibold">
        Resep dengan Keyword: "{query}"
      </h2>
      {loading && <p className="text-center">Memuat resep...</p>}

      {!loading && results.length === 0 && (
        <p className="text-center">Tidak ada resep ditemukan.</p>
      )}

      {!loading && errorMessage && (
        <p className="text-center text-red-500">{errorMessage}</p>
      )}

      {!loading && !errorMessage && results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((m) => (
            <MealDetailModal key={m.idMeal} mealId={m.idMeal}>
              <div className="border rounded-lg overflow-hidden hover:shadow-lg cursor-pointer">
                <img
                  src={m.strMealThumb}
                  alt={m.strMeal}
                  className="w-full h-28 object-cover"
                />
                <div className="p-2 text-center font-semibold">{m.strMeal}</div>
              </div>
            </MealDetailModal>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;

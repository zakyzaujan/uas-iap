import { useEffect, useState } from "react";
import { fetchMealDetail } from "../services/mealApi";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

function MealDetailModal({ mealId, children }) {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    if (mealId) {
      fetchMealDetail(mealId).then(setMeal);
    }
  }, [mealId]);

  const ingredients = meal
    ? Array.from({ length: 20 }, (_, i) => {
        const name = meal[`strIngredient${i + 1}`];
        const measure = meal[`strMeasure${i + 1}`];
        return name ? `${name} – ${measure}` : null;
      }).filter(Boolean)
    : [];

  const instructions = meal?.strInstructions
    ? meal.strInstructions.split(/(?:\r?\n){1,}/).filter((line) => line.trim())
    : [];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center p-2">
            {meal ? meal.strMeal : "Memuat detail resep..."}
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto p-4 max-h-[70vh] space-y-6">
          {!meal ? (
            <p className="text-center">Memuat resep…</p>
          ) : (
            <>
              {/* Gambar dan Overlay Nama */}
              <div className="relative">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {meal.strMeal}
                </div>
              </div>

              {/* Bahan-bahan */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Bahan-bahan</h3>
                <ul className="space-y-2">
                  {ingredients.map((ing, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm leading-relaxed"
                    >
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cara Memasak */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Cara Memasak</h3>
                <ol className="space-y-3 list-none">
                  {instructions.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm leading-relaxed"
                    >
                      <span className="bg-black text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step.trim()}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default MealDetailModal;

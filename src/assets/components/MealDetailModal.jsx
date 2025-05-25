import { useEffect, useState } from "react";
import { fetchMealDetail } from "../services/mealApi";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

export default function MealDetailModal({ mealId, children }) {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    if (mealId) fetchMealDetail(mealId).then(setMeal);
  }, [mealId]);

  const ingredients = meal
    ? Array.from({ length: 20 }, (_, i) => {
        const name = meal[`strIngredient${i + 1}`];
        const measure = meal[`strMeasure${i + 1}`];
        return name ? `${name} – ${measure}` : null;
      }).filter(Boolean)
    : [];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        className="
        max-w-lg
        data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
        data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95
      "
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">
            {"Detail Resep" + (meal ? ` "${meal.strMeal}"` : "")}
          </h2>
        </div>
        <div className="overflow-y-auto p-4 max-h-[calc(80vh-56px)]">
          {!meal ? (
            <p>Memuat resep…</p>
          ) : (
            <>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="mt-4 font-semibold">Bahan-bahan:</h3>
              <ul className="list-disc list-inside mb-4">
                {ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
              <h3 className="mt-4 font-semibold">Instruksi:</h3>
              <p className="text-sm leading-relaxed">
                {meal.strInstructions
                  .match(/[^.!?]+[.!?]+/g)
                  ?.map((sentence, idx) => (
                    <p key={idx}>{sentence.trim()}</p>
                  ))}
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

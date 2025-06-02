import { useEffect, useState } from "react";
import { fetchMealDetail } from "../services/mealApi";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { SquareArrowOutUpRight } from "lucide-react";

function MealDetailModal({ mealId, children }) {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    if (mealId) {
      fetchMealDetail(mealId).then(setMeal);
    }
  }, [mealId]);

  const tags = meal?.strTags
    ? meal.strTags.split(",").map((tag) => tag.trim())
    : [];

  const ingredients = meal
    ? Array.from({ length: 20 }, (_, i) => {
        const name = meal[`strIngredient${i + 1}`];
        const measure = meal[`strMeasure${i + 1}`];
        return name ? `${name} – ${measure}` : null;
      }).filter(Boolean)
    : [];

  const instructions = meal?.strInstructions
    ? (meal.strInstructions.includes("\r\n\r\n")
        ? meal.strInstructions.split("\r\n\r\n")
        : meal.strInstructions.split("\r\n")
      ).filter((line) => line.trim() !== "")
    : [];

  const youtube = meal?.strYoutube
    ? meal.strYoutube.replace("watch?v=", "embed/")
    : null;

  const source = meal?.strSource
    ? meal.strSource.replace("https://", "https://www.")
    : null;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center p-2">
            {meal ? meal.strMeal : "Memuat detail resep..."}
          </DialogTitle>
          {meal?.strArea && meal?.strCategory && (
            <p className="text-center text-muted-foreground -mt-3">
              {meal.strArea} • {meal.strCategory}
            </p>
          )}
          <Separator />
        </DialogHeader>

        <div className="overflow-y-auto p-4 max-h-[70vh] space-y-6">
          {!meal ? (
            <p className="text-center">Memuat resep…</p>
          ) : (
            <>
              <div className="relative">
                <img
                  src={meal.strMealThumb || "/placeholder.svg"}
                  alt={meal.strMeal}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {tags.length > 0 && (
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-black/70 text-white text-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <p className="text-sm mb-3 -mt-5">
                  <b className="font-semibold">Link Resep:</b>{" "}
                  {source ? (
                    <a
                      href={source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary hover:underline text-sm inline-flex"
                    >
                      {source}
                      <SquareArrowOutUpRight size={12} />
                    </a>
                  ) : (
                    <span className="text-gray-500">Tidak tersedia</span>
                  )}{" "}
                </p>
              </div>

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

              <div>
                <h3 className="text-lg font-semibold mb-3">Instruksi Video</h3>
                {youtube ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={youtube}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/0kY1b2a8Q3E"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { MealDetailModal };

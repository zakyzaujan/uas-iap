import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { cn } from "@/assets/lib/utils";

function MealCard({ meal, listView = false, className, ...props }) {
  if (listView) {
    return (
      <Card
        {...props}
        className={cn(
          "bg-white/80 hover:shadow-lg transition-shadow flex flex-row items-center",
          "w-full h-28",
          className
        )}
      >
        <div className="w-1/4 h-full overflow-hidden">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-3/4 h-full flex items-center px-4">
          <h3 className="text-lg font-semibold line-clamp-2">{meal.strMeal}</h3>
        </div>
      </Card>
    );
  }

  return (
    <Card
      {...props}
      className={cn(
        "bg-white/80 hover:shadow-lg transition-shadow flex flex-col",
        "w-[calc(100vw-2rem)]",
        "[@media(min-width:320px)]:w-[7.5rem]",
        "[@media(min-width:375px)]:w-[9rem]",
        "[@media(min-width:425px)]:w-[10.5rem]",
        "[@media(min-width:426px)]:w-80",
        className
      )}
    >
      <CardHeader className="px-2 pt-2">
        <CardTitle className="text-center line-clamp-2 h-12 overflow-hidden">
          {meal.strMeal}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-1">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-32 object-cover rounded-b-lg"
        />
      </CardContent>
    </Card>
  );
}

export { MealCard };

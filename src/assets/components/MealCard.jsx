import { forwardRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { cn } from "@/assets/lib/utils";
import { Link } from "react-router-dom";

const MealCard = forwardRef(({ meal, to, className, ...props }, ref) => {
  const content = (
    <Card
      ref={ref}
      {...props}
      className={cn(
        "hover:shadow-lg transition-shadow flex flex-col",
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
          className="w-full h-28 object-cover rounded-b-lg"
        />
      </CardContent>
    </Card>
  );

  return to ? <Link to={to}>{content}</Link> : content;
});

export default MealCard;

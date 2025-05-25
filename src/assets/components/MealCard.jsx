import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { cn } from "@/assets/lib/utils";

export default function MealCard({ meal, to }) {
  const content = (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-center">{meal.strMeal}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className={cn("w-full h-28 object-cover rounded-b-lg")}
        />
      </CardContent>
    </Card>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}

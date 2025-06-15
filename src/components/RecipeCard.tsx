
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  category: string;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 shadow-lg bg-white"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={`https://images.unsplash.com/${recipe.image}?w=400&h=250&fit=crop`}
          alt={recipe.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <Badge className="absolute top-3 right-3 bg-orange-600 hover:bg-orange-700">
          {recipe.category}
        </Badge>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
          {recipe.title}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-2">
          {recipe.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
          <Badge variant="outline" className="text-xs">
            {recipe.difficulty}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;

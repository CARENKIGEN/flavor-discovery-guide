
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react";

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

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

const RecipeDetail = ({ recipe, onBack }: RecipeDetailProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-6 border-orange-200 text-orange-600 hover:bg-orange-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Recipes
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recipe Image */}
          <div className="relative">
            <img
              src={`https://images.unsplash.com/${recipe.image}?w=600&h=400&fit=crop`}
              alt={recipe.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <Badge className="absolute top-4 right-4 bg-orange-600 hover:bg-orange-700">
              {recipe.category}
            </Badge>
          </div>

          {/* Recipe Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{recipe.description}</p>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="font-semibold">{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-600" />
                <span className="font-semibold">{recipe.servings} servings</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-orange-600" />
                <span className="font-semibold">{recipe.difficulty}</span>
              </div>
            </div>

            {/* Ingredients */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Instructions */}
        <Card className="mt-8 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecipeDetail;

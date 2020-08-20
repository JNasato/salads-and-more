import { IIngredient } from '../interfaces/ingredient';
import { IRecipe } from '../interfaces/recipe';

export class Recipe implements IRecipe {
  id: number;
  title: string;
  description: string;
  serves: number;
  imageUrl: string;
  ingredients: IIngredient[];
  instructions: string[];

  constructor({ id, title, description, serves, imageUrl, ingredients, instructions }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.serves = serves;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

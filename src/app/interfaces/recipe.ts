import { IIngredient } from './ingredient';

export interface IRecipe {
  id: number;
  title: string;
  description: string;
  serves: number;
  imageUrl: string;
  ingredients: IIngredient[];
  instructions: string[];
}

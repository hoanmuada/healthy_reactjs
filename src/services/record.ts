import { MealCategory } from '@/constants/enums/meal-category';

export interface IRecord {
  id: number;
  image: string;
  category: MealCategory;
  time: Date;
  weight: number;
  height: number;
}

// api service

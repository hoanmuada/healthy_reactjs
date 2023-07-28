import { MealCategory } from '@/constants/enums/meal-category';

export const getMealCategoryName = (category: MealCategory) => {
  switch (category) {
    case MealCategory.Morning:
      return 'Morning';
    case MealCategory.Lunch:
      return 'Lunch';
    case MealCategory.Dinner:
      return 'Dinner';
    default:
      return 'Snack';
  }
};

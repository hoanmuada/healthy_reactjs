import { useMemo } from 'react';

import HexagonButton from '@/components/common/HexagonButton';
import CupIcon from '@/components/icons/IconCup';
import KnifeIcon from '@/components/icons/KnifeIcon';
import { MealCategory } from '@/constants/enums/meal-category';
import { getMealCategoryName } from '@/utils/get-meal-category-name';

import classes from './HomeMeal.module.scss';

interface IProps {
  filterItem: (by: string) => void;
}
const HomeMeal = ({ filterItem }: IProps) => {
  const categories = useMemo(() => {
    return Object.values(MealCategory).map((category) => ({
      id: category,
      name: getMealCategoryName(category),
    }));
  }, []);

  const getCategoryIcon = (category: MealCategory) => {
    switch (category) {
      case MealCategory.Snack:
        return <CupIcon />;
      default:
        return <KnifeIcon />;
    }
  };

  return (
    <div className={classes.container}>
      {categories.map((category) => (
        <HexagonButton key={category.id} onClick={() => filterItem(category.name)}>
          {getCategoryIcon(category.id)}
          <span className="text-sm text-white">{category.name}</span>
        </HexagonButton>
      ))}
    </div>
  );
};

export default HomeMeal;

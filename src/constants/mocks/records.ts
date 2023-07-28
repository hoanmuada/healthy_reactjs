import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { random, times, uniqueId } from 'lodash';

import { IRecord } from '@/services/record';

import { mealImages } from './images';

import { MealCategory } from '../enums/meal-category';

faker.setLocale('ja');

const now = new Date();
const lastYear = dayjs(now).subtract(1, 'years').toDate();

export const records = times(200, () => {
  const record: IRecord = {
    id: Number(uniqueId()),
    image: faker.helpers.arrayElement(mealImages),
    category: faker.helpers.arrayElement(Object.values(MealCategory)),
    time: faker.date.between(lastYear, now),
    height: random(170, 190),
    weight: random(60, 75),
  };
  return record;
});

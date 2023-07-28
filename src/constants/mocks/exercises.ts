import { faker } from '@faker-js/faker';
import { random, times, uniqueId } from 'lodash';

import { IExercise } from '@/services/exercise';

faker.setLocale('ja');

export const exercises = times(50, () => {
  const exercise: IExercise = {
    id: Number(uniqueId()),
    title: `${faker.random.word()} (${faker.random.word()})`,
    minutes: random(15, 60),
    kcal: random(50, 100),
  };
  return exercise;
});

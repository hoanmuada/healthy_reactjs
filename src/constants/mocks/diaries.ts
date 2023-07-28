import { faker } from '@faker-js/faker';
import { times, uniqueId } from 'lodash';

import { IDiary } from '@/services/diary';

faker.setLocale('ja');

export const diaries = times(50, () => {
  const diary: IDiary = {
    id: Number(uniqueId()),
    title: faker.random.words(5),
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
  };
  return diary;
});

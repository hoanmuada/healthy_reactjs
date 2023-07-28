import { faker } from '@faker-js/faker';
import { times, uniqueId } from 'lodash';

import { IRecommendedPost } from '@/services/recommended-post';

import { postImages } from './images';

faker.setLocale('ja');

export const recommendedPosts = times(20, () => {
  const post: IRecommendedPost = {
    id: Number(uniqueId()),
    title: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    hashtags: times(3, () => faker.random.word()),
    image: faker.helpers.arrayElement(postImages),
  };
  return post;
});

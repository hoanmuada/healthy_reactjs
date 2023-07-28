import React from 'react';

import RecommendedPostsList from '@/components/parts/recommended/PostsList';
import RecommendedCategory from '@/components/parts/recommended/RecommendedCategory';

import classes from './Recommended.module.scss';

const Recommended = () => {
  return (
    <div className={classes.container}>
      <RecommendedCategory />
      <RecommendedPostsList />
    </div>
  );
};

export default Recommended;

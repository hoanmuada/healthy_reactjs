import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import RecommendedCard from '@/components/common/cards/RecommendedCard';
import { Button } from '@/components/core/Button';
import { recommendedPosts } from '@/constants/mocks/recommended-posts';

import classes from './PostsList.module.scss';

const RecommendedPostsList = () => {
  const [limit, setLimit] = useState(8);
  const addCollumn = () => {
    setLimit(limit + 4);
  };
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        {recommendedPosts.slice(0, limit).map((post) => (
          <RecommendedCard key={post.id} {...post} />
        ))}
      </div>
      <div className={classes.button__box}>
        <Link to="#posts">
          <Button onClick={addCollumn}>コラムをもっと見る</Button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendedPostsList;

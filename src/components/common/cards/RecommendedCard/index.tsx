import React from 'react';

import { Link } from 'react-router-dom';

import { IRecommendedPost } from '@/services/recommended-post';

import classes from './RecommendedCard.module.scss';

const RecommendedCard: React.FC<IRecommendedPost> = ({ id, image, title, hashtags }) => {
  return (
    <Link to={`#recommended-post-${id}`}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img src={image} alt="" />
        </div>
        <p className={classes.title}>{title}</p>
        <div className={classes.hashtags}>
          {hashtags.map((hashtag, idx) => (
            <span key={idx}>#{hashtag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default RecommendedCard;

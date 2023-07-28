import React, { useMemo } from 'react';

import classes from './RecommendedCategory.module.scss';

const RecommendedCategory = () => {
  const categories = useMemo(() => {
    return [
      {
        name: 'RECOMMENDED COLUMN',
        description: 'オススメ',
      },
      {
        name: 'RECOMMENDED DIET',
        description: 'ダイエット',
      },
      {
        name: 'RECOMMENDED BEAUTY',
        description: '美容',
      },
      {
        name: 'RECOMMENDED HEALTH',
        description: '健康',
      },
    ];
  }, []);
  return (
    <div className={classes.container}>
      {categories.map((category, idx) => (
        <div key={idx} className={classes.category}>
          <p className={classes.name}>{category.name}</p>
          <div className={classes.line} />
          <p className={classes.description}>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendedCategory;

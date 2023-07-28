import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import DiaryCard from '@/components/common/cards/DiaryCard';
import { Button } from '@/components/core/Button';
import { diaries } from '@/constants/mocks/diaries';

import classes from './MyDiary.module.scss';

const MyDiary = () => {
  const [limit, setLimit] = useState(8);
  const addDiary = () => {
    setLimit(limit + 4);
  };
  return (
    <div className={classes.container}>
      <h3 className={classes.header}>MY DIARY</h3>
      <div className={classes.list}>
        {diaries.slice(0, limit).map((diary) => (
          <DiaryCard key={diary.id} {...diary} />
        ))}
      </div>
      <div className={classes.button__box}>
        <Link to="#my-diary">
          <Button onClick={addDiary}>自分の日記をもっと見る</Button>
        </Link>
      </div>
    </div>
  );
};

export default MyDiary;

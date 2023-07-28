import React from 'react';

import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import { IDiary } from '@/services/diary';

import classes from './DiaryCard.module.scss';

type TDiaryCardProps = IDiary;

const DiaryCard: React.FC<TDiaryCardProps> = ({ id, createdAt, title, content }) => {
  return (
    <Link to={`#diary-${id}`}>
      <div className={classes.container}>
        <div className={classes.datetime}>
          <p>{dayjs(createdAt).format('YYYY.MM.DD')}</p>
          <p>{dayjs(createdAt).format('HH:mm')}</p>
        </div>
        <div className={classes.title}>{title}</div>
        <div className={classes.content}>{content}</div>
      </div>
    </Link>
  );
};

export default DiaryCard;

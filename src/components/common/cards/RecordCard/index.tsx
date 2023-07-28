import React from 'react';

import dayjs from 'dayjs';

import { IRecord } from '@/services/record';
import { getMealCategoryName } from '@/utils/get-meal-category-name';

import classes from './RecordCard.module.scss';

type IRecordCardProps = IRecord;

const RecordCard: React.FC<IRecordCardProps> = ({ category, image, time }) => {
  return (
    <div className={classes.container}>
      <img src={image} alt="" />
      <div className={classes.card__info}>{`${dayjs(time).format('HH.mm')}.${getMealCategoryName(category)}`}</div>
    </div>
  );
};

export default RecordCard;

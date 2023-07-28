import React from 'react';

import { IExercise } from '@/services/exercise';

import classes from './ExerciseItem.module.scss';

const ExerciseItem: React.FC<IExercise> = ({ minutes, kcal, title }) => {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.title}>
          <div className={classes.dot} />
          <p className="text-white">{title}</p>
        </div>
        <p className="text-primary-paler ml-[18px]">{kcal}kcal</p>
      </div>
      <p className={classes.minutes}>{minutes} min</p>
    </div>
  );
};

export default ExerciseItem;

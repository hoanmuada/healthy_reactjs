import React from 'react';

import dayjs from 'dayjs';

import { exercises } from '@/constants/mocks/exercises';

import ExerciseItem from './ExerciseItem';
import classes from './MyExercise.module.scss';

const MyExercise = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>
          MY
          <br />
          EXERCISE
        </p>
        <p className="text-xl">{dayjs().format('YYYY.MM.DD')}</p>
      </div>
      <div className={classes.main}>
        {exercises.map((exercise) => (
          <ExerciseItem key={exercise.id} {...exercise}></ExerciseItem>
        ))}
      </div>
    </div>
  );
};

export default MyExercise;

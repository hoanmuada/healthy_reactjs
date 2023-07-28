import BodyRecordChart from '@/components/common/charts/BodyRecord';
import MyDiary from '@/components/parts/my-record/MyDiary';
import MyExercise from '@/components/parts/my-record/MyExercise';
import MyRecordHyperlinks from '@/components/parts/my-record/MyRecordHyperlinks';

import classes from './MyRecord.module.scss';

const MyRecord = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  };
  return (
    <div className={classes.container}>
      <MyRecordHyperlinks scrollTo={scrollTo} />
      <div className={`${classes.chart} ${classes.scroll}`} id="body-record">
        <BodyRecordChart defaultActive="month" groups={['day', 'week', 'month', 'year']} />
      </div>
      <div className={classes.scroll} id="my-exercise">
        <MyExercise />
      </div>
      <div className={classes.scroll} id="my-diary">
        <MyDiary />
      </div>
    </div>
  );
};

export default MyRecord;

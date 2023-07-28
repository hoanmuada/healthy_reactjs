import { useState } from 'react';

import HomeHeader from '@/components/parts/home/HomeHeader';
import HomeMeal from '@/components/parts/home/HomeMeal';
import HomeRecord from '@/components/parts/home/HomeRecord';

import classes from './Home.module.scss';

const Home = () => {
  const [filter, setFilter] = useState('');
  const filterItem = (by: string) => {
    if (by === filter) {
      setFilter('');
    } else {
      setFilter(by);
    }
  };
  return (
    <div className={classes.container}>
      <HomeHeader />
      <div className={classes.main_record}>
        <HomeMeal filterItem={filterItem} />
        <HomeRecord filter={filter} />
      </div>
    </div>
  );
};

export default Home;

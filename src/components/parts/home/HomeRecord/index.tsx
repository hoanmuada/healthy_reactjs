import { useEffect, useState } from 'react';

import RecordCard from '@/components/common/cards/RecordCard';
import { Button } from '@/components/core/Button';
import { records } from '@/constants/mocks/records';

import classes from './HomeRecord.module.scss';

interface IProps {
  filter: string;
}
const HomeRecord = ({ filter }: IProps) => {
  const [limit, setLimit] = useState(8);
  const [listRecord, setListRecord] = useState(records);
  useEffect(() => {
    if (filter) {
      const list = records.filter(function (item) {
        return item.category.toUpperCase() === filter.toUpperCase();
      });
      setListRecord(list);
    } else {
      setListRecord(records);
    }
  }, [filter]);
  const addRecord = () => {
    setLimit(limit + 4);
  };
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        {listRecord.slice(0, limit).map((record) => (
          <RecordCard key={record.id} {...record} />
        ))}
      </div>
      <div className={classes.button__box}>
        <Button onClick={addRecord}>記録をもっと見る</Button>
      </div>
    </div>
  );
};

export default HomeRecord;

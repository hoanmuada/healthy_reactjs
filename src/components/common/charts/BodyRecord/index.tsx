/* eslint-disable no-case-declarations */
import React, { useMemo, useState } from 'react';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { groupBy, sumBy, times } from 'lodash';
import { LineChart, Line, ResponsiveContainer, XAxis, CartesianGrid } from 'recharts';

import { Button } from '@/components/core/Button';
import { records } from '@/constants/mocks/records';

import classes from './BodyRecord.module.scss';

type ChartGroup = 'day' | 'week' | 'month' | 'year';

type ChartData = {
  weight: number;
  height: number;
  label: string;
};

interface IBodyRecordChartProps {
  groups: ChartGroup[];
  hideHeader?: boolean;
  defaultActive?: ChartGroup;
}

const BodyRecordChart: React.FC<IBodyRecordChartProps> = ({ defaultActive, groups, hideHeader }) => {
  const [activeGroup, setActiveGroup] = useState(defaultActive || 'year');
  const [selectedDate] = useState(new Date());

  const getGroupName = (group: ChartGroup) => {
    switch (group) {
      case 'day':
        return '日';
      case 'week':
        return '週';
      case 'month':
        return '月';
      default:
        return '年';
    }
  };

  const getMonthGroupData = (): ChartData[] => {
    const lastYear = dayjs(selectedDate).subtract(1, 'years').toDate();
    const groupByMonth = groupBy(
      records.filter((record) => {
        const dayjsObj = dayjs(record.time);
        return dayjsObj.isAfter(lastYear) && dayjsObj.isBefore(selectedDate);
      }),
      (record) => dayjs(record.time).month(),
    );
    return times(12, (num) => {
      const month = dayjs(selectedDate)
        .subtract(12 - (num + 1), 'months')
        .month();
      return {
        weight: sumBy(groupByMonth[month], (record) => record.weight) || 0,
        height: sumBy(groupByMonth[month], (record) => record.height) || 0,
        label: `${month + 1}月`,
      };
    });
  };

  const chartData = useMemo(() => {
    return getMonthGroupData();
  }, []);

  return (
    <div className={classes.container}>
      {!hideHeader && (
        <div className={classes.header}>
          <p>
            Body
            <br />
            Record
          </p>
          <p className="text-xl">{dayjs().format('YYYY.MM.DD')}</p>
        </div>
      )}
      <div className={classes.main}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            margin={{
              left: 16,
              right: 16,
            }}
            width={300}
            height={100}
            data={chartData}
          >
            <CartesianGrid horizontal={false} />
            <XAxis
              interval={0}
              tickCount={12}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#fff',
                fontSize: 12,
              }}
              dataKey="label"
            />
            <Line type="monotone" dataKey="weight" stroke="#FFCC21" strokeWidth={2} />
            <Line type="monotone" dataKey="height" stroke="#8FE9D0" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {groups.length > 1 && (
        <div className={classes.groups}>
          {groups.map((group) => (
            <Button
              onClick={() => setActiveGroup(group)}
              className={clsx({
                [classes.active]: group === activeGroup,
              })}
              key={group}
            >
              {getGroupName(group)}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BodyRecordChart;

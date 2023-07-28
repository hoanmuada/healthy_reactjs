import dayjs from 'dayjs';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

import BodyRecordChart from '@/components/common/charts/BodyRecord';

import classes from './HomeHeader.module.scss';

const data02 = [{ name: 'A1', value: 1000 }];

const HomeHeader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.summary}>
        <img src="/images/home-header.png" alt="" />
        <div className={classes.chart}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                startAngle={90}
                labelLine={false}
                endAngle={-180}
                data={data02}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={72}
                fill="#fff"
              />
              <foreignObject x="50%" y="50%" overflow="visible" textAnchor="middle" dominantBaseline="middle">
                <div className={classes.chart__text__box}>
                  <div className={classes.chart__text__main}>
                    <span>{dayjs().format('MM/YY')}</span>
                    <span className="text-xl">75%</span>
                  </div>
                </div>
              </foreignObject>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={classes.chart}>
        <BodyRecordChart groups={['year']} hideHeader />
      </div>
    </div>
  );
};

export default HomeHeader;

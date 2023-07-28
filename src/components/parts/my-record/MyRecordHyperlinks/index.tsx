import React, { useMemo } from 'react';

import classes from './MyRecordHyperlinks.module.scss';

interface IProps {
  scrollTo: (id: string) => void;
}
const MyRecordHyperlinks = ({ scrollTo }: IProps) => {
  const hyperlinks = useMemo(() => {
    return [
      {
        title: 'Body record',
        image: '/images/body-record.png',
        link: {
          to: 'body-record',
          label: '自分のカラダの記録',
        },
      },
      {
        title: 'My Exercise',
        image: '/images/my-exercise.png',
        link: {
          to: 'my-exercise',
          label: '自分の運動の記録',
        },
      },
      {
        title: 'My diary',
        image: '/images/my-diary.png',
        link: {
          to: 'my-diary',
          label: '自分の日記',
        },
      },
    ];
  }, []);
  return (
    <div className={classes.container}>
      {hyperlinks.map((hyperlink, idx) => (
        <div className={classes.hyperlink__item} key={idx}>
          <div className={classes.hyperlink__box} key={idx}>
            <div
              style={{
                background: `url(${hyperlink.image})`,
              }}
              className={classes.hyperlink}
            />
            <div className={classes.content}>
              <p className={classes.title}>{hyperlink.title}</p>
              <button
                className={classes.link}
                onClick={() => {
                  scrollTo(hyperlink.link.to);
                }}
              >
                {hyperlink.link.label}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyRecordHyperlinks;

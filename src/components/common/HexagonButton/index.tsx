import React from 'react';

import classes from './HexagonButton.module.scss';

const HexagonButton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div className={classes.container} {...props}>
      {children}
    </div>
  );
};

export default HexagonButton;

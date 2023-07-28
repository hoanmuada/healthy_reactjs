import React, { HTMLAttributes, useContext } from 'react';

import clsx from 'clsx';

import classes from './MenuOption.module.scss';

import { MenuContext } from '../MenuContext';

type TMenuOptionProps = HTMLAttributes<HTMLDivElement>;

const MenuOption: React.FC<TMenuOptionProps> = ({ onClick, children, className, ...props }) => {
  const { setOpen } = useContext(MenuContext);

  return (
    <div
      aria-hidden="true"
      onClick={(e) => {
        e.stopPropagation();
        setOpen(false);
        onClick?.(e);
      }}
      className={clsx(classes.container, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default MenuOption;

import React, { HTMLAttributes, ReactNode, useState } from 'react';

import clsx from 'clsx';

import classes from './Menu.module.scss';
import { MenuContext } from './MenuContext';

interface IMenuProps extends HTMLAttributes<HTMLDivElement> {
  activator: ReactNode;
  placement?: 'bottom-end';
}

const Menu: React.FC<IMenuProps> = ({ placement = 'bottom-end', activator, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      <div className={classes.container}>
        <div aria-hidden="true" className={classes.activator} onClick={() => setOpen(!open)}>
          {activator}
        </div>
        <div
          className={clsx(classes.menu__options, classes[`menu__${placement}`], {
            [classes.open]: open,
          })}
        >
          {children}
        </div>
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;

import { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';
import { isString } from 'lodash';

import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  fullwidth?: boolean;
}

const Button = ({ variant = 'contained', children, fullwidth = false, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(classes.button, {
        [classes.button__contained]: variant === 'contained',
        [classes.button__fullwidth]: fullwidth,
      })}
      {...props}
    >
      {isString(children) ? <span className={classes.title}>{children}</span> : children}
    </button>
  );
};

export { Button };

import React from 'react';

interface IMenuContext {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = React.createContext<IMenuContext>({
  open: false,
  setOpen: () => {
    //
  },
});

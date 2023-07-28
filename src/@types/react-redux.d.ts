import { type EqualityFn } from 'react-redux';

import { AppDispatch, AppState } from '@/store';

declare module 'react-redux' {
  export const useSelector: <TState = AppState, Selected = unknown>(
    selector: (state: TState) => Selected,
    equalityFn?: EqualityFn<Selected> | undefined,
  ) => Selected;

  export declare const useDispatch: <TDispatch extends AppDispatch = AppDispatch>() => TDispatch;
}

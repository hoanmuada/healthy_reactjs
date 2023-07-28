import { type Action, configureStore, type ThunkAction } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import rootReducer from '@/store/reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const { VITE_ENABLE_LOGGER } = import.meta.env;
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return ['true'].includes(VITE_ENABLE_LOGGER) ? middlewares.concat(logger) : middlewares;
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

const persistor = persistStore(store);

export { store, persistor };

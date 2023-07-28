import { Suspense } from 'react';

import { Provider } from 'react-redux';

import RouterView from '@/routes';

import { store } from './store';

const App = () => {
  return (
    <Suspense fallback={null}>
      <Provider store={store}>
        <RouterView />
      </Provider>
    </Suspense>
  );
};

export default App;

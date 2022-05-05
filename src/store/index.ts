// redux
import { configureStore } from '@reduxjs/toolkit';
import article from './articleSlice';
import apiSlice from './apiSlice';

// saga
import { all } from 'redux-saga/effects';
import { articleSagas } from './articleSagas';
import createSagaMiddleware from 'redux-saga';

function* rootSaga() {
  yield all([articleSagas.watchFetchArticles()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    article: article,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// redux
import { configureStore } from '@reduxjs/toolkit';
import article from './article-slice';

// saga
import { all } from 'redux-saga/effects';
import {
  watchFetchArticleCategory,
  watchFetchArticleItems,
  watchFetchArticleItem,
} from './article-sagas';
import createSagaMiddleware from 'redux-saga';

function* rootSaga() {
  yield all([
    watchFetchArticleCategory(),
    watchFetchArticleItems(),
    watchFetchArticleItem(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    article: article,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

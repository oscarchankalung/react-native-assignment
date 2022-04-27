import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchArticleCategory, fetchArticleItem } from '../services/Article';
import { ArticleCategory, ArticleItem } from './article-type';
import { articleActions } from './article-slice';
import { articleSagaActions } from './article-actions';

export function* fetchArticleCategorySaga() {
  try {
    yield put(articleActions.refreshStart());
    const categories: ArticleCategory[] = yield call(fetchArticleCategory);
    yield put(articleActions.setArticleCategories(categories));
    yield put(articleActions.refreshSuccess());
  } catch (error: any) {
    yield put(articleActions.refreshFailed(error.message));
  }
}

export function* watchFetchArticleCategory() {
  yield takeEvery(
    articleSagaActions.getArticleCategories.type,
    fetchArticleCategorySaga,
  );
}

export function* fetchArticleItemSaga(action: PayloadAction<string>) {
  try {
    yield put(articleActions.refreshStart());
    const items: ArticleItem[] = yield call(fetchArticleItem, action.payload);
    yield put(articleActions.setArticleItems(items));
    yield put(articleActions.refreshSuccess());
  } catch (error: any) {
    yield put(articleActions.refreshFailed(error.message));
  }
}

export function* watchFetchArticleItem() {
  yield takeEvery(
    articleSagaActions.getArticleItems.type,
    fetchArticleItemSaga,
  );
}

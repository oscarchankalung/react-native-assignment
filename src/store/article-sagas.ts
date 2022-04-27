import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

// service
import {
  fetchArticleCategory,
  fetchArticleCategoryParam,
  fetchArticleItems,
  fetchArticleItemsParam,
  fetchArticleItem,
  fetchArticleItemParam,
} from '../services/Article';

// store
import { ArticleCategory, ArticleItem } from './article-type';
import { articleActions } from './article-slice';
import { articleSagaActions } from './article-actions';

export function* fetchArticleCategorySaga(
  action: PayloadAction<fetchArticleCategoryParam>,
) {
  try {
    yield put(articleActions.refreshStart());
    const categories: ArticleCategory[] = yield call(
      fetchArticleCategory,
      action.payload,
    );
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

export function* fetchArticleItemsSaga(
  action: PayloadAction<fetchArticleItemsParam>,
) {
  try {
    yield put(articleActions.refreshStart());
    const items: ArticleItem[] = yield call(fetchArticleItems, action.payload);
    yield put(articleActions.setArticleItems(items));
    yield put(articleActions.refreshSuccess());
  } catch (error: any) {
    yield put(articleActions.refreshFailed(error.message));
  }
}

export function* watchFetchArticleItems() {
  yield takeEvery(
    articleSagaActions.getArticleItems.type,
    fetchArticleItemsSaga,
  );
}

export function* fetchArticleItemSaga(
  action: PayloadAction<fetchArticleItemParam>,
) {
  try {
    yield put(articleActions.refreshStart());
    const item: ArticleItem = yield call(fetchArticleItem, action.payload);
    yield put(articleActions.setArticleItem(item));
    yield put(articleActions.refreshSuccess());
  } catch (error: any) {
    yield put(articleActions.refreshFailed(error.message));
  }
}

export function* watchFetchArticleItem() {
  yield takeEvery(articleSagaActions.getArticleItem.type, fetchArticleItemSaga);
}

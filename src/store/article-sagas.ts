import { call, put, takeEvery } from 'redux-saga/effects';

// service
import { articleService } from './../services/Article';

// store
import { Articles } from './article-type';
import { articleActions } from './article-slice';
import { articleSagaActions } from './article-actions';

function* fetchArticlesSaga() {
  try {
    yield put(articleActions.refreshStart());
    const articles: Articles = yield call(articleService.fetchArticles);
    yield put(articleActions.setArticles(articles));
    yield put(articleActions.refreshSuccess());
  } catch (error: any) {
    yield put(articleActions.refreshFailed(error.message));
  }
}

function* watchFetchArticles() {
  yield takeEvery(articleSagaActions.getArticles.type, fetchArticlesSaga);
}

export const articleSagas = { watchFetchArticles };

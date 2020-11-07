import { postAccessTokenAsync, POST_ACCESS_TOKEN_REQUEST, } from './actions';
import { postAccessToken, } from '../../api/githubAccessToken';
import { takeEvery, } from 'redux-saga/effects';
import createAsyncSaga from '../../lib/createAsyncSaga';

const postAccessTokenSaga = createAsyncSaga(postAccessTokenAsync, postAccessToken);

export function* githubSaga() {
  yield takeEvery(POST_ACCESS_TOKEN_REQUEST, postAccessTokenSaga);
}

import { getUserNameAsync, GET_USER_NAME_REQUEST, postAccessTokenAsync, POST_ACCESS_TOKEN_REQUEST, } from './actions';
import { postAccessToken, } from '../../api/githubAccessToken';
import { getGithubUserName, } from '../../api/githubUserInfo';
import { takeEvery, } from 'redux-saga/effects';
import createAsyncSaga from '../../lib/createAsyncSaga';

const postAccessTokenSaga = createAsyncSaga(postAccessTokenAsync, postAccessToken);
const getUserNameSaga = createAsyncSaga(getUserNameAsync, getGithubUserName);

export function* githubSaga() {
  yield takeEvery(POST_ACCESS_TOKEN_REQUEST, postAccessTokenSaga);
}

export function* githubUserNameSaga() {
  yield takeEvery(GET_USER_NAME_REQUEST, getUserNameSaga);
}

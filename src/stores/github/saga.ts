import { 
  getRepoListAsync, 
  getUserNameAsync, 
  postAccessTokenAsync, 
  getCommitListAsync,
  GET_REPO_LIST_REQUEST, 
  GET_USER_NAME_REQUEST, 
  POST_ACCESS_TOKEN_REQUEST, 
  GET_COMMIT_LIST_REQUEST, 
} from './actions';
import { postAccessToken, } from '../../api/githubAccessToken';
import { getGithubUserName, } from '../../api/githubUserInfo';
import { getGithubUserRepos, } from '../../api/githubRepoList';
import { getGithubCommits, } from '../../api/githubCommitList';
import { takeEvery, } from 'redux-saga/effects';
import createAsyncSaga from '../../lib/createAsyncSaga';

const postAccessTokenSaga = createAsyncSaga(postAccessTokenAsync, postAccessToken);
const getUserNameSaga = createAsyncSaga(getUserNameAsync, getGithubUserName);
const getRepoListSaga = createAsyncSaga(getRepoListAsync, getGithubUserRepos);
const getCommitListSaga = createAsyncSaga(getCommitListAsync, getGithubCommits);

export function* githubSaga() {
  yield takeEvery(POST_ACCESS_TOKEN_REQUEST, postAccessTokenSaga);
}

export function* githubUserNameSaga() {
  yield takeEvery(GET_USER_NAME_REQUEST, getUserNameSaga);
}

export function* githubRepoListSaga() {
  yield takeEvery(GET_REPO_LIST_REQUEST, getRepoListSaga);
}

export function* githubCommitListSaga() {
  yield takeEvery(GET_COMMIT_LIST_REQUEST, getCommitListSaga);
}

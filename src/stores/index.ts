import {
  combineReducers,
} from 'redux';
import github from './github/reducer';
import { 
  githubRepoListSaga, 
  githubSaga, 
  githubUserNameSaga,
  githubCommitListSaga, 
} from './github';
import todayCommitList from './todayCommit';
import { all, } from 'redux-saga/effects';

const rootReducer = combineReducers({
  github,
  todayCommitList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([
    githubSaga(),
    githubUserNameSaga(),
    githubRepoListSaga(),
    githubCommitListSaga(),
  ]);
}

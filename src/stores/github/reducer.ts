import { createReducer, } from 'typesafe-actions';
import { 
  GithubState, 
  GithubAction, 
  GithubUserNameState, 
  GithubRepoListState, 
  GithubCommitListState,
} from './types';
import { 
  POST_ACCESS_TOKEN_REQUEST, POST_ACCESS_TOKEN_SUCCESS, POST_ACCESS_TOKEN_FAILURE, 
  GET_USER_NAME_REQUEST, GET_USER_NAME_SUCCESS, GET_USER_NAME_FAILURE,
  GET_REPO_LIST_REQUEST, GET_REPO_LIST_SUCCESS, GET_REPO_LIST_FAILURE,
  GET_COMMIT_LIST_REQUEST, GET_COMMIT_LIST_SUCCESS, GET_COMMIT_LIST_FAILURE, SET_COMMIT_LIST_ERROR_COUNT_INIT,
} from './actions';

const initialState: GithubState 
| GithubUserNameState 
| GithubRepoListState 
| GithubCommitListState = {
  accessToken: {
    loading: false,
    error: null,
    data: null,
  },
  userName: {
    loading: false,
    error: null,
    data: null,
  },
  repoList: {
    loading: false,
    error: null,
    data: null,
  },
  commitList: {
    loading: false,
    error: null,
    errorCount: 0,
    data: null,
  },
};

const github = createReducer<GithubState
  | GithubUserNameState
  | GithubRepoListState
  | GithubCommitListState, GithubAction>(initialState, {
  // ACCESS_TOEKN
  [POST_ACCESS_TOKEN_REQUEST]: (state) => ({
    ...state,
    accessToken: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [POST_ACCESS_TOKEN_SUCCESS]: (state, action) => ({
    ...state,
    accessToken: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [POST_ACCESS_TOKEN_FAILURE]: (state, action) => ({
    ...state,
    accessToken: {
      loading: false,
      error: action.payload,
      data: null,
    }
  }),
  // USER_NAME
  [GET_USER_NAME_REQUEST]: (state) => ({
    ...state,
    userName: {
      loading: true,
      error: null,
      data: null,
    }
  }),
  [GET_USER_NAME_SUCCESS]: (state, action) => ({
    ...state,
    userName: {
      loading: false,
      error: null,
      data: action.payload,
    }
  }),
  [GET_USER_NAME_FAILURE]: (state, action) => ({
    ...state,
    userName: {
      loading: false,
      error: action.payload,
      data: null,
    }
  }),
  // REPO_LIST
  [GET_REPO_LIST_REQUEST]: (state) => ({
    ...state,
    repoList: {
      loading: true,
      error: null,
      data: null,
    }
  }),
  [GET_REPO_LIST_SUCCESS]: (state, action) => ({
    ...state,
    repoList: {
      loading: false,
      error: null,
      data: action.payload,
    }
  }),
  [GET_REPO_LIST_FAILURE]: (state, action) => ({
    ...state,
    repoList: {
      loading: false,
      error: action.payload,
      data: null,
    }
  }),
  // COMMIT_LIST
  [GET_COMMIT_LIST_REQUEST]: (state) => ({
    ...state,
    commitList: {
      loading: true,
      error: null,
      errorCount: 0,
      data: null,
    }
  }),
  [GET_COMMIT_LIST_SUCCESS]: (state, action) => ({
    ...state,
    commitList: {
      loading: false,
      error: null,
      errorCount: (state as any).commitList.errorCount,
      data: {
        ...(state as any).commitList.data,
        [action.payload.repo]: action.payload.data,
      },
    }
  }),
  [GET_COMMIT_LIST_FAILURE]: (state, action) => ({
    ...state,
    commitList: {
      loading: false,
      error: action.payload,
      errorCount: ++(state as any).commitList.errorCount,
      data: {
        ...(state as any).commitList.data,
      },
    }
  }),  
});

export default github;

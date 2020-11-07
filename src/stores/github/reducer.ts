import { createReducer, } from 'typesafe-actions';
import { GithubState, GithubAction, GithubUserNameState, } from './types';
import { POST_ACCESS_TOKEN_REQUEST, POST_ACCESS_TOKEN_SUCCESS, POST_ACCESS_TOKEN_FAILURE, GET_USER_NAME_REQUEST, GET_USER_NAME_SUCCESS, GET_USER_NAME_FAILURE, } from './actions';

const initialState: GithubState | GithubUserNameState = {
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
};

const github = createReducer<GithubState
  | GithubUserNameState, GithubAction>(initialState, {
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
});

export default github;

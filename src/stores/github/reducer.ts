import { createReducer, } from 'typesafe-actions';
import { GithubState, GithubAction, } from './types';
import { POST_ACCESS_TOKEN_REQUEST, POST_ACCESS_TOKEN_SUCCESS, POST_ACCESS_TOKEN_FAILURE, } from './actions';

const initialState: GithubState = {
  accessToken: {
    loading: false,
    error: null,
    data: null,
  },
};

const github = createReducer<GithubState, GithubAction>(initialState, {
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
});

export default github;

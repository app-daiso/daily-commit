import { createAsyncAction, } from 'typesafe-actions';
import { AccessTokenResponse, AccessTokenRequest, } from '../../api/github';
import { AxiosError, } from 'axios';

export const POST_ACCESS_TOKEN_REQUEST = `github/POST_ACCESS_TOKEN_REQUEST`;
export const POST_ACCESS_TOKEN_SUCCESS = `github/POST_ACCESS_TOKEN_SUCCESS`;
export const POST_ACCESS_TOKEN_FAILURE = `github/POST_ACCESS_TOKEN_FAILURE`;

export const postAccessTokenAsync = createAsyncAction(
  POST_ACCESS_TOKEN_REQUEST,
  POST_ACCESS_TOKEN_SUCCESS,
  POST_ACCESS_TOKEN_FAILURE,
)<AccessTokenRequest , AccessTokenResponse, AxiosError>();

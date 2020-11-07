import { createAsyncAction, } from 'typesafe-actions';
import { AccessTokenResponse, AccessTokenRequest, } from '../../api/githubAccessToken';
import { GetUserNameRequest, GetUserNameResponse, } from '../../api/githubUserName';
import { AxiosError, } from 'axios';

// ACCESS_TOKEN
export const POST_ACCESS_TOKEN_REQUEST = `github/POST_ACCESS_TOKEN_REQUEST`;
export const POST_ACCESS_TOKEN_SUCCESS = `github/POST_ACCESS_TOKEN_SUCCESS`;
export const POST_ACCESS_TOKEN_FAILURE = `github/POST_ACCESS_TOKEN_FAILURE`;

export const postAccessTokenAsync = createAsyncAction(
  POST_ACCESS_TOKEN_REQUEST,
  POST_ACCESS_TOKEN_SUCCESS,
  POST_ACCESS_TOKEN_FAILURE,
)<AccessTokenRequest , AccessTokenResponse, AxiosError>();

// USER_NAME
export const GET_USER_NAME_REQUEST = `github/GET_USER_NAME_REQUEST`;
export const GET_USER_NAME_SUCCESS = `github/GET_USER_NAME_SUCCESS`;
export const GET_USER_NAME_FAILURE = `github/GET_USER_NAME_FAILURE`;

export const getUserNameAsync = createAsyncAction(
  GET_USER_NAME_REQUEST,
  GET_USER_NAME_SUCCESS,
  GET_USER_NAME_FAILURE,
)<GetUserNameRequest , GetUserNameResponse, AxiosError>();

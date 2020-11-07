import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { AccessTokenResponse, } from '../../api/githubAccessToken';

export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
  accessToken: {
    loading: boolean;
    error: Error | null;
    data: AccessTokenResponse | null;
  };
};

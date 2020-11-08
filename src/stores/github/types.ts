import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { AccessTokenResponse, } from '../../api/githubAccessToken';
import { GetUserNameResponse, } from '../../api/githubUserInfo';

export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
  accessToken: {
    loading: boolean;
    error: Error | null;
    data: AccessTokenResponse | null;
  };  
};

export type GithubUserNameState = {
  userName: {
    loading: boolean;
    error: Error | null;
    data: GetUserNameResponse | null;
  };
}

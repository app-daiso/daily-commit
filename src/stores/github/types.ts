import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { AccessTokenResponse, } from '../../api/githubAccessToken';
import { GetUserNameResponse, } from '../../api/githubUserInfo';
import { GetRepoListResponse, } from '../../api/githubTodayCommitHistory';
import { CommitList, } from '../../api/githubCommitList';

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

export type GithubRepoListState = {
  repoList: {
    loading: boolean;
    error: Error | null;
    data: GetRepoListResponse[] | null;
  };
}

export type GithubCommitListState = {
  commitList: {
    loading: boolean;
    error: Error | null;
    data: GithubCommitListData | null;
  };
}

export interface GithubCommitListData {
  [index: string]: CommitList[];
}

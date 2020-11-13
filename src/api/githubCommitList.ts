import axios from 'axios';

export async function getGithubCommits(request: GetCommitListRequest) {
  const response = await axios.get<GetCommitListResponse>(`https://api.github.com/repos/${request.fullName}/commits`, {
    headers: {
      Accept: `application/vnd.github.v3+json`,
      Authorization: request.token,
    }
  });

  return {
    repo: request.fullName,
    data: response.data,
  };
}

export interface GetCommitListRequest {
  token: string;
  fullName: string;
}

export interface GetCommitListResponse {
  repo: string;
  data: CommitList;
}

export interface CommitList {
  sha:          string;
  node_id:      string;
  commit:       Commit;
  url:          string;
  html_url:     string;
  comments_url: string;
  author:       CommitListAuthor;
  committer:    CommitListAuthor;
  parents:      any[];
}

export interface CommitListAuthor {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  received_events_url: string;
  type:                string;
  site_admin:          boolean;
}

export interface Commit {
  author:        CommitAuthor;
  committer:     CommitAuthor;
  message:       string;
  tree:          Tree;
  url:           string;
  comment_count: number;
  verification:  Verification;
}

export interface CommitAuthor {
  name:  string;
  email: string;
  date:  string;
}

export interface Tree {
  sha: string;
  url: string;
}

export interface Verification {
  verified:  boolean;
  reason:    string;
  signature: null;
  payload:   null;
}

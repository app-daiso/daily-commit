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
  id:        string;
  tree_id:   string;
  message:   string;
  author:    Author;
  committer: Author;
}

export interface Author {
  name:  string;
  email: string;
  timestamp: string;
}
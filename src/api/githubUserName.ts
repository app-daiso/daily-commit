import axios from 'axios';

export async function getGithubUserName(request: GetUserNameRequest) {
  const response = await axios.get<GetUserNameResponse>(`https://api.github.com/user`, {
    headers: {
      Accept: `application/vnd.github.v3+json`,
      Authorization: request.token,
    }
  });

  return response.data;
}

export interface GetUserNameRequest {
  token: string;
}

export interface GetUserNameResponse {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string | null;
  gravatar_id:         string | null;
  url:                 string | null;
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
  name:                string;
  company:             string | null;
  blog:                string | null;
  location:            string | null;
  email:               string | null;
  hireable:            boolean | null;
  bio:                 string | null;
  twitter_username:    string| null;
  public_repos:        number;
  public_gists:        number;
  followers:           number;
  following:           number;
  created_at:          string;
  updated_at:          string;
}


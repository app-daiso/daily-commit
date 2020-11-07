import axios from 'axios';
import { makeRedirectUri, getDefaultReturnUrl, } from 'expo-auth-session';

const REDIRECT_URL = getDefaultReturnUrl() || makeRedirectUri({       
  native: 'comdailycommit://redirect',
});

export async function postAccessToken(request: AccessTokenRequest) {
  const response = await axios.post<AccessTokenResponse>(`https://github.com/login/oauth/access_token`, {
    client_id: `7f6d75fe84b0b867318e`,
    client_secret: `8eed00d78418028a9b507b229f50ab9581e55913`,
    code: request.code,
    redirect_uri: REDIRECT_URL,
    state: request.state,
  }, {
    headers: {
      accept: `application/json`,
    }
  });

  return response.data;
}

export interface AccessTokenRequest {
  code: string;
  state: string;
}

export interface AccessTokenResponse {
  access_token: string;
  scope:        string;
  token_type:   string;
}

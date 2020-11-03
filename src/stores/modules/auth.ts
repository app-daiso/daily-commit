import {
  createAction,
  ActionType,
  createReducer,
} from 'typesafe-actions';

// # create ACTION_TYPE
const GRANT = `auth/GRANT`;

// # create ACTION
export const grant = createAction(GRANT)<string>();

// # create ACTION OBJECT
const actions = { grant, };

type AuthAction = ActionType<typeof actions>;

type AuthState = {
  token: string;
};

const initState: AuthState = {
  token: ``,
};

// # Create REDUCER
const auth = createReducer<AuthState, AuthAction>(initState, {
  [GRANT]: (_state, action) => ({ token: action.payload }),
});

export default auth;

import { CommitList, } from '../api/githubCommitList';

export interface TodayCommitList {
  [index: number]: CommitList;
}[];

type TodayCommitListState = {
  todayCommitList: TodayCommitList;
};

const SET_TODAY_COMMIT_LIST = 'todayCommit/SET_TODAY_COMMIT_LIST' as const;

export const setCommitList = (diff: TodayCommitList) => ({
  type: SET_TODAY_COMMIT_LIST,  
  payload: diff,
});

type GetCommitListAction = ReturnType<typeof setCommitList>;

const initialState: TodayCommitListState= {
  todayCommitList: [],
};

function todayCommitList(
  state: TodayCommitListState = initialState,
  action: GetCommitListAction
): TodayCommitListState {
  switch (action.type) {
    case SET_TODAY_COMMIT_LIST:
      return {
        todayCommitList: action.payload,
      };
    default:
      return state;
  }
}

export default todayCommitList;
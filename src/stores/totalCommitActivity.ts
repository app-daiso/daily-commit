type TotalCommitState = {
  date: {
    date: string;
  }[];
};

const SET_TOTAL_COMMIT_ACTIVITY = 'totalCommitActivity/SET_TOTAL_COMMIT_ACTIVITY' as const;

export const setTotalCommitActivity = (diff: {date: string}[]) => ({
  type: SET_TOTAL_COMMIT_ACTIVITY,
  payload: diff,
});

type GetCommitActivityAction = ReturnType<typeof setTotalCommitActivity>;

const initialState: TotalCommitState = {
  date: [],
};

function totalCommitActivity(
  state: TotalCommitState = initialState,
  action: GetCommitActivityAction
): TotalCommitState {
  switch (action.type) {
    case SET_TOTAL_COMMIT_ACTIVITY:
      return {
        date: action.payload,
      };
    default:
      return state;
  }
}

export default totalCommitActivity;
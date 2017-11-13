import {
  FETCH_LAST_VOTES,
  FETCH_LAST_VOTES_FAILURE,
  FETCH_LAST_VOTES_SUCCESS,
} from './constants';

const initialState = {
  lastVotes: [],
  lastVotesFetching: false,
  lastVotesFetchingError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAST_VOTES:
      return Object.assign({}, state, {
        lastVotes: [],
        lastVotesFetching: true,
        lastVotesFetchingError: null,
      });

    case FETCH_LAST_VOTES_FAILURE:
      return Object.assign({}, state, {
        lastVotesFetching: false,
        lastVotesFetchingError: action.payload,
      });

    case FETCH_LAST_VOTES_SUCCESS:
      return Object.assign({}, state, {
        lastVotes: action.payload,
        lastVotesFetching: false,
      });

    default:
      return state;
  }
};

export default reducer;

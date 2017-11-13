import { createSelector } from 'reselect';

const selectDomain = () => state => state.dashboard;

const selectLastVotes = createSelector(
  selectDomain(),
  substate => substate.lastVotes
);

const selectLastVotesFetching = createSelector(
  selectDomain(),
  substate => substate.lastVotesFetching
);

const selectLastVotesFetchingError = createSelector(
  selectDomain(),
  substate => substate.lastVotesFetchingError
);

export {
  selectLastVotes,
  selectLastVotesFetching,
  selectLastVotesFetchingError,
};

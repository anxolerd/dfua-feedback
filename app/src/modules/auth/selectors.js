import { createSelector } from 'reselect';

const selectAuthDomain = () => state => state.auth;

const selectUser = createSelector(
  selectAuthDomain(),
  substate => substate.user
);

export { selectUser };

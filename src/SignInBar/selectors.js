import { createSelector } from 'reselect';

export const signupDataReselect = (state) => createSelector(state.loginReducer, (signup) => signup);
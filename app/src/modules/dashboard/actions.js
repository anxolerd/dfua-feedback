import * as firebase from 'firebase';
import 'firebase/firestore';

import {
  FETCH_LAST_VOTES,
  FETCH_LAST_VOTES_FAILURE,
  FETCH_LAST_VOTES_SUCCESS,
} from './constants';


const fetchLastVotesFailure = payload => ({ type: FETCH_LAST_VOTES_FAILURE, payload });

const fetchLastVotesSuccess = payload => ({ type: FETCH_LAST_VOTES_SUCCESS, payload });

const fetchLastVotes = (limit) => (dispatch) => {
  dispatch({ type: FETCH_LAST_VOTES });

  return firebase.firestore().collection('votes')
    .orderBy('time', 'desc')
    .limit(limit)
    .get()
    .then(snaps => snaps.docs.map(doc => doc.data()))
    .then(docs => dispatch(fetchLastVotesSuccess(docs)))
    .catch(err => {
      console.warn('Oops', err);
      dispatch(fetchLastVotesFailure(err))
    });
};

export {
  fetchLastVotes,
  fetchLastVotesFailure,
  fetchLastVotesSuccess,
};

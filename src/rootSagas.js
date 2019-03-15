
import { all } from 'redux-saga/effects';
import Signin from './SignInBar';

export default function* rootSaga() {
  yield all([
    Signin.sagas.default()
  ]);
}

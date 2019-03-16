
import { all } from 'redux-saga/effects';
import Signin from './SignInBar';
import Dashboard from './Dashboard';

export default function* rootSaga() {
  yield all([
    Signin.sagas.default(),
    Dashboard.sagas.default()
  ]);
}

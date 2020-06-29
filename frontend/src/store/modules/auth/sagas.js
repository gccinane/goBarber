import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import history from '~/services/history';
import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', { email, password });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('User not provider');
  }

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
  console.tron.log('deus');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);

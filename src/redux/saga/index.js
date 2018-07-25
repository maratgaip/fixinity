import { call, put, takeLatest } from 'redux-saga/effects';

import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from '../reducer';

const fetchJSON = (url, options = {}) =>
  new Promise((resolve, reject) => {
    return fetch(url, options)
      .then(response => (response.status !== 200 ? reject(response) : response))
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(error => reject(error));
  });

function* authorize({ payload: { login, password } }) {
  const options = {
    body: JSON.stringify({ login, password }),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  };

  try {
    const { token } = yield call(fetchJSON, '/login', options);
    yield put({ type: AUTH_SUCCESS, payload: token });
    localStorage.setItem('token', token);
  } catch (error) {
    let message;
    switch (error.status) {
      case 500: message = 'Internal Server Error'; break;
      case 401: message = 'Invalid credentials'; break;
      default: message = 'Something went wrong';
    }
    yield put({ type: AUTH_FAILURE, payload: message });
    localStorage.removeItem('token');
  }
}

function* Saga() {
  yield takeLatest(AUTH_REQUEST, authorize);
}

export default Saga;
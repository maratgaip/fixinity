import { call, put, takeLatest } from 'redux-saga/effects';

import { types } from '../reducer';

const { SEND_APPOINTMENT, SEND_APPOINTMENT_SUCCESS, SEND_APPOINTMENT_FAILED } = types;
const apiEndPoint = "https://fixinity-api-staging.herokuapp.com";

const fetchJSON = (url, options = {}) =>
  new Promise((resolve, reject) => {
    return fetch(url, options)
      .then(response => (response.status !== 200 ? reject(response) : response))
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(error => reject(error));
  });

function* sendAppointment({info}) {
  const options = {
    body: JSON.stringify({info}),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  };

  try {
    const { token } = yield call(fetchJSON, `${apiEndPoint}/api/jobs`, options);
    yield put({ type: SEND_APPOINTMENT_SUCCESS, payload: token });
  } catch (error) {
    let message;
    switch (error.status) {
      case 500: message = 'Internal Server Error'; break;
      case 401: message = 'Invalid credentials'; break;
      default: message = 'Something went wrong';
    }
    yield put({ type: SEND_APPOINTMENT_FAILED, payload: message });
  }
}

function* Saga() {
  yield takeLatest(SEND_APPOINTMENT, sendAppointment);
}

export default Saga;
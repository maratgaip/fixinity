import { call, put, takeLatest } from 'redux-saga/effects';

import { types } from '../reducer';

const { BOOK_APPOINTMENT, BOOK_APPOINTMENT_SUCCESS, BOOK_APPOINTMENT_FAILED, SAVE_STORAGE, SAVE_STORAGE_SUCCESS } = types;
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
    body: JSON.stringify(info),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  };

  yield put({ type: BOOK_APPOINTMENT_SUCCESS });

  /*try {
    yield call(fetchJSON, `${apiEndPoint}/api/jobs`, options);
    yield put({ type: BOOK_APPOINTMENT_SUCCESS });
  } catch (error) {
    let message;
    switch (error.status) {
      case 500: message = 'Internal Server Error'; break;
      case 401: message = 'Invalid credentials'; break;
      default: message = 'Something went wrong';
    }
    yield put({ type: BOOK_APPOINTMENT_FAILED, payload: message });
  }*/
}

function* saveToStorage({info}) {
  localStorage.setItem('info', JSON.stringify(info));
  yield put({ type: SAVE_STORAGE_SUCCESS });
}
function* getFromStorage(info) {
  localStorage.removeItem('info');
  yield put({ type: SAVE_STORAGE_SUCCESS });
}

function* Saga() {
  yield takeLatest(BOOK_APPOINTMENT, sendAppointment);
  yield takeLatest(SAVE_STORAGE, saveToStorage);
}

export default Saga;
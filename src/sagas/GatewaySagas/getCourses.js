import { call, put } from 'redux-saga/effects';
import gatewayActions from '../../redux/gateway';
import apiActions from '../../redux/api';

export default function* create(api, { originCode, destinationCode = '', majorCode = '' }) {
  const response = yield call(() => api.getCourses(originCode, destinationCode, majorCode));

  if (response.ok) {
    yield [
      put(gatewayActions.getCoursesSuccess(response.data.data.courses)),
      put(apiActions.apiSuccess()),
    ];
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}

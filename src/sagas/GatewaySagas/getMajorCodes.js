import { call, put } from 'redux-saga/effects';
import gatewayActions from '../../redux/gateway';
import apiActions from '../../redux/api';

export default function* create(api, { originCode, destinationCode = '' }) {
  const response = yield call(() => api.getMajorCodes(originCode, destinationCode));

  if (response.ok) {
    yield [
      put(gatewayActions.getMajorCodesSuccess(response.data.data.majors)),
      put(apiActions.apiSuccess()),
    ];
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}

import { call, put } from 'redux-saga/effects';
import gatewayActions from '../../redux/gateway';
import apiActions from '../../redux/api';

export default function* create(api) {
  const response = yield call(() => api.getOriginCodes());

  if (response.ok) {
    yield [
      put(gatewayActions.getOriginCodesSuccess(response.data.data.originSchools)),
      put(apiActions.apiSuccess()),
    ];
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}

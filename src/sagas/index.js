import { takeLatest } from 'redux-saga/effects';
import API from '../services/API';

// ----- Sagas ----- //
import GetOriginCodes from './GatewaySagas/getOriginCodes';
import GetDestinationCodes from './GatewaySagas/getDestinationCodes';
import GetMajorCodes from './GatewaySagas/getMajorCodes';
import GetCourses from './GatewaySagas/getCourses';

// ----- Types ----- //
import { GatewayTypes } from '../redux/gateway';

const api = API.createAPI();

export default function* rootSaga() {
  yield [
    takeLatest(GatewayTypes.GET_ORIGIN_CODES, GetOriginCodes, api),
    takeLatest(GatewayTypes.GET_DESTINATION_CODES, GetDestinationCodes, api),
    takeLatest(GatewayTypes.GET_MAJOR_CODES, GetMajorCodes, api),
    takeLatest(GatewayTypes.GET_COURSES, GetCourses, api),
  ];
}

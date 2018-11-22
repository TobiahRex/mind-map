import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  getOriginCodes: null,
  getDestinationCodes: ['originCode'],
  getMajorCodes: ['originCode', 'destinationCode'],
  getCourses: ['originCode', 'destinationCode', 'majorCode'],

  getDestinationCodesSuccess: ['destinations'],
  getMajorCodesSuccess: ['majors'],
  getCoursesSuccess: ['courses'],
  getOriginCodesSuccess: ['origins'],
});

export const GatewayTypes = Types;
export default Creators;
export const INITIAL_STATE = Immutable({
  origins: [],
  currentOrigin: null,
  destinations: [],
  majors: [],
  courses: [],
});

const getDestinationCodesSuccess = (state, { destinations }) => ({
  ...state,
  destinations,
});

const getMajorCodesSuccess = (state, { majors }) => ({
  ...state,
  majors,
});

const getCoursesSuccess = (state, { courses }) => ({
  ...state,
  courses,
});

const getOriginCodesSuccess = (state, { origins }) => ({
  ...state,
  origins,
});

export const gatewayReducer = createReducer(INITIAL_STATE, {
  [Types.GET_DESTINATION_CODES_SUCCESS]: getDestinationCodesSuccess,
  [Types.GET_MAJOR_CODES_SUCCESS]: getMajorCodesSuccess,
  [Types.GET_COURSES_SUCCESS]: getCoursesSuccess,
  [Types.GET_ORIGIN_CODES_SUCCESS]: getOriginCodesSuccess,
});

import { combineReducers } from 'redux';

// ------- Reducer Imports ------- //

import { gatewayReducer as gateway } from './gateway';
// import { thingReducer as things } from './thing';
import { apiReducer as api } from './api';

const rootReducer = combineReducers({
  api,
  gateway
});

export default rootReducer;

// export default () => configureStore(rootReducer, rootSaga);

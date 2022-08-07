import appSlice from '@features/app/appSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  appSlice,
});

export default rootReducer;

import { combineReducers,CombinedState } from '@reduxjs/toolkit';
import settingsReducer from './settings/settingsReducer';

const rootReducer:CombinedState<any> = combineReducers({
	settings:settingsReducer
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>

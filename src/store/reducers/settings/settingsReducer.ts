import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {settingsSliceType} from './types';



const initialState:settingsSliceType = {
	isLightTheme:true
};

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		changeTheme : (state:settingsSliceType) =>{
			state.isLightTheme = !state.isLightTheme;
		}
	},
});

// Action creators are generated for each case reducer function
export const {changeTheme} = settingsSlice.actions;

export default settingsSlice.reducer;

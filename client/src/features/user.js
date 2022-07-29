import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = { name: "", email: "" }

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;

//slice contains the reducer
//line 7 tells us what initial state is before it is changed
//action includes payload and type
//payload = object = pass in info that you want to use
//passing in an object to payload to change state
//grabbing the previous state in line 5
//and changing it with the new payload from line 7
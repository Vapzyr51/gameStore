import { createSlice } from '@reduxjs/toolkit';


// Define a type for the slice state
interface AuthentState {
    logged_in: boolean
};
// Define the initial state using that type
const initialState: AuthentState = {
    logged_in: false,
};

/**
 * CreateSlice auto-generate the action types and action creators for you, based on the names of the reducer functions you provide.
 * Here it generates actions : "login", "logout".
 * see doc : https://redux-toolkit.js.org/usage/usage-guide#defining-functions-in-objects
 */
export const authentReducer = createSlice({
    name: 'auth', 
    initialState: { 
        logged_in: false,
    }, reducers: { 
        login: (state) => { 
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.logged_in = true;
            },
        logout: (state) => {
            state.logged_in = false;
            },
    },
});
// Action creators are generated for each case reducer functionexport const { increment, decrement, incrementByAmount } = counterSlice.actions
export default authentReducer.reducer;
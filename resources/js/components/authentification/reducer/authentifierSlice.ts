import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../../types/user';

import { checkSessionInfos, removeSessionInfos } from '../cookiesManager';


// Define a type for the slice state
interface AuthentState {
    logged_in: boolean,
    id_user: number | null,
};
// Define the initial state using that type
const initialState: AuthentState = {
    logged_in: false,
    id_user: null,
};

/**
 * CreateSlice auto-generate the action types and action creators for you, based on the names of the reducer functions you provide.
 * Here it generates actions : "login", "logout".
 * see doc : https://redux-toolkit.js.org/usage/usage-guide#defining-functions-in-objects
 */
export const authentReducer = createSlice({
    name: 'auth', 
    initialState: { 
        logged_in: checkSessionInfos(),
        id_user: null as number | null,
    }, reducers: { 
        login: (state, action: PayloadAction<User>) => { 
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.logged_in = true;
            state.id_user = action.payload.id_user;
            },
        logout: (state) => {
            state.logged_in = false;
            removeSessionInfos();
            },
    },
});
// Action creators are generated for each case reducer functionexport const { increment, decrement, incrementByAmount } = counterSlice.actions
export default authentReducer.reducer;
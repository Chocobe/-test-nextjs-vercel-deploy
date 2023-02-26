import {
    createAction,
    createReducer,
    PayloadAction,
} from '@reduxjs/toolkit';

const NAMESPACE = 'findPasswordPage';

export type TFindPasswordPageState = {
    findPassword: {
        email: string;
    };
};

//
// initialState
//
export const findPasswordPageInitialState: TFindPasswordPageState = {
    findPassword: {
        email: '',
    },
};

//
// actions
//
export const resetFindPasswordContext = createAction<void>(`${NAMESPACE}/resetFindPassword`);
export const setEmailToFindPasswordContext = createAction<string>(`${NAMESPACE}/setEmail`);

//
// reducer
//
export const findPasswordPageReducer = createReducer(findPasswordPageInitialState, builder => {
    builder
        .addCase(resetFindPasswordContext, state => {
            state.findPassword = {
                email: '',
            };
        })
        .addCase(setEmailToFindPasswordContext, (
            state, 
            action: PayloadAction<string>
        ) => {
            state.findPassword.email = action.payload;
        });
});

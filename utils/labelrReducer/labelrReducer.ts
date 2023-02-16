import { 
    PayloadAction,
    createNextState,
    Draft,
} from '@reduxjs/toolkit';

export type TLabelrReducer<T> = (draft: Draft<T>, action: PayloadAction<any>) => void;

export const combineLabelrReducers = <T>(
    reducers: TLabelrReducer<T>[],
    initialState: T
) => {
    function combinedReducer(state: T, action: PayloadAction<any>) {
        return createNextState(state ?? initialState, draft => {
            reducers.forEach(reducer => reducer(draft, action));
        });
    }

    combinedReducer.initialState = initialState;

    return combinedReducer;
};

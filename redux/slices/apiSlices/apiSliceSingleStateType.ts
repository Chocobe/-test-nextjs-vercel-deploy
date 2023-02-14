export type TApiSliceSingleState<T = any ,U = any> = {
    isLoading: boolean;
    data?: T | null;
    error?: U | null;
};

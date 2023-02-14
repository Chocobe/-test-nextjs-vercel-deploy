import {
    CallEffect,
    PutEffect,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

export type TSagaGenerator<T> = Generator<
    CallEffect<AxiosResponse<T>> | PutEffect,
    void,
    AxiosResponse<T>
>;

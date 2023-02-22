import {
    transform,
    snakeCase,
    isObject,
    isArray,
} from 'lodash-es';

export const toSnakeCaseDeep = (object: Record<string, any> | Array<any>) => {
    return transform<Record<string, any>, any>(object, (resultObj, value, key) => {
        const snakeCaseKey = snakeCase(key);
        const snakeCaseValue = isObject(value) && !isArray(value)
            ? toSnakeCaseDeep(value) 
            : value;

        resultObj[snakeCaseKey] = snakeCaseValue;
    }, {});
};

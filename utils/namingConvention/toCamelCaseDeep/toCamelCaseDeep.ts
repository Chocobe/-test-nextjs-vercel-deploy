import {
    transform,
    camelCase,
    isObject,
    isArray,
} from 'lodash-es';

export const toCamelCaseDeep = (object: Record<string, any> | Array<any>) => {
    return transform<Record<string, any>, any>(object, (resultObj, value, key) => {
        const camelCaseKey = camelCase(key);
        const camelCaseValue = isObject(value) && !isArray(value)
            ? toCamelCaseDeep(value) 
            : value;

        resultObj[camelCaseKey] = camelCaseValue;
    }, {});
};

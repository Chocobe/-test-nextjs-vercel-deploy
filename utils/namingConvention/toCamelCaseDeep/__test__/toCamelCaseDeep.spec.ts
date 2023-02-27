import {
    toCamelCaseDeep,
} from '../toCamelCaseDeep';

describe('toCamelCaseDeep() 유틸 테스트', () => {
    it('flatten object 의 key 를 camelCase 로 변환한다.', () => {
        const obj = {
            first_key: 'first value',
            second_key: 'second value',
            third_key: 'third value',
        };

        const result = toCamelCaseDeep(obj);

        expect(result).toEqual({
            firstKey: 'first value',
            secondKey: 'second value',
            thirdKey: 'third value',
        });
    });

    it('1차원 nested object 의 key 를 camelCase 로 변환한다.', () => {
        const obj = {
            first_key: {
                first_one: '1',
                first_two: '2',
                first_three: '3',
            },
            second_key: {
                second_one: 1,
                second_two: 2,
                second_three: 3,
            },
        };

        const result = toCamelCaseDeep(obj);

        expect(result).toEqual({
            firstKey: {
                firstOne: '1',
                firstTwo: '2',
                firstThree: '3',
            },
            secondKey: {
                secondOne: 1,
                secondTwo: 2,
                secondThree: 3,
            },
        });
    });

    it('중첩된 object 의 모든 key 를 camelCase 로 변환한다.', () => {
        const obj = {
            first_obj: {
                first_one_obj: {
                    first_one_obj_key_1: 'first one obj value 1',
                    first_one_obj_key_2: 'first one obj value 2',
                    first_one_obj_key_3: 'first one obj value 3',
                },

                first_two_key: 'first two value',
            },

            second_obj: {
                nested_obj_one: {
                    first_key: '111',
                    second_key: '222',
                    third_key: '333',
                },

                nested_obj_two: {
                    inner_obj: {
                        inner_value_one: 'inner value 1',
                        inner_value_two: 'inner value 2',
                        inner_value_three: 'inner value3',
                    },
                },
                nested_obj_three: {
                    hello_world: 'Hello World',
                },
            },
        };

        const result = toCamelCaseDeep(obj);

        expect(result).toEqual({
            firstObj: {
                firstOneObj: {
                    firstOneObjKey1: 'first one obj value 1',
                    firstOneObjKey2: 'first one obj value 2',
                    firstOneObjKey3: 'first one obj value 3',
                },

                firstTwoKey: 'first two value',
            },

            secondObj: {
                nestedObjOne: {
                    firstKey: '111',
                    secondKey: '222',
                    thirdKey: '333',
                },

                nestedObjTwo: {
                    innerObj: {
                        innerValueOne: 'inner value 1',
                        innerValueTwo: 'inner value 2',
                        innerValueThree: 'inner value3',
                    },
                },
                nestedObjThree: {
                    helloWorld: 'Hello World',
                },
            },
        });
    });

    it('camelCase object 에는 영향이 없다.', () => {
        const obj = {
            firstKey: 'first value',
            secondKey: 'second value',
            thirdKey: 'third value',

            innerObj: {
                innerKey1: 'inner value 1',
                innerKey2: 'inner value 2',
                innerKey3: 'inner value 3',
            },
        };

        const result = toCamelCaseDeep(obj);

        expect(result).toEqual(obj);
    });

    it('camelCase 와 snake_case 혼합 객체도 camelCase 로 변환됩니다.', () => {
        const obj = {
            camelCaseObj: {
                firstKey: 'first value',
                second_key: 'second value',
                third_key: 'third value',
            },
            snake_obj: {
                first_key: 'first value',
                secondKey: 'second value',
                thirdKey: 'third value',
            },
        };

        const result = toCamelCaseDeep(obj);

        expect(result).toEqual({
            camelCaseObj: {
                firstKey: 'first value',
                secondKey: 'second value',
                thirdKey: 'third value',
            },
            snakeObj: {
                firstKey: 'first value',
                secondKey: 'second value',
                thirdKey: 'third value',
            },
        });
    });

    it('object 의 value 중, Array 가 포함되어도 camelCase 변환이 된다.', () => {
        const obj = {
            first_obj: {
                first_arr: [1, 2, 3],
                second_arr: ['first', 'second', 'third'],
            },

            secondObj: {
                first_arr: [11, 22, 33],
                second_arr: ['11', '22', '33'],
            },
        };

        const result = toCamelCaseDeep(obj);

        expect(result).toEqual({
            firstObj: {
                firstArr: [1, 2, 3],
                secondArr: ['first', 'second', 'third'],
            },

            secondObj: {
                firstArr: [11, 22, 33],
                secondArr: ['11', '22', '33'],
            },
        });
    });
});

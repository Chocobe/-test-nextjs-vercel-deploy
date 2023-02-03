import { 
    useLabelrUiAddonInvalidMessages,
    TUseLabelrUiAddonInvalidMessagesExecutor,
} from '../hooks/useLabelrUiAddonInvalidMessages';
import { renderHook, act } from '@testing-library/react';

describe('useLabelrUiAddonInvalidMessages', () => {
    describe('초기화 시,', () => {
        it('isInvalid === true', () => {
            const validatorExecutors: TUseLabelrUiAddonInvalidMessagesExecutor[] = [
                {
                    invalidMessage: '3보다 작은값을 입력해 주세요',
                    validator: (value: number) => {
                        return value < 3;
                    },
                },
            ];

            const {
                result,
            } = renderHook(() => useLabelrUiAddonInvalidMessages(validatorExecutors));

            const {
                isValid,
            } = result.current;

            expect(isValid).toBeTruthy();
        });

        it('invalidMessages.length === 0', () => {
            const validatorExecutors: TUseLabelrUiAddonInvalidMessagesExecutor[] = [
                {
                    invalidMessage: '3보다 작은값을 입력해 주세요',
                    validator: (value: number) => {
                        return value < 3;
                    },
                },
            ];

            const {
                result,
            } = renderHook(() => useLabelrUiAddonInvalidMessages(validatorExecutors));

            const {
                invalidMessages,
            } = result.current;

            expect(invalidMessages).toHaveLength(0);
        });
    });

    describe('validatorExecutor 가 1개일 때', () => {
        it('유효성 검사 통과 시, 결과값 테스트', () => {
            const validatorExecutors: TUseLabelrUiAddonInvalidMessagesExecutor[] = [
                {
                    invalidMessage: '3보다 작은값을 입력해 주세요.',
                    validator: (value: number) => {
                        return value < 3;
                    },
                },
            ];

            const {
                result,
            } = renderHook(() => useLabelrUiAddonInvalidMessages(validatorExecutors));

            act(() => result.current.checkIsValidValue(2));

            const {
                isValid,
                invalidMessages,
            } = result.current;
            expect(isValid).toBeTruthy();
            expect(invalidMessages).toHaveLength(0);
        });

        it('유효성 검사 실패 시, 결과값 테스트', () => {
            const validatorExecutors: TUseLabelrUiAddonInvalidMessagesExecutor[] = [
                {
                    invalidMessage: '3보다 작은값을 입력해 주세요.',
                    validator: (value: number) => {
                        return value < 3;
                    },
                },
            ];

            const {
                result,
            } = renderHook(() => useLabelrUiAddonInvalidMessages(validatorExecutors));

            act(() => result.current.checkIsValidValue(3));

            const {
                isValid,
                invalidMessages,
            } = result.current;
            expect(isValid).toBeFalsy();
            expect(invalidMessages).toHaveLength(1);
            expect(invalidMessages).toEqual(['3보다 작은값을 입력해 주세요.']);
        });
    });

    describe('validatorExecutor 가 2개 이상일 때', () => {
        it('유효성 검사 통과 시, 결과값 테스트', () => {
            const validatorExecutors: TUseLabelrUiAddonInvalidMessagesExecutor[] = [
                {
                    invalidMessage: '1보다 큰 수를 입력해 주세요.',
                    validator: (value: number) => {
                        return value > 1;
                    },
                },
                {
                    invalidMessage: '5보다 작은 수를 입력해 주세요.',
                    validator: (value: number) => {
                        return value < 5;
                    },
                },
                {
                    invalidMessage: '짝수를 입력해 주세요.',
                    validator: (value: number) => {
                        return value % 2 === 0;
                    },
                },
            ];

            const { 
                result 
            } = renderHook(() => useLabelrUiAddonInvalidMessages(validatorExecutors));

            act(() => result.current.checkIsValidValue(2));

            const {
                isValid,
                invalidMessages,
            } = result.current;

            expect(isValid).toBeTruthy();
            expect(invalidMessages).toHaveLength(0);
        });

        it('유효성 검사 실패 시, 결과값 테스트', () => {
            const validatorExecutors: TUseLabelrUiAddonInvalidMessagesExecutor[] = [
                {
                    invalidMessage: '1보다 큰 수를 입력해 주세요.',
                    validator: (value: number) => {
                        return value > 1;
                    },
                },
                {
                    invalidMessage: '5보다 작은 수를 입력해 주세요.',
                    validator: (value: number) => {
                        return value < 5;
                    },
                },
                {
                    invalidMessage: '짝수를 입력해 주세요.',
                    validator: (value: number) => {
                        return value % 2 === 0;
                    },
                },
            ];

            const {
                result,
            } = renderHook(() => useLabelrUiAddonInvalidMessages(validatorExecutors));

            act(() => result.current.checkIsValidValue(5));

            const {
                isValid,
                invalidMessages,
            } = result.current;

            expect(isValid).toBeFalsy();
            expect(invalidMessages).toHaveLength(2);
            expect(invalidMessages).toEqual([
                '5보다 작은 수를 입력해 주세요.',
                '짝수를 입력해 주세요.',
            ]);
        });
    });
});
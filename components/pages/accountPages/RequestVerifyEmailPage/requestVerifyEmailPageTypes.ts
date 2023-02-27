// TODO: 회원가입 인증 메일 재발송 action 가져오기
import { 
    actionRequested_ResetPassword,
} from '@/redux/slices/apiSlices/accountsApiSlice/accountsApiSlice';

export const requestVerifyEmailType = {
    SIGNUP: 'signup',
    RESET_PASSWORD: 'reset-password',
} as const;
export type TRequestVerifyEmailType = typeof requestVerifyEmailType[keyof typeof requestVerifyEmailType];

export const requestVerifyEmailTypeMapper = {
    // FIXME: Signup 인증 메일 재전송 action 만들만, 변경하기
    [requestVerifyEmailType.SIGNUP]: {
        action: actionRequested_ResetPassword,
    },
    [requestVerifyEmailType.RESET_PASSWORD]: {
        action: actionRequested_ResetPassword,
    },
} as const;

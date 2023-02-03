// react
import { 
    useCallback,
    PropsWithChildren,
} from 'react';
// icons
import {
    FiAlertCircle,
    FiX,
    FiCheckCircle,
    FaCheckCircle,
} from '@icons';
// styled-components
import styled from 'styled-components';
// type
import { 
    labelrSnackbarTypeMapper, 
    TUseLabelrSnackbarType
} from './useLabelrSnackbarTypes';

const StyledLabelrSnackbarRoot = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    white-space: pre-line;

    .iconWrapper {
        flex: 0;

        display: flex;

        color: #fff;
    }

    .content {
        flex: 1;

        color: #fff;
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
    }
`;

export type TLabelrSnackbarProps = PropsWithChildren<{
    type: TUseLabelrSnackbarType;
    close?: () => void;
}>;

function LabelrSnackbar(props: TLabelrSnackbarProps) {
    const {
        type,
        close,
        children,
    } = props;

    const renderIcon = useCallback(() => {
        switch (type) {
            case labelrSnackbarTypeMapper.SKY:
                return <FaCheckCircle size="20px" />;
            case labelrSnackbarTypeMapper.SAFE:
                return <FiCheckCircle size="20px" />;
            case labelrSnackbarTypeMapper.DANGER:
                return <FiAlertCircle size="20px" />;
        }
    }, [type]);

    return (
        <StyledLabelrSnackbarRoot>
            <div className="iconWrapper">
                {renderIcon()}
            </div>

            <div className="content">
                {children}
            </div>

            <div className="iconWrapper">
                <button onClick={close}>
                    <FiX size="20px" />
                </button>
            </div>
        </StyledLabelrSnackbarRoot>
    );
}

export default LabelrSnackbar;

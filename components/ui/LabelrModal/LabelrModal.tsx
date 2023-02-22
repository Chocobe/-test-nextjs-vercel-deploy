// react
import {
    useMemo,
    useCallback,
    memo,
    PropsWithChildren,
} from 'react';
// chakra-ui
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
// styled-components
import styled, {
    useTheme,
} from 'styled-components';

const StyledLabelrModalBody = styled.div`
    //

    .modalIconWrapper {
        margin-bottom: 8px;
    }

    .title {
        color: ${({ theme }) => theme.colors.black};
        font-size: 20px;
        line-height: 30px;
        font-weight: 700;
    }
`;

export type TLabelrModalProps = PropsWithChildren<{
    isOpen: boolean;
    onClose: () => void;
    isEnableCloseOnClickOverlay?: boolean;
    isEnableCloseOnEsc?: boolean;
    width?: string;
    title: string;
    slots?: {
        ModalIconElement?: ReactNode;
        FooterElement?: ReactNode;
        ModalBody?: ReactNode;
    };
}>;

function LabelrModal(props: TLabelrModalProps) {
    const {
        isOpen,
        onClose,
        isEnableCloseOnClickOverlay = false,
        isEnableCloseOnEsc,
        width = '360px',
        title,
        slots = {},
        children,
    } = props;

    //
    // hook
    //
    const theme = useTheme();

    //
    // cache
    //
    const ModalIcon = useMemo(() => {
        return slots.ModalIconElement;
    }, [slots.ModalIconElement]);

    const CustomModalBody = useMemo(() => {
        return slots.ModalBody;
    }, [slots.ModalBody]);

    const Footer = useMemo(() => {
        return slots.FooterElement;
    }, [slots.FooterElement]);

    //
    // renderer
    //
    const renderModalIconElement = useCallback(() => {
        return ModalIcon
            ? (
                <div className="modalIconWrapper">
                    {ModalIcon}
                </div>
            ) : null;
    }, [ModalIcon]);

    const renderModalFooter = useCallback(() => {
        return Footer
            ? (
                <ModalFooter 
                    marginTop="20px"
                    padding="0 32px 32px">
                    {Footer}
                </ModalFooter>
            ) : null;
    }, [Footer]);

    const renderModalBody = useCallback(() => {
        return CustomModalBody ? (
            <>
                {CustomModalBody}
            </>
        ) : (
            <StyledLabelrModalBody>
                <ModalHeader
                    padding="32px 32px 0"
                    textAlign="center">
                    {renderModalIconElement()}

                    <h3 className="title">
                        {title}
                    </h3>
                </ModalHeader>

                <ModalBody 
                    marginTop="8px"
                    padding="0 32px"
                    whiteSpace="pre-line"
                    textAlign="center"
                    color={theme.colors.gs[600]}
                    fontSize="13px"
                    lineHeight="20px"
                    fontWeight="400">
                    {/* {content} */}
                    {children}
                </ModalBody>

                {renderModalFooter()}
            </StyledLabelrModalBody>
        );
    }, [
        CustomModalBody, title, children, 
        theme, renderModalIconElement, renderModalFooter,
    ]);

    return (
        <Modal 
            onClose={onClose}
            isOpen={isOpen}
            isCentered
            closeOnOverlayClick={isEnableCloseOnClickOverlay}
            closeOnEsc={isEnableCloseOnEsc}>
            <ModalOverlay backgroundColor="rgba(0, 0, 0, 0.48)" />

            <ModalContent 
                width={width}
                maxWidth={width}
                borderRadius="8px"
                boxShadow="0px 8px 8px rgba(0, 0, 0, 0.12)">
                {renderModalBody()}
            </ModalContent>
        </Modal>
    );
}

export default memo(LabelrModal);

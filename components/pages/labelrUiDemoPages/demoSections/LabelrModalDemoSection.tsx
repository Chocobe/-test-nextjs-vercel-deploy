// react
import {
    useState,
    useMemo,
    useCallback,
} from 'react';
// chakra-ui
import {
    useDisclosure,
} from '@chakra-ui/react';
// UI component
import DemoSectionTemplate, {
    TDemoSectionPropItem,
} from '../DemoSectionTemplate';
import LabelrModal from '@/components/ui/LabelrModal/LabelrModal';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';
// styled-components
import styled from 'styled-components';

const StyledModalIcon = styled.span`
    font-size: 56px;
    line-height: 67px;
`;

const StyledModalFooter = styled.footer`
    width: 100%;

    display: flex;
    gap: 8px;
`;

function LabelrModalDemoSection() {
    const {
        isOpen,
        onOpen,
        onClose,
    } = useDisclosure();

    const [title, setTitle] = useState('LabelModal Title');
    const [isEnableCloseOnClickOverlay, setIsEnableCloseOnClickOverlay] = useState(false);
    const [isEnableCloseOnEsc, setIsEnableCloseOnEsc] = useState(false);
    const [children, setChildren] = useState('Modal message goes here.\nThis modal window has two buttons.');
    const [width, setWidth] = useState('360px');
    const [emoji, setEmoji] = useState('👍🏻');

    const propItems = useMemo<TDemoSectionPropItem[]>(() => [
        {
            name: 'title',
            inputElement: (
                <input
                    value={title}
                    onChange={e => setTitle(e.currentTarget.value)} />
            ),
        },
        {
            name: 'isEnalbeCloseOnClickOverlay',
            inputElement: (
                <input  
                    type="checkbox"
                    checked={isEnableCloseOnClickOverlay}
                    onChange={e => setIsEnableCloseOnClickOverlay(e.currentTarget.checked)} />
            ),
        },
        {
            name: 'isEnableCloseOnEsc',
            inputElement: (
                <input  
                    type="checkbox"
                    checked={isEnableCloseOnEsc}
                    onChange={e => setIsEnableCloseOnEsc(e.currentTarget.checked)} />
            ),
        },
        {
            name: 'children',
            inputElement: (
                <input
                    value={children}
                    onChange={e => setChildren(e.currentTarget.value)} />
            ),
        },
        {
            name: 'width',
            inputElement: (
                <input
                    value={width}
                    onChange={e => setWidth(e.currentTarget.value)} />
            ),
        },
        {
            name: 'slots.ModalIconElement',
            inputElement: (
                <input
                    value={emoji}
                    onChange={e => setEmoji(e.currentTarget.value)} />
            ),
        },
    ], [
        title, isEnableCloseOnClickOverlay, 
        isEnableCloseOnEsc, children,
        width, emoji, 
    ]);

    const onClickRightButton = useCallback(() => {
        console.log('onClick Right Button');
        onClose();
    }, [onClose]);

    const onClickLeftButton = useCallback(() => {
        console.log('onClick Left Button');
        onClose();
    }, [onClose]);

    return (
        <DemoSectionTemplate propItems={propItems}>
            <LabelrButton 
                onClick={onOpen}>
                Open Modal
            </LabelrButton>

            <LabelrModal
                isEnableCloseOnClickOverlay={isEnableCloseOnClickOverlay}
                isEnableCloseOnEsc={isEnableCloseOnEsc}
                isOpen={isOpen}
                onClose={onClose}
                title={title}
                width={width}
                slots={{
                    ModalIconElement: (
                        <StyledModalIcon>
                            {emoji}
                        </StyledModalIcon>
                    ),
                    FooterElement: (
                        <StyledModalFooter>
                            <LabelrButton 
                                onClick={onClickLeftButton}
                                variant="border"
                                fluid>
                                Left Button
                            </LabelrButton>

                            <LabelrButton 
                                onClick={onClickRightButton}
                                fluid>
                                Right Button
                            </LabelrButton>
                        </StyledModalFooter>
                    ),
                }}>
                {children}
            </LabelrModal>
        </DemoSectionTemplate>
    );
}

export default LabelrModalDemoSection;

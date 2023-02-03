// react
import {
    useState,
    useMemo,
} from 'react';
// UI components
import DemoSectionTemplate, { 
    TDemoSectionPropItem
} from '../DemoSectionTemplate';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';
import {
    useLabelrSnackbar,
} from '@/components/ui/LabelrSnackbar/useLabelrSnackbar';
// styled-components
import styled from 'styled-components';
// type
import {
    labelrSnackbarTypeMapper,
    labelrSnackbarPositionMapper,

    TUseLabelrSnackbarType,
    TUseLabelrSnackbarPosition,
} from '@/components/ui/LabelrSnackbar/useLabelrSnackbarTypes';

const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

function UseLabelrSnackbarDemoSection() {
    const [content, setContent] = useState('Hello World');
    const [type, setType] = useState<TUseLabelrSnackbarType>();
    const [position, setPosition] = useState<TUseLabelrSnackbarPosition>();
    const [duration, setDuration] = useState<number>(3000);

    const {
        openLabelrSnackbar,
    } = useLabelrSnackbar();

    const propItems = useMemo<TDemoSectionPropItem[]>(() => [
        {
            name: 'content',
            inputElement: (
                <input
                    value={content}
                    onChange={e => setContent(e.currentTarget.value)} />
            ),
        },
        {
            name: 'type',
            inputElement: (
                <select
                    value={type}
                    onChange={e => setType(e.currentTarget.value as TUseLabelrSnackbarType)}>
                    <option value={labelrSnackbarTypeMapper.SKY}>
                        sky
                    </option>

                    <option value={labelrSnackbarTypeMapper.SAFE}>
                        safe
                    </option>

                    <option value={labelrSnackbarTypeMapper.DANGER}>
                        danger
                    </option>
                </select>
            ),
        },
        {
            name: 'position',
            inputElement: (
                <select
                    value={position}
                    onChange={e => setPosition(e.currentTarget.value as TUseLabelrSnackbarPosition)}>
                    <option value={labelrSnackbarPositionMapper.TOP}>
                        top
                    </option>

                    <option value={labelrSnackbarPositionMapper.BOTTOM}>
                        bottom
                    </option>
                </select>
            ),
        },
        {
            name: 'duration',
            inputElement: (
                <input
                    type="number"
                    value={duration}
                    onChange={e => setDuration(Number(e.currentTarget.value))} />
            ),
        },
    ], [content, position, type, duration]);

    const onClickOpenSnackbar = () => {
        openLabelrSnackbar({
            content,
            type,
            position,
            duration,
        });
    };

    return (
        <DemoSectionTemplate propItems={propItems}>
            <StyledButtonWrapper>
                <LabelrButton onClick={onClickOpenSnackbar}>
                    open snackbar
                </LabelrButton>
            </StyledButtonWrapper>
        </DemoSectionTemplate>
    );
}

export default UseLabelrSnackbarDemoSection;

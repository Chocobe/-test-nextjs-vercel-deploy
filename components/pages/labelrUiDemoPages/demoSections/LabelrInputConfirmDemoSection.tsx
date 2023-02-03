// react
import {
    useState,
    useMemo,
    useCallback,
    ChangeEvent,
} from 'react';
// styled-components
import styled from 'styled-components';
// UI components
import DemoSectionTemplate from '../DemoSectionTemplate';
import LabelrInputConfirm from '@/components/ui/LabelrInputConfirm/LabelrInputConfirm';
// type
import { 
    labelrInputSizeMapper,
    TLabelrInputSize,
} from '@/components/ui/LabelrInput/labelrInputTypes';

const StyledIsValid = styled.div`
    margin-top: 20px;

    display: flex;
    gap: 8px;

    color: ${({ theme }) => theme.colors.brand[500]};
`;

function LabelrInputConfirmDemoSection() {
    const [id, setId] = useState('demoComponent');
    const [value, setValue] = useState('');
    const [targetValue, setTargetValue] = useState('');
    const [invalidMessage, setInvalidMessage] = useState('입력값과 대상값이 일치하지 않습니다.');
    const [size, setSize] = useState<TLabelrInputSize | undefined>();
    const [placeholder, setPlaceholder] = useState('동일한 값을 입력해 주세요.');
    const [isDisabled, setIsDisabled] = useState(false);
    const [isReadonly, setIsReadonly] = useState(false);
    const [fluid, setFluid] = useState(false);
    const [isEnableMasking, setIsEnableMasking] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const propItems = useMemo(() => [
        {
            name: 'id',
            inputElement: (
                <input
                    value={id}
                    onChange={e => setId(e.currentTarget.value)} />
            ),
        },
        {
            name: 'targetValue',
            inputElement: (
                <input
                    value={targetValue}
                    onChange={e => setTargetValue(e.currentTarget.value)} />
            ),
        },
        {
            name: 'invalidMessage',
            inputElement: (
                <input
                    value={invalidMessage}
                    onChange={e => setInvalidMessage(e.currentTarget.value)} />
            ),
        },
        {
            name: 'size',
            inputElement: (
                <select
                    value={size}
                    onChange={e => setSize(e.currentTarget.value as TLabelrInputSize)}>
                    <option value={labelrInputSizeMapper.SMALL}>small</option>
                    <option value={labelrInputSizeMapper.REGULAR}>regular</option>
                    <option value={labelrInputSizeMapper.LARGE}>large</option>
                </select>
            ),
        },
        {
            name: 'placeholder',
            inputElement: (
                <input
                    value={placeholder}
                    onChange={e => setPlaceholder(e.currentTarget.value)} />
            ),
        },
        {
            name: 'isDisabled',
            inputElement: (
                <input
                    type="checkbox"
                    checked={isDisabled}
                    onChange={e => setIsDisabled(e.currentTarget.checked)} />
            ),
        },
        {
            name: 'isReadonly',
            inputElement: (
                <input
                    type="checkbox"
                    checked={isReadonly}
                    onChange={e => setIsReadonly(e.currentTarget.checked)} />
            ),
        },
        {
            name: 'isEnableMasking',
            inputElement: (
                <input
                    type="checkbox"
                    checked={isEnableMasking}
                    onChange={e => setIsEnableMasking(e.currentTarget.checked)} />
            ),
        },
        {
            name: 'fluid',
            inputElement: (
                <input
                    type="checkbox"
                    checked={fluid}
                    onChange={e => setFluid(e.currentTarget.checked)} />
            ),
        },
    ], [
        id, targetValue, invalidMessage,
        size, placeholder, isDisabled,
        isReadonly, isEnableMasking, fluid,
    ]);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    const onIsValid = useCallback((isValid: boolean) => {
        setIsValid(isValid);
    }, []);

    return (
        <DemoSectionTemplate propItems={propItems}>
            <LabelrInputConfirm 
                id={id}
                value={value}
                targetValue={targetValue}
                invalidMessage={invalidMessage}
                onChange={onChange}
                onIsValid={onIsValid}
                size={size}
                placeholder={placeholder}
                isDisabled={isDisabled}
                isReadonly={isReadonly}
                isEnableMasking={isEnableMasking}
                fluid={fluid} />

            <StyledIsValid>
                isValid: {String(isValid)}
            </StyledIsValid>
        </DemoSectionTemplate>
    );
}

export default LabelrInputConfirmDemoSection;

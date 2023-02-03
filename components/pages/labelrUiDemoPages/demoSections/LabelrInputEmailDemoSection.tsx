// react
import {
    useState,
    useMemo,
    useCallback,
    ChangeEvent,
} from 'react';
// type
import { 
    labelrInputSizeMapper,

    TLabelrInputSize,
} from '@/components/ui/LabelrInput/labelrInputTypes';
// styled-components
import styled from 'styled-components';
// UI components
import DemoSectionTemplate, { 
    TDemoSectionPropItem
} from '../DemoSectionTemplate';
import LabelrInputEmail from '@/components/ui/LabelrInputEmail/LabelrInputEmail';

const StyledIsValid = styled.div`
    margin-top: 20px;

    display: flex;
    gap: 8px;

    color: ${({ theme }) => theme.colors.brand[500]};
`;

function LabelrInputEmailDemoSection() {
    const [id, setId] = useState('demoComponent');
    const [size, setSize] = useState<TLabelrInputSize | undefined>(labelrInputSizeMapper.REGULAR);
    const [value, setValue] = useState('');
    const [placeholder, setPlaceholder] = useState('Email 을 입력해주세요.');
    const [isDisabled, setIsDisabled] = useState(false);
    const [isReadonly, setIsReadonly] = useState(false);
    const [autoComplete, setAutoComplete] = useState<'off' | 'on' | undefined>();
    const [fluid, setFluid] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    const onIsValid = useCallback((isValid: boolean) => {
        setIsValid(isValid);
    }, []);

    const propItems = useMemo<TDemoSectionPropItem[]>(() => [
        {
            name: 'id',
            inputElement: (
                <input
                    value={id}
                    onChange={e => setId(e.target.value)} />
            ),
        },
        {
            name: 'size',
            inputElement: (
                <select
                    value={size}
                    onChange={e => setSize(e.target.value as TLabelrInputSize)}>
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
                    onChange={e => setPlaceholder(e.target.value)} />
            ),
        },
        {
            name: 'isDisabled',
            inputElement: (
                <input 
                    type="checkbox"
                    checked={isDisabled}
                    onChange={e => setIsDisabled(e.target.checked)} />
            ),
        },
        {
            name: 'isReadonly',
            inputElement: (
                <input 
                    type="checkbox"
                    checked={isReadonly}
                    onChange={e => setIsReadonly(e.target.checked)} />
            ),
        },
        {
            name: 'autoComplete',
            inputElement: (
                <select
                    value={autoComplete}
                    onChange={e => setAutoComplete(e.target.value as 'off' | 'on')}>
                    <option value="off">Off</option>
                    <option value="on">On</option>
                </select>
            ),
        },
        {
            name: 'fluid',
            inputElement: (
                <input 
                    type="checkbox"
                    checked={fluid}
                    onChange={e => setFluid(e.target.checked)} />
            ),
        },
    ], [
        id, size, placeholder, 
        isDisabled, isReadonly, autoComplete, 
        fluid,
    ]);

    return (
        <DemoSectionTemplate propItems={propItems}>
            <LabelrInputEmail
                id={id}
                size={size}
                value={value}
                onChange={onChange}
                onIsValid={onIsValid}
                placeholder={placeholder}
                isDisabled={isDisabled}
                isReadonly={isReadonly}
                fluid={fluid} />

            <StyledIsValid>
                isValid: {String(isValid)}
            </StyledIsValid>
        </DemoSectionTemplate>
    );
}

export default LabelrInputEmailDemoSection;
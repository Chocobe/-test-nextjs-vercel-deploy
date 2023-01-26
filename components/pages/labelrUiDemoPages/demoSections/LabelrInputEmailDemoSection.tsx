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
// UI components
import DemoSectionTemplate, { 
    TDemoSectionPropItem
} from '../DemoSectionTemplate';
import LabelrInputEmail from '@/components/ui/LabelrInputEmail/LabelrInputEmail';

function LabelrInputEmailDemoSection() {
    const [id, setId] = useState('demoComponent');
    const [size, setSize] = useState<TLabelrInputSize | undefined>(labelrInputSizeMapper.REGULAR);
    const [value, setValue] = useState('');
    const [placeholder, setPlaceholder] = useState('Email 을 입력해주세요.');
    const [isDisabled, setIsDisabled] = useState(false);
    const [isReadonly, setIsReadonly] = useState(false);
    const [autoComplete, setAutoComplete] = useState<'off' | 'on' | undefined>();
    const [fluid, setFluid] = useState(false);

    const onChange = useCallback((
        e: ChangeEvent<HTMLInputElement>, 
        resultOfValidators: {
            isValid: boolean;
            invalidMessages: string[];
        }
    ) => {
        console.clear();

        console.group('event: ');
        console.log(e);
        console.groupEnd();
        
        console.group('resultOfValidators: ');
        console.log(resultOfValidators);
        console.groupEnd();

        setValue(e.currentTarget.value);
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
                placeholder={placeholder}
                isDisabled={isDisabled}
                isReadonly={isReadonly}
                autofocus
                fluid={fluid} />
        </DemoSectionTemplate>
    );
}

export default LabelrInputEmailDemoSection;
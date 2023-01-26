// react
import {
    useState,
    useMemo,
} from 'react';
// types
import {
    labelrInputTypeMapper, 
    labelrInputSizeMapper,

    TLabelrInputType,
    TLabelrInputSize,
} from '@/components/ui/LabelrInput/labelrInputTypes';
// UI components
import DemoSectionTemplate, {
    TDemoSectionPropItem
} from '../DemoSectionTemplate';
import LabelrInput from '@/components/ui/LabelrInput/LabelrInput';
import {
    FiGithub,
    FiAnchor,
} from '@icons';

function DemoSectionForLabelrInput() {
    const [id, setId] = useState('demoComponent');
    const [type, setType] = useState<TLabelrInputType | undefined>();
    const [size, setSize] = useState<TLabelrInputSize | undefined>(labelrInputSizeMapper.REGULAR);
    const [value, setValue] = useState('');
    const [placeholder, setPlaceholder] = useState('입력해주세요.');
    const [isDisabled, setIsDisabled] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isReadonly, setIsReadonly] = useState(false);
    const [autoComplete, setAutoComplete] = useState<'off' | 'on' | undefined>();
    const [fluid, setFluid] = useState(false);
    const [isShowLeftAddonElement, setIsShowLeftAddonElement] = useState(false);
    const [isShowRightAddonElement, setIsShowRightAddonElement] = useState(false);

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
            name: 'type',
            inputElement: (
                <select
                    value={type}
                    onChange={e => setType(e.target.value as TLabelrInputType)}>
                    <option value={labelrInputTypeMapper.TEXT}>text</option>
                    <option value={labelrInputTypeMapper.EMAIL}>email</option>
                    <option value={labelrInputTypeMapper.PASSWORD}>password</option>
                </select>
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
            name: 'isInvalid',
            inputElement: (
                <input 
                    type="checkbox"
                    checked={isInvalid}
                    onChange={e => setIsInvalid(e.target.checked)} />
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
        {
            name: 'LeftAddonElement',
            inputElement: (
                <input 
                    type="checkbox"
                    checked={isShowLeftAddonElement}
                    onChange={e => setIsShowLeftAddonElement(e.target.checked)} />
            ),
        },
        {
            name: 'RightAddonElement',
            inputElement: (
                <input 
                    type="checkbox"
                    checked={isShowRightAddonElement}
                    onChange={e => setIsShowRightAddonElement(e.target.checked)} />
            ),
        },
    ], [
        id, type, size, 
        placeholder, isDisabled, isInvalid, 
        isReadonly, autoComplete, fluid,
        isShowLeftAddonElement, isShowRightAddonElement,
    ]);

    return (
        <DemoSectionTemplate propItems={propItems}>
            <LabelrInput
                id={id}
                type={type}
                size={size}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                isReadonly={isReadonly}
                autofocus
                fluid={fluid}
                autoComplete={autoComplete}
                slots={{
                    LeftAddonElement: isShowLeftAddonElement
                        ? () => <FiGithub size="14px" />
                        : null,
                    RightAddonElement: isShowRightAddonElement
                        ? () => <FiAnchor size="14px" />
                        : null,
                }}
            />
        </DemoSectionTemplate>
    );
}

export default DemoSectionForLabelrInput;
// react
import {
    useState,
} from 'react';
// styled-components
import styled from 'styled-components';
// UI components
import LabelrInput from '@/components/ui/LabelrInput/LabelrInput';
import { 
    labelrInputTypeMapper, 
    labelrInputSizeMapper,

    TLabelrInputType,
    TLabelrInputSize,
} from '@/components/ui/LabelrInput/labelrInputTypes';
import {
    FiGithub,
    FiAnchor,
} from '@icons';

const StyledDemoSectionForLabelrInput = styled.section`
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 20px;

    .componentSection {
        //
    }

    .configSection {
        //

        &-prop {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;

            &-label {
                //
            }

            & + .configSection-prop {
                margin-top: 20px;
            }
        }
    }
`;

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
    const [isShowLeftAddonElement, setIsShowLeftAddonElement] = useState(false);
    const [isShowRightAddonElement, setIsShowRightAddonElement] = useState(false);

    return (
        <StyledDemoSectionForLabelrInput>
            <div className="componentSection">
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
            </div>

            <div className="configSection">
                <div className="configSection-prop">
                    <label className="configSection-prop-label">
                        id
                    </label>
                    <input
                        value={id}
                        onChange={e => setId(e.target.value)} />
                </div>

                <div className="configSection-prop">
                    <label className="configSection-prop-label">
                        type
                    </label>
                    <select
                        value={type}
                        onChange={e => setType(e.target.value as TLabelrInputType)}>
                        <option value={labelrInputTypeMapper.TEXT}>text</option>
                        <option value={labelrInputTypeMapper.EMAIL}>email</option>
                        <option value={labelrInputTypeMapper.PASSWORD}>password</option>
                    </select>
                </div>

                <div className="configSection-prop">
                    <label className="configSection-prop-label">
                        size
                    </label>
                    <select
                        value={size}
                        onChange={e => setSize(e.target.value as TLabelrInputSize)}>
                        <option value={labelrInputSizeMapper.SMALL}>small</option>
                        <option value={labelrInputSizeMapper.REGULAR}>regular</option>
                        <option value={labelrInputSizeMapper.LARGE}>large</option>
                    </select>
                </div>

                <div className="configSection-prop">
                    <label className="configSection-prop-label">
                        placeholder
                    </label>
                    <input
                        value={placeholder}
                        onChange={e => setPlaceholder(e.target.value)} />
                </div>

                <div className="configSection-prop">
                    <label className="configSection-prop-label">
                        isDisabled
                    </label>
                    <input 
                        type="checkbox"
                        checked={isDisabled}
                        onChange={e => setIsDisabled(e.target.checked)} />
                </div>

                <div className="configSection-prop">
                    <label className="configSection-prop-label">
                        isInvalid
                    </label>
                    <input 
                        type="checkbox"
                        checked={isInvalid}
                        onChange={e => setIsInvalid(e.target.checked)} />
                </div>

                <div className="configSection-prop">
                    <label className="configSection-prop-label">
                        isReadonly
                    </label>
                    <input 
                        type="checkbox"
                        checked={isReadonly}
                        onChange={e => setIsReadonly(e.target.checked)} />
                </div>

                <div className="configSection-prop">
                    <label className="configSection-prop-label">
                        autoComplete
                    </label>
                    <select
                        value={autoComplete}
                        onChange={e => setAutoComplete(e.target.value as 'off' | 'on')}>
                        <option value="off">Off</option>
                        <option value="on">On</option>
                    </select>
                </div>

                <div className="configSection-prop">
                    <label className="configSection-prop-label">
                        좌측 아이콘 사용
                    </label>
                    <input 
                        type="checkbox"
                        checked={isShowLeftAddonElement}
                        onChange={e => setIsShowLeftAddonElement(e.target.checked)} />
                </div>

                <div className="configSection-prop">
                    <label className="configSection-prop-label">
                        우측 아이콘 사용
                    </label>
                    <input 
                        type="checkbox"
                        checked={isShowRightAddonElement}
                        onChange={e => setIsShowRightAddonElement(e.target.checked)} />
                </div>
            </div>
        </StyledDemoSectionForLabelrInput>
    );
}

export default DemoSectionForLabelrInput;
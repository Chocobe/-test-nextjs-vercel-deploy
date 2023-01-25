// react
import {
    ChangeEvent,
    useCallback,
    useState,
} from 'react';
// styled-components
import styled from 'styled-components';
// UI components
import LabelrInputPassword from '@/components/ui/LabelrInputPassword/LabelrInputPassword';
// type
import { 
    labelrInputSizeMapper,
    TLabelrInputSize,
} from '@/components/ui/LabelrInput/labelrInputTypes';

const StyledLabelrInputPasswordDemoSection = styled.section`
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

function LabelrInputPasswordDemoSection() {
    const [id, setId] = useState('demoComponent');
    const [size, setSize] = useState<TLabelrInputSize | undefined>(labelrInputSizeMapper.REGULAR);
    const [value, setValue] = useState('');
    const [placeholder, setPlaceholder] = useState('Password 를 입력해주세요.');
    const [isDisabled, setIsDisabled] = useState(false);
    const [isReadonly, setIsReadonly] = useState(false);
    const [fluid, setFluid] = useState(false);

    const onChange = useCallback((
        e: ChangeEvent<HTMLInputElement>
        // resultOfValidators: {
        //     isValid: boolean;
        //     invalidMessages: string[];
        // }
    ) => {
        setValue(e.currentTarget.value);
    }, []);

    return (
        <StyledLabelrInputPasswordDemoSection>
            <div className="componentSection">
                <LabelrInputPassword
                    id={id}
                    size={size}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    isDisabled={isDisabled}
                    isReadonly={isReadonly}
                    autofocus
                    fluid={fluid}
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
                        isReadonly
                    </label>
                    <input 
                        type="checkbox"
                        checked={isReadonly}
                        onChange={e => setIsReadonly(e.target.checked)} />
                </div>

                <div className="configSection-prop">
                    <label className="configSection-prop-label">
                        fluid
                    </label>
                    <input 
                        type="checkbox"
                        checked={fluid}
                        onChange={e => setFluid(e.target.checked)} />
                </div>
            </div>
        </StyledLabelrInputPasswordDemoSection>
    );
}

export default LabelrInputPasswordDemoSection;

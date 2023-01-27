// react
import {
    useState,
    useMemo,
    useCallback,
} from 'react';
// type
import { 
    labelrSocialButtonTypeMapper, 
    TLabelrSocialButtonType,
} from '@/components/ui/LabelrSocialButton/labelrSocialButtonTypes';
import { 
    labelrButtonSizeMapper, 
    TLabelrButtonSize,
} from '@/components/ui/LabelrButton/labelrButtonTypes';
// UI components
import DemoSectionTemplate, { 
    TDemoSectionPropItem,
} from '../DemoSectionTemplate';
import LabelrSocialButton from '@/components/ui/LabelrSocialButton/LabelrSocialButton';

function LabelrSocialButtonDemoSection() {
    // state
    const [children, setChildren] = useState('Social Button');
    const [type, setType] = 
        useState<TLabelrSocialButtonType>(labelrSocialButtonTypeMapper.GOOGLE);
    const [size, setSize] = 
        useState<TLabelrButtonSize>(labelrButtonSizeMapper.REGULAR);
    const [isDisabled, setIsDisabled] = useState(false);
    const [fluid, setFluid] = useState(false);

    // cache
    const propItems = useMemo<TDemoSectionPropItem[]>(() => [
        {
            name: 'children',
            inputElement: (
                <input
                    value={children}
                    onChange={e => setChildren(e.currentTarget.value)} />
            ),
        },
        {
            name: 'type',
            inputElement: (
                <select
                    value={type}
                    onChange={e => setType(e.currentTarget.value as TLabelrSocialButtonType)}>
                    {Object.entries(labelrSocialButtonTypeMapper).map(([key, value]) => (
                        <option 
                            key={key}
                            value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            ),
        },
        {
            name: 'size',
            inputElement: (
                <select
                    value={size}
                    onChange={e => setSize(e.currentTarget.value as TLabelrButtonSize)}>
                    {Object.entries(labelrButtonSizeMapper).map(([key, value]) => (
                        <option
                            key={key}
                            value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            ),
        },
        {
            name: 'isDisabled',
            inputElement: (
                <input
                    type="checkbox"
                    checked={isDisabled}
                    onChange={() => setIsDisabled(!isDisabled)} />
            ),
        },
        {
            name: 'fluid',
            inputElement: (
                <input
                    type="checkbox"
                    checked={fluid}
                    onChange={() => setFluid(!fluid)} />
            ),
        },
    ], [
        children, type, size,
        isDisabled, fluid,
    ]);

    // callback
    const onClick = useCallback(() => {
        console.log('onClick()');
    }, []);

    return (
        <DemoSectionTemplate propItems={propItems}>
            <LabelrSocialButton
                type={type}
                size={size}
                isDisabled={isDisabled}
                fluid={fluid}
                onClick={onClick}>
                {children}
            </LabelrSocialButton>
        </DemoSectionTemplate>
    );
}

export default LabelrSocialButtonDemoSection;
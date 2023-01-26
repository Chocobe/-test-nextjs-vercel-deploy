// react
import {
    useState,
    useMemo,
    useCallback,
} from 'react';
// UI components
import DemoSectionTemplate, {
    TDemoSectionPropItem,
} from '../DemoSectionTemplate';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';
import {
    FiMonitor,
    FiPhoneCall,
} from '@icons';
// types
import { 
    labelrButtonSizeMapper, 
    labelrButtonVariantMapper, 
    
    TLabelrButtonSize, 
    TLabelrButtonVariant
} from '@/components/ui/LabelrButton/labelrButtonTypes';

function LabelrButtonDemoSection() {
    const [variant, setVariant] = useState<TLabelrButtonVariant>(labelrButtonVariantMapper.BRAND);
    const [size, setSize] = useState<TLabelrButtonSize>(labelrButtonSizeMapper.REGULAR);
    const [isDisabled, setIsDisabled] = useState(false);
    const [fluid, setFluid] = useState(false);
    const [isShowLeftAddonElement, setIsShowLeftAddonElement] = useState(false);
    const [isShowRightAddonElement, setIsShowRightAddonElement] = useState(false);

    const propItems = useMemo<TDemoSectionPropItem[]>(() => [
        {
            name: 'variant',
            inputElement: (
                <select 
                    value={variant} 
                    onChange={e => setVariant(e.currentTarget.value as TLabelrButtonVariant)}>
                    <option value={labelrButtonVariantMapper.BRAND}>Brand</option>
                    <option value={labelrButtonVariantMapper.BLUE}>Blue</option>
                    <option value={labelrButtonVariantMapper.INDIGO}>Indigo</option>
                    <option value={labelrButtonVariantMapper.BORDER}>Border</option>
                    <option value={labelrButtonVariantMapper.BORDER_NON}>Border.Non</option>
                    <option value={labelrButtonVariantMapper.RED}>Red</option>
                    <option value={labelrButtonVariantMapper.ERROR}>Error</option>
                    <option value={labelrButtonVariantMapper.GHOST}>Ghost</option>
                </select>
            ),
        },
        {
            name: 'size',
            inputElement: (
                <select
                    value={size}
                    onChange={e => setSize(e.currentTarget.value as TLabelrButtonSize)}>
                    <option value={labelrButtonSizeMapper.SMALL}>Small</option>
                    <option value={labelrButtonSizeMapper.REGULAR}>Regular</option>
                    <option value={labelrButtonSizeMapper.LARGE}>Large</option>
                    <option value={labelrButtonSizeMapper.HUGE}>Huge</option>
                </select>
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
            name: 'fluid',
            inputElement: (
                <input
                    type="checkbox"
                    checked={fluid}
                    onChange={e => setFluid(e.currentTarget.checked)} />
            ),
        },
        {
            name: 'LeftAddonElement',
            inputElement: (
                <input
                    type="checkbox"
                    checked={isShowLeftAddonElement}
                    onChange={e => setIsShowLeftAddonElement(e.currentTarget.checked)} />
            ),
        },
        {
            name: 'RightAddonElement',
            inputElement: (
                <input
                    type="checkbox"
                    checked={isShowRightAddonElement}
                    onChange={e => setIsShowRightAddonElement(e.currentTarget.checked)} />
            ),
        },
    ], [
        variant, size, isDisabled,
        fluid,
        isShowLeftAddonElement, isShowRightAddonElement,
    ]);

    const onClick = useCallback(() => {
        console.log('onClick()');
    }, []);

    return (
        <DemoSectionTemplate propItems={propItems}>
            <LabelrButton
                size={size}
                variant={variant}
                isDisabled={isDisabled}
                fluid={fluid}
                onClick={onClick}
                slots={{
                    LeftAddonElement: isShowLeftAddonElement
                        ? () => <FiMonitor />
                        : null,
                    RightAddonElement: isShowRightAddonElement
                        ? () => <FiPhoneCall />
                        : null,
                }}>
                LabelrButton
            </LabelrButton>
        </DemoSectionTemplate>
    );
}

export default LabelrButtonDemoSection;
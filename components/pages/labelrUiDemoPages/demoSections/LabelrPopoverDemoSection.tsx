// react
import {
    useState,
    useMemo,
} from 'react';
// UI component
import LabelrPopover from '@/components/ui/LabelrPopover/LabelrPopover';
import DemoSectionTemplate, {
    TDemoSectionPropItem,
} from '../DemoSectionTemplate';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';
import { 
    TLabelrPopoverPlacement
} from '@/components/ui/LabelrPopover/labelrPopoverTypes';

function LabelrPopoverDemoSection() {
    const [padding, setPadding] = useState('8px');
    const [placement, setPlacement] = useState<TLabelrPopoverPlacement>('top');
    const [gutter, setGutter] = useState(8);
    const [label, setLabel] = useState('LabelrPopover label');
    const [color, setColor] = useState('#ffffff');
    const [fontSize, setFontSize] = useState('16');
    const [lineHeight, setLineHeight] = useState('normal');
    const [fontWeight, setFontWeight] = useState(500);
    const [backgroundColor, setBackgroundColor] = useState('#03a9f4');
    const [borderRadius, setBorderRadius] = useState('8px');

    const propItems = useMemo<TDemoSectionPropItem[]>(() => [
        {
            name: 'padding',
            inputElement: (
                <input
                    value={padding}
                    onChange={e => setPadding(e.currentTarget.value)} />
            ),
        },
        {
            name: 'placement',
            inputElement: (
                <select
                    value={placement}
                    onChange={e => setPlacement(e.currentTarget.value as TLabelrPopoverPlacement)}>
                    <option value="top">top</option>
                    <option value="bottom">bottom</option>
                    <option value="left">left</option>
                    <option value="right">right</option>
                </select>
            ),
        },
        {
            name: 'gutter',
            inputElement: (
                <input
                    type="number"
                    value={gutter}
                    onChange={e => setGutter(Number(e.currentTarget.value))} />
            ),
        },
        {
            name: 'label',
            inputElement: (
                <input
                    value={label}
                    onChange={(e) => setLabel(e.currentTarget.value)} />
            ),
        },
        {
            name: 'color',
            inputElement: (
                <input
                    type="color"
                    value={color}
                    onChange={e => setColor(e.currentTarget.value)} />
            ),
        },
        {
            name: 'fontSize',
            inputElement: (
                <input
                    value={fontSize}
                    onChange={e => setFontSize(e.currentTarget.value)} />
            ),
        },
        {
            name: 'lineHeight',
            inputElement: (
                <input
                    value={lineHeight}
                    onChange={e => setLineHeight(e.currentTarget.value)} />
            ),
        },
        {
            name: 'fontWeight',
            inputElement: (
                <input
                    type="number"
                    value={fontWeight}
                    onChange={e => setFontWeight(Number(e.currentTarget.value))} />
            ),
        },
        {
            name: 'backgroundColor',
            inputElement: (
                <input
                    type="color"
                    value={backgroundColor}
                    onChange={e => setBackgroundColor(e.currentTarget.value)} />
            ),
        },
        {
            name: 'borderRadius',
            inputElement: (
                <input
                    value={borderRadius}
                    onChange={e => setBorderRadius(e.currentTarget.value)} />
            ),
        },
    ], [
        padding, placement, gutter, 
        label, color, fontSize,
        lineHeight, fontWeight, backgroundColor,
        borderRadius,
    ]);

    return (
        <DemoSectionTemplate propItems={propItems}>
            <LabelrPopover 
                padding={padding}
                placement={placement}
                gutter={gutter}
                label={label}
                color={color}
                fontSize={fontSize}
                lineHeight={lineHeight}
                fontWeight={fontWeight}
                backgroundColor={backgroundColor}
                borderRadius={borderRadius}>
                <div style={{ display: 'inline-block' }}>
                    <LabelrButton
                        onClick={() => console.log('onClick')}>
                        Anchor Element
                    </LabelrButton>
                </div>
            </LabelrPopover>
        </DemoSectionTemplate>
    );
}

export default LabelrPopoverDemoSection;

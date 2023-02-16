// react
import { 
    ReactNode,
    useMemo, 
    useState
} from 'react';
// UI component
import DemoSectionTemplate, { TDemoSectionPropItem } from '../DemoSectionTemplate';
import LabelrDropdown from '@/components/ui/LabelrDropdown/LabelrDropdown';
import { labelrDropdownSizeMapper, TLabelrDropdownSize } from '@/components/ui/LabelrDropdown/labelrDropdownTypes';

function LabelrDropdownDemoSection() {
    const [value, setValue] = useState('value-5');
    const [isReadonly, setIsReadonly] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [ellipsisLine, setEllipsisLine] = useState(0);
    const [size, setSize] = useState<TLabelrDropdownSize>(labelrDropdownSizeMapper.REGULAR);
    const [fluid, setFluid] = useState(false);

    const propItems = useMemo<TDemoSectionPropItem[]>(() => [
        {
            name: 'size',
            inputElement: (
                <select
                    value={size}
                    onChange={e => setSize(e.currentTarget.value as TLabelrDropdownSize)}>
                    <option value={labelrDropdownSizeMapper.SMALL}>small</option>
                    <option value={labelrDropdownSizeMapper.REGULAR}>regular</option>
                    <option value={labelrDropdownSizeMapper.LARGE}>large</option>
                    <option value={labelrDropdownSizeMapper.HUGE}>huge</option>
                </select>
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
            name: 'isDisabled',
            inputElement: (
                <input
                    type="checkbox"
                    checked={isDisabled}
                    onChange={e => setIsDisabled(e.currentTarget.checked)} />
            ),
        },
        {
            name: 'ellipsisLine',
            inputElement: (
                <input
                    type="number"
                    value={ellipsisLine}
                    onChange={e => setEllipsisLine(Number(e.currentTarget.value))} />
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
        size, isReadonly, isDisabled,
        ellipsisLine, fluid,
    ]);

    const dropdownItems = useMemo<{ value: string; text: ReactNode; }[]>(() => [
        {
            value: 'value-1',
            text: 'Text Hello-1',
        },
        {
            value: 'value-2',
            text: 'Text Hello-2',
        },
        {
            value: 'value-3',
            text: 'Text Hello-3',
        },
    ], []);

    const dropdownItems2 = useMemo<{ value: string; text: ReactNode; }[]>(() => [
        {
            value: 'value-1',
            text: (
                <div style={{ padding: '8px 12px' }}>
                    <h3>Custom Element Text Title 1</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum similique eum nobis voluptates, 
                        est eligendi velit accusamus dolore nam et.
                    </p>
                </div>
            ),
        },
        {
            value: 'value-2',
            text: (
                <div style={{ padding: '8px 12px' }}>
                    <h3>Custom Element Text Title 2</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum similique eum nobis voluptates, 
                        est eligendi velit accusamus dolore nam et.
                    </p>
                </div>
            ),
        },
        {
            value: 'value-3',
            text: (
                <div style={{ padding: '8px 12px' }}>
                    <h3>Custom Element Text Title 3</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum similique eum nobis voluptates, 
                        est eligendi velit accusamus dolore nam et.
                    </p>
                </div>
            ),
        },
    ], []);

    return (
        <DemoSectionTemplate propItems={propItems}>
            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems2}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>
            
            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems2}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems2}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems2}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems2}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems2}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems2}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems2}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>

            <LabelrDropdown 
                value={value} 
                onChange={setValue}
                items={dropdownItems2}
                size={size}
                isReadonly={isReadonly} 
                isDisabled={isDisabled}
                ellipsisLine={ellipsisLine}
                fluid={fluid} />
            <h6>value: {value}</h6>
        </DemoSectionTemplate>
    );
}

export default LabelrDropdownDemoSection;

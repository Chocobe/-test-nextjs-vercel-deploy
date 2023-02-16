// react
import {
    useState,
    useMemo,
} from 'react';
// UI component
import LabelrBreadcrumb from '@/components/ui/LabelrBreadcrumb/LabelrBreadcrumb';
import DemoSectionTemplate, { 
    TDemoSectionPropItem,
} from '../DemoSectionTemplate';
// type
import { 
    TLabelrBreadcrumbItemProps,
} from '@/components/ui/LabelrBreadcrumb/LabelrBreadcrumbItem';

import { 
    RoutePathFactory
} from '@/router/RoutePathFactory';

function LabelrBreadcrumbDemoSection() {
    const [separator, setSeparator] = useState('〉');
    const [spacing, setSpacing] = useState('8px');
    
    const propItems = useMemo<TDemoSectionPropItem[]>(() => [
        {
            name: 'separator',
            inputElement: (
                <input
                    value={separator}
                    onChange={e => setSeparator(e.currentTarget.value)} />
            ),
        },
        {
            name: 'spacing',
            inputElement: (
                <input
                    value={spacing}
                    onChange={e => setSpacing(e.currentTarget.value)} />
            ),
        },
    ], [separator, spacing]);

    const breadcrumbItems = useMemo<TLabelrBreadcrumbItemProps[]>(() => [
        {
            href: RoutePathFactory.labelrUiDemo['/[demoName]']('button'),
            text: 'Labelr',
        },
        {
            href: RoutePathFactory.labelrUiDemo['/[demoName]']('input'),
            text: 'EWF(Elastic Workflow)',
        },
        {
            href: RoutePathFactory.labelrUiDemo['/[demoName]']('button'),
            text: 'Launch Workflow',
        },
        {
            href: RoutePathFactory.labelrUiDemo['/[demoName]']('button'),
            text: 'hello1',
        },
        {
            href: RoutePathFactory.labelrUiDemo['/[demoName]']('input'),
            text: 'world1',
        },
        {
            href: RoutePathFactory.labelrUiDemo['/[demoName]']('button'),
            text: 'hello2',
        },
        {
            href: RoutePathFactory.labelrUiDemo['/[demoName]']('input'),
            text: 'world2',
        },
        {
            href: RoutePathFactory.labelrUiDemo['/[demoName]']('button'),
            text: 'hello3',
        },
        {
            href: RoutePathFactory.labelrUiDemo['/[demoName]']('input'),
            text: 'world3',
        },
    ], []);

    return (
        <DemoSectionTemplate propItems={propItems}>
            <LabelrBreadcrumb 
                separator={separator}
                spacing={spacing}
                items={breadcrumbItems} />
        </DemoSectionTemplate>
    );
}

export default LabelrBreadcrumbDemoSection;

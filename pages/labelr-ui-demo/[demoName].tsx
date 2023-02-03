// react
import {
    ReactElement,
} from 'react';
// nextjs
import LabelrUiDemoPage from '@/components/pages/labelrUiDemoPages/LabelrUiDemoPage';
import DemoLayout from '@/layouts/uiLayouts/DemoLayout/DemoLayout';

function LabelrUiDemo() {
    return <LabelrUiDemoPage />;
}

LabelrUiDemo.getLayout = (page: ReactElement) => {
    return (
        <DemoLayout>
            {page}
        </DemoLayout>
    );
};

export default LabelrUiDemo;
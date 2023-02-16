// react
import {
    useEffect,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';

import { RoutePathFactory } from '@/router/RoutePathFactory';

function LabelrUiDemoIndex() {
    const router = useRouter();

    useEffect(() => {
        router.replace(RoutePathFactory.labelrUiDemo['/[demoName]']('button'));
    }, [router]);

    return null;
}

export default LabelrUiDemoIndex;

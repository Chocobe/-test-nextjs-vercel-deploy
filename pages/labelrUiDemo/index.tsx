// react
import {
    useEffect,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';

import { RoutePathFactory } from '@/router/RoutePathFactory';

function LabelrUiDemo() {
    const router = useRouter();

    useEffect(() => {
        router.replace(RoutePathFactory['/labelrUiDemo/[demoName]']('input'));
    }, [router]);

    return null;
}

export default LabelrUiDemo;
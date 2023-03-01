// react
import {
    useEffect,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
import { 
    RoutePathFactory,
} from '@/router';

function LabelrUiDemoIndex() {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            router.replace(RoutePathFactory.labelrUiDemo['/[demoName]']('button'));
        }
    }, [router]);

    return null;
}

export default LabelrUiDemoIndex;

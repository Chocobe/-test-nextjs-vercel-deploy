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

function ConsoleIndex() {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            router.replace(RoutePathFactory.console['/ewf']());
        }
    }, [router]);
}

export default ConsoleIndex;

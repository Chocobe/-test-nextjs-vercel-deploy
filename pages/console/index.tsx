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
} from '@/router/RoutePathFactory';

function ConsoleIndex() {
    const router = useRouter();

    useEffect(() => {
        router.push(RoutePathFactory.console['/ewf']());
    }, [router]);
}

export default ConsoleIndex;

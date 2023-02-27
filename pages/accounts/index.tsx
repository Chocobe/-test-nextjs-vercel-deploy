// react
import {
    useEffect,
    ReactElement,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
import { 
    RoutePathFactory
} from '@/router/RoutePathFactory';

function AccountsIndex() {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            router.replace(RoutePathFactory.accounts['/signin']());
        }
    }, [router]);
}

export default AccountsIndex;

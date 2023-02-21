// react
import {
    useEffect,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
import { RoutePathFactory } from '@/router/RoutePathFactory';

function AccountIndex() {
    const router = useRouter();

    useEffect(() => {
        router.push(RoutePathFactory.accounts['/signin']());
    }, [router]);
}

export default AccountIndex;

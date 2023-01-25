// react
import {
    useEffect,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';

import { RoutePathFactory } from '@/router/RoutePathFactory';

function Home() {
    const router = useRouter();

    // FIXME: 로그인 기능 생성 후, redirect 기능 구현 하기
    useEffect(() => {
        router.replace(RoutePathFactory['/signin']());
    }, [router]);
}

export default Home;
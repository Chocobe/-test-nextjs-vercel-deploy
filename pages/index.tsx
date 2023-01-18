// react
import {
    useEffect,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
// constants
import { ERoutePathName } from '@/components/pages/CONSTANTS/ERoutePathName';

function Home() {
    const router = useRouter();

    // FIXME: 로그인 기능 생성 후, redirect 기능 구현 하기
    useEffect(() => {
        const randomValue = Math.floor(Math.random() * 10);

        if (randomValue > 4) {
            router.push(ERoutePathName.CONSOLE);
        } else {
            router.push(ERoutePathName.SIGN_IN);
        }
    }, [router]);
}

export default Home;
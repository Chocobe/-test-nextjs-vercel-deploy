import {
    useRouter,
} from 'next/router';
import { 
    RoutePathFactory,
} from '@/router/RoutePathFactory';

function ConsoleIndex() {
    const router = useRouter();
    
    const onClickLogout = () => {
        router.push(RoutePathFactory.account['/signin']());
    };
    
    return (
        <div>
            <div>
                Console Index Page
            </div>
            <div>
                <button onClick={onClickLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default ConsoleIndex;

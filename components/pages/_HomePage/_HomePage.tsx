// FIXME: 삭제 예정
// FIXME: 삭제 예정
// FIXME: 삭제 예정

import {
    useRouter,
} from 'next/router';
// react
import {
    useEffect,
} from 'react';
// styled-components
import styled from 'styled-components';

// 테스트용 import
import MyComponent from '@/components/MyComponent/MyComponent';
import useAppDispatch from '@/redux/hooks/useAppDispatch';
import { retrieveMockUsersRequested } from '@/redux/slices/mockUsersSlice/mockUsersSlice';

import {
    ERoutePathName,
} from '../CONSTANTS/ERoutePathName';

import {
    FiActivity,
    FiAirplay,
    FiAnchor,
    FiGithub,
    FiLogOut,
    FiMonitor,
    FiPenTool,
    FiPercent,
    FiPhoneCall,
} from '@icons';

const HomePageRoot = styled.div`
    background-color: #f0f400a0;
`;

function HomePage() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    
    useEffect(() => {
        console.log('Home 의 Effect');
        
        const retrieveMockUsers = () => {
            dispatch(retrieveMockUsersRequested({
                id: 1,
            }));
        };

        retrieveMockUsers();
    }, [dispatch]);

    return (
        <HomePageRoot>
            <div>Hello Labelr Web</div>

            <div>
                <h1>Router Test</h1>
                <button onClick={() => router.push('/login')}>
                    로그인 페이지로 이동
                </button>
            </div>
            
            <div>
                <a href="#">Anchor Element</a>
            </div>

            <ul>
                <li>hello</li>
                <li>world</li>
                <li><FiActivity /></li>
            </ul>
            
            <br /><hr /><br />

            <p>#ff1493, 40px <FiActivity className="chocobe" stroke="#ff1493" strokeWidth="3px" size="40px" /></p>
            <p>#006400, 16px <FiAirplay stroke="#006400" strokeWidth="3px" size="16px" /></p>
            <p>#f0f400 <FiGithub stroke="#f0f400" strokeWidth="3px" /></p>
            <p>Hello World <FiAnchor stroke="#ff1493" strokeWidth="3px" /></p>
            <p>Hello World <FiPenTool stroke="#ff1493" strokeWidth="3px" /></p>
            <p>Hello World <FiPercent stroke="#ff1493" strokeWidth="3px" /></p>
            <p>Hello World <FiPhoneCall stroke="#ff1493" strokeWidth="3px" /></p>
            <p>Hello World <FiMonitor stroke="#ff1493" strokeWidth="3px" /></p>
            <p>Hello World <FiLogOut stroke="#ff1493" strokeWidth="3px" /></p>
            <p>Hello World</p>

            <br /><hr /><br />

            <div>
                <span style={{ fontSize: '40px' }}>Hello</span>
                <FiActivity className="chocobe" stroke="#ff1493" strokeWidth="3px" size="40px" />
                <span style={{ fontSize: '20px' }}>World</span>
            </div>
            
            <br /><hr /><br />

            <MyComponent title="Hello World" message="메시지" />
        </HomePageRoot>
    );
}

export default HomePage;
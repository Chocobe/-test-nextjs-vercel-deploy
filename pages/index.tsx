import Head from 'next/head';
import {
    useEffect,
} from 'react';
import styled from 'styled-components';
import MyComponent from '@/components/MyComponent/MyComponent';


import useAppDispatch from '@/redux/hooks/useAppDispatch';
import { retrieveMockUsersRequested } from '@/redux/slices/mockUsersSlice/mockUsersSlice';

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

const HomeRoot = styled.div`
    //
`;

function Home() {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        const retrieveMockUsers = () => {
            dispatch(retrieveMockUsersRequested({
                id: 1,
            }));
        };

        retrieveMockUsers();
    }, [dispatch]);
    
    // TODO: GET
    // useEffect(() => {
    //     const retrieveMockUser = async () => {
    //         const response = await restClient.get(
    //             'https://jsonplaceholder.typicode.com/users/1',
    //             {
    //                 myId: '아이디',
    //                 myNum: 333,
    //             }
    //         );

    //         console.log('response: ', response);
    //     };

    //     retrieveMockUser();
    // }, []);

    // TODO: POST
    // useEffect(() => {
    //     const submitUser = async () => {
    //         const response = await restClient.post(
    //             'https://jsonplaceholder.typicode.com/users',
    //             {
    //                 payload1: '111',
    //                 payload2: '222',
    //                 payload3: 'chocobe',
    //             }
    //         );

    //         console.log('response: ', response);
    //     };

    //     submitPost();
    // }, []);

    // TODO: DELETE
    // useEffect(() => {
    //     const eliminatePost = async () => {
    //         const response = await restClient.delete(
    //             'https://jsonplaceholder.typicode.com/posts/1',
    //             {
    //                 id: '123',
    //                 email: 'ywyw',
    //                 phone: '123-456-7890',
    //             }
    //         );

    //         console.log('response: ', response);
    //     };

    //     eliminatePost();
    // }, []);
    
    return (
        <>
            <Head>
                <title>Labelr Web</title>
            </Head>

            <HomeRoot>
                <div>Hello Labelr Web</div>
                <div id="1">hello</div>
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
            </HomeRoot>
        </>
    );
}

export default Home;
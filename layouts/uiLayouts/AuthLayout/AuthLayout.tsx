import {
    useState,
    useEffect,
    PropsWithChildren,
} from 'react';

function AuthLayout(props: PropsWithChildren) {
    const [randomValue, setRandomValue] = useState<number | null>(null);

    useEffect(() => {
        setRandomValue(Math.floor(Math.random() * 1000));
    }, []);
    
    return (
        <div style={{
            padding: '40px',
            width:'100%',
            height: '100vh',
            backgroundColor: '#f0a87a',
        }}>
            <div>
                <h1>Auth Layout</h1>
                <div>Auth Random Value: {randomValue}</div>
            </div>
            {props.children}
        </div>
    );
}

export default AuthLayout;
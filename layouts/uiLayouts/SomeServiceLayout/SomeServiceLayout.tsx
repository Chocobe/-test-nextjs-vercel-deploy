import {
    useState,
    useEffect,
    PropsWithChildren, 
} from 'react';

function BlankLayout(props: PropsWithChildren) {
    const [randomValue, setRandomValue] = useState<number | null>(null);
    
    useEffect(() => {
        console.log('BlankLayout 의 useEffect');
        setRandomValue(Math.floor(Math.random() * 100));
    }, []);
    
    return (
        <div
            style={{
                padding: '20px',
                width: '100%',
                height: '100vh',
                backgroundColor: '#ff149390',
            }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '20px',
                }}>
                <h1>Some Service Layout</h1>
                <p>Random Value: {randomValue}</p>
            </div>
            <div style={{ padding: '20px' }}>
                {props.children}
            </div>
        </div>
    );
}

export default BlankLayout;
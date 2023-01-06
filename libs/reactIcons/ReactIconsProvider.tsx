import { 
    CSSProperties,
    PropsWithChildren,
    memo,
} from 'react';
import { IconContext } from '@react-icons/all-files';

function ReactIconsProvider(props: PropsWithChildren) {
    const { children } = props;

    const style: CSSProperties = {
        verticalAlign: 'middle',
    };

    return (
        <>
            <IconContext.Provider value={{ style }}>
                {children}
            </IconContext.Provider>
        </>
    );
}

export default memo(ReactIconsProvider);
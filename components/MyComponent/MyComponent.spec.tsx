import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent 테스트', () => {
    it('렌더링 되었다.', () => {
        const renderMyComponent = () => {
            return (
                <MyComponent
                    title='제목'
                    message='메시지' />
            );
        };

        render(renderMyComponent());
        const title = screen.getByText('제목');
        
        expect(title).toBeInTheDocument();
    });
});
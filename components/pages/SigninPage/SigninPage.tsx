// react
import {
    useState,
    ChangeEventHandler,
} from 'react';

function SigninPage() {
    const [inputData, setInputData] = useState({
        email: '',
        password: '',
    });

    const onChange: ChangeEventHandler<HTMLInputElement> = event => {
        const { currentTarget } = event;
        const value = currentTarget.value;
        const id = currentTarget.id;

        setInputData(inputData => ({
            ...inputData,
            [id]: value,
        }));
    };

    return (
        <div>
            <h1>Signin Page</h1>
            <div>
                <div>
                    <label id="email">Email: </label>
                    <input
                        id="email"
                        value={inputData.email}
                        onChange={onChange} />
                </div>

                <div>
                    <label id="password">Password: </label>
                    <input
                        id="password"
                        value={inputData.password}
                        onChange={onChange} />
                </div>
            </div>
        </div>
    );
}

export default SigninPage;
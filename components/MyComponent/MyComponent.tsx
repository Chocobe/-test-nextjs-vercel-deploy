function MyComponent(props: {
    title: string;
    message: string;
}) {
    const {
        title,
        message,
    } = props;

    return (
        <div>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    );
}

export default MyComponent;
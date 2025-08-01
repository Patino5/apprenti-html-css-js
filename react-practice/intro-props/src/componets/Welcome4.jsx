function Welcome4({ name, ...htmlProps }) {
    return (
        <p className="blue" {...htmlProps}>Welcome {name}</p>
    )
};

export default Welcome4;
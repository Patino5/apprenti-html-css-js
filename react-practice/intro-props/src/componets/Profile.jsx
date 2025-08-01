function Profile(props) {
    return (
        <div>
            <p>Name: <strong>{props.name}</strong></p>
            <p>Age: {props.age}</p>
            <p>Premium User: {props.isPremium ? "Yes" : "No"}</p>
            <p>Interests: {props.interest.join(", ")}</p>
        </div>
    );
};

export default Profile;
function Profile2({name, age, isPremium, interest}) {
    return (
        <div>
            <p>Name: <strong>{name}</strong></p>
            <p>Age: {age}</p>
            <p>Premium User: {isPremium ? "Yes" : "No"}</p>
            <p>Interests: {interest.join(", ")}</p>
        </div>
    );
};

export default Profile2;
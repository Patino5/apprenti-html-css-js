import { users } from "../data/SampleData";

const UsersList = () => {
    return (
        <>
            <h2>Users</h2>
            {users.map(u => (
                <div key={u.id}>
                    <h3>{u.name}</h3>
                    <p>Email: {u.email}</p>
                    <p>Age: {u.age}</p>
                </div>
            ))}
        </>
    )
}

export default UsersList;
import UserCard from "./UserCard";


function UserList({ users }) {
    // filter(): remove inactive users
    const activeUsers = users.filter(user => user.active);


    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeUsers.map(user => (
                <UserCard
                    key={user.id} // Key for list rendering
                    name={user.name}
                    role={user.role}
                    bgColor="white"
                    textColor="black"
                />
            ))}
        </div>
    );
}


export default UserList;
function UserCard({ name, role, bgColor, textColor }) {
    return (
        <div
            style={{
                backgroundColor: bgColor,
                color: textColor
            }}
            className="rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        >
            <h2 className="text-lg font-bold mb-2">{name}</h2>
            <p className="text-sm text-gray-600">{role}</p>
        </div>
    );
}


export default UserCard;
import { Link } from "react-router-dom";

const contacts = [
  { id: 1, name: "Aarav Sharma" },
  { id: 2, name: "Priya Verma" },
  { id: 3, name: "Rohan Singh" },
];

export default function Contacts() {
  return (
    <div className="pt-32 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-6">Contacts</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {contacts.map((c) => (
          <Link
            key={c.id}
            to={`/contacts/${c.id}`}
            className="p-6 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <h3 className="text-xl font-medium">{c.name}</h3>
            <p className="text-gray-400 text-sm mt-2">
              Click to view details
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

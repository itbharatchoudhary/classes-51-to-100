import { useParams, Link } from "react-router-dom";

export default function ContactDetails() {
  const { id } = useParams();

  return (
    <div className="pt-32 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Contact ID: {id}
      </h2>
      <p className="text-gray-400 mb-6">
        This page is rendered using a dynamic route.
      </p>

      <Link
        to="/contacts"
        className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
      >
        Back to Contacts
      </Link>
    </div>
  );
}

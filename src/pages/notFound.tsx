import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-[#20576E] text-white rounded-lg hover:bg-[#00C9A7] transition-colors">
          Go Home
        </button>
      </Link>
    </div>
  );
}

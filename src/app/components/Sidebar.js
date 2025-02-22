import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-black text-white p-6 relative overflow-hidden">
      <h2 className="text-3xl font-semibold mb-6 flex items-center space-x-2 z-10 relative">
        <span role="img" aria-label="car-wash-icon">
          🚗
        </span>
        <span>CSR Portal</span>
      </h2>
      <nav className="space-y-4 z-10 relative">
        <Link
          href="/"
          className="block text-gray-200 hover:text-white transition duration-300"
        >
          Dashboard
        </Link>
        <Link
          href="/settings"
          className="block text-gray-200 hover:text-white transition duration-300"
        >
          Settings
        </Link>
      </nav>
    </div>
  );
}

"use client";
import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-gray-800">
              Welcome to the CSR Portal
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Manage customer accounts and subscriptions with ease.
            </p>
          </div>
        </header>
        <section>
          <UserList />
        </section>
      </div>
    </div>
  );
}

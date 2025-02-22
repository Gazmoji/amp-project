"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCheckboxChange = () => {
    openModal();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-gray-800">Settings</h1>
          <p className="text-lg text-gray-600 mt-2">
            Adjust your preferences and manage your account settings.
          </p>
        </header>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-2xl w-96 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Feature Unavailable
              </h2>
              <p className="text-gray-700">
                This feature hasn't been added yet since this is a Frontend Only
                Project! Stay tuned!
              </p>
              <div className="mt-6 text-right">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <section className="space-y-8 mt-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Notification Preferences
            </h2>
            <div className="flex items-center">
              <label
                htmlFor="email-notifications"
                className="mr-4 text-gray-700"
              >
                Email Notifications
              </label>
              <input
                type="checkbox"
                id="email-notifications"
                className="rounded"
                onChange={handleCheckboxChange}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Privacy Settings
            </h2>
            <div className="flex items-center">
              <label
                htmlFor="make-profile-public"
                className="mr-4 text-gray-700"
              >
                Make Profile Public
              </label>
              <input
                type="checkbox"
                id="make-profile-public"
                className="rounded"
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
        </section>

        <div className="mt-8 space-y-4">
          <div className="flex space-x-2">
            <button
              onClick={openModal}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Change Password
            </button>
            <button
              onClick={openModal}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { users } from "@/app/components/UserList";
import Sidebar from "@/app/components/Sidebar";

const UserDetail = () => {
  const { userId } = useParams();

  const userIndex = users.findIndex((user) => user.id === parseInt(userId));

  if (userIndex === -1) {
    return <div>User not found!</div>;
  }

  const user = users[userIndex];

  const [isEditing, setIsEditing] = useState(false);
  const [isManagingSubscriptions, setIsManagingSubscriptions] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone || "",
    carLogo: user.carLogo,
  });

  const [subscriptions, setSubscriptions] = useState(user.subscriptions);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditedUser((prev) => ({ ...prev, carLogo: imageUrl }));
    }
  };

  // Save user changes
  const handleSave = () => {
    users[userIndex] = { ...users[userIndex], ...editedUser, subscriptions };
    setIsEditing(false);
  };

  const toggleSubscriptionActive = (index) => {
    const updatedSubscriptions = [...subscriptions];
    updatedSubscriptions[index].active = !updatedSubscriptions[index].active;
    setSubscriptions(updatedSubscriptions);
  };

  const addSubscription = () => {
    const newSubscription = { name: "", active: false };
    setSubscriptions([...subscriptions, newSubscription]);
  };

  const handleSubscriptionChange = (index, e) => {
    const updatedSubscriptions = [...subscriptions];
    updatedSubscriptions[index].name = e.target.value;
    setSubscriptions(updatedSubscriptions);
  };

  const handleSaveSubscriptions = () => {
    users[userIndex] = { ...users[userIndex], subscriptions };
    setIsManagingSubscriptions(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="p-6 border border-gray-300 rounded-md bg-white shadow-lg relative">
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  This feature is not yet added since this is a Front-End only
                  project.
                </h3>
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="absolute top-4 right-4 flex items-center space-x-2">
            {isEditing && (
              <label
                htmlFor="carLogoInput"
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md cursor-pointer"
              >
                Change Car Brand
              </label>
            )}
            <img
              src={editedUser.carLogo}
              alt={`${editedUser.name}'s Car`}
              className="object-contain w-24 h-24 rounded-full border border-gray-400"
            />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="carLogoInput"
              />
            )}
          </div>

          <h2 className="text-3xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-lg text-gray-700">Email: {user.email}</p>

          {isEditing ? (
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-black"
                />
              </div>

              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-black"
                />
              </div>

              <div>
                <label className="block text-gray-600">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={editedUser.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-black"
                />
              </div>

              <div className="flex space-x-4 mt-4">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : isManagingSubscriptions ? (
            <div className="mt-4 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Manage Subscriptions:
              </h3>
              {subscriptions.map((sub, idx) => (
                <div key={idx} className="flex space-x-4 items-center">
                  <input
                    type="text"
                    value={sub.name}
                    onChange={(e) => handleSubscriptionChange(idx, e)}
                    className="w-full p-2 border border-gray-300 rounded-md text-black"
                    placeholder="Subscription Name"
                  />
                  <button
                    onClick={() => toggleSubscriptionActive(idx)}
                    className={`px-4 py-2 rounded-md ${
                      sub.active ? "bg-green-500" : "bg-red-500"
                    } text-white`}
                  >
                    {sub.active ? "Deactivate" : "Activate"}
                  </button>
                </div>
              ))}
              <div className="mt-4">
                <button
                  onClick={addSubscription}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Add New Subscription
                </button>
              </div>

              <div className="flex space-x-4 mt-4">
                <button
                  onClick={handleSaveSubscriptions}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save Subscriptions
                </button>
                <button
                  onClick={() => setIsManagingSubscriptions(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              <p className="text-gray-700">
                Phone: {user.phone || "Not Provided"}
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Subscriptions:
              </h3>
              <ul className="space-y-2">
                {user.subscriptions && user.subscriptions.length > 0 ? (
                  user.subscriptions.map((sub, idx) => (
                    <li key={idx} className="text-gray-700">
                      {sub.name} (Active: {sub.active ? "Yes" : "No"})
                    </li>
                  ))
                ) : (
                  <p>No active subscriptions</p>
                )}
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Purchase History:
              </h3>
              <ul className="space-y-2">
                {user.purchaseHistory && user.purchaseHistory.length > 0 ? (
                  user.purchaseHistory.map((purchase, idx) => (
                    <li key={idx} className="text-gray-700">
                      {purchase.item} - ${purchase.amount} (Purchased on:{" "}
                      {purchase.date})
                    </li>
                  ))
                ) : (
                  <p>No purchase history available</p>
                )}
              </ul>

              <div className="mt-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md w-full sm:w-auto"
                >
                  Edit Account Info
                </button>
                <button
                  onClick={() => setIsManagingSubscriptions(true)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md ml-2 w-full sm:w-auto"
                >
                  Manage Subscriptions
                </button>
                <button
                  onClick={openModal}
                  className="px-4 py-2 bg-red-500 text-white rounded-md ml-2 w-full sm:w-auto"
                >
                  Delete User
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

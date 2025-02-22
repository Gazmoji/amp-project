"use client";
import React, { useState } from "react";
import Link from "next/link";

export const users = [
  {
    id: 1,
    name: "Alex Smith",
    email: "ASmith123@gmail.com",
    phone: "555-123-4567",
    carLogo: "/images/car1.png",
    subscriptions: [
      { name: "Premium Plan", active: true },
      { name: "Basic Plan", active: false },
      { name: "Family Plan", active: true },
    ],
    purchaseHistory: [
      { item: "Car Wash", amount: 15.99, date: "2025-02-10" },
      { item: "Oil Change", amount: 29.99, date: "2025-01-15" },
      { item: "Tire Rotation", amount: 49.99, date: "2025-01-20" },
    ],
  },
  {
    id: 2,
    name: "Donna Martin",
    email: "donna@example.com",
    phone: "555-234-5678",
    carLogo: "/images/car2.png",
    subscriptions: [
      { name: "Basic Plan", active: true },
      { name: "Premium Plan", active: false },
    ],
    purchaseHistory: [
      { item: "Tire Replacement", amount: 120.0, date: "2025-02-05" },
      { item: "Car Wash", amount: 15.99, date: "2025-02-07" },
      { item: "Battery Replacement", amount: 189.99, date: "2025-01-10" },
    ],
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    phone: "555-345-6789",
    carLogo: "/images/car3.png",
    subscriptions: [
      { name: "Premium Plan", active: true },
      { name: "Basic Plan", active: false },
    ],
    purchaseHistory: [
      { item: "Oil Change", amount: 29.99, date: "2025-01-10" },
      { item: "Tire Rotation", amount: 49.99, date: "2025-01-12" },
      { item: "Car Wash", amount: 15.99, date: "2025-02-05" },
    ],
  },
  {
    id: 4,
    name: "Sara Davis",
    email: "sara.davis@example.com",
    phone: "555-456-7890",
    carLogo: "/images/car4.png",
    subscriptions: [
      { name: "Family Plan", active: true },
      { name: "Premium Plan", active: false },
    ],
    purchaseHistory: [
      { item: "Car Wash", amount: 15.99, date: "2025-01-25" },
      { item: "Oil Change", amount: 29.99, date: "2025-01-30" },
      { item: "Tire Replacement", amount: 120.0, date: "2025-02-02" },
    ],
  },
  {
    id: 5,
    name: "James Brown",
    email: "james.brown@example.com",
    phone: "555-567-8901",
    carLogo: "/images/car5.png",
    subscriptions: [
      { name: "Basic Plan", active: true },
      { name: "Premium Plan", active: false },
    ],
    purchaseHistory: [
      { item: "Battery Replacement", amount: 189.99, date: "2025-01-28" },
      { item: "Tire Rotation", amount: 49.99, date: "2025-02-01" },
      { item: "Car Wash", amount: 15.99, date: "2025-02-03" },
    ],
  },
  {
    id: 6,
    name: "Emily White",
    email: "emily.white@example.com",
    phone: "555-678-9012",
    carLogo: "/images/car6.png",
    subscriptions: [
      { name: "Premium Plan", active: true },
      { name: "Basic Plan", active: false },
    ],
    purchaseHistory: [
      { item: "Oil Change", amount: 29.99, date: "2025-01-20" },
      { item: "Car Wash", amount: 15.99, date: "2025-02-05" },
      { item: "Tire Rotation", amount: 49.99, date: "2025-02-06" },
    ],
  },
];

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">AMP's Users</h2>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"
      />
      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="p-4 border border-gray-300 rounded-md flex items-center bg-white shadow-lg"
          >
            <div className="w-16 h-16 mr-4">
              <img
                src={user.carLogo}
                alt={`${user.name}'s Car`}
                className="object-contain w-full h-full rounded-full"
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-xl text-gray-800">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href={`/user/${user.id}`}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

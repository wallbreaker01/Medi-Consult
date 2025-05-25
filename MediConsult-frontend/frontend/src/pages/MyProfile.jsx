import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [userData, setUserData] = useState({
    name: "Sherlock Holms",
    image: assets.profile_pic,
    email: "sherlockholms@gmail.com",
    phone: "+1  123 456 7890",
    address: {
      line1: "SWE Department, Shahjalal University of Science & Technology",
      line2: "Sylhet, Bangladesh",
    },
    gender: "Male",
    dob: "1999-01-01",
  });

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-sm">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 shadow-lg"
            src={userData.image}
            alt="Profile"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
        </div>

        {isEdit ? (
          <input
            className="bg-transparent text-3xl font-semibold text-center mt-6 border-b-2 border-blue-200 focus:border-blue-500 outline-none transition-colors"
            type="text"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={userData.name}
          />
        ) : (
          <h1 className="font-semibold text-3xl text-gray-800 mt-6 text-center">
            {userData.name}
          </h1>
        )}
      </div>

      {/* Contact Information */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-2 h-6 bg-blue-500 rounded-full mr-3"></div>
          <h2 className="text-lg font-semibold text-gray-700 tracking-wide">
            CONTACT INFORMATION
          </h2>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Email
            </span>
            <span className="text-blue-600 font-medium">{userData.email}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Phone
            </span>
            {isEdit ? (
              <input
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-right focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                value={userData.phone}
              />
            ) : (
              <span className="text-green-600 font-medium">
                {userData.phone}
              </span>
            )}
          </div>

          <div className="flex items-start justify-between">
            <span className="font-medium text-gray-600 flex items-center mt-1">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
              Address
            </span>
            {isEdit ? (
              <div className="text-right space-y-2">
                <input
                  className="bg-white border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  type="text"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  value={userData.address.line1}
                />
                <input
                  className="bg-white border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  type="text"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={userData.address.line2}
                />
              </div>
            ) : (
              <div className="text-right text-gray-600 leading-relaxed max-w-xs">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-2 h-6 bg-purple-500 rounded-full mr-3"></div>
          <h2 className="text-lg font-semibold text-gray-700 tracking-wide">
            BASIC INFORMATION
          </h2>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
              Gender
            </span>
            {isEdit ? (
              <select
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <span className="text-pink-600 font-medium">
                {userData.gender}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
              Birthday
            </span>
            {isEdit ? (
              <input
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
              />
            ) : (
              <span className="text-indigo-600 font-medium">
                {userData.dob}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Save Information</span>
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <span>Edit Profile</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;

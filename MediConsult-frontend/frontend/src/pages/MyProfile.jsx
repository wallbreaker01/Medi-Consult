import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const { token, backendUrl, userData, setUserData, loadUserProfileData } =
    useContext(AppContext);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: {
          Authorization: `Bearer ${token}`,
        }, }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return userData ? (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="relative">
              {isEdit ? (
                <label htmlFor="image" className="cursor-pointer group">
                  <div className="relative">
                    <img
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:opacity-80 transition-all"
                      src={image ? URL.createObjectURL(image) : userData.image}
                      alt="Profile"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <img
                        className="w-8 h-8"
                        src={assets.upload_icon}
                        alt="Upload"
                      />
                    </div>
                  </div>
                  <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    id="image"
                    hidden
                    accept="image/*"
                  />
                </label>
              ) : (
                <img 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg" 
                  src={userData.image} 
                  alt="Profile" 
                />
              )}
            </div>

            {/* Name and Edit Button */}
            <div className="flex-1 text-center md:text-left">
              {isEdit ? (
                <input
                  className="bg-white/20 backdrop-blur-sm text-white text-4xl font-bold placeholder-white/70 border-2 border-white/30 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:border-white"
                  type="text"
                  placeholder="Your name"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  value={userData.name}
                />
              ) : (
                <h1 className="text-4xl font-bold mb-2">{userData.name}</h1>
              )}
              
              <div className="mt-6">
                {isEdit ? (
                  <div className="flex gap-3">
                    <button
                      onClick={updateUserProfileData}
                      className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => {
                        setIsEdit(false);
                        setImage(false);
                      }}
                      className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold border-2 border-white/30 hover:bg-white/30 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsEdit(true)}
                    className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold border-2 border-white/30 hover:bg-white/30 transition-all transform hover:scale-105"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-1">Email</label>
                  <p className="text-gray-800 bg-white p-3 rounded-lg border">{userData.email}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-1">Phone</label>
                  {isEdit ? (
                    <input
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      type="tel"
                      placeholder="Phone number"
                      onChange={(e) =>
                        setUserData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      value={userData.phone}
                    />
                  ) : (
                    <p className="text-gray-800 bg-white p-3 rounded-lg border">{userData.phone}</p>
                  )}
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-1">Address</label>
                  {isEdit ? (
                    <div className="space-y-2">
                      <input
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        type="text"
                        placeholder="Address line 1"
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            address: { ...prev.address, line1: e.target.value },
                          }))
                        }
                        value={userData.address.line1}
                      />
                      <input
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        type="text"
                        placeholder="Address line 2"
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
                    <div className="text-gray-800 bg-white p-3 rounded-lg border">
                      <p>{userData.address.line1}</p>
                      <p>{userData.address.line2}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Basic Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-1">Gender</label>
                  {isEdit ? (
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                      onChange={(e) =>
                        setUserData((prev) => ({ ...prev, gender: e.target.value }))
                      }
                      value={userData.gender}
                    >
                      <option value="Not Selected">Not Selected</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : (
                    <p className="text-gray-800 bg-white p-3 rounded-lg border">{userData.gender}</p>
                  )}
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-1">Date of Birth</label>
                  {isEdit ? (
                    <input
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      type="date"
                      onChange={(e) =>
                        setUserData((prev) => ({ ...prev, dob: e.target.value }))
                      }
                      value={userData.dob}
                    />
                  ) : (
                    <p className="text-gray-800 bg-white p-3 rounded-lg border">{userData.dob}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default MyProfile;

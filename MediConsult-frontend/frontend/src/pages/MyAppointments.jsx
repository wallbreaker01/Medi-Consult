import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          My Appointments
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </div>

      <div className="space-y-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      className="w-32 h-32 rounded-xl object-cover shadow-md"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {item.speciality}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        📍 Address:
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.address.line1}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.address.line2}
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        🗓️ Appointment Details:
                      </p>
                      <p className="text-sm text-gray-800 font-medium">
                        25, July, 2024 | 8:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 lg:min-w-[200px]">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                    💳 Pay Online
                  </button>
                  <button className="px-6 py-3 bg-white text-red-600 font-medium rounded-lg border-2 border-red-200 hover:bg-red-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                    ❌ Cancel Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;

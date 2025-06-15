import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

function InfoForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentDate = new Date();
  const date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 1
  );
  const formattedDate = date.toISOString().split("T")[0];
  
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    address: "",
    height: "",
    weight: "",
    diseases: {
      anemia: false,
      emotionalDisorder: false,
      heartDisease: false,
      kidneyDisease: false,
      asthma: false,
      cancer: false,
      diabetes: false,
      highBloodPressure: false,
      hepatitis: false,
      tuberculosis: false,
    },
    datetime: formattedDate,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        diseases: {
          ...formData.diseases,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    dispatch({ type: 'UPDATE_USER', payload: {
      name: data.get('name'),
      age: data.get('age'),
      gender: data.get('gender'),
      bloodGroup: data.get('bloodGroup'),
      address: data.get('address'),
      phone: data.get("phone"),
      height: data.get("height"),
      weight: data.get("weight"),
    }});
    navigate("/chat");
  };

  return (
    <div className="max-w-[600px] mx-auto p-5 border border-gray-300 rounded-md">
      <h2 className="text-center text-3xl font-bold text-[#19392e] mb-5">General Information</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* Name */}
        <div>
          <label className="font-bold text-[#19392e] block mb-1">
            Full Name: <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-base"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label className="font-bold text-[#19392e] block mb-1">
            Age: <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 h-10 border border-[#19392e] rounded-md"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="font-bold text-[#19392e] block mb-1">
            Gender: <span className="text-red-600">*</span>
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-2/5 p-2 h-10 border border-[#19392e] rounded-md bg-transparent"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Blood Group */}
        <div>
          <label className="font-bold text-[#19392e] block mb-1">
            Blood Group: <span className="text-red-600">*</span>
          </label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-2/5 p-2 h-10 border border-[#19392e] rounded-md bg-transparent"
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Phone */}
        <div>
          <label className="font-bold text-[#19392e] block mb-1">
            Phone No: <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-base"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="font-bold text-[#19392e] block mb-1">
            Address: <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-base"
            required
          />
        </div>

        {/* Height */}
        <div>
          <label className="font-bold text-[#19392e] block mb-1">
            Height (cm):
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="w-full p-2 h-10 border border-[#19392e] rounded-md"
          />
        </div>

        {/* Weight */}
        <div>
          <label className="font-bold text-[#19392e] block mb-1">
            Weight (kg):
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full p-2 h-10 border border-[#19392e] rounded-md"
          />
        </div>

        {/* Diseases Checkboxes */}
        <div>
          <h3 className="font-bold text-[#19392e] my-4">
            Have you ever had (please check all that apply):
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anemia"
                  name="anemia"
                  checked={formData.diseases.anemia}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-[#19392e] border-gray-300 rounded"
                />
                <label htmlFor="anemia">Anemia</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emotionalDisorder"
                  name="emotionalDisorder"
                  checked={formData.diseases.emotionalDisorder}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-[#19392e] border-gray-300 rounded"
                />
                <label htmlFor="emotionalDisorder">Emotional Disorder</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="heartDisease"
                  name="heartDisease"
                  checked={formData.diseases.heartDisease}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-[#19392e] border-gray-300 rounded"
                />
                <label htmlFor="heartDisease">Heart Disease</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="kidneyDisease"
                  name="kidneyDisease"
                  checked={formData.diseases.kidneyDisease}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-[#19392e] border-gray-300 rounded"
                />
                <label htmlFor="kidneyDisease">Kidney Disease</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="asthma"
                  name="asthma"
                  checked={formData.diseases.asthma}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-[#19392e] border-gray-300 rounded"
                />
                <label htmlFor="asthma">Asthma</label>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cancer"
                  name="cancer"
                  checked={formData.diseases.cancer}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-[#19392e] border-gray-300 rounded"
                />
                <label htmlFor="cancer">Cancer</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="diabetes"
                  name="diabetes"
                  checked={formData.diseases.diabetes}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-[#19392e] border-gray-300 rounded"
                />
                <label htmlFor="diabetes">Diabetes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="highBloodPressure"
                  name="highBloodPressure"
                  checked={formData.diseases.highBloodPressure}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-[#19392e] border-gray-300 rounded"
                />
                <label htmlFor="highBloodPressure">High Blood Pressure</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hepatitis"
                  name="hepatitis"
                  checked={formData.diseases.hepatitis}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-[#19392e] border-gray-300 rounded"
                />
                <label htmlFor="hepatitis">Hepatitis</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="tuberculosis"
                  name="tuberculosis"
                  checked={formData.diseases.tuberculosis}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-[#19392e] border-gray-300 rounded"
                />
                <label htmlFor="tuberculosis">Tuberculosis</label>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 mt-6">
          <button
            type="submit"
            className="w-full py-2.5 px-5 rounded-md bg-[#19392e] text-white text-base cursor-pointer border border-[#19392e] hover:bg-white hover:text-[#19392e] transition-colors duration-200"
          >
            Proceed to Chat
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full py-2.5 px-5 rounded-md bg-white text-[#19392e] text-base cursor-pointer border border-[#19392e] hover:bg-[#19392e] hover:text-white transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default InfoForm;
import React, { useState } from "react";
import AxiosInstance2 from "../Api/AxiosInstance2";

const EditForm = ({ editData, setEditMode, fetchAPI }) => {
  const [formData, setFormData] = useState(editData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = (e) => {
    e.preventDefault(); 
    AxiosInstance2.put(`/address/${formData.id}`, formData)
      .then((response) => {
        alert("Address is Updated");
        console.log("Updated:", response.data);
        setEditMode(false); 
        fetchAPI(); 
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <div className="bg-cyan-100 shadow min-h-screen flex items-center justify-center">
      <div className="p-10 w-[30vw] h-auto bg-white border rounded-md shadow-lg">
        <form onSubmit={saveEdit} className="space-y-6"> 
          <h2 className="text-xl font-bold text-center text-red-600 uppercase tracking-wide">
            Update Address
          </h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="ename"
              value={formData.ename}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2 rounded shadow hover:border-blue-500"/>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-2 rounded shadow hover:border-blue-500"/>

            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              className="border p-2 rounded shadow hover:border-blue-500"/>

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="border p-2 rounded shadow hover:border-blue-500"/>

            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="border p-2 rounded shadow hover:border-blue-500"/>

            <div className="flex space-x-4 justify-center">
              <button
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Update & Save
              </button>
              
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;

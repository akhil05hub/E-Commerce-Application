import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AxiosInstance2 from '../Api/AxiosInstance2';
import Aklogo from '../../src/assets/aklogo.png';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import EditForm from '../Crud/EditForm';
import AddNewAddress from './AddNewAddress';

const BuyAddress = () => {
  const [state, setState] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [addNewAddressMode, setAddNewAddressMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const navigate = useNavigate();

  const fetchAPI = () => {
    AxiosInstance2.get("/address")
      .then((response) => {
        console.log(response.data);
        setState(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const deletedata = async (id) => {
    await AxiosInstance2.delete(`/address/${id}`);
    setState((prev) => prev.filter((obj) => obj.id !== id));
    alert("Address is Deleted");
    fetchAPI();
  };

  const handleEdit = (address) => {
    setEditData(address);
    setEditMode(true);
    setAddNewAddressMode(false);
  };

  const handleAddNewAddress = () => {
    setAddNewAddressMode(true);
    setEditMode(false);
  };

  const handleDeliverHere = (id) => {
    const selectedAddress = state.find((address) => address.id === id);
    if (selectedAddress) {
      navigate("/deliverhere", { state: { address: selectedAddress } });
    }
  };

  return (
    <div>
      <div className="bg-blue-600 p-5 text-white text-center shadow-md">
        <div className="flex items-center w-[25%]">
          <Link to="/" className="flex items-center">
            <img src={Aklogo} alt="Aklogo" className="w-18 h-12 mr-1 ml-16" />
            <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-purple-800 to-blue-900 text-transparent bg-clip-text">FASHIONS</span>
          </Link>
        </div>
      </div>

      {!editMode && !addNewAddressMode && (
        <div className="flex justify-center items-center py-5 bg-gray-100 border-b shadow-md mb-3 border border-gray-300">
          <button 
            className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            onClick={handleAddNewAddress}>
            <AiOutlinePlus className="mr-2" size={24} />
            <span className="text-xl font-semibold">Add New Address</span>
          </button>
        </div>
      )}

      {editMode ? (
        <EditForm
          editData={editData}
          setEditMode={setEditMode}
          fetchAPI={fetchAPI}/>
      ) : addNewAddressMode ? (
        <AddNewAddress
          setEditMode={setEditMode}
          fetchAPI={fetchAPI}/>
      ) : (
        state.map(({ id, ename, email, mobile, address, pincode }) => (
          <div key={id} className="border border-gray-300 p-10 gap-10 flex items-center shadow-lg bg-gray-100 rounded-lg mb-4">
            <input type="radio" name="address" className="mt-2 scale-150" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{ename}</h3>
              <span className="block text-gray-600">{email}</span>
              <p className="text-gray-700">{mobile}</p>
              <p className="text-gray-700">{address}</p>
              <p className="text-gray-700">{pincode}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => deletedata(id)}
                className="flex items-center justify-center px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-700 transition font-bold">
                Delete <MdDelete className="ml-2" />
              </button>
              <button
                onClick={() => handleEdit({ id, ename, email, mobile, address, pincode })}
                className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition font-bold">
                Edit <CiEdit className="ml-2" />
              </button>
              <button
                onClick={() => handleDeliverHere(id)}
                className="flex items-center justify-center px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-green-600 transition font-bold">
                Deliver Here <FaTruck className="ml-2" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BuyAddress;









import { AppContext } from '../context/AppContext';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
    const { doctors } = useContext(AppContext);
    const navigate = useNavigate();
    const [relDocs, setRelDocs] = useState([]);

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter(
                (doc) => doc.speciality === speciality && doc._id !== docId
            );
            setRelDocs(doctorsData);
        }
    }, [doctors, speciality, docId]);

    return (
        <div className="flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-semibold">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-gray-600">
        Browse through our list of highly trusted medical professionals.
      </p>

      {/* Grid Layout with Better Alignment */}
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-6 pt-5 px-3 sm:px-0">
        {relDocs.slice(0, 5).map((item, index) => (
          <div
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            key={index}
          >
            {/* Doctor Image with Proper Box Layout */}
            <div onClick={() =>{ navigate(`/appointment/${item._id}`);scrollTo(0,0)} }className="w-full h-100 bg-gray-100 flex items-center justify-center gap-9">
              <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
            </div>

            {/* Doctor Details */}
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>
              <p className=" mt-2 text-lg font-semibold text-gray-900">{item.name}</p>
              <p className="text-gray-600 text-sm ">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}}className="px-5 py-2 mt-6 text-white  bg-[#4499dd] rounded-lg shadow-md hover: bg-[#4499dd] transition">
        More
      </button>
    </div>
    );
};

export default RelatedDoctors;

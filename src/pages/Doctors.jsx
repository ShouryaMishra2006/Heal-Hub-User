import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter,setShowFilter]=useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctor's specialists.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white':''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
        {/* Speciality List */}
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex':'hidden sm:flex'}`}>
          {['General Physician', 'Gynecologist', 'Dermatologist', 'Pediatrician', 'Neurologist', 'Gastroenterologist','Cardiologist','Orthopedic','ENT','Ophthalmologist','Urologist','Dentist','Oncologist','Psychiatrist'].map((spec) => (
            <p
              key={spec}
              onClick={() => navigate(speciality === spec ? '/doctors' : `/doctors/${spec}`)}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === spec ? 'bg-indigo-100 text-black' : ''
              }`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctor List */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105'
            >
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='w-full h-100 bg-gray-100 flex items-center justify-center gap-9'>
                <img className='w-full h-full object-cover' src={item.image} alt={item.name} />
              </div>

              <div className='p-4 text-center'>
                <div className='flex items-center justify-center gap-2 text-sm text-green-500'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                  <p>Available</p>
                </div>
                <p className='mt-2 text-lg font-semibold text-gray-900'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
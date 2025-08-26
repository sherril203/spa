import React from 'react';
import massage from '../assets/massage.jpg';
import { Link } from 'react-router-dom';

const Massage = () => {
  const service = [{ name: "Massage", image: massage, amount: 1000 }];

  return (
    <div className='bg-emerald-300 p-3'>
      <div className='flex flex-col gap-2 bg-white'>
        {service.map((items, index) => {
          return (
            <div key={index} className='border p-4 rounded shadow w-full sm:w-80'>
              <div>
                <img src={items.image} alt={items.name} style={{ width: '200px', height: 'auto' }} />
              </div>
              <div>{items.name}</div>
              <div>₹{items.amount}</div>
              <button className='bg-amber-500 p-3 rounded'>
                <Link to="/book-appointment">Book Now</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Massage;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createFirstName, createLastName } from '../store/userSlice';
import { firstName, lastName } from '../store/userSlice';

const User = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.userSlice.firstName);
  const lastName = useSelector((state) => state.userSlice.lastName);
  return (
    <div className="flex flex-col">
      <input
        onChange={(e) => dispatch(createFirstName(e.target.value))}
        type="text"
        placeholder="First Name"
        className="w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
      />
      <input
        onChange={(e) => dispatch(createLastName(e.target.value))}
        type="text"
        placeholder="Second Name"
        className="w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
      />
      <div className="flex gap-20 py-5">
        <div className="flex flex-col">
          <div className="flex font-light">First Name:</div>
          <div className="flex">
            <div className="font-bold">{firstName}</div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex font-light">Last Name:</div>
          <div className="flex">
            <div className="font-bold">{lastName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

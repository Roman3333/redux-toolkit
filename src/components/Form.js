import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import { createToDo } from '../store/toDosSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const sendToDo = () => {
    const toDo = {
      message,
      completed: false,
      id: v4(),
    };
    dispatch(createToDo(toDo));
    setMessage('');
  };

  return (
    <form className="w-full flex" onSubmit={(e) => e.preventDefault()}>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Type something..."
        className="w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
      />
      <button
        onClick={sendToDo}
        type="submit"
        className="shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm">
        Submit
      </button>
    </form>
  );
};

export default Form;

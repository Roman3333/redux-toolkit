import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo, toogleToDo } from '../store/toDosSlice';

const TodoItem = ({ toDo }) => {
  const dispatch = useDispatch();

  const toogleToDoHandler = (id) => {
    dispatch(toogleToDo(id));
  };

  const deleteToDoHandler = (id) => {
    dispatch(deleteToDo(id));
  };

  return (
    <div className="flex justify-between items-center my-2">
      <div
        className="text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400"
        onClick={() => toogleToDoHandler(toDo.id)}>
        Complete
      </div>
      <div className={`text-sm ${toDo.completed ? 'line-through font-medium text-lime-400' : ''}`}>
        {toDo.message}
      </div>
      <div
        className="text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer"
        onClick={() => deleteToDoHandler(toDo.id)}>
        Delete
      </div>
    </div>
  );
};

export default TodoItem;

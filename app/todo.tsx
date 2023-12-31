'use client';

import React from 'react';
import AddTodo from '../Components/AddTodo';
import { useState } from 'react';
import { makeTodo } from '@/types';

const InputTodo = ({ inputresult }: makeTodo) => {
  const [todos, setTodos] = useState(['']);
  const [newTodo, setNewTodo] = useState('');

  const makeTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <form
        id="form"
        action=""
        className="flex flex-col gap-5 mx-auto max-w-xl "
      >
        <input
          type="text"
          name="inputField"
          className="border border-black p-2 rounded-md outline-offset-0"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className=" bg-blue-600 border rounded-md p-1 text-gray-100 border-black mb-10"
          onClick={makeTodo}
          type="button"
        >
          Add
        </button>
      </form>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <div key={index}>
              {/* <h3 className=" text-gray-100 mt-15 ml-10 text-xl font-semibold">
              {todo}
            </h3> */}

              <li className=" text-gray-100 mt-15 ml-5 text-xl font-semibold">
                {todo}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputTodo;

'use client';

import { addTodo } from '@/types';
import React from 'react';

const AddTodo = ({ title, handleClick, buttonstyle }: addTodo) => {
  return (
    <div className="bg-slate-700 flex flex-col">
      <button
        type="button"
        onClick={() => {
          handleClick;
        }}
        className={buttonstyle}
      >
        {title}
      </button>
    </div>
  );
};

export default AddTodo;

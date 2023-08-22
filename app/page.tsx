import Image from 'next/image';

import AddTodo from '../Components/AddTodo';
import InputTodo from './todo';

export default function Home() {
  return (
    <div className="bg-slate-700 flex flex-col">
      <h1 className=" text-center mb-5 mt-5 text-5xl font-bold font-serif text-slate-100">
        Make a todo
      </h1>
      <InputTodo />
    </div>
  );
}

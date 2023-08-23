import Image from 'next/image';

import AddTodo from '../Components/AddTodo';
import InputTodo from './todo';

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className=" text-center mb-5 mt-5 text-5xl font-bold font-serif text-slate-100 mr-5 ml-5">
        Make a Reminder
      </h1>
      <InputTodo />
    </div>
  );
}

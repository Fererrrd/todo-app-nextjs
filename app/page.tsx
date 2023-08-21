import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-slate-700 flex flex-col">
      <h1 className=" text-center mb-5 mt-5 text-5xl font-bold font-serif text-slate-100">
        Make a todo
      </h1>
      <form action="" className="flex flex-col gap-5 mx-auto max-w-xl">
        <input
          type="text"
          className="border border-black p-2 rounded-md outline-offset-0"
        />
        <button className=" bg-blue-600 border rounded-md p-1 text-gray-100 border-black mb-10">
          Add
        </button>
      </form>
    </main>
  );
}

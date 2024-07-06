'use client';
import MemCard from "./MemCard";

 export default function  MemList({memList}) {
  return (
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full z-10">
         <div className="flex p-8 flex-col items-center justify-between text-3xl overflow-hidden">
      <h2>Głosuj już dziś i</h2>
      <p>graj o Fiata 126p oraz zestaw modnych firanek</p>
    </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {memList && memList.length > 0
            ? memList.map((mem) => (
                <MemCard
                  mem={mem}
                  key={mem.title}
                />
              ))
            : null}
        </div>
      </div>
  );
}

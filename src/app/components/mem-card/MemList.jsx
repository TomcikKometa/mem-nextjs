
import MemCard  from "./mem-card/MemCard"


export default function MemList({ memList , addToHotList}) {


  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full z-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 flex justify-center">
        Twoja memowa lista  przebojów 
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {memList && memList.length > 0
          ? memList.map((mem) => (
              <MemCard  mem={mem} key={mem.title} addToHotList={addToHotList}/>
            ))
          : null}
      </div>
    </div>
  );
}
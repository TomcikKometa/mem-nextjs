"use client";
import MemCard from "./MemCard";
import { useSelector, useStore } from "react-redux";
import { usePathname } from "next/navigation";

export default function MemList({ textDataTwo, textDataOne }) {
  let memsState = [];
  const showMemList = useSelector((state) => state.memRootReducer);
  const pathname = usePathname();
  
  if (pathname === "/pages/regular") {
    memsState = showMemList.stateList.stateList.regular;
  }
  if (pathname === "/pages/all") {
    console.log(showMemList);
    memsState = showMemList.stateList.all;
  }
  if (pathname === "/pages/hot") {
    memsState = showMemList.stateList.stateList.hot;
  }

  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full z-10">
      <div className="flex p-8 flex-col items-center justify-between text-3xl overflow-hidden">
        <h2>{textDataOne}</h2>
        <p>{textDataTwo}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {memsState && memsState.length > 0
          ? memsState.map((mem) => <MemCard mem={mem} key={mem.title} />)
          : null}
      </div>
    </div>
  );
}

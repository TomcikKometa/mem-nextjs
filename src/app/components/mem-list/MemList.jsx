"use client";
import MemCard from "../mem-card/MemCard";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

export default function MemList({ textDataTwo, textDataOne }) {
  const memsState = useSelector((state) => state.mems.all);
  const pathname = usePathname();

  console.log(memsState)

  let filteredMems = [];
  if (pathname === "/pages/regular") {
    filteredMems = memsState.filter((mem) => mem.upvotes - mem.downvotes <= 4);
  } else if (pathname === "/pages/hot") {
    filteredMems = memsState.filter((mem) => mem.upvotes - mem.downvotes > 4);
  } else if (pathname === "/pages/all") {
    filteredMems = memsState;
  }

  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full z-10">
      <div className="flex p-8 flex-col items-center justify-between text-3xl overflow-hidden">
        <p className="text-4xl mb-4">{textDataOne}</p>
        <p>{textDataTwo}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMems && filteredMems.length > 0
          ? filteredMems.map((mem) => <MemCard mem={mem} key={mem.id} />)
          : null}
      </div>
    </div>
  );
}
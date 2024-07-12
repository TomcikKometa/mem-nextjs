'use client';
import Image from "next/image";
import { useSelector } from "react-redux";

 export default function Home() {

  const showMemList = useSelector((state) => state);
  // console.log(showMemList)

  return (
    <main className="flex p-8 flex-col items-center justify-between text-4xl overflow-hidden text-center">
      <p>Witaj <br/> w MEMS_not_TO_#LOL</p>
      <Image
                      src="/face-pack-person-svgrepo-com.svg"
                      alt="Picture of the author"
                      width={350}
                      height={350}
                      className="object-cover object-top rounded-sm img_shadow mt-10 pt-10 p-2"
                    />
    </main>
  );
}

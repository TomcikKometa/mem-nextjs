import Image from "next/image";

 export default function Home() {
  return (
    <main className="flex p-8 flex-col items-center justify-between text-5xl overflow-hidden">
      <p>Witaj w aplikacji do głosownia na ulubione memy</p>
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

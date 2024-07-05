import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex p-8 flex-col items-center justify-between text-7xl overflow-hidden">
      <h2>Chociaż się staraliśmy</h2>
      <p>nie znaleźliśmy zasobu którego szukasz</p>
      <Image
        src="/file-broken-svgrepo-com.svg"
        alt="Picture of the author"
        width={350}
        height={350}
        className="object-cover object-top rounded-sm img_shadow mt-4 p-2"
      />
      <Link href="/"  className="hover:text-orange-300 rounded-lg flex align-middle pb-4">Nie rób draki - wróć spokojnie na główną</Link>
    </div>
  );
}

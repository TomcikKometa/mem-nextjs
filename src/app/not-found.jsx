import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex p-8 flex-col items-center justify-between text-3xl overflow-hidden">
      <p className="text-5xl">Nie znaleziono strony - błąd 404 </p>
      <h2>Chociaż się staraliśmy,</h2>
      <p>nie znaleźliśmy zasobu którego szukasz</p>
      <div className="img_shadow mt-2">
        <Image
          src="/file-broken-svgrepo-com.svg"
          alt="Picture of the author"
          width={350}
          height={350}
          className="object-cover object-top rounded-sm text-center"
        />
        <Link
          href="/"
          className="hover:text-orange-300 rounded-lg flex align-middle pb-4 mt-3 text-center hover:bg-emerald-900 p-4"
        >
          Nie wachaj wrócić się na stronę główną
          <br />
          Wciąż jesteś w grze o Fiata 126p
          <br />
          oraz firanki
        </Link>
      </div>
    </div>
  );
}

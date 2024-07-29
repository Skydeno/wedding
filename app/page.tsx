import Banner from "./components/Banner";
import Tile from "./components/Tile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 pb-12">
      <Banner />
      <div
        className={`w-4/5 md:w-3/5 flex flex-col gap-12 md:flex-row md:justify-center`}
      >
        <Tile
          title="Sprawy organizacyjne"
          className="bg-mrmrs bg-center"
          href="/organization"
        />
        <Tile
          title="Album Ślubny"
          className="bg-photos bg-center"
          href="/photos"
        />
      </div>
    </main>
  );
}

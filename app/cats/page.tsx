import { CatProps } from "@/types/CatProps";
import getCats from "@/ssr/GetCats";

export default async function CatPage() {
    const cats: CatProps[] = await getCats();

    return (
        <main className="bg-[#FFA5AB] min-h-screen text-[#450920] font-sans text-center p-6">

            <h1 className="text-3xl font-bold mb-6">
                Here are 10 Bengal Cats
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {cats.map((cat) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    key={cat.id}
                    src={cat.url}
                    alt="Bengal Cat" />))}
            </div>

        </main>
    );
}
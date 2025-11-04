

export default function Home() {
  return (
        <div className="flex flex-col justify-center items-center bg-[#FFA5AB] text-[#450920] p-6 font-sans text-center h-screen">
            <h1 className="text-3xl font-bold mb-2">
                Welcome to my Cat App
            </h1>
            <p className="text-lg font-medium">
                This app fetches real Bengal cat images using
                <br />
                <a className="underline" href="https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t">The Cat API.</a>
            </p>
            <br />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpt2-MMbTrFWvCJIxi2gPABC65sURDUh-D4IFn5GLAmmhH485jFlAqMKiyagus-Ry_-kdNqtuSC7HqtB1Kiy2MY5WnXebKEtV_aEvw4A&s=10"
                alt="Bengal Cat"
                className="w-80 h-80 object-cover rounded-2xl shadow-md border-4 border-[#450920] mb-8"
            />
            <p>
                Bengal cats are super active and playful, known for their beautiful leopard-like spots
                and sleek coats. They are smart, curious, and love to climb or explore pretty much
                anything around them. Despite their wild look, Bengals are friendly and affectionate,
                often forming close bonds with their owners. They even enjoy playing in water!
            </p>

        </div>
  );
}

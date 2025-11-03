

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
                <br />
                The internet always needs more cats.
            </p>
        </div>
  );
}

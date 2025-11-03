

export default function Home() {
  return (
        <div className="flex flex-col justify-center items-center bg-[#FFA5AB] text-[#450920] p-6 font-sans text-center h-screen">
            <h1 className="text-3xl font-bold mb-2">
                Welcome to my Cat App
            </h1>
            <p className="text-lg font-medium">
                This app fetches real Bengal cat images using The Cat API. The internet always needs more cats.
            </p>
        </div>
  );
}

import Link from "next/link";

export default function Header(){
    const lineStyling = "px-3 py-1 text-[#F9DBBD] text-lg font-medium hover:underline hover:text-[#FFA5AB] transition-colors";
    return(
        <header className="bg-[#450920] text-[#F9DBBD] flex justify-between items-center h-20 px-6 font-sans">
            <h2 className="text-4xl font-semibold p-4">
                CS391 Cat App
            </h2>
            <nav className="p-2 m-4">
                <ul>
                    <li>
                        <Link href={"/"} className={lineStyling}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/cats"} className={lineStyling}>
                            Cats
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
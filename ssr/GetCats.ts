
const API_KEY=process.env.CAT_API_KEY;

export default async function getCats(){
    const res= await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`);

    if (!res.ok) {
        throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }

    return await res.json();

}
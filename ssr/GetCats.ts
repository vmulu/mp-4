// stops api from being exposed to client
"use server"

const API_KEY=process.env.CAT_API_KEY;

export default async function getCats(){
    const res= await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`);

    //  exceed your daily API-call limit
    if (res.status === 429) {
      throw new Error("RATE_LIMIT: Exceeded your daily Cat API limit. Try again later.");
    }

    // API is down
    if (res.status >= 500) {
      throw new Error("API_DOWN: The Cat API is temporarily unavailable. Please try again soon.");
    }

    if (!res.ok) {
        throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }

    return await res.json();

}

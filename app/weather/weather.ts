const GEOCODE_API_URL = "https://geocode.maps.co/search"

async function main(): Promise<number> {
    // pnpm run weather LOCATION
    if (process.argv.length !== 3) {
        console.error("usage: weather LOCATION");
        return 1;
    }
    // get location
    const location = process.argv[2];

    // convernt location to lat/lon
    //fetch weather data
    // display weather data
    console.log(process.argv);
    return Promise.resolve(0);
}

main().catch((err) => console.error(err));
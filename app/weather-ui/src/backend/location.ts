import axios, { AxiosStatic } from "axios";
import { z } from "zod";

const locationInfoSchema = z.object({
    lat: z.string(),
    lon: z.string(),
    display_name: z.string(),
});

export type LocationInfo = z.infer<typeof locationInfoSchema>;

export async function fetchLocationData (
    axios: AxiosStatic,
    apiURL: string,
    locationName: string,
): Promise<LocationInfo> {
    const options = {
        method: "GET",
        url: apiURL,
        params: {
            q: locationName
        }
    };

    const response = await axios.request(options);

    if (response.status === 200) {
        try {
            return locationInfoSchema.parse(response.data[0]);
        } catch (err) {
            console.error(err);
            throw new Error(`Unable to find location information.`);
        }
    } else {
        throw new Error("Failed to fetch location data");
    }
}
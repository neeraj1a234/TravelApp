import { travelApi } from "./serviceInstance"

export const destinationGet = async() => {
    try {
        const response = await travelApi.get('/api/destination/allDestinations');
        if (response) {
            console.log(response.data)
            return response.data
        }
    } catch (error) {
        return error.response.data.message;
    }
}
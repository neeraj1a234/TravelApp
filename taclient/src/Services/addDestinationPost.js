import { travelApi } from "./serviceInstance"

export const addDestinationPost = async(data) => {
    try {
        const response = await travelApi.post('/api/destination/addDestination',data);
        if (response) {
            console.log(response.data)
            return response.data
        }
    } catch (error) {
        return error.response.data.message;
    }
}
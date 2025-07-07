import { travelApi } from "./serviceInstance"

export const bookDestinationPost = async(data) => {
    try {
        const response = await travelApi.post('/api/destination/bookDestination',data);
        if (response) {
            console.log(response.data)
            return response.data
        }
    } catch (error) {
        return error.response.data.message;
    }
}
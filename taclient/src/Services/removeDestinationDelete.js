import { travelApi } from "./serviceInstance"

export const removeDestinationDelete = async(desId,updatedData) => {
    try {
        const response = await travelApi.delete(`/api/destination/removeDestination/${desId}`,updatedData);
        if (response) {
            console.log(response.data)
            return response.data
        }
    } catch (error) {
        return error.response.data.message;
    }
}
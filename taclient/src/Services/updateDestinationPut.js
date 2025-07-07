import { travelApi } from "./serviceInstance"

export const updateDestinationPut = async(desId,updatedData) => {
  try {
          const response = await travelApi.put(`/api/destination/updateDestination/${desId}`,updatedData);
          if (response) {
              console.log(response.data)
              return response.data
          }
      } catch (error) {
          return error.response.data.message;
      }
}

import { travelApi } from "./serviceInstance"

export const loginPost = async (data) => {
    try {
        const response = await travelApi.post('/api/auth/login',data);
        if(response){
            console.log(response.data)
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.message)
            return error.response.data.message ;
        }
    }
}
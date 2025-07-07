import { travelApi } from "./serviceInstance"

export const signupPost = async(data) => {
    try {
        const respone = await travelApi.post('/api/auth/signup',data);
        if(respone){
            return respone.data;
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.message)
            return error.response.data.message ;
        }
    }
}
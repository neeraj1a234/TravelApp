import { useState } from "react";
import { signupPost } from "../Services/signupPost";
import '../Styles/Signup.css'
import { useNavigate } from "react-router-dom";

export default function Signup () {
    const [signupData,setSignupData] = useState ({
        name : "",
        email: "",
        password : "",
    })
    const dataHandler = (value,key) => {
        let temp = {...signupData};
        temp[key] = value;
        setSignupData(temp);
        console.log(signupData)
    }

    const navigate = useNavigate();

    const userSignup = async() => {
        console.log("signup Click")
        const signup = await signupPost(signupData);
        if (signup) {
            alert(signup.message)
            navigate('/')
        }
        else if (signup && signup.error) {
            console.log(signup.error)
        }
    }
    return (
        <>
        <div className="signup-container">
            <h2 className="signup-title">Signup</h2>
            <input type="text" className="signup-input" placeholder="Enter Your Name" onChange={(e)=>{dataHandler(e.target.value,"name")}}/>
            <input type="email" className="signup-input" placeholder="Enter Your email" onChange={(e)=>{dataHandler(e.target.value,"email")}}/>
            <input type="password" className="signup-input" placeholder="Enter Your password" onChange={(e)=>{dataHandler(e.target.value,"password")}}/>
            <button className="signup-button" onClick={()=>{userSignup()}}>SignUp</button>
        </div>
           
        </>
    )
}
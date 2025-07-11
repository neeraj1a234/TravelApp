import { useContext, useState } from "react"
import { loginPost } from "../Services/loginPost";
import '../Styles/Login.css'
import { Link, useNavigate } from "react-router-dom";
import { AdminContext } from "../Context/AdminProvider";
import { UserContext } from "../Context/AuthUserProvider";

export default function Login () {
    const [loginData,setLoginData] = useState({
        username : "",
        password : ""
    })
    const dataHandler = (value,key) => {
        let temp = {...loginData};
        temp[key] = value;
        setLoginData (temp);
        console.log(loginData)
    }
    const navigate = useNavigate();
    const {getAdmin} = useContext(AdminContext);
    const {logIn} = useContext(UserContext)
 
    const userLogin = async() => {
        const login = await loginPost(loginData);
        if (login) {
            alert(login.message)
            logIn();
            sessionStorage.setItem("loginToken",login.token);
 
                if(login.Admin){
                console.log(login.Admin);
                sessionStorage.setItem("isAdmin",login.Admin);
                }

            getAdmin()  
            navigate('/')
        }
        else if (login && login.error) {
            alert(login.error.message)
        }
    }
    return (
        <>
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <input type="text" className="login-input" name="username"  placeholder="Enter Your UserName" onChange={(e)=>{dataHandler(e.target.value,"username")}}/>
                <input type="password" className="login-input" name="password"  placeholder="Enter Your Password" onChange={(e)=>{dataHandler(e.target.value,"password")}}/>
                <button className="login-button" onClick={()=>{userLogin()}}>Login</button>
                <p><Link to="/home/signup">Dont Have An Account?</Link></p>
            </div>   
        </>
            
           
    )
}
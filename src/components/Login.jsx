import { useContext, useState } from "react";
import Profile from "./Profile";
import UserContext from "../context/UserContext.js";


function Login() {
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');

    const { userInfo, setUserInfo } = useContext(UserContext);

    let handleSubmit = () => {
        setUserInfo({ userName, password }); // logic will goes here for updating store
    }
    return (
        <div className="m-4 mt-16">
            <h2 className="text-2xl mb-6">React tutorial for context api</h2>
            <Profile />

            <input className="mb-4 border border-black"
            type="text"  
            value={userName} 
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username" 
            />
            <input className="border border-black"
            type="text" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            />
            <button
            onClick={(e) => handleSubmit()}
            >Submit
            </button>
        </div>
    )
}

export default Login;
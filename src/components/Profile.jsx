import { useContext } from "react";
import UserContext from "../context/UserContext.js";

function Profile() {
    const { userInfo } = useContext(UserContext);

    return (
        <div className="mt-8 mb-8 text-xl"> Welcome, <span className="font-bold">{userInfo?.userName || "Guest !"}</span> </div>
    )
}

export default Profile;